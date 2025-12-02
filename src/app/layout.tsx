import type { Metadata } from "next";
import { Salsa, Roboto_Condensed, Roboto_Slab } from "next/font/google";
import { ThemeProvider } from "@/provider/themeProvider";
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

export const metadata: Metadata = {
  title: "Globe ERP",
  description: "We provide ERP based software solutions for businesses of all sizes.",
};

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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}