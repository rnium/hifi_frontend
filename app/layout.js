import { Roboto } from "next/font/google";
import './globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'typeface-roboto';
import Footer from "./components/footer/Footer";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import "@fontsource/bebas-neue";


const inter = Roboto({ subsets: ['latin'], weight: '100' });

export const metadata = {
  title: "Hifi Computer",
  description: "HIFI Computer is the most trusted and largest IT solution in Sylhet, Empowerong businesses and individuals by providing authorized products and reliable services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body style={{ fontFamily: 'Poppins' }}>
          {children}
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
