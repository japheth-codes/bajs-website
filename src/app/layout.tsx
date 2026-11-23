import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";

export const metadata: Metadata = {
  title: "BAJs PM & C",
  description: "BAJs Project Management & Consultancy — delivering purpose-driven project management, business development, IT, data, and finance solutions across Africa and global markets.",
  openGraph: {
    title: "BAJs PM & C",
    description: "Multidisciplinary consultancy connecting project management, business development, IT services, data analysis and finance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
