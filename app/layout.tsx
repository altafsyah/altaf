/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Altaf Syah || Personal Space",
  description: "Altaf is a Frontend Developer who loves",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Krona+One&family=Kulim+Park:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-mOrange min-h-screen p-10">
        <main className="relative lg:max-w-[820px] w-full mx-auto mt-4 sm:mt-8 lg:mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 gap-5">
          <section className="order-last lg:order-1 sm:col-span-2 lg:col-span-6">
            {children}
          </section>
          <Header />
        </main>
      </body>
    </html>
  );
}
