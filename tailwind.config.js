const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    options: {
      safelist: {
        standard: [/^border-primary-/],
      },
    },
  },
  theme: {
    colors: {
      primary: {
        DEFAULT: '#4D4F62',
        red: '#EA5454',
        cyan: '#44D3D2',
        orange: '#FCAE4A',
        blue: '#549EF2',
      },
      neutral: {
        DEFAULT: '#FAFAFA',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        body: ['.9375rem', 1.67],
      },
    },
  },
}
