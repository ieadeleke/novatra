
import Products from "@/components/pages/products";
import React from "react";
import { Suspense } from "react";

export const metadata = {
  title: "NovaTradar - All Products",
  description: "Check out all of our product offerings",
  openGraph: {
    type: "website",
    url: "https://novatradar.com/products",
    title: "NovaTradar - All Products",
    description: "Check out all of our product offerings",
    images: [{ url: "https://novatradar.com/abt.webp", alt: "NovaTradar Products" }],
    siteName: "NovaTradar",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Home() {

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Products />
      </Suspense>
    </div >
  );
}