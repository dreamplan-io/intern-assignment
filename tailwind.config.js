module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  // purge: ["./pages/**/*.{js,ts,jsx,tsx}",
  // "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        home: "url('/images/background.png')",
      }),
    },
    fontFamily: {
      myFont: ['Montserrat', 'sans-serif'],
      headerFont: ['Architects Daughter', 'cursive']
    }
  },
  variants: {},
  plugins: [require('tailwind-scrollbar-hide'),'tailwindcss']
  
};
