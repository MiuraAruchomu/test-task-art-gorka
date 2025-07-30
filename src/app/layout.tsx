import '@/assets/styles/globals.scss';
import { Geist } from 'next/font/google';
import AppProvider from '@/shared/providers/AppProvider';
import Header from '@/components/header/Header';
import HeaderDropdownMenu from '@/components/header/DropdownMenu';
import Modals from '@/components/modals/Modals';

const geist = Geist({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={geist.className}>
      <body>
        <AppProvider>
          <Header />
          <HeaderDropdownMenu />
          <Modals />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
