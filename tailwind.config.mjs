/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "rgb(var(--color-base) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        panel: "rgb(var(--color-panel) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
        text: "rgb(var(--color-text) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        warm: "rgb(var(--color-warm) / <alpha-value>)",
        success: "rgb(var(--color-success) / <alpha-value>)"
      },
      fontFamily: {
        sans: ["Sora Variable", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(8, 15, 30, 0.35)",
        glow: "0 0 0 1px rgba(121, 212, 255, 0.22), 0 24px 80px rgba(39, 89, 255, 0.18)",
      },
      backgroundImage: {
        "hero-mesh":
          "radial-gradient(circle at 20% 20%, rgba(120, 160, 255, 0.22), transparent 0 35%), radial-gradient(circle at 80% 0%, rgba(255, 194, 99, 0.16), transparent 0 28%), linear-gradient(135deg, rgba(10, 16, 30, 0.98), rgba(15, 22, 42, 0.86))",
      },
      animation: {
        float: "float 11s ease-in-out infinite",
        pulseLine: "pulseLine 7s ease-in-out infinite",
        shimmer: "shimmer 10s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.9" },
        },
        shimmer: {
          from: { backgroundPosition: "0% 50%" },
          to: { backgroundPosition: "200% 50%" },
        },
      },
      maxWidth: {
        prose: "72ch",
      },
    },
  },
  plugins: [],
};
