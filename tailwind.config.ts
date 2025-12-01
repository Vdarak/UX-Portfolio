import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        // Primary UI font
        'inter': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        // Display/Headings font
        'manrope': ['Manrope', 'Inter', '-apple-system', 'sans-serif'],
        // Technical/Data font
        'mono': ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        // Design accent font (use sparingly)
        'serif': ['Instrument Serif', 'Georgia', 'serif'],
        // Default sans
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        // Legacy support
        'proxima': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        // Premium accent color - Yellow #F5E445
        cyber: {
          yellow: "#F5E445",
          gold: "#D4C93A",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        // Industrial/Tech aesthetic - minimal or no rounding
        none: "0px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // Text scramble effect
        "scramble": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        // Marquee ticker
        "marquee": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        // Stagger entry
        "stagger-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        // Pulse glow for accents
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 5px hsl(var(--accent) / 0.5)" },
          "50%": { boxShadow: "0 0 20px hsl(var(--accent) / 0.8)" },
        },
        // Glitch effect
        "glitch": {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
          "100%": { transform: "translate(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "scramble": "scramble 0.1s ease-in-out",
        "marquee": "marquee 30s linear infinite",
        "stagger-in": "stagger-in 0.6s cubic-bezier(0.21, 0.47, 0.32, 0.98) forwards",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "glitch": "glitch 0.5s ease-in-out",
      },
      // Industrial spacing - based on 8px grid
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      // Tech border widths
      borderWidth: {
        '1': '1px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
