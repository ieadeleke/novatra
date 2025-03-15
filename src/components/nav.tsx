"use client";

import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import React, { useEffect, useMemo, useState } from "react";
import { Drawer, Input, Modal, notification } from "antd";
import { FaTimes } from "react-icons/fa";
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { useLanguage } from "@/context/LanguageContext";
import { MdKeyboardArrowDown } from "react-icons/md";
import { translations } from "@/translations";
import { Spin } from 'antd';
import { axiosURL } from "@/utils/axios";
import { LoadingOutlined } from '@ant-design/icons';
import Image from "next/image";
import UsImg from "@/assets/images/logo/us.webp";
import ArImg from "@/assets/images/logo/ar.webp";
import FrImg from "@/assets/images/logo/fr.webp";
import RuImg from "@/assets/images/logo/ru.webp";
import Logo from "@/assets/images/lolo.webp";

const Context = React.createContext({ name: 'Default' });

interface NavigationInterface {
    displayQuote?: boolean;
    toggleQuoteController?: () => void
    productName?: string
}

const Navigation = (props: NavigationInterface) => {

    const { language, setLanguage } = useLanguage();
    const [, setFixed] = useState(false);
    const [currentCountry, setCurrentCountry] = useState("en");
    const [openDrawer, setOpenDrawer] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    const t = translations[language].nav;

    const toggleDisplayDrawer = () => setOpenDrawer(!openDrawer);
    const toggleMenuDisplay = () => {
        setOpenMenu(!openMenu);
        props.toggleQuoteController && props.toggleQuoteController();
    }

    useEffect(() => {
        setOpenMenu(props.displayQuote || false);
    }, [props.displayQuote]);

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

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <div onClick={() => {
                    setLanguage('en')
                    setCurrentCountry("en")
                }}>
                    <Image src={UsImg} alt="us logo" className="w-auto h-[20px]" />
                </div>
            ),
        },
        {
            key: '2',
            label: (
                <div onClick={() => {
                    setLanguage('fr')
                    setCurrentCountry("fr")
                }}>
                    <Image src={FrImg} alt="france logo" className="w-auto h-[20px]" />
                </div>
            ),
        },
        {
            key: '3',
            label: (
                <div onClick={() => {
                    setLanguage('ar')
                    setCurrentCountry("ar")
                }}>
                    <Image src={ArImg} alt="arabic logo" className="w-auto h-[20px]" />
                </div>
            )
        },
        {
            key: '4',
            label: (
                <div onClick={() => {
                    setLanguage('ru')
                    setCurrentCountry("ru")
                }}>
                    <Image src={RuImg} alt="russia logo" className="w-auto h-[20px]" />
                </div>
            )
        }
    ];

    const [formData, setFormData] = useState({
        fullName: "", email: "", phoneNumber: "", message: "", productName: props.productName || ""
    });
    const [sendingForm, setSendingForm] = useState(false);

    const [api, contextHolder] = notification.useNotification();

    const openNotification = (message: string) => {
        api.info({
            message: ``,
            description: <Context.Consumer>{() => message}</Context.Consumer>,
        });
    };

    const contextValue = useMemo(() => ({ name: 'Ant Design' }), []);

    useEffect(() => {
        setFormData({
            ...formData,
            productName: props.productName || ""
        })
    }, [props.productName])

    const handleContactUs = () => {
        const { fullName, email, phoneNumber, message, productName } = formData;
        if (fullName && email && phoneNumber && message && productName) {
            setSendingForm(true);
            axiosURL.post("/get-quote", {
                fullName, email, phoneNumber, message, productName
            })
                .then(() => {
                    openNotification('Thanks for reaching out. We will get back to you shortly')
                    window.location.reload();
                })
                .catch(() => {
                    setSendingForm(false);
                    openNotification('An error occurred while sending mail')
                })
        } else {
            setSendingForm(false);
            openNotification('Please fill all fields')
        }
    }

    const handleFormUpdate = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <Context.Provider value={contextValue}>
                {contextHolder}
                <>
                    <div className="nav fixed top-0 z-40 w-full md:pt-0 max-w-[1800px]">
                        <div className={`flex justify-between items-center md:md:w-full [60%] mx-auto px-5 md:px-20 py-3 z-40 bg-black`}>
                            <div>
                                <Link href="/">
                                    <div className="flex gap-3 items-center">
                                        <Image src={Logo} alt="logo" className="w-auto h-[50px]" />
                                    </div>
                                </Link>
                            </div>
                            <div className="hidden md:block">
                                <ul className="flex gap-10 items-center cursor-pointer">
                                    <li>
                                        <Link className={`text-sm opacity-70 text-white `} href="/">{t.home}</Link>
                                    </li>
                                    <li>
                                        <Link className={`text-sm opacity-70 text-white `} href="/about">{t.about}</Link>
                                    </li>
                                    <li>
                                        <Link className={`text-sm opacity-70 text-white `} href="/products?query=all">{t.products}</Link>
                                    </li>
                                    <li>
                                        <Link className={`text-sm opacity-70 text-white `} href="contact">{t.contact}</Link>
                                    </li>
                                    <li className="pt-2">
                                        <Dropdown menu={{ items }}>
                                            <a onClick={(e) => e.preventDefault()}>
                                                <Space>
                                                    {
                                                        language === "en" ?
                                                            <Image src={UsImg} alt="USImg" className="w-auto h-[20px]" />
                                                            : language === "ru" ?
                                                                <Image src={RuImg} alt="USImg" className="w-auto h-[20px]" />
                                                                : language === "ar" ?
                                                                    <Image src={ArImg} alt="USImg" className="w-auto h-[20px]" />
                                                                    :
                                                                    <Image src={FrImg} alt="USImg" className="w-auto h-[20px]" />
                                                    }
                                                </Space>
                                            </a>
                                        </Dropdown>
                                    </li>
                                </ul>
                            </div>
                            <div className="hidden md:block">
                                <ul className="flex gap-2">
                                    <li>
                                        <Link href="#" onClick={toggleMenuDisplay} className="bg-primary rounded-full py-5 px-10 text-center text-black font-medium">
                                            {t.quote}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <ul className="flex gap-2 items-center md:hidden">
                                <div>
                                    <Dropdown menu={{ items }}>
                                        <a onClick={(e) => e.preventDefault()}>
                                            <Space>
                                                <div className="flex items-center pt-2">
                                                    {
                                                        language === "en" ?
                                                            <Image src={UsImg} alt="USImg" className="w-auto h-[20px]" />
                                                            : language === "ru" ?
                                                                <Image src={RuImg} alt="USImg" className="w-auto h-[20px]" />
                                                                : language === "ar" ?
                                                                    <Image src={ArImg} alt="USImg" className="w-auto h-[20px]" />
                                                                    :
                                                                    <Image src={FrImg} alt="USImg" className="w-auto h-[20px]" />
                                                    }
                                                    <MdKeyboardArrowDown className="text-2xl text-white" />
                                                </div>
                                            </Space>
                                        </a>
                                    </Dropdown>
                                </div>
                                <div onClick={toggleDisplayDrawer}>
                                    <HiMenuAlt3 className={`text-3xl text-white`} />
                                </div>
                            </ul>
                            <Modal open={openMenu} onClose={toggleMenuDisplay} onCancel={toggleMenuDisplay} footer={null}>
                                <h4 className="text-xl md:text-2xl mb-10 font-bold text-center">Get a Free Quote</h4>
                                <div className="form-group w-full mb-5">
                                    <label htmlFor="firstName" className="text-sm">Product Name</label>
                                    <Input onChange={handleFormUpdate} name="productName" className="px-4 border-2 border-solid border-[#F2F2F2] w-full rounded-lg py-5" value={formData.productName} />
                                </div>
                                <div className="form-group w-full mb-5">
                                    <label htmlFor="email" className="text-sm">Full name</label>
                                    <Input onChange={handleFormUpdate} type="text" name="fullName" className="px-4 border-2 border-solid border-[#F2F2F2] w-full rounded-lg py-5" value={formData.fullName} />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="form-group w-full mb-5">
                                        <label htmlFor="email" className="text-sm">Email</label>
                                        <Input onChange={handleFormUpdate} type="email" name="email" className="px-4 border-2 border-solid border-[#F2F2F2] w-full rounded-lg py-5" value={formData.email} />
                                    </div>
                                    <div className="form-group w-full mb-5">
                                        <label htmlFor="phoneNumber" className="text-sm">Phone</label>
                                        <Input onChange={handleFormUpdate} type="tel" name="phoneNumber" className="px-4 border-2 border-solid border-[#F2F2F2] w-full rounded-lg py-5" value={formData.phoneNumber} />
                                    </div>
                                </div>
                                <div className="form-group w-full mb-5">
                                    <label htmlFor="message" className="text-sm">Message</label>
                                    <textarea onChange={handleFormUpdate} name="message" rows={5} className="text-sm p-2 w-full border-2 border-solid border-[#F2F2F2] rounded-lg" value={formData.message}></textarea>
                                </div>
                                <div className="">
                                    <button type="button" onClick={handleContactUs} disabled={sendingForm} className="w-full text-sm md:text-base bg-primary text-black py-5 px-20 rounded-lg md:mt-5 text-base block">
                                        {
                                            sendingForm ? <Spin indicator={<LoadingOutlined spin />} size="small" /> : "Get a Quote"
                                        }
                                    </button>
                                </div>
                            </Modal>
                            <Drawer open={openDrawer} onClose={toggleDisplayDrawer}>
                                <div className="relative h-full">
                                    <div className="pb-2 py-5 px-4 flex items-center justify-between">
                                        <Link href="/">
                                            {/* <Image src={Logo} alt="logo" className="w-auto h-[50px]" /> */}
                                            {/* <div className="flex gap-3 items-center">
                                        <div className="h-10 md:h-14 w-16 md:w-20 bg-primary"></div>
                                        <h4 className={`font-bold text-xl text-black`}>NovaApp</h4>
                                    </div> */}
                                        </Link>
                                        <FaTimes onClick={toggleDisplayDrawer} className="text-[#FF0000] text-3xl" />
                                    </div>
                                    <ul className="flex flex-col w-full gap-0">
                                        <li onClick={toggleDisplayDrawer}
                                            className="text-sm font-medium text-black font-worksans border-b border-solid border-[#F2F2F2] px-4 py-5">
                                            <Link href="/">{t.home}</Link></li>
                                        <li onClick={toggleDisplayDrawer}
                                            className="text-sm font-medium text-black font-worksans border-b border-solid border-[#F2F2F2] px-4 py-5">
                                            <Link href="/about">{t.about}</Link></li>
                                        <li onClick={toggleDisplayDrawer}
                                            className="text-sm font-medium text-black font-worksans border-b border-solid border-[#F2F2F2] px-4 py-5">
                                            <Link href="/products?query=all">{t.products}</Link></li>
                                        <li onClick={toggleDisplayDrawer}
                                            className="text-sm font-medium text-black font-worksans border-b border-solid border-[#F2F2F2] px-4 py-5">
                                            <Link href="/contact"> {t.contact}</Link></li>
                                        <li onClick={() => {
                                            toggleDisplayDrawer();
                                            toggleMenuDisplay();
                                        }}
                                            className="text-sm font-medium text-black font-worksans border-b border-solid border-[#F2F2F2] px-4 py-5">
                                            <Link href="#">{t.quote}</Link></li>
                                        <li onClick={() => {
                                            toggleDisplayDrawer();
                                        }}
                                            className="text-sm font-medium text-black font-worksans border-b border-solid border-[#F2F2F2] px-4 py-5">
                                            <a target="_blank" rel="noreferrer"
                                                href="https://wa.me/+380936018625?text=Hello%20there,%20I%20want%20to%20make%20enquiries"> {t.whatsapp}</a></li>
                                    </ul>
                                    <div className="absolute bottom-20 w-full">
                                        <div className="flex items-center w-max mx-auto border-2 border-solid border-black px-10 pb-2 pt-3">
                                            <Dropdown menu={{ items }}>
                                                <a onClick={(e) => e.preventDefault()}>
                                                    <Space>
                                                        <div className="flex items-center">
                                                            {
                                                                language === "en" ?
                                                                    <Image src={UsImg} alt="USImg" className="w-auto h-[20px]" />
                                                                    : language === "ru" ?
                                                                        <Image src={RuImg} alt="USImg" className="w-auto h-[20px]" />
                                                                        : language === "ar" ?
                                                                            <Image src={ArImg} alt="USImg" className="w-auto h-[20px]" />
                                                                            :
                                                                            <Image src={FrImg} alt="USImg" className="w-auto h-[20px]" />
                                                            }
                                                            <MdKeyboardArrowDown className="text-2xl" />
                                                        </div>
                                                    </Space>
                                                </a>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div >
                            </Drawer>
                        </div>
                    </div>
                </>
            </Context.Provider>
        </div>
    )
}

export default Navigation;