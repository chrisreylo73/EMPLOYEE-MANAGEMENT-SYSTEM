/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        'gold': 'hsl(37, 100%, 81%)',
      },
      
      backgroundColor: {
        'primary': '#131720',
        '1': '#435170', // Lighter shade
        '2': '#303a50', // Light shade
        '3': '#181d28', // Standard shade (#131720)
        '4': '#283043', // Darker shade
        '5': '#7D838A', // Even darker shade
        '6': '#080a0d'
      },
    },
  },
  plugins: [],
}

