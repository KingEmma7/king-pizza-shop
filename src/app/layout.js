import "./globals.css";
import Nav from "./components/Nav";
import CartMobile from "./components/CartMobile";
import { Bangers, Poppins, Roboto_Condensed } from "next/font/google";
import CartMobileIcon from "./components/CartMobileIcon";
import CartProvider from "./context/CartContext";
import CartDesktop from "./components/CartDesktop";
import Footer from "./components/Footer";

const bangers = Bangers({
  subsets: ["latin"],
  variable: "--font-bangers",
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400"],
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-robotoCondensed",
  weight: ["300", "400", "700"],
});

export default function RootLayout({ children }) {
  return (
    <CartProvider>
    <html lang="en">
      <body
        className={` ${bangers.variable} ${robotoCondensed.variable} ${poppins.variable} font-poppins`}
      >
        <Nav/>
        <CartMobileIcon />
        <CartMobile />
        {children}
        <CartDesktop />
        <Footer/>
      </body>
    </html>
    </CartProvider>
  );
}
