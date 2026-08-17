import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./global.css";
import Script from "next/script";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website & Aplikasi Profesional | Forgetz Studio",
  description:
    "Forgetz Studio – Jasa pembuatan website, web app, dan aplikasi mobile (APK) profesional untuk UMKM, bisnis, dan startup. Solusi digital cepat, responsif, SEO friendly, dan desain modern, website harga terjangkau",
  icons: {
    icon: [{ url: "/log.png", sizes: "32x32", type: "image/png" }],
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
        <link rel="alternate" hrefLang="en" href="/en" />
        <link rel="alternate" hrefLang="id" href="/" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Forgetz Studio",
              url: "https://forgetzstudio.com",
              description:
                "Jasa pembuatan website dan aplikasi mobile untuk UMKM dan bisnis.",
            }),
          }}
        />
        <meta name="google-site-verification" content="LN9hJ5C42mL1VE43xZ4VX6texAncDHTsmkXDZ4rwKqc" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PGNE6HJ7S9"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-PGNE6HJ7S9');
      `}
        </Script>

      </body>
    </html>
  );
}