import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "./ui/footer";
import Header from "./ui/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Michael Schneider | Cloud Strategy & Advisory",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer name="Michael Schneider" />
      </body>
    </html>
  );
}
