import React from "react";
import Footer from "./footer";
import Navigation from "./nav";

import { TbBrandWhatsapp } from "react-icons/tb";

interface DisplayInterface {
    displayQuote?: boolean;
    toggleQuoteController?: () => void
    children: React.ReactElement;
    productName?: string
}

const DisplayLayout = (props: DisplayInterface) => {
    return (
        <>
            <Navigation displayQuote={props.displayQuote} toggleQuoteController={props.toggleQuoteController} productName={props.productName} />
            <div className="relative">
                <div className="fixed bottom-32 right-5 md:right-10 z-50">
                    <a target="_blank"
                        href="https://wa.me/+380936018625?text=Hello%20there,%20I%20want%20to%20make%20enquiries">
                        <div className="size-14 md:size-20 border-2 border-solid bg-[#CFF34E] border-[#CFF34E] rounded-full flex items-center justify-center">
                            <TbBrandWhatsapp className="text-2xl md:text-4xl" />
                        </div>
                    </a>
                </div>
                {props.children}
            </div>
            <Footer />
        </>
    )
}

export default DisplayLayout;