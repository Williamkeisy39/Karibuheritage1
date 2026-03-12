import type { Metadata } from "next";
import { Libre_Baskerville, Space_Grotesk } from "next/font/google";
import "./globals.css";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";

const libre = Libre_Baskerville({
  variable: "--font-libre",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Karibu Heritage | Investigate, Relocate, Invest & Experience",
  description: "Karibu Heritage is a global relocation company helping individuals, families, veterans, and international clients navigate life across borders. Our services include international relocation support, global investment opportunities, and culturally grounded travel experiences.",
  icons: {
    icon: "/images/karr.png",
    apple: "/images/karr.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${libre.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
