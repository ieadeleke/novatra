"use client";

import db from "@/utils/db.json";
import DisplayLayout from "@/components/layout";
import { IoFilter } from "react-icons/io5";
import type { MenuProps } from 'antd';
import { Dropdown, Skeleton, notification } from 'antd';
import React, { useEffect, useState, useMemo, createContext, Suspense } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";
import { axiosURL } from "@/utils/axios";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function Home() {
    const param = useSearchParams();
    const router = useRouter();
    const [openDrawer, setOpenDrawer] = useState(false);
    const [currentView, setCurrentView] = useState(0);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [dbData, setDbData] = useState([]);
    const [displayQuote, setDisplayQuote] = useState(false);
    const [loadingData, setLoadingData] = useState(true);
    const [searchQuery, setSearchQuery] = useState("all");
    const [selectedProduct, setSelectedProduct] = useState({});
    
    const Context = createContext({ name: 'Default' });
    const [api, contextHolder] = notification.useNotification();

    const openNotification = (message) => {
        api.info({
            message: "",
            description: <Context.Consumer>{() => message}</Context.Consumer>,
        });
    };

    const contextValue = useMemo(() => ({ name: 'Ant Design' }), []);

    useEffect(() => {
        const handleFetchProducts = async () => {
            try {
                setLoadingData(true);
                const response = await axiosURL("/api/v1/");
                const dbtest = response.data.data;
                let query = param.get("query");
                const rand = dbtest.length > 8 ? Math.trunc(Math.random() * (dbtest.length - 8)) : 0;
                setProducts(dbtest);
                setFilteredProducts(query === "all" ? dbtest : dbtest.filter((product) => product?.category?.replaceAll(" ", "-").toLowerCase() === query?.replaceAll(" ", "-").toLowerCase()));
                setSearchQuery(query || "all");
                setDbData(dbtest.slice(rand, rand + 8));
            } catch (error) {
                openNotification('An error occurred while fetching products. Please reload to try again');
            } finally {
                setLoadingData(false);
            }
        };
        handleFetchProducts();
    }, [param]);

    const handleProductsFilter = (query) => {
        const formattedQuery = query.replaceAll(" ", "-");
        setSearchQuery(formattedQuery);
        router.push(`?query=${formattedQuery}`, { scroll: false });
        setFilteredProducts(query === "all" ? products : products.filter((product) => product?.category?.replaceAll(" ", "-").toLowerCase() === formattedQuery.toLowerCase()));
    };

    const { language } = useLanguage();
    const t = translations[language].home;

    const toggleModalDisplay = () => setOpenDrawer(!openDrawer);
    const toggleQuoteModal = () => { setDisplayQuote(true); setOpenDrawer(false); };
    const toggleQuoteController = () => setDisplayQuote(false);

    const items = [
        { key: '1', label: <div onClick={() => handleProductsFilter("all")} className="cursor-pointer">{t.all_products}</div> },
        { key: '2', label: <div onClick={() => handleProductsFilter("food and oils")} className="cursor-pointer">{t.food_products}</div> },
        { key: '3', label: <div onClick={() => handleProductsFilter("agro crops")} className="cursor-pointer">{t.agro_products}</div> },
        { key: '4', label: <div onClick={() => handleProductsFilter("livestock")} className="cursor-pointer">{t.livestock_products}</div> },
        { key: '5', label: <div onClick={() => handleProductsFilter("industrial material and chemical")} className="cursor-pointer">{t.industrial_products}</div> }
    ];

    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <DisplayLayout displayQuote={displayQuote} toggleQuoteController={toggleQuoteController}>
                    <Context.Provider value={contextValue}>
                        {contextHolder}
                        <div className="bg-black h-[16rem] md:h-[20rem] px-5 md:px-20 w-full relative">
                            <h3 className="text-white text-xl md:text-3xl font-bold absolute bottom-16 md:bottom-24">
                                {t.page_title}
                            </h3>
                        </div>
                        <div className="w-full flex flex-col md:grid grid-cols-1/3 px-5 md:px-20 pt-20 md:pt-32 pb-32">
                            <div className="hidden md:block">
                                <h5 className="mb-6 tracking-wide text-lg font-bold">Filter:</h5>
                                <ul className="flex flex-col gap-6">
                                    {items.map(item => <li key={item.key} onClick={item.label.props.onClick} className="cursor-pointer text-base">{item.label.props.children}</li>)}
                                </ul>
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-xl md:text-2xl font-bold">{t[searchQuery.replaceAll("-", "_")] || t.all_products}</h3>
                                    <div className="block md:hidden">
                                        <Dropdown menu={{ items }}>
                                            <IoFilter className="text-3xl" />
                                        </Dropdown>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 gap-y-10 md:gap-10">
                                    {loadingData ?
                                        new Array(4).fill(0).map((_, index) => (
                                            <Skeleton.Image key={index} style={{ height: "15rem", width: "100%", marginBottom: 20 }} active />
                                        )) :
                                        filteredProducts.map((product, index) => (
                                            <div className="cursor-pointer" key={index}>
                                                <Link href={`/products/${(JSON.parse(product?.translation))[language]?.name}/${product.id}`}>
                                                    <img src={`${process.env.NEXT_PUBLIC_LIVE_URL}${product?.image}`} alt={(JSON.parse(product.translation))[language]?.name} className="w-full h-[12rem] md:h-[15rem] rounded-l object-cover" />
                                                    <h4 className="text-base md:text-lg font-medium mt-2 md:mt-5">{(JSON.parse(product.translation))[language]?.name}</h4>
                                                </Link>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </Context.Provider>
                </DisplayLayout>
            </Suspense>
        </div>
    );
}
