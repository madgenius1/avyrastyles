
import { Montserrat } from "next/font/google";

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";


const montserrat = Montserrat({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Avyra Styles ",
  description: "Trendy Fashion, Elegant Footwear, and Beauty Essentials.",
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${montserrat.className} bg-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
