import { Roboto } from "next/font/google";
import './globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'typeface-roboto';

const inter = Roboto({subsets: ['latin'], weight: '100' });

export const metadata = {
  title: "Hifi Computer",
  description: "Hifi Computer Homepage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Roboto, sans-serif' }}>{children}</body>
    </html>
  );
}
