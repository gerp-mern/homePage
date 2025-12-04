import type { Metadata, Viewport } from "next";

//<W_Comment>---------={ Meta data for SEO }=----------</W_Comment>
export const siteMetadata: Metadata = {
  title: "Globe ERP | Custom ERP Software Solutions",
  description:
    "Globe ERP provides ERP based software solutions for businesses of all sizes. We specialize in custom ERP type software services tailored to your business needs.",
  keywords: [
    "Globe ERP",
    "ERP software",
    "custom ERP solutions",
    "business management software",
    "inventory management system",
    "accounting ERP",
    "HRM software",
    "POS software",
  ],
  authors: [{ name: "Globe ERP" }],
  applicationName: "Globe ERP",
  category: "software",
  metadataBase: new URL("https://globe-erp.vercel.app"),
  alternates: {
    canonical: "https://globe-erp.vercel.app",
    languages: {
      "en-US": "https://globe-erp.vercel.app/en",
      "bn-BD": "https://globe-erp.vercel.app/bn",
    },
  },
  openGraph: {
    title: "Globe ERP | Custom ERP Software Solutions",
    description:
      "Globe ERP provides powerful and scalable ERP based software solutions for all types of businesses.",
    url: "https://globe-erp.vercel.app",
    siteName: "Globe ERP",
    images: [
      {
        url: "https://globe-erp.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Globe ERP Software Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

//<W_Comment>---------={ viewport & themeColor }=----------</W_Comment>
export const siteViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export const viewport: Viewport = {};
