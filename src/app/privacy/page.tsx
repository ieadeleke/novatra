import DisplayLayout from "@/components/layout";
import PrivacyPolicy from "@/components/pages/privacy";


export const metadata = {
    title: "NovaTradar - Privacy Policies",
    description: "Learn more about NovaTradar and how we connect global businesses with top-tier Ukrainian manufacturers.",
    openGraph: {
        type: "website",
        url: "https://novatradar.com/about",
        title: "NovaTradar - Privacy Policies",
        description: "Learn more about NovaTradar and how we connect global businesses with top-tier Ukrainian manufacturers.",
        images: [{ url: "https://novatradar.com/abt.webp", alt: "About NovaTradar" }],
        siteName: "NovaTradar",
    },
    twitter: {
        card: "summary_large_image",
    },
};

const PrivacyPolicyPage = () => {
    return (
        <DisplayLayout>
            <PrivacyPolicy />
        </DisplayLayout>
    );
};

export default PrivacyPolicyPage;