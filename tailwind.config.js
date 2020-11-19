module.exports = {
  purge: ['./components/**/*.js', './components/**/*.css'],
  theme: {
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
    fontFamily: {
      mont: ['Montserrat', 'Arial'],
      roboto: ['Roboto', 'sans-serif']
    },
    extends: {
      screens: {
        xs: '320px'
        // => @media (min-width: 320px) { ... }
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
  }
}
