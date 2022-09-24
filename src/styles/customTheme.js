const defaultTailwindTheme = require('tailwindcss/defaultTheme');

/* eslint-disable prettier/prettier */
const extend = {
  animation: {
    spin: 'spin 4s ease-in-out infinite',
    'spin-half': 'spin-half 4s ease-in-out',
    'spin-slow': 'spin 6s ease-in-out infinite',

    'progress-circle-check-mark': 'progress-circle-check-mark 6s linear',

    'progress-circle-determinate': 'progress-circle 6s linear',
    'progress-circle-indeterminate': 'progress-circle 6s linear infinite',
    'progress-circle-layer-1-determinate':
      'progress-circle-layer-1 6s ease-in-out',
    'progress-circle-layer-1-indeterminate':
      'progress-circle-layer-1 6s ease-in-out infinite',
    'progress-circle-layer-2-determinate':
      'progress-circle-layer-2 6s ease-out',
    'progress-circle-layer-2-indeterminate':
      'progress-circle-layer-2 6s ease-out infinite',
    'progress-circle-layer-3-determinate': 'progress-circle-layer-3 6s linear',
    'progress-circle-layer-3-indeterminate':
      'progress-circle-layer-3 6s linear infinite',

    'pulsing-circle-1': 'pulsing-circle-1 2s ease-in-out infinite',
    'pulsing-circle-2': 'pulsing-circle-2 2s ease-in-out infinite',
    'pulsing-circle-3': 'pulsing-circle-3 2s ease-in-out infinite',

    wiggle: 'wiggle 2s linear infinite',
  },
  fontFamily: {
    sans: ['Poppins', ...defaultTailwindTheme.fontFamily.sans],
  },
  borderRadius: {
    'border-radius-base-none': '0px',
    'border-radius-base-small': '2px',
    'border-radius-base-medium': '4px',
    'border-radius-base-large': '8px',
    'border-radius-base-xlarge': '16px',
    'border-radius-base-circle': '9999px',
    'border-radius-button-square-primary-default': '2px',
    'border-radius-button-square-secondary-default': '2px',
    'border-radius-button-rounded-primary-default': '22px',
    'border-radius-button-rounded-secondary-default': '22px',
    'border-radius-base-2': '2px',
    'border-radius-base-4': '4px',
    'border-radius-base-8': '8px',
    'border-radius-base-16': '16px',
    'border-radius-base-22': '22px',
  },
  borderWidth: {
    1: '1px',
    2: '2px',
    3: '3px',
    4: '4px',
    6: '6px',
    8: '8px',
    'border-width-base-none': '0px',
    'border-width-base-small': '0.7px',
    'border-width-base-medium': '1px',
    'border-width-base-large': '1.2px',
    'border-width-button-square-primary-default': '0.7px',
    'border-width-button-square-secondary-default': '0.7px',
    'border-width-button-rounded-primary-default': '1px',
    'border-width-button-rounded-secondary-default': '1px',
    'border-width-base-0.7': '0.7px',
    'border-width-base-1': '1px',
    'border-width-base-1.2': '1.2px',
    'border-width-base-2': '2px',
  },
  keyframes: {
    spin: {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
    'spin-half': {
      '0%': { transform: 'rotate(0deg)' },
      '50%': { transform: 'rotate(180deg)' },
      '100%': { transform: 'rotate(180deg)' },
    },
    'progress-circle': {
      '0%': { background: '#e3e5ef' },
      '80%': { background: '#e3e5ef' },
      '85%': { background: '#ea6a44' },
      '100%': { background: '#ea6a44' },
    },
    'progress-circle-layer-1': {
      '0%': {
        visibility: 'visible',
        opacity: 1,
      },
      '79%': {
        visibility: 'visible',
        opacity: 1,
      },
      '80%': {
        visibility: 'hidden',
        opacity: 0,
      },
      '100%': {
        visibility: 'hidden',
        opacity: 0,
      },
    },
    'progress-circle-layer-2': {
      '0%': {
        transform: 'rotate(0deg)',
        visibility: 'visible',
        opacity: 1,
      },
      '40%': {
        transform: 'rotate(0deg)',
        visibility: 'visible',
        opacity: 1,
      },
      '80%': {
        transform: 'rotate(180deg)',
        visibility: 'visible',
        opacity: 1,
      },
      '81%': {
        transform: 'rotate(180deg)',
        visibility: 'hidden',
        opacity: 0,
      },
      '100%': {
        transform: 'rotate(180deg)',
        visibility: 'hidden',
        opacity: 0,
      },
    },
    'progress-circle-layer-3': {
      '0%': {
        transform: 'rotate(0deg)',
        visibility: 'visible',
        opacity: 1,
      },
      '40%': {
        transform: 'rotate(180deg)',
        visibility: 'visible',
        opacity: 1,
      },
      '41%': {
        transform: 'rotate(180deg)',
        visibility: 'hidden',
        opacity: 0,
      },
      '100%': {
        transform: 'rotate(180deg)',
        visibility: 'hidden',
        opacity: 0,
      },
    },
    'progress-circle-check-mark': {
      '0%': {
        color: '#b2b8da',
        fontWeight: 'normal',
      },
      '80%': {
        color: '#b2b8da',
        fontWeight: 'normal',
      },
      '85%': {
        color: '#ea6a44',
        fontWeight: 'bold',
      },
      '100%': {
        color: '#ea6a44',
        fontWeight: 'normal',
      },
    },
    'pulsing-circle-1': {
      '0%, 100%': {
        transform: 'scale(0.5)',
        borderColor: '#ebe6df',
        borderWidth: '4px',
      },
      '50%': {
        transform: 'scale(0.75)',
        borderColor: '#e3e5ef',
        borderWidth: '8px',
      },
    },
    'pulsing-circle-2': {
      '0%, 100%': {
        transform: 'scale(0.4)',
      },
      '50%': {
        transform: 'scale(0.9)',
      },
    },
    'pulsing-circle-3': {
      '0%, 100%': {
        transform: 'scale(0.3)',
        borderWidth: '24px',
        opacity: 0.5,
      },
      '50%': {
        transform: 'scale(1)',
        borderWidth: '1px',
        opacity: 1,
      },
    },
    wiggle: {
      '0%, 100%': { transform: 'rotate(-5deg)' },
      '50%': { transform: 'rotate(5deg)' },
    },
  },
  spacing: {
    'spacing-base-none': '0px',
    'spacing-base-xxxxsmall': '8px',
    'spacing-base-xxxsmall': '16px',
    'spacing-base-xxsmall': '24px',
    'spacing-base-xsmall': '32px',
    'spacing-base-small': '40px',
    'spacing-base-medium': '48px',
    'spacing-base-large': '56px',
    'spacing-base-xlarge': '64px',
    'spacing-base-xxlarge': '128px',
    'spacing-base-xxxlarge': '184px',
    'spacing-base-xxxxlarge': '256px',
    'spacing-base-xxxxxlarge': '512px',
    'spacing-base-2': '2px',
    'spacing-base-4': '4px',
    'spacing-base-6': '6px',
    'spacing-base-8': '8px',
    'spacing-base-12': '12px',
    'spacing-base-16': '16px',
    'spacing-base-18': '18px',
    'spacing-base-20': '20px',
    'spacing-base-24': '24px',
    'spacing-base-28': '28px',
    'spacing-base-32': '32px',
    'spacing-base-36': '36px',
    'spacing-base-40': '40px',
    'spacing-base-48': '48px',
    'spacing-base-56': '56px',
    'spacing-base-64': '64px',
    'spacing-base-80': '80px',
    'spacing-base-88': '88px',
    'spacing-base-96': '96px',
    'spacing-base-112': '112px',
    'spacing-base-128': '128px',
    'spacing-base-160': '160px',
    'spacing-base-184': '184px',
    'spacing-base-256': '256px',
    'spacing-base-272': '272px',
    'spacing-base-320': '320px',
    'spacing-base-512': '512px',
  },
  opacity: {
    'opacity-base-3': '0.3',
    'opacity-base-4': '0.4',
    'opacity-base-5': '0.5',
    'opacity-base-6': '0.6',
    'opacity-base-7': '0.7',
    'opacity-base-8': '0.8',
    'opacity-base-9': '0.9',
    'opacity-disabled': '0.3',
  },
  backgroundImage: () => ({
    'background-image-gradient-beige-default':
      'radial-gradient(49.73% 49.73% at 49.73% 50.27%, rgba(254, 254, 254, 0) 0%, rgba(254, 254, 254, 0.5) 75%, #FEFEFE 100%);',
  }),
  ringWidth: {
    'ring-width-base-2': '2px',
    'ring-width-base-3': '3px',
    'ring-width-base-5': '5px',
  },
  ringOffsetWidth: {
    'ring-offset-width-base-2': '2px',
  },
  maxHeight: {
    'max-height-base-0.75': '75%',
  },
  minWidth: {
    'min-width-base-272': '272px',
  },
  maxWidth: {
    'max-width-base-320': '320px',
  },
};

module.exports = extend;
