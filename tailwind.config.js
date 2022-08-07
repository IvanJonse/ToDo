/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {  screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '992px'},
      // => @media (max-width: 1023px) { ... }
      'lgmin': {'min': '992px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }},
    
    minWidth: {
      '4rem': '4rem',
      '3.5rem': '3.5rem',
      '2rem': '2rem'
    },

    maxWidth: {
      '4rem': '4rem',
      '3.5rem': '3.5rem',
      '2rem': '2rem'
    },

    boxShadow: {
      'shine': '1px 2px 8px hsl(220deg 60% 50%)'
    },

  

  },
  plugins: [],
}