import DisplayLayout from "@/components/layout";
import React from 'react';
import ContactUs from '@/components/pages/contact';

export const metadata = {
  title: "NovaTradar - Reach Out To Us",
  description: "Reach out to us and let's say how we can work together",
  openGraph: {
    type: "website",
    url: "https://novatradar.com/contact",
    title: "About NovaTradar - Reach Out To Us",
    description: "Reach out to us and let's say how we can work together",
    images: [{ url: "https://novatradar.com/abt.webp", alt: "Contact NovaTradar" }],
    siteName: "NovaTradar",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Contact() {

  return (
    <div>
      <DisplayLayout>
        <ContactUs />
      </DisplayLayout>
    </div>
  );
}
