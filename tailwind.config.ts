import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "light", 
      "dark", 
      "cupcake", 
      "cyberpunk", 
      {
        mythril: {
          "primary": "#00b8b8",
          "secondary": "#009393",
          "accent": "#00dddd",
          "neutral": "#666",
          "base-100": "#2a2a2a",
          "info": "#0052d4",
          "success": "#00e600",
          "warning": "#ffcc00",
          "error": "#ff3333",
        },
      },
    ],
  },
} satisfies Config;
