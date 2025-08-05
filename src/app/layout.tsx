import '@/assets/styles/globals.scss';
import { Onest } from 'next/font/google';
import AppProvider from '@/shared/providers/AppProvider';
import Header from '@/components/header/Header';
import HeaderDropdownMenu from '@/components/header/DropdownMenu';
import Modals from '@/components/modals/Modals';
import Footer from '@/components/footer/Footer';

const onest = Onest({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={onest.className}>
      <body>
        <AppProvider>
          <Header />
          <HeaderDropdownMenu />
          <Modals />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
