import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/components/UI/Footer";
import Navbar from "@/components/UI/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Xbox",
  description: "A new next generation console for gaming",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       <Navbar/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
