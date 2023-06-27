import { Inter } from 'next/font/google';

import { Footer } from '@components/Footer/Footer';
import { Header } from '@components/Header/Header';

import 'scss/index.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'weather-app',
  description: 'weather app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
