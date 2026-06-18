import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { CustomCursor } from "@/components/layout/custom-cursor";
import { Preloader } from "@/components/layout/preloader";
import { Navbar } from "@/components/layout/navbar";
import { PageTransition } from "@/components/layout/page-transition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geist = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Stack Studio | Next-Gen Web & Mobile Development",
  description:
    "Stack Studio builds blazing-fast web apps, mobile apps, and AI solutions — delivered in days, not months.",
  metadataBase: new URL("https://stackstudio.dev"),
  openGraph: {
    title: "Stack Studio | Next-Gen Web & Mobile Development",
    description: "Next-gen web, mobile & AI solutions — delivered in days, not months.",
    images: ["/opengraph-image"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stack Studio",
    description: "Next-gen web, mobile & AI solutions.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${geist.variable} bg-black text-white antialiased`}>
        <SmoothScrollProvider>
          <Preloader />
          <CustomCursor />
          <Navbar />
          <PageTransition>{children}</PageTransition>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
