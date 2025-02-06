/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Link from "next/link";
import { ThemeProvider } from "next-themes";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Altaf | Frontend Developer",
  description: "Altaf is a Frontend Developer who loves to build beautiful UI",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple.png",
  },
  authors: [
    {
      name: "Altaf Syah",
    },
  ],
  keywords: [
    "Altaf",
    "Syahrastani",
    "Frontend",
    "Developer",
    "React",
    "JavaScript",
    "Web",
    "UI",
    "Freelancer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
      <body className="min-h-screen px-5 md:px-8 bg-yellow-100 dark:bg-blue-950 transition-colors duration-150 overflow-x-hidden">
        <ThemeProvider attribute="class">
          <nav className="flex mt-5 py-5 justify-between items-center gap-5 container mx-auto max-w-screen-md dark:text-yellow-500">
            <Link href="/">
              <Image src="/logo.png" width={50} height={50} alt="Logo Altaf" />
            </Link>
            <ul className="flex gap-5 items-center">
              {/* <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Works</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li>
                <button>Others</button>
              </li> */}
              {/* {TODO: Create Others menu to dropdown and show all menu} */}
            </ul>
          </nav>
          <main className="relative w-full mx-auto container py-5 max-w-screen-md">
            {children}
            {/* <Header /> */}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
