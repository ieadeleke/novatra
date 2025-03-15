import React from "react";
import 'swiper/css';
import LandingPage from "@/components/pages/homepage";
import Link from "next/link";


export const metadata = {
    title: "NovaTradar - Connecting businesses with Ukrainian manufacturers",
    description: "Welcome to NovaTradar, your trusted partner in connecting global businesses with top-tier Ukrainian manufacturers in the agriculture and construction sectors.",
    openGraph: {
        type: "website",
        url: "https://novatradar.com/about",
        title: "NovaTradar - Connecting businesses with Ukrainian manufacturers",
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
        <div className="h-screen w-[100vw] flex text-center items-center justify-center">
            <div>
                <h4 className="mb-2">Page not found</h4>
                <Link href="/">Click here to return home</Link>
            </div>
        </div >
    );
}
