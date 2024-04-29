import { Providers } from './providers'
import type { Metadata } from 'next';
import { APP_NAME, APP_DESCRIPTION } from './common/constants';
import { fonts } from '@/app/common/fonts';
import 'normalize.css/normalize.css';
import classNames from 'classnames';

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={classNames(fonts.lexend.variable, fonts.bigShouldersDisplay.variable)}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
