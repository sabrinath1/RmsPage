/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./tailwind-theme.js",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#FAC119",
        "secondary": "#302F2F",
        "base-100": "#ffffff",
        "info": "#0CC0DF",
        "success": "#A2D785",
        "warning": "#FBC846",
        "error": "#D8394B",
        "accent": "#3F3955"
      }
    },
    
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui"),
    ],
}

