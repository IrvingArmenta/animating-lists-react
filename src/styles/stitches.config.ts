import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors: {
      siteBg: '#ffffff',
      contrast: '#333333',
      highlight: '#EE6C4D',
      secondary: '#293241',
      danger: '#D50000'
    }
  },
  media: {
    bp1: '(min-width: 480px)'
  },
  utils: {
    marginX: (value: number) => ({ marginLeft: value, marginRight: value })
  }
});
