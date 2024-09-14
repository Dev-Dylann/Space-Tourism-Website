import type { Metadata } from "next";
import "./globals.css";
import { barlow } from "./ui/fonts";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Frontend Mentor | Space Tourism Website",
  description: "Submitted as a solution to a challenge from FrontEnd Mentor",
  authors: [{ name: "DevDylan", url: '' }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlow.className} text-white flex flex-col`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
