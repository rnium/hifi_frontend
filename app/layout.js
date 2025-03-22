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
import { ReduxProvider } from "@/redux/store";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import NextTopLoader from 'nextjs-toploader'


const inter = Roboto({ subsets: ['latin'], weight: '100' });

export const metadata = {
  title: "Hifi Computer",
  description: "HIFI Computer is the most trusted and largest IT solution in Sylhet, Empowerong businesses and individuals by providing authorized products and reliable services. হাইফাই কম্পিউটার, সিলেট",
  keywords: "HIFI Computer, IT solution, Sylhet, authorized products, reliable services, হাইফাই কম্পিউটার, সিলেট",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <ReduxProvider>
          <body style={{ fontFamily: 'Poppins' }}
            
          >
            <NextTopLoader 
              showSpinner={false}
              color="#d32f2f"
            />
            {children}
            <Footer />
          </body>
        </ReduxProvider>
      </ThemeProvider>
    </html>
  );
}
