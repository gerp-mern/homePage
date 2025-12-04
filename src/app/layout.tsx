import { Salsa, Roboto_Condensed, Roboto_Slab } from "next/font/google";
import { siteMetadata, siteViewport } from "@/config/metadata";
import { ThemeProvider } from "@/provider/themeProvider";
import Navbar from "@/components/layouts/Navbar";
import "../style/globals.css";

const roboto = Roboto_Slab({
  variable: "--Roboto-Slab",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const roboto2 = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: "500",
});

const salsa = Salsa({
  variable: "--font-salsa",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = siteMetadata;
export const viewport = siteViewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${salsa.variable} ${roboto.variable} ${roboto2.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}