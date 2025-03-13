import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from '@/context/LanguageContext';
import Script from "next/script";
import Head from 'next/head';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NovaTradar - Connecting global businesses with top-tier Ukrainian manufacturers",
  description: "Welcome to NovaTradar, your trusted partner in connecting global businesses with top-tier Ukrainian manufacturers in the agriculture and construction sectors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Title and Description */}
        <title>NovaTradar - Connecting global businesses with top-tier Ukrainian manufacturers</title>
        <meta name="description" content="Welcome to NovaTradar, your trusted partner in connecting global businesses with top-tier Ukrainian manufacturers in the agriculture and construction sectors." />

        {/* Basic Meta Tags */}
        <meta name="keywords" content="business, global trade, Ukrainian manufacturers, agriculture, construction" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content="NovaTradar - Connecting global businesses with top-tier Ukrainian manufacturers" />
        <meta property="og:description" content="Welcome to NovaTradar, your trusted partner in connecting global businesses with top-tier Ukrainian manufacturers in the agriculture and construction sectors." />
        <meta property="og:image" content="https://novatradar.com/lolo.png" />
        <meta property="og:url" content="https://novatradar.com/lolo.png" />
        <meta property="og:type" content="website" />

        {/* Twitter Cards Meta Tags */}
        <meta name="twitter:card" content="https://novatradar.com/lolo.png" />
        <meta name="twitter:title" content="NovaTradar - Connecting global businesses with top-tier Ukrainian manufacturers" />
        <meta name="twitter:description" content="Welcome to NovaTradar, your trusted partner in connecting global businesses with top-tier Ukrainian manufacturers in the agriculture and construction sectors." />
        <meta name="twitter:image" content="https://novatradar.com/lolo.png" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
      <Script
        id="tawk-to"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
              (function(){
                var s1 = document.createElement("script"),
                    s0 = document.getElementsByTagName("script")[0];
                s1.async = true;
                s1.src = "https://embed.tawk.to/67b87e648b7209190e99a990/1ikkaremr";
                s1.charset = "UTF-8";
                s1.setAttribute("crossorigin", "*");
                s0.parentNode.insertBefore(s1, s0);
              })();
            `,
        }}
      />
    </html>
  );
}
