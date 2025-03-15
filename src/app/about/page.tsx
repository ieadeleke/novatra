// 'use client';

import DisplayLayout from "@/components/layout";
import AboutUsPage from "@/components/pages/about";

export const metadata = {
    title: "About NovaTradar - Our Mission & Vision",
    description: "Learn more about NovaTradar and how we connect global businesses with top-tier Ukrainian manufacturers.",
    openGraph: {
        type: "website",
        url: "https://novatradar.com/about",
        title: "About NovaTradar - Our Mission & Vision",
        description: "Learn more about NovaTradar and how we connect global businesses with top-tier Ukrainian manufacturers.",
        images: [{ url: "https://novatradar.com/abt.webp", alt: "About NovaTradar" }],
        siteName: "NovaTradar",
    },
    twitter: {
        card: "summary_large_image",
    },
};

export default function AboutUs() {
    return (
        <div>
            <DisplayLayout>
                <AboutUsPage />
            </DisplayLayout>
        </div>
    );
}
