module.exports = {
  mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkGray: "hsl(0, 0%, 63%)",
        darkGrayTr: "hsla(0, 0%, 63%, 0.5)",
        veryDarkGray: "hsl(0, 0%, 27%)",
      },
      fontFamily: {
        "spartan": ["Spartan", "Helvetica", "sans-serif"]
      },
    },
    screens: {
      'sm': '540px ',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  variants: {
    extend: {
      fill: ['hover', 'focus'],
      scale: ['active', 'group-hover'],
    },
  },
  plugins: [],
}
