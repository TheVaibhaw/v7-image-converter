import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "v7 Image Converter - Free Online Image Transformation",
  description: "Convert images between JPG, PNG, WEBP, GIF, BMP, TIFF, and SVG instantly. Fast, secure, and private image conversion tool by Vaibhaw Kumar Parashar.",
  keywords: "image converter, jpg to png, webp to jpg, free image tool, online image converter, v7 converter",
  authors: [{ name: "Vaibhaw Kumar Parashar", url: "https://vaibhawkumarparashar.in" }],
  openGraph: {
    title: "v7 Image Converter - Fast & Secure",
    description: "The ultimate free tool to convert images to any format instantly. Privacy-focused, no server storage.",
    url: "http://tools.vaibhawkumarparashar.in/image-converter",
    siteName: "v7 Image Converter",
    images: [
      {
        url: "/image-converter/og-image.png",
        width: 1200,
        height: 630,
        alt: "v7 Image Converter Tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "v7 Image Converter - Fast & Secure",
    description: "Convert images between any format for free. Fast, private, and secure.",
    creator: "@TheVaibhaw",
    images: ["/image-converter/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/image-converter/icon.png",
    shortcut: "/image-converter/icon.png",
    apple: "/image-converter/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="http://tools.vaibhawkumarparashar.in/image-converter" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "v7 Image Converter",
              "url": "http://tools.vaibhawkumarparashar.in/image-converter",
              "description": "A modern, fast, and secure online image converter supporting multiple formats.",
              "applicationCategory": "MultimediaApplication",
              "operatingSystem": "All",
              "author": {
                "@type": "Person",
                "name": "Vaibhaw Kumar Parashar",
                "url": "https://vaibhawkumarparashar.in"
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
