import "./globals.css";
import Nav from "./components/Nav";

import { Bangers, Poppins, Roboto_Condensed } from "next/font/google";

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
    <html lang="en">
      <body
        className={` ${bangers.variable} ${robotoCondensed.variable} ${poppins.variable} font-poppins`}
      >
        <Nav/>
        {children}
      </body>
    </html>
  );
}
