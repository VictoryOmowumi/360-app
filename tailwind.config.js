/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  options: {
    safelist: ["themeColor", "theme"],
  },
  theme: {
    extend: {
      colors: {
        "blue-theme": "#1A97F5",
        "green-theme": "#00BC83",
        "purple-theme": "#7352FF",
        "red-theme": "#FF5C8E",
        "indigo-theme": "#1E4DB7",
        "orange-theme": "#FB9678",
        "black": "#2E2E48",
      },
      fontFamily: {
        karla: ["Karla", "sans-serif"],
      },

      backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd', 'active', 'active-hover', 'active-group-hover', 'active-even', 'active-odd'],
      textColor: ['dark', 'dark-hover', 'dark-active', 'active', 'active-hover', 'active-active'],
      borderColor: ['dark', 'dark-focus', 'dark-focus-within', 'active', 'active-focus', 'active-focus-within'],
      

      animation: {
        "slide-in-right": "slide-in-right 0.5s ease-in-out forwards",
        "slide-out-right": "slide-out-right 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      animation: ["motion-safe"],
    },
  },
  darkMode: "class",
}
