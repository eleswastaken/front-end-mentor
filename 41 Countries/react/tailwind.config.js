module.exports = {
  mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '430px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lx': '950px',

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        darkBg: "hsl(207, 26%, 17%)",
        darkElements: "hsl(209, 23%, 22%)",
        darkInput: "hsl(209, 23%, 22%)",
        darkText: "hsl(0, 0%, 100%)",
        
        lightBg: "hsl(0, 0%, 94%)",
        lightElements: "hsl(0, 0%, 100%)",
        lightInput: "hsl(0, 0%, 52%)",
        lightText: "hsl(200, 15%, 8%)",
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['active'],
    },
  },
  plugins: [],
}
