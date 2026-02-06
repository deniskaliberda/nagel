import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a1a2e",
          light: "#16213e",
        },
        accent: {
          DEFAULT: "#e94560",
          hover: "#c81e45",
        },
        success: "#0f9d58",
        warning: "#f4b400",
        info: "#4285f4",
        lignoloc: {
          DEFAULT: "#2d5016",
          light: "#ecfccb",
        },
        "bg-alt": "#f5f5f7",
        "text-muted": "#6b7280",
        border: "#e5e7eb",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "bounce-once": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.3)" },
        },
      },
      animation: {
        "bounce-once": "bounce-once 0.4s ease-in-out",
      },
    },
  },
  plugins: [],
};

export default config;
