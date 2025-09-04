import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/libs/ReduxProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Basket - Your Trusted Online Shopping Store",
  description:
    "Basket is your go-to online shopping store in Egypt. Discover the best deals on a wide range of groceries, household essentials, and everyday products with affordable prices, fast delivery, and excellent customer support.",
  keywords: [
    "Basket",
    "online store Egypt",
    "ecommerce Egypt",
    "buy groceries online",
    "household essentials",
    "affordable shopping",
    "fast delivery Egypt",
    "online shopping platform",
    "Beni Suef market",
    "basket bns",
  ],
  openGraph: {
    title: "Basket - Your Trusted Online Shopping Store",
    description:
      "Shop smarter with Basket! Find groceries, essentials, and more at the best prices in Egypt with reliable delivery and customer care.",
    url: "https://basket-bns.vercel.app/",
    siteName: "Basket Online Store",
    images: [
      {
        url: "/favicon/android-chrome-512x512.png",
        width: 1200,
        height: 630,
        alt: "Basket logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Basket - Your Trusted Online Shopping Store",
    description:
      "Discover the best online shopping experience with Basket. Affordable prices, fast delivery, and top-quality products in Egypt.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
    shortcut: "/favicon/favicon-16x16.png",
    other: [
      {
        rel: "icon",
        url: "/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.json",
  themeColor: "#ffffff",
  applicationName: "Basket Online Store",
  authors: [
    {
      name: "Eng. Abdalla Yahia",
      url: "https://www.linkedin.com/in/abdalla-yahia",
    },
  ],
  creator: "Eng. Abdalla Yahia",
  publisher: "Basket Team",
  colorScheme: "light dark",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  alternates: {
    canonical: "https://basket-bns.vercel.app/",
    languages: {
      en: "/en",
      ar: "/ar",
    },
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Basket Online Store",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    noimageindex: false,
    noarchive: false,
    nosnippet: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable} antialiased w-full bg-green-500`}>
        <ReduxProvider >
          {children}
        </ReduxProvider>
      <ToastContainer limit={1}/>
      </body>
    </html>
  );
}
