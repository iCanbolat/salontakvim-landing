import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SalonTakvim",
  description:
    "Randevu sistemiyle çalışan işletmeler için modern iş yeri yönetimi ve planlama platformu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${outfit.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
