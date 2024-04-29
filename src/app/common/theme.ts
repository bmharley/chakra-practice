import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
  fonts: {
    body: 'var(--font-lexend)',
    heading: 'var(--font-big-shoulders-display)',
  },
  space: {
    default: '1.5rem',
  },
  colors: {
    hero: '#006970',
    villain: '#b11414',
    heroine: '#b90066',
  },
  styles: {
    global: {
      'html': {
        fontSize: '62.5%',
      },
      'html, body': {
        height: '100%',
      },
      'body': {
        'margin': 0,
        'fontSize': '1.5em',
        'backgroundColor': '#f2f2f2',
        'WebkitFontSmoothing': 'antialiased',
        'MozOsxFontSmoothing': 'grayscale',
      }
    },
  },
});
