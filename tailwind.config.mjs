/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				// Anthropic-inspired colors with terminal accents
				primary: {
					50: "#fef7f0",
					100: "#feeee0",
					200: "#fcdcc1",
					300: "#f9c191",
					400: "#f39c5f",
					500: "#e67e22", // Much more subtle orange
					600: "#d35400",
					700: "#a04300",
					800: "#7d3400",
					900: "#5e2700",
				},
				terminal: {
					50: "#f0fdf4",
					100: "#dcfce7",
					200: "#bbf7d0",
					300: "#86efac",
					400: "#4ade80",
					500: "#22c55e", // Terminal green
					600: "#16a34a",
					700: "#15803d",
					800: "#166534",
					900: "#14532d",
				},
				code: {
					50: "#eff6ff",
					100: "#dbeafe",
					200: "#bfdbfe",
					300: "#93c5fd",
					400: "#60a5fa",
					500: "#3b82f6", // Code blue
					600: "#2563eb",
					700: "#1d4ed8",
					800: "#1e40af",
					900: "#1e3a8a",
				},
				// Dark mode colors (existing)
				dark: {
					50: "#f8fafc",
					100: "#f1f5f9",
					200: "#e2e8f0",
					300: "#cbd5e1",
					400: "#94a3b8",
					500: "#64748b",
					600: "#475569",
					700: "#334155",
					800: "#1e293b", // Main dark background
					900: "#0f172a", // Darker background
					950: "#020617", // Terminal black
				},
				// Light mode colors (optimized for excellent contrast and readability)
				light: {
					50: "#ffffff",  // Pure white background
					100: "#f8f9fa", // Very light gray for cards/headers  
					200: "#f1f3f4", // Light gray for terminal windows (slightly darker for better contrast)
					300: "#e8eaed", // Medium gray for borders
					400: "#dadce0", // Better contrast for dividers
					500: "#9aa0a6", // Interactive elements (darker for better visibility)
					600: "#5f6368", // Secondary text (much darker for better contrast)
					700: "#3c4043", // Primary text color (much darker)
					800: "#202124", // Dark text for high contrast (very dark)
					900: "#1a1a1a", // Darkest text (almost black)
					950: "#000000", // Maximum contrast black text
				},
			},
			fontFamily: {
				mono: [
					"JetBrains Mono",
					"Fira Code",
					"Consolas",
					"Monaco",
					"Courier New",
					"monospace",
				],
				sans: [
					"Inter",
					"system-ui",
					"-apple-system",
					"BlinkMacSystemFont",
					"sans-serif",
				],
			},
			fontSize: {
				xs: ["0.75rem", { lineHeight: "1rem" }],
				sm: ["0.875rem", { lineHeight: "1.25rem" }],
				base: ["1rem", { lineHeight: "1.5rem" }],
				lg: ["1.125rem", { lineHeight: "1.75rem" }],
				xl: ["1.25rem", { lineHeight: "1.75rem" }],
				"2xl": ["1.5rem", { lineHeight: "2rem" }],
				"3xl": ["1.875rem", { lineHeight: "2.25rem" }],
				"4xl": ["2.25rem", { lineHeight: "2.5rem" }],
				"5xl": ["3rem", { lineHeight: "1" }],
				"6xl": ["3.75rem", { lineHeight: "1" }],
			},
			spacing: {
				18: "4.5rem",
				88: "22rem",
				112: "28rem",
				128: "32rem",
			},
			animation: {
				"terminal-blink": "blink 1s infinite step-end",
				"fade-in": "fadeIn 0.5s ease-in-out",
				"slide-up": "slideUp 0.3s ease-out",
			},
			keyframes: {
				blink: {
					"0%, 50%": { opacity: "1" },
					"51%, 100%": { opacity: "0" },
				},
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				slideUp: {
					"0%": { opacity: "0", transform: "translateY(10px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
			},
			backdropBlur: {
				xs: "2px",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
	darkMode: "class",
};
