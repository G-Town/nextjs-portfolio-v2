import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import ThemeSwitch from "@/components/theme-switch";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS Portfolio",
  description: "Generated by Create Next App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className}
          bg-gray-50 text-gray-950 
          dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90
          relative pt-28`}
      >
        <div
          className="bg-[#f1cdce] absolute top-[-6rem] -z-10 right-[0rem]
            h-[35rem] w-[45rem] rounded-full
            blur-[7.5rem] sm:w-[68.75rem] 
            dark:bg-[#7c5c5db7]"
        ></div>
        <div
          className="bg-[#c2bcef] absolute top-[3rem] -z-10 left-[-35rem]
            h-[40rem] w-[30rem] rounded-full
            blur-[7.5rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] 
            dark:bg-[#52517db7]"
        ></div>
        <div
          className="bg-[#f7dfb596] absolute bottom-[125rem] -z-10 right-[0rem]
            h-[70rem] w-[35rem] rounded-full
            blur-[10rem]
            dark:bg-[#7e6d4a48]"
        ></div>
        <div
          className="bg-[#b6f9f2b5] absolute bottom-[50rem] -z-10 left-[-25rem]
            h-[50rem] w-[50rem] rounded-full
            blur-[10rem]
            dark:bg-[#2e47386b]"
        ></div>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
