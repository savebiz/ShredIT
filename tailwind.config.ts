import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "var(--color-primary)",
                secondary: "var(--color-secondary)",
                cta: "var(--color-cta)",
                background: "var(--color-background)",
                surface: "var(--color-surface)",
                text: "var(--color-text)",
            },
            fontFamily: {
                heading: ["Poppins", "sans-serif"],
                body: ["Open Sans", "sans-serif"],
            },
            spacing: {
                xs: "var(--space-xs)",
                sm: "var(--space-sm)",
                md: "var(--space-md)",
                lg: "var(--space-lg)",
                xl: "var(--space-xl)",
                "2xl": "var(--space-2xl)",
                "3xl": "var(--space-3xl)",
            },
            boxShadow: {
                sm: "var(--shadow-sm)",
                md: "var(--shadow-md)",
                lg: "var(--shadow-lg)",
                xl: "var(--shadow-xl)",
            },
        },
    },
    plugins: [],
};
export default config;
