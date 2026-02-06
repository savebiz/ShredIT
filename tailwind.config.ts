import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                dataguard: {
                    green: "#2E7D32", // Primary green from branding
                    dark: "#1B5E20",
                    light: "#A5D6A7",
                    accent: "#FF9800", // For alerts/points
                },
            },
        },
    },
    plugins: [],
};
export default config;
