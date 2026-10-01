import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./theme-provider";
import Script from "next/script";

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
    default: "National Airspace Management Center | NASMC",
    template: "%s | NASMC",
  },

  description:
    "Official Digital Gateway of the National Airspace Management Center (NASMC), Egypt.",

  applicationName: "National Airspace Management Center",

  keywords: [
    "NASMC",
    "National Airspace Management Center",
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
    siteName: "National Airspace Management Center",
    title: "National Airspace Management Center | NASMC",
    description:
      "Official Digital Gateway of the National Airspace Management Center (NASMC), Egypt.",
    url: "https://nasmc.gov.eg",
    locale: "en_EG",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Script
        src="/theme-init.js"
        strategy="beforeInteractive"
        />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}