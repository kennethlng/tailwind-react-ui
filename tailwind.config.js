const { screens, fontSize } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: [
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/hooks/**/*.{js,jsx,ts,tsx}',
    './src/styles/**/*.{js,jsx,ts,tsx}',
    './src/types/**/*.{js,jsx,ts,tsx}',
    './src/stories/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    screens: {
      xs: '475px',
      ...screens,
    },
    extend: {
      colors: {
        'text-primary': {
          DEFAULT: colors.slate[900],
        },
        'text-secondary': {
          DEFAULT: colors.slate[500],
        },
        primary: {
          ...colors.emerald,
          light: colors.emerald[200],
          DEFAULT: colors.emerald[400],
          dark: colors.emerald[600],
        },
        secondary: {
          ...colors.purple,
          light: colors.purple[200],
          DEFAULT: colors.purple[400],
          dark: colors.purple[600],
        },
        success: {
          ...colors.green,
          light: colors.green[200],
          DEFAULT: colors.green[400],
          dark: colors.green[600],
        },
        error: {
          ...colors.red,
          light: colors.red[200],
          DEFAULT: colors.red[400],
          dark: colors.red[600],
        },
        warning: {
          ...colors.yellow,
          light: colors.yellow[200],
          DEFAULT: colors.yellow[400],
          dark: colors.yellow[600],
        },
        info: {
          ...colors.blue,
          light: colors.blue[200],
          DEFAULT: colors.blue[400],
          dark: colors.blue[600],
        },
      },
      opacity: {
        disabled: '.3',
      },
      fontSize: {
        h1: fontSize['6xl'],
        h2: fontSize['5xl'],
        h3: fontSize['4xl'],
        h4: fontSize['3xl'],
        h5: fontSize['2xl'],
        body1: fontSize.base,
        body2: fontSize.sm,
        subtitle1: fontSize.base,
        subtitle2: fontSize.sm,
        caption: fontSize.xs,
        overline: fontSize.xs,
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [],
};
