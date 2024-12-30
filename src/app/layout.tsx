import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Film 3 | Arizona's Premier AI Film Festival",
  description:
    "Join us for the third annual AI Film Festival in Glendale, Arizona. Experience the future of cinema through AI-generated films, artwork, and innovative storytelling. Featuring screenings, workshops, and networking opportunities.",
  keywords:
    "AI film festival, artificial intelligence, digital art, film screening, Glendale Arizona, AI cinema, film technology",
  openGraph: {
    title: "AI Film 3 | Arizona's Premier AI Film Festival",
    description:
      "Experience the future of cinema at Arizona's leading AI film festival. Join us for screenings, workshops and more.",
    // images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Film 3 | Arizona's Premier AI Film Festival",
    description:
      "Experience the future of cinema at Arizona's leading AI film festival. Join us for screenings, workshops and more.",
    // images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
