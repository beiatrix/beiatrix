import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  safelist: [
    'text-react-blue',
    'text-angular-red',
    'text-ionic-blue',
    'text-ruby-red',
    'text-html-orange',
    'text-css-blue',
    'text-jay',
    'text-eggplant',
    'text-forest',
    'drop-shadow-lg'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5A8077',
        'primary-shade': '#4f7169',
        secondary: '#A8C9C2',
        tertiary: '#E7F5EE',
        'tertiary-shade': '#cbd8d1',
        success: '#2dd36f',
        warning: '#ffc409',
        danger: '#eb445a',
        dark: '#222428',
        medium: '#92949c',
        light: '#f4f5f8',
        creme: '#FFFCF7',
        glow: '#adefd1',
        forest: '#314336',
        mist: '#87a8ad',
        'mist-shade': '#779498',
        jay: '#3474DB',
        eggplant: '#453ae0',
        taro: '#9667CE',
        charcoal: '#404040',
        'ruby-red': '#CC0000',
      },
      keyframes: {
        'slide-fade': {
          '0%': { opacity: '0', transform: 'translateY(100%)' },
          '100%': { opacity: '1', transform: 'translateY(0%)' },
        },
      },
      animation: {
        'slide-fade': 'slide-fade 2s ease',
      }
    },
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
      accent: ['Quicksand', 'serif']
    }
  }
}

