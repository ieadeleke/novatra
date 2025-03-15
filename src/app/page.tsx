import React from "react";
import 'swiper/css';
import LandingPage from "@/components/pages/homepage";


export const metadata = {
  title: "NovaTradar - Connecting businesses with manufacturers",
  description: "Welcome to NovaTradar, your trusted partner in connecting global businesses with top-tier Ukrainian manufacturers in the agriculture and construction sectors.",
  openGraph: {
    type: "website",
    url: "https://novatradar.com/about",
    title: "NovaTradar - Connecting businesses with manufacturers",
    description: "Welcome to NovaTradar, your trusted partner in connecting global businesses with top-tier Ukrainian manufacturers in the agriculture and construction sectors.",
    images: [{ url: "https://novatradar.com/abt.webp", alt: "About NovaTradar" }],
    siteName: "NovaTradar",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Homepage() {

  return (
    <div>
      <LandingPage />
    </div >
  );
}
