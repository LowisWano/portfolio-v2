import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import { geistSans } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Luis - Software Engineer",
  description: "A beautiful portfolio template built with Shadcn UI, Tailwind CSS 4, and Next.js 15",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.className} antialiased`}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
