
import type { Metadata } from "next";
import { Geist, Geist_Mono, Hind_Siliguri } from "next/font/google";
// @ts-ignore: allow CSS side-effect import without type declarations
import "./globals.css";
import { UIProvider } from "./context/UIContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileMenu from "./components/MobileMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// বাংলা ফন্টের জন্য সাবসেট এবং ওয়েট সেট করা ভালো
const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "নূরুল ইসলাম নয়ন (এমপি) | অফিসিয়াল পোর্টাল",
  description: "মাননীয় সংসদ সদস্য নূরুল ইসলাম নয়ন মহোদয়ের অফিসিয়াল ডিজিটাল পোর্টাল",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${hindSiliguri.variable} font-sans antialiased`}
      >
        <UIProvider>
          <Header />
          {children}
          <Footer />
          <MobileMenu/>
        </UIProvider>
      </body>
    </html>
  );
}