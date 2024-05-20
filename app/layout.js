import { Roboto } from "next/font/google";
import './globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'typeface-roboto';
import Navbar from '@/app/components/navigation/NavBar';

const inter = Roboto({subsets: ['latin'], weight: '100' });

export const metadata = {
  title: "Hifi Computer | Home",
  description: "Hifi Computer Homepage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Roboto, sans-serif' }}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
