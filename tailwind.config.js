module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        mont: ['Montserrat', 'Arial'],
        roboto: ['Roboto', 'sans-serif']
      },
      colors: {
        transparent: 'transparent',
        black: '#42484d',
        white: '#fff',
        gray: '#f2f2f2',
        brown: '#846550',
        purple: '#85628d',
        tint: 'rgba(0,0,0,.5)',
        darkPurple: '#627691'
      },
      spacing: {
        28: '7rem'
      },
      letterSpacing: {
        tighter: '-.04em'
      },
      lineHeight: {
        tight: 1.2
      }
    }
  },
  plugins: [require('tailwindcss')]
}
