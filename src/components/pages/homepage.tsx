'use client';

import Image from "next/image";

import StrokeImg from "@/assets/images/stroke.svg";

import DisplayLayout from "@/components/layout";
import Link from "next/link";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";
import { Modal, notification, Skeleton, Tabs } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { axiosURL } from "@/utils/axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { base_url } from "@/utils/constant";



export default function LandingPage() {

    const [openDrawer, setOpenDrawer] = useState(false);
    const [, setRandomCount] = useState<number>(0);
    const [currentView, setCurrentView] = useState<number>(0);
    const [products, setProducts] = useState<any>([]);
    const [dbData, setDbData] = useState<any>([]);
    const [displayQuote, setDisplayQuote] = useState(false);
    const [loadingData, setLoadingData] = useState(true);

    const Context = React.createContext({ name: 'Default' });
    const [selectedProduct, setSelectedProduct] = useState<any>({});


    const [api, contextHolder] = notification.useNotification();

    const openNotification = (message: string) => {
        api.info({
            message: ``,
            description: <Context.Consumer>{() => message}</Context.Consumer>,
        });
    };

    const contextValue = useMemo(() => ({ name: 'Ant Design' }), []);

    // useEffect(() => {
    //   const dbtest = db;
    //   const rand = Math.trunc(Math.random() * (dbtest.length - 8));
    //   setRandomCount(rand);
    //   setProducts(dbtest);
    //   setDbData(db.slice(rand, rand + 8));
    // }, []);

    useEffect(() => {
        const handleFetchProducts = () => {
            setLoadingData(true);
            axiosURL("/api/v1/")
                .then(data => {
                    const dbtest = data.data.data;
                    const rand = dbtest.length > 4 ? Math.trunc(Math.random() * (dbtest.length - 4)) : 0;
                    setRandomCount(rand);
                    setProducts(dbtest);
                    setDbData(dbtest.slice(rand, rand + 4));
                    setLoadingData(false);
                })
                .catch(() => {
                    setLoadingData(false);
                    openNotification('An error occurred while fetching products. Please reload to try again')
                })
        }
        handleFetchProducts();
    }, [])

    const { language } = useLanguage();
    const t = translations[language].home;


    const toggleModalDisplay = () => setOpenDrawer(!openDrawer);
    const toggleQuoteModal = () => {
        setDisplayQuote(true);
        setOpenDrawer(false);
    }
    const toggleQuoteController = () => {
        setDisplayQuote(false);
    }

    const breakpoints = {
        320: {
            slidesPerView: 1.3,
        },
        640: { slidesPerView: 1.3 },  // Tablets
        1024: { slidesPerView: 3 }, // Small laptops
        1280: { slidesPerView: 4 }, // Desktops
    }


    return (
        <div>
            <DisplayLayout displayQuote={displayQuote} toggleQuoteController={toggleQuoteController}>
                <Context.Provider value={contextValue}>
                    {contextHolder}
                    <>
                        <>
                            <div className="hero h-[650px] md:h-screen bg-black md:flex items-center px-0 py-20 relative">
                                <div className="md:w-full md:absolute text-center text-white md:box-placing">
                                    {
                                        loadingData ? "" :
                                            <>
                                                <div>
                                                    <h1 className="text-center text-2xl md:text-4xl text-white mb-14 pt-20 font-bold">{t.all_products}</h1>
                                                </div>
                                                <div className="overflow-hidden">
                                                    <Swiper
                                                        spaceBetween={50} centeredSlides={false} loop={true}
                                                        autoplay={{
                                                            delay: 2500, // Delay in milliseconds between slides (2500ms = 2.5 seconds)
                                                            disableOnInteraction: false, // Keeps autoplay running even after user interaction
                                                        }} breakpoints={breakpoints}
                                                    >
                                                        {
                                                            loadingData ? "" :
                                                                products.map((product: any, index: number) => (
                                                                    <SwiperSlide key={index}>
                                                                        <div className="cursor-pointer" key={index}>
                                                                            <Link href={`/products/${(JSON.parse(product?.translation))[language]?.name}/${product.id}`}>
                                                                                <div className="size-[15rem] md:size-[20rem] mx-auto md:mx-unset rounded-full overflow-hidden">
                                                                                    <Image src={`${base_url}${product?.image}`} alt={(JSON.parse(product.translation))[language]?.name} layout="responsive"
                                                                                        width={1200}
                                                                                        height={800} quality={100} className="w-full h-full md:h-full rounded-l object-fit object-cover" />
                                                                                </div>
                                                                                <div className="mt-2 md:mt-5">
                                                                                    <h4 className="text-base md:text-xl font-medium">{(JSON.parse(product.translation))[language]?.name}</h4>
                                                                                    <p className="mt-1 md:mt-3 opacity-80">
                                                                                        <span className="text-sm md:text-base">{t?.details}</span>
                                                                                    </p>
                                                                                </div>
                                                                            </Link>
                                                                        </div>
                                                                    </SwiperSlide>
                                                                ))
                                                        }
                                                    </Swiper>
                                                </div>
                                            </>
                                    }
                                </div>
                            </div>
                        </>
                        <div className="flex flex-col md:grid grid-cols-1/2 mt-20 gap-5 md:gap-20 items-start px-5 md:px-20">
                            <div className=" md:flex gap-2 items-center">
                                {/* <div className="size-2 bg-black rounded-full"></div> */}
                                <h1 className="w-full md:leading-relaxed leading-relaxed text-base md:text-3xl font-bold">{t.heroTitle}</h1>
                            </div>
                            <div>
                                {/* <h4 className="w-[80%] md:w-full text-xl md:text-4xl md:w-[50%] mb-2 md:mb-4 leading-normal md:leading-normal font-bold">
                  {t.belowBody}
                </h4> */}
                                <p className="text-sm md:text-base md:leading-loose leading-loose mb-8">
                                    {t.belowTag}
                                </p>
                                {/* <Link href="" className="hidden md:flex mt-10 flex items-center gap-5 text-sm md:text-base w-max bg-primary rounded-full py-1 px-2 pl-5 text-center text-black font-medium">
                  {t.belowButton}
                  <span className="size-14 bg-black rounded-full text-white flex items-center justify-center"><FaArrowRightLong className="text-xl" /></span>
                </Link> */}
                                <div className="flex flex-col md:grid grid-cols-2 gap-5">
                                    <div className="bg-[#EDF6F5] p-5 rounded-lg">
                                        <h1 className="text-2xl md:text-4xl mb-16 font-bold">50+</h1>
                                        <div className="">
                                            <h5 className="text-base font-bold mb-2">{t.blockTestimonial1}</h5>
                                            <p className="text-sm leading-relaxed md:leading-loose">
                                                {t.blockTestimonialStory1}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-[#EDF6F5] p-5 rounded-lg">
                                        <h1 className="text-2xl md:text-4xl mb-16 font-bold">100+</h1>
                                        <div className="">
                                            <h5 className="text-base font-bold mb-2">{t.blockTestimonial2}</h5>
                                            <p className="text-sm leading-relaxed md:leading-loose">
                                                {t.blockTestimonialStory2}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-5 md:px-20 mt-14">
                            <div className="border-t-2 pt-20 border-solid border-black">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-xl md:text-2xl font-bold">{t.productsTag}</h3>
                                    <div className="">
                                        <Link href="/products?query=all" className="text-black text-sm md:text-lg border-b-2 border-solid border-black">{t.productsLink}</Link>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 gap-y-10 md:gap-10">
                                    {
                                        loadingData ?
                                            new Array(4).fill(0).map((_id, index) => (
                                                <Skeleton.Image key={index} style={{ height: "15rem", width: "100%", marginBottom: 20 }} active={true} />
                                            ))
                                            :
                                            dbData.map((product: any, index: number) => (
                                                <div className="cursor-pointer" key={index}>
                                                    <Link href={`/products/${(JSON.parse(product?.translation))[language]?.name}/${product.id}`}>
                                                        <Image src={`${base_url}${product?.image}`} width={300} height={200} quality={100} alt={(JSON.parse(product.translation))[language]?.name} className="productImg w-full h-[12rem] md:h-[15rem] rounded-lg object-fit object-cover" />
                                                        <div className="mt-2 md:mt-5">
                                                            <h4 className="text-base md:text-lg font-medium">{(JSON.parse(product.translation))[language]?.name}</h4>
                                                            <p className="mt-1 md:mt-3 text-black opacity-80">
                                                                <span className="text-sm md:text-lg">{t?.details}</span>
                                                            </p>
                                                        </div>
                                                    </Link>
                                                </div>
                                            ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="bg-farm w-full md:h-[35rem] mt-20 flex py-20 md:py-0 px-5 md:px-20 items-center">
                            <div className="md:w-[70%]">
                                <h3 className="text-2xl md:text-5xl font-bold text-white capitalize mb-7 leading-normal md:leading-tight">
                                    {t.bottom_feel}
                                </h3>
                                <p className="text-sm md:text-lg md:w-[90%] leading-loose md:leading-loose text-white mb-10">
                                    {t.bottom_story}
                                </p>
                                <Link href="/" className="text-sm md:text-base text-white mt-7 border-b-2 border-solid border-white">{t.bottom_link}</Link>
                            </div>
                        </div>
                        <div className="mb-10 px-5 md:px-20 flex flex-col md:grid grid-cols-2 gap-10 mt-20">
                            <div></div>
                            <div>
                                <h4 className="text-3xl font-bold mb-4">
                                    {t.collabTitle}
                                </h4>
                                <p className="text-sm md:text-base leading-loose md:leading-loose mb-10">
                                    {t.collabStory}
                                </p>
                                <div className="grid grid-cols-2 gap-14">
                                    <div>
                                        <h4 className="text-3xl mb-6 font-bold">24/7</h4>
                                        <Image src={StrokeImg} width={0} height={0} className="mb-2 w-full h-auto" alt="stroke" />
                                        <p className="text-base leading-loose md:leading-loose">{t.collabBar2}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-3xl mb-6 font-bold">99%</h4>
                                        <Image src={StrokeImg} className="mb-2" alt="stroke" />
                                        <p className="text-base leading-loose md:leading-loose">{t.collabBar1}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="px-5 md:w-[70%] mx-auto flex flex-col gap-8 md:gap-10 mb-20 mt-20">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold leading-normal md:leading-tight">{t.faqHeader}</h3>
                                {/* <p className="text-base md:text-lg text-black leading-relaxed opacity-89">
                  {t.faqStory}
                </p> */}
                            </div>
                            <div>
                                <div className="border-y-2 py-7 border-[#EDEFF3] border-solid">
                                    <div onClick={() => setCurrentView(0)} className={`top ${currentView === 0 ? "mb-5" : "mb-0"} cursor-pointer flex items-center justify-between`}>
                                        <h5 className="text-base md:text-lg font-bold">{t.questionHeader1}</h5>
                                        <span className="text-lg font-bold">{
                                            currentView === 0 ? "-" : "+"
                                        }</span>
                                    </div>
                                    <div className={`${currentView === 0 ? "view" : "hide"} faq-text`}>
                                        <p className="text-sm md:text-base opacity-80 text-black leading-loose">
                                            {t.questionStory1}
                                        </p>
                                    </div>
                                </div>
                                <div className="border-b-2 py-7 border-[#EDEFF3] border-solid">
                                    <div onClick={() => setCurrentView(1)} className={`top ${currentView === 1 ? "mb-5" : "mb-0"} cursor-pointer flex items-center justify-between`}>
                                        <h5 className="text-base md:text-lg font-bold">{t.questionHeader2}</h5>
                                        <span className="text-lg font-bold">{
                                            currentView === 1 ? "-" : "+"
                                        }</span>
                                    </div>
                                    <div className={`${currentView === 1 ? "view" : "hide"} faq-text`}>
                                        <p className="text-sm md:text-base opacity-80 text-black leading-loose">
                                            {t.questionStory2}
                                        </p>
                                    </div>
                                </div>
                                <div className="border-b-2 py-7 border-[#EDEFF3] border-solid">
                                    <div onClick={() => setCurrentView(2)} className={`top ${currentView === 2 ? "mb-5" : "mb-0"} cursor-pointer flex items-center justify-between`}>
                                        <h5 className="text-base md:text-lg font-bold">{t.questionHeader3}</h5>
                                        <span className="text-lg font-bold">{
                                            currentView === 2 ? "-" : "+"
                                        }</span>
                                    </div>
                                    <div className={`${currentView === 2 ? "view" : "hide"} faq-text`}>
                                        <p className="text-sm md:text-base opacity-80 text-black leading-loose">
                                            {t.questionStory3}
                                        </p>
                                    </div>
                                </div>
                                <div className="border-b-2 py-7 border-[#EDEFF3] border-solid">
                                    <div onClick={() => setCurrentView(3)} className={`top ${currentView === 3 ? "mb-5" : "mb-0"} cursor-pointer flex items-center justify-between`}>
                                        <h5 className="text-base md:text-lg font-bold">{t.questionHeader4}</h5>
                                        <span className="text-lg font-bold">{
                                            currentView === 3 ? "-" : "+"
                                        }</span>
                                    </div>
                                    <div className={`${currentView === 3 ? "view" : "hide"} faq-text`}>
                                        <p className="text-sm md:text-base opacity-80 text-black leading-loose">
                                            {t.questionStory4}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Modal open={openDrawer} onClose={toggleModalDisplay} onCancel={toggleModalDisplay} footer={null}>
                            {
                                selectedProduct?.image &&
                                <>
                                    <div className="text-center">
                                        <h4 className="mb-2 text-2xl font-bold">{selectedProduct.translation[language ? language : "en"]?.name}</h4>
                                    </div>
                                    <Image src={`https://backend.novatradar.com${selectedProduct?.image}`} alt={selectedProduct.translation[language ? language : "en"]?.name} className="w-full h-[15rem] rounded-lg object-fit object-cover" />
                                    <div className="mt-5">
                                        <Tabs type="card">
                                            <Tabs.TabPane tab={t.modal_description} key={1}>
                                                <p className="text-sm md:leading-loose leading-loose">
                                                    {selectedProduct.translation[language ? language : "en"]?.description}
                                                </p>
                                                <div className="mt-5">
                                                    <div className="flex md:items-center flex-col md:flex-row gap-10">
                                                        <div>
                                                            <p className="text-sm mb-2">{t.modal_storage}</p>
                                                            <p className="text-base">{selectedProduct.translation[language ? language : "en"]?.storage}</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm mb-2">{t.modal_shelf}</p>
                                                            <p className="text-base">{selectedProduct.translation[language ? language : "en"]?.shelfLife}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tabs.TabPane>
                                            <Tabs.TabPane tab={t.modal_spec} key={2}>
                                                <p className="text-sm md:leading-loose leading-loose">
                                                    <ul className="flex flex-col gap-4">
                                                        <li className="text-sm leading-loose flex gap-3">
                                                            <b>{t.modal_type}:</b> {selectedProduct.translation[language ? language : "en"]?.type}
                                                        </li>
                                                        {
                                                            selectedProduct.translation[language ? language : "en"]?.fat_content &&
                                                            <li className="text-sm leading-loose flex gap-3">
                                                                <b>{t.modal_fat}:</b> {selectedProduct.translation[language ? language : "en"]?.fat_content}
                                                            </li>
                                                        }
                                                        <li className="text-sm leading-loose flex gap-3">
                                                            <b>{t.modal_moisture}:</b> {selectedProduct.translation[language ? language : "en"]?.moistureContent}
                                                        </li>
                                                    </ul>
                                                </p>
                                            </Tabs.TabPane>
                                            <Tabs.TabPane tab={t.modal_packaging} key={3}>
                                                <p className="text-sm md:leading-loose leading-loose">
                                                    <ul className="flex flex-col gap-4">
                                                        <li className="text-sm leading-loose flex gap-3">
                                                            <b>{t.modal_packaging}:</b> {selectedProduct.translation[language ? language : "en"]?.packaging}
                                                        </li>
                                                        <li className="text-sm leading-loose flex gap-3">
                                                            <b>{t.modal_delivery}:</b> {selectedProduct.translation[language ? language : "en"]?.delivery}
                                                        </li>
                                                        <li className="text-sm leading-loose flex gap-3">
                                                            <b>{t.modal_storage}:</b> {selectedProduct.translation[language ? language : "en"]?.storage}
                                                        </li>
                                                        <li className="text-sm leading-loose flex gap-3">
                                                            <b>{t.modal_shelf}:</b> {selectedProduct.translation[language ? language : "en"]?.shelfLife}
                                                        </li>
                                                    </ul>
                                                </p>
                                            </Tabs.TabPane>
                                        </Tabs>
                                        <div className="flex items-center justify-center">
                                            <button onClick={toggleQuoteModal} className="text-sm md:text-sm bg-primary text-black py-4 px-10 rounded-lg md:mt-10 text-base block">{t.modal_quote}</button>
                                        </div>
                                    </div>
                                </>
                            }
                        </Modal>
                    </>
                </Context.Provider>
            </DisplayLayout>
        </div >
    );
}
