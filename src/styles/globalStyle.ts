import { globalCss } from './stitches.config';

const globalStyling = globalCss({
  body: {
    fontFamily: "'Roboto Mono', Helvetica, sans-serif"
  },
  html: {
    transition: 'opacity 300ms ease-in-out'
  }
});

export default globalStyling;
