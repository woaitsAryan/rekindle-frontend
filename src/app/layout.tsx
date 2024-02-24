import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Particles from "./components/Particles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rekindle",
  description: "Intel Hackathon Project by Team 4lie's Angels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Particles
            className="absolute inset-0 z-10 animate-fade-in"
            quantity={350}
          />
        {children}
        </body>
    </html>
  );
}
