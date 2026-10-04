import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./theme-provider";
import Script from "next/script";
import HomeScrollRestoration from "./components/HomeScrollRestoration";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nasmc.gov.eg"),

  title: {
    default: "National AirSpace Management Center | NASMC",
    template: "%s | NASMC",
  },

  description:
    "Official Digital Gateway of the National AirSpace Management Center (NASMC), Egypt.",

  applicationName: "National AirSpace Management Center",

  keywords: [
    "NASMC",
    "National AirSpace Management Center",
    "Airspace Management Egypt",
    "Egyptian Airspace",
    "إدارة المجال الجوي",
    "المركز القومي لإدارة المجال الجوي",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    siteName: "National AirSpace Management Center",
    title: "National AirSpace Management Center | NASMC",
    description:
      "Official Digital Gateway of the National AirSpace Management Center (NASMC), Egypt.",
    url: "https://nasmc.gov.eg",
    locale: "en_EG",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      dir="ltr"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Script
        src="/theme-init.js"
        strategy="beforeInteractive"
        />
        <HomeScrollRestoration />
        <ThemeProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
