-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. Tenants (Companies)
create table if not exists tenants (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  industry text,
  subscription_tier text default 'starter' check (subscription_tier in ('starter', 'professional', 'enterprise')),
  green_points_balance integer default 0
);

-- 2. Users (Profiles linked to Auth)
create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  tenant_id uuid references tenants(id),
  full_name text,
  role text default 'branch_user' check (role in ('admin', 'manager', 'branch_user', 'driver')),
  phone text
);

-- 3. Sites (Locations)
create table if not exists sites (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  tenant_id uuid references tenants(id) not null,
  name text not null,
  address text not null,
  city text,
  state text,
  contact_person text,
  contact_phone text
);

-- 4. Bins (Assets)
create table if not exists bins (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  tenant_id uuid references tenants(id) not null,
  site_id uuid references sites(id),
  qr_code text unique,
  type text default 'standard' check (type in ('standard', 'confidential', 'bulk')),
  status text default 'active' check (status in ('active', 'maintenance', 'retired'))
);

-- 5. Collection Requests & Jobs
create table if not exists collections (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  tenant_id uuid references tenants(id) not null,
  site_id uuid references sites(id) not null,
  requested_by uuid references profiles(id),
  status text default 'pending' check (status in ('pending', 'scheduled', 'in_progress', 'completed', 'cancelled')),
  scheduled_date date,
  completed_date timestamp with time zone,
  weight_kg numeric(10, 2),
  driver_notes text,
  shredding_certificate_url text
);

-- ROW LEVEL SECURITY (RLS) POLICIES

-- Enable RLS on all tables (safe to re-run)
alter table tenants enable row level security;
alter table profiles enable row level security;
alter table sites enable row level security;
alter table bins enable row level security;
alter table collections enable row level security;

-- Drop existing policies to allow re-creation
drop policy if exists "Users can view own tenant" on tenants;
drop policy if exists "Users can view members of own tenant" on profiles;
drop policy if exists "Users can view sites of own tenant" on sites;
drop policy if exists "Admins/Managers can insert sites" on sites;
drop policy if exists "Users can view bins of own tenant" on bins;
drop policy if exists "Users can view collections of own tenant" on collections;
drop policy if exists "Users can create collection requests" on collections;

-- Re-create Policies

-- Tenants
create policy "Users can view own tenant" on tenants
  for select using (id in (select tenant_id from profiles where id = auth.uid()));

-- Profiles
create policy "Users can view members of own tenant" on profiles
  for select using (tenant_id in (select tenant_id from profiles where id = auth.uid()));

-- Sites
create policy "Users can view sites of own tenant" on sites
  for select using (tenant_id in (select tenant_id from profiles where id = auth.uid()));

create policy "Admins/Managers can insert sites" on sites
  for insert with check (
    exists (
      select 1 from profiles 
      where id = auth.uid() 
      and tenant_id = sites.tenant_id 
      and role in ('admin', 'manager')
    )
  );

-- Bins
create policy "Users can view bins of own tenant" on bins
  for select using (tenant_id in (select tenant_id from profiles where id = auth.uid()));

-- Collections
create policy "Users can view collections of own tenant" on collections
  for select using (tenant_id in (select tenant_id from profiles where id = auth.uid()));

create policy "Users can create collection requests" on collections
  for insert with check (
    tenant_id in (select tenant_id from profiles where id = auth.uid())
  );

-- Create a helper function to handle new user signup
create or replace function public.handle_new_user()
returns trigger
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, role)
  values (new.id, new.raw_user_meta_data->>'full_name', 'branch_user');
  return new;
end;
$$ language plpgsql;

-- Trigger to create profile on signup
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
