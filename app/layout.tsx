import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Importing local fonts with defined weight ranges
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

// Updated metadata for better SEO
export const metadata: Metadata = {
  title: "Pan Canada Group | Innovative Industry Solutions",
  description:
    "Discover Pan Canada Group's innovative solutions for industries worldwide. Explore our expertise, focus areas, and dedicated team.",
  keywords: [
    "Pan Canada Group",
    "Industry Solutions",
    "Innovation",
    "Expertise",
  ],
  authors: [{ name: "Pan Canada Group", url: "https://www.pancanadagroup.ca" }],
  themeColor: "#007bff",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Pan Canada Group | Innovative Industry Solutions",
    description:
      "Discover Pan Canada Group's innovative solutions for industries worldwide. Explore our expertise, focus areas, and dedicated team.",
    url: "https://www.pancanadagroup.ca",
    siteName: "Pan Canada Group",
    images: [
      {
        url: "/icon.ico",
        width: 1200,
        height: 630,
        alt: "Pan Canada Group",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pan Canada Group | Innovative Industry Solutions",
    description:
      "Discover Pan Canada Group's innovative solutions for industries worldwide. Explore our expertise, focus areas, and dedicated team.",
    images: ["/images/twitter-image.jpg"],
  },
  icons: {
    icon: "icon.ico",
    apple: "/apple-touch-icon.png",
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
        <meta charSet="UTF-8" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
