const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    options: {
      safelist: {
        standard: [/^before:color-line-/],
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
        white: '#FFF',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        body: ['.9375rem', 1.67],
        feature: ['.8125rem', 1.77],
      },
      boxShadow: {
        DEFAULT: '0px 15px 30px -11px rgba(131, 166, 210, 0.5)',
      },
    },
  },
  plugins: [
    require('tailwindcss-pseudo-elements'),
    plugin(function ({ addUtilities, theme }) {
      addUtilities(
        {
          '.color-line-red': {
            content: "''",
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '0.25rem',
            backgroundColor: theme('colors.primary.red'),
          },
          '.color-line-cyan': {
            content: "''",
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '0.25rem',
            backgroundColor: theme('colors.primary.cyan'),
          },
          '.color-line-orange': {
            content: "''",
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '0.25rem',
            backgroundColor: theme('colors.primary.orange'),
          },
          '.color-line-blue': {
            content: "''",
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '0.25rem',
            backgroundColor: theme('colors.primary.blue'),
          },
        },
        ['before']
      )
    }),
  ],
}
