import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/shared/ScrollProgress";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Instituto Rede | Transformando desafios em soluções",
    template: "%s | Instituto Rede",
  },
  description:
    "Há mais de 20 anos transformando desafios em soluções para a gestão pública e o desenvolvimento social no Brasil.",
  keywords: [
    "Instituto Rede",
    "gestão pública",
    "educação",
    "saúde",
    "consultoria",
    "desenvolvimento social",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Instituto Rede",
    title: "Instituto Rede | Transformando desafios em soluções",
    description:
      "Há mais de 20 anos transformando desafios em soluções para a gestão pública e o desenvolvimento social no Brasil.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Instituto Rede | Transformando desafios em soluções",
    description:
      "Há mais de 20 anos transformando desafios em soluções para a gestão pública e o desenvolvimento social no Brasil.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${instrumentSerif.variable} antialiased font-sans`}>
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
