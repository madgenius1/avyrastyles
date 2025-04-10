
import { Montserrat } from "next/font/google";

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Link from "next/link";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Avyra Styles ",
  description: "Your one-stop Boutique for Trendy Fashion, Elegant Footwear, and Beauty Essentials.",
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
        <div className="fixed bottom-5 right-5 z-50">
          <Link
            href="https://wa.me/254795086885"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-4"
          >
            <Image src="/assets/whatsapp.png" alt="WhatsApp" width={40} height={40} />

          </Link>
        </div>
      </body>
    </html>
  );
}
