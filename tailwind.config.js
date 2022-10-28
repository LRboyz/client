/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#1e293b',
        dark: '#111827',
        light: '#EFF6FF',
        darkText:'#FFFFFF',
        lightText: '#000000',
        lightIcon: '#00000080',
        darkIcon: '#f0f0f080',
        skeletonDark: '#2E32380D',
        skeletonLight: '#FFFFFF1F'
      }
    },
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}