import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const barlow = Barlow({
  variable: "--font-barlow",
  weight: ["400"],
  subsets: ['latin'] 
})

export const metadata: Metadata = {
  title: "SquareUp",
  icons: {
    icon: '/favicon-32x32.png', 
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        
      </head>
      <body
        className={`${barlow.variable} antialiased h-full bg-gray-800 flex flex-col items-center`}
      >
        <Navbar />
        <div className="mx-[80px] lg:w-280 flex-1 border-x-1 text-white border-x-gray-600">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
