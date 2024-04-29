import { Lexend } from 'next/font/google';
import { Big_Shoulders_Display } from 'next/font/google';

const bigShouldersDisplay = Big_Shoulders_Display({
  subsets: ['latin'],
  variable: '--font-big-shoulders-display',
});

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
});

export const fonts = {
  lexend,
  bigShouldersDisplay,
};
