import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className="bg-mOrange min-h-screen w-screen p-10">
        <main className="max-w-[820px] w-full p-10 bg-mDarkBlue mx-auto mt-40 grid grid-cols-8 gap-5">
          <Header />
        </main>
        {children}
      </body>
    </html>
  );
}