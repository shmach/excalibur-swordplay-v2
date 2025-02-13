import { Footer } from "@/components/Footer";
import { HeaderMenu } from "@/components/HeaderMenu";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Sedan } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sedan = Sedan({
  weight: "400",
  variable: "--font-sedan",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Excalibur Swordplay",
    default: "Excalibur Swordplay",
  },
  description: `Excalibur Swordplay é organizado por três amigos de forma independente que gostam muito do tema medieval, seja tanto de fantasia como nos RPGs, como também gostamos do medieval "realista".`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sedan.variable} antialiased min-h-screen min-w-screen`}
      >
        <HeaderMenu />
        <main className="min-w-full min-h-full flex flex-col flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
