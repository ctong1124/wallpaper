import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "./fonts/Inter-Regular.woff",
  variable: "--font-inter",
  weight: "400 700",
});

export const metadata: Metadata = {
  title: "Art wallpaper",
  description: "Keep your device alive with a museum display",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
