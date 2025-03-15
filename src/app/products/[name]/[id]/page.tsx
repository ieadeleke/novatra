
'use client';

import React from "react";
import ProductDetail from "@/components/pages/productDetail";

export const metadata = {
    title: "NovaTradar - Product Detail",
    description: "Check out our product",
    openGraph: {
        type: "website",
        url: "https://novatradar.com/products",
        title: "NovaTradar - Product Detail",
        description: "Check out our product",
        images: [{ url: "https://novatradar.com/abt.webp", alt: "NovaTradar Product" }],
        siteName: "NovaTradar",
    },
    twitter: {
        card: "summary_large_image",
    },
};

export default function SingleProductDetail() {
    return (
        <div>
            <ProductDetail />
        </div >
    );
}
