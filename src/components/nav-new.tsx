"use client";

import Link from "next/link";
import { RiFacebookCircleFill } from "react-icons/ri";
import { TbBrandInstagram } from "react-icons/tb";
import { BsLinkedin } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";
import { useEffect, useState } from "react";
import { Drawer } from "antd";
import { FaTimes } from "react-icons/fa";


const Navigation = () => {

    const [fixedNav, setFixed] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDisplayDrawer = () => setOpenDrawer(!openDrawer);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const offset = window.scrollY;
            if (offset > 200) {
                setFixed(true);
            }
            else {
                setFixed(false);
            }
        })
    }, [])

    return (
        <div>
            <div className={`flex justify-between items-center w-full px-5 md:px-20 py-3 fixed top-0 z-40 ${fixedNav ? "bg-white shadow-xl" : "bg-transparent"}`}>
                <div>
                    <div className="flex gap-3 items-center">
                        <div className="h-10 md:h-14 w-16 md:w-20 bg-primary"></div>
                        <h4 className={`font-bold text-xl ${!fixedNav ? "text-white" : "text-black"}`}>NovaApp</h4>
                    </div>
                </div>
                <div className="hidden md:block">
                    <ul className="flex gap-10">
                        <li>
                            <Link className={`${!fixedNav ? "text-white" : "text-black"} `} href="/">Home</Link>
                        </li>
                        <li>
                            <Link className={`${!fixedNav ? "text-white" : "text-black"} `} href="/about">About Us</Link>
                        </li>
                        <li>
                            <Link className={`${!fixedNav ? "text-white" : "text-black"} `} href="/shop">Shop</Link>
                        </li>
                        <li>
                            <Link className={`${!fixedNav ? "text-white" : "text-black"} `} href="contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div className="hidden md:block">
                    <ul className="flex gap-10">
                        <ul className="flex gap-5 items-center">
                            <li>
                                <Link href="">
                                    <RiFacebookCircleFill className={`text-2xl ${!fixedNav ? "text-white" : "text-black"} `} />
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <TbBrandInstagram className={`text-2xl ${!fixedNav ? "text-white" : "text-black"} `} />
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <BsLinkedin className={`text-2xl ${!fixedNav ? "text-white" : "text-black"} `} />
                                </Link>
                            </li>
                        </ul>
                        <li>
                            <Link href="" className="bg-primary rounded-full py-5 px-10 text-center text-black font-medium">
                                Get a Quote
                            </Link>
                        </li>
                    </ul>
                </div>
                <div onClick={toggleDisplayDrawer} className="block md:hidden">
                    <HiMenuAlt3 className={`text-4xl ${!fixedNav ? "text-white" : "text-black"}`} />
                </div>
                <Drawer open={openDrawer} onClose={toggleDisplayDrawer}>
                    <div className="relative h-full">
                        <div className="pb-10 flex items-center justify-between">
                            <Link href="/">
                                <div className="flex gap-3 items-center">
                                    <div className="h-10 md:h-14 w-16 md:w-20 bg-primary"></div>
                                    <h4 className={`font-bold text-xl text-black`}>NovaApp</h4>
                                </div>
                            </Link>
                            <FaTimes onClick={toggleDisplayDrawer} className="text-[#FF0000] text-3xl" />
                        </div>
                        <ul className="flex flex-col w-full gap-10">
                            <li className="text-base text-black font-worksans">
                                <Link href="/">Home</Link></li>
                            <li className="text-base text-black font-worksans">
                                <Link href="/about">About Us</Link></li>
                            <li className="text-base text-black font-worksans">
                                <Link href="/shop">Shop</Link></li>
                            <li className="text-base text-black font-worksans">
                                <Link href="/contact"> Contact Us</Link></li>
                        </ul>
                    </div >
                </Drawer >
            </div>
        </div>
    )
}

export default Navigation;