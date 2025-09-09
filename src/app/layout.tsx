import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "MySaaS — Web App Design & Development",
    template: "%s | MySaaS",
  },
  description: "We build modern web apps for startups and enterprises. Explore our portfolio and contact us to start your project.",
  applicationName: "MySaaS",
  keywords: [
    "web development",
    "next.js",
    "react",
    "tailwind",
    "saas",
    "portfolio",
    "agency",
  ],
  authors: [{ name: "MySaaS" }],
  openGraph: {
    type: "website",
    title: "MySaaS — Web App Design & Development",
    description:
      "We build modern web apps for startups and enterprises. Explore our portfolio and contact us to start your project.",
    url: "/",
    siteName: "MySaaS",
  },
  twitter: {
    card: "summary_large_image",
    title: "MySaaS — Web App Design & Development",
    description:
      "We build modern web apps for startups and enterprises. Explore our portfolio and contact us to start your project.",
    creator: "@mysaas",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          suppressHydrationWarning
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MySaaS",
              url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
              sameAs: [],
            }),
          }}
        />
        <header className="border-b border-black/[.08] dark:border-white/[.145]">
          <nav className="mx-auto max-w-6xl flex items-center justify-between p-4">
            <a href="/" className="font-semibold tracking-tight">MySaaS</a>
            <div className="flex gap-6 text-sm">
              <a href="/portfolio" className="hover:underline">Portfolio</a>
              <a href="/contact" className="hover:underline">Contact</a>
            </div>
          </nav>
        </header>
        <main className="min-h-[calc(100vh-120px)]">{children}</main>
        <footer className="border-t border-black/[.08] dark:border-white/[.145]">
          <div className="mx-auto max-w-6xl p-4 text-sm text-center text-black/60 dark:text-white/60">
            © {new Date().getFullYear()} MySaaS. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
