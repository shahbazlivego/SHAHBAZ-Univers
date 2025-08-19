import type { Metadata } from "next";
import "./globals.css";
import { Orbitron } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata: Metadata = {
  title: "SHAHBAZ | Universal Platform",
  description: "Universal 3D-enabled platform for everything.",
  openGraph: {
    title: "SHAHBAZ Platform",
    description: "Universal 3D-enabled platform for everything.",
    images: ["/assets/images/shahbaz-logo-main.png"],
    url: "https://shahbaz-platform.example.com"
  },
  twitter: {
    card: "summary_large_image"
  },
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable}`}>
        <div className="min-h-screen flex flex-col">
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
