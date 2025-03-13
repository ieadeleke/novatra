
"use client";

import db from "@/utils/db.json";
import DisplayLayout from "@/components/layout";
import { IoFilter } from "react-icons/io5";
import type { MenuProps } from 'antd';
import { Dropdown, Skeleton } from 'antd';
import React, { useEffect, useState, useMemo } from "react";
import { Modal, Tabs, notification } from "antd";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";
import { axiosURL } from "@/utils/axios";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";


function Products() {

  const param = useSearchParams();
  const router = useRouter();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [, setRandomCount] = useState<number>(0);
  const [currentView, setCurrentView] = useState<number>(0);
  const [products, setProducts] = useState<any>([]);
  const [filteredProducts, setFilteredProducts] = useState<any>([]);
  const [dbData, setDbData] = useState<any>([]);
  const [displayQuote, setDisplayQuote] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  const [searchQuery, setSearchQuery] = useState("all");

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

  useEffect(() => {
    const handleFetchProducts = () => {
      setLoadingData(true);
      axiosURL("/api/v1/")
        .then(data => {
          let query = param.get("query");
          const dbtest = data.data.data;
          const rand = dbtest.length > 8 ? Math.trunc(Math.random() * (dbtest.length - 8)) : 0;
          setRandomCount(rand);
          setProducts(dbtest);
          if (query === "all") {
            setFilteredProducts(dbtest);
          } else {
            let search = dbtest.filter((product: any) => {
              if (product?.category?.replaceAll(" ", "-").toLowerCase() === query?.replaceAll(" ", "-")?.toLowerCase()) return product
            })
            setFilteredProducts(search);
          }
          setSearchQuery(query || "");
          setDbData(dbtest.slice(rand, rand + 8));
          setLoadingData(false);
        })
        .catch(() => {
          setLoadingData(false);
          openNotification('An error occurred while fetching products. Please reload to try again')
        })
    }
    handleFetchProducts();
  }, [])

  const handleProductsFilter = (query: string) => {
    setSearchQuery(query.replaceAll(" ", "-"));
    const params = new URLSearchParams();
    params.append("query", query.replaceAll(" ", "-"));
    router.push(`?${params.toString()}`, { scroll: false });
    if (query === "all") {
      setFilteredProducts(products);
    } else {
      let search = products.filter((product: any) => {
        if (product?.category?.replaceAll(" ", "-").toLowerCase() === query?.replaceAll(" ", "-")?.toLowerCase()) return product
      })
      setFilteredProducts(search);
    }
  }

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

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div onClick={() => handleProductsFilter("all")} className="cursor-pointer">
          {t.all_products}
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <div onClick={() => handleProductsFilter("food and oils")} className="cursor-pointer">
          {t.food_products}
        </div>
      ),
    },
    {
      key: '3',
      label: (
        <div onClick={() => handleProductsFilter("agro crops")} className="cursor-pointer">
          {t.agro_products}
        </div>
      )
    },
    {
      key: '4',
      label: (
        <div onClick={() => handleProductsFilter("livestock")} className="cursor-pointer">
          {t.livestock_products}
        </div>
      )
    },
    {
      key: '5',
      label: (
        <div onClick={() => handleProductsFilter("industrial material and chemical")} className="cursor-pointer">
          {t.industrial_products}
        </div>
      )
    }
  ];


  return (
    <div>
      <DisplayLayout displayQuote={displayQuote} toggleQuoteController={toggleQuoteController}>
        <Context.Provider value={contextValue}>
          {contextHolder}
          <>
            <>
              <div className="bg-black h-[16rem] md:h-[20rem] px-5 md:px-20 w-full relative">
                <h3 className="text-white text-xl md:text-3xl font-bold absolute bottom-16 md:bottom-24">
                  {
                    language === "en" ?
                      "Our Products" :
                      language === "ru" ?
                        "Наши продукты" :
                        language === "fr" ?
                          "Nos produits" :
                          "منتجاتنا"
                  }
                </h3>
              </div>
              <div className="w-full flex flex-col md:grid grid-cols-1/3 px-5 md:px-20 pt-20 md:pt-32 pb-32">
                {/* <div className="w-full flex flex-col px-5 md:px-20 pt-20 md:pt-32 pb-32"> */}
                <div className="hidden md:block">
                  <h5 className="mb-6 tracking-wide text-lg font-bold">Filter:</h5>
                  <ul className="flex flex-col gap-6">
                    <li onClick={() => handleProductsFilter("all")} className="cursor-pointer text-base">{t.all_products}</li>
                    <li onClick={() => handleProductsFilter("food and oils")} className="cursor-pointer text-base">{t.food_products}</li>
                    <li onClick={() => handleProductsFilter("livestock")} className="cursor-pointer text-base">{t.livestock_products}</li>
                    <li onClick={() => handleProductsFilter("agro crops")} className="cursor-pointer text-base">{t.agro_products}</li>
                    <li onClick={() => handleProductsFilter("industrial material and chemical")} className="cursor-pointer text-base">{t.industrial_products}</li>
                  </ul>
                </div>
                <div className="">
                  {/* <div className="h-[12rem] md:h-[20rem] mb-14 rounded-3xl w-full bg-[#F1F1F1]"></div> */}
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl md:text-2xl font-bold">
                      {
                        searchQuery === "all" ? t.all_products : searchQuery === "food-and-oils" ? t.food_products : searchQuery === "livestock" ? t.livestock_products : searchQuery === "agro-crops" ? t.agro_products : t.industrial_products
                      }</h3>
                    {/* <div className="bg-black w-full py-4 flex items-center justify-center">
                                            <ul className="flex gap-4 md:grid grid-cols-2 md:text-center">
                                                <li>Food and Oils</li>
                                                <li>Food and Oils</li>
                                                <li>Food and Oils</li>
                                                <li>Food and Oils</li>
                                            </ul>
                                        </div> */}
                    <div className="block md:hidden">
                      <Dropdown menu={{ items }}>
                        <IoFilter className="text-3xl" />
                      </Dropdown>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 gap-y-10 md:gap-10">
                    {
                      loadingData ?
                        new Array(4).fill(0).map((_id, index) => (
                          <Skeleton.Image key={index} style={{ height: "15rem", width: "100%", marginBottom: 20 }} active={true} />
                        ))
                        :
                        filteredProducts.map((product: any, index: number) => (
                          <div className="cursor-pointer" key={index}>
                            <Link href={`/products/${(JSON.parse(product?.translation))[language]?.name}/${product.id}`}>
                              {/* <div className="h-[12rem] md:h-[18rem] w-full bg-[#F1F1F1]"></div> */}
                              {/* <div className="h-[12rem] md:h-[18rem] w-full bg-[#F1F1F1]"></div> */}
                              <img src={`${process.env.NEXT_PUBLIC_LIVE_URL}${product?.image}`} alt={(JSON.parse(product.translation))[language]?.name} className="w-full h-[12rem] md:h-[15rem] rounded-l object-fit object-cover" />
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
              <Modal open={openDrawer} onClose={toggleModalDisplay} onCancel={toggleModalDisplay} footer={null}>
                {
                  selectedProduct?.image &&
                  <>
                    <div className="text-center">
                      <h4 className="mb-2 text-2xl font-bold">{selectedProduct.translation[language ? language : "en"]?.name}</h4>
                    </div>
                    <img src={`https://backend.novatradar.com${selectedProduct?.image}`} alt={selectedProduct.translation[language ? language : "en"]?.name} className="w-full h-[15rem] rounded-lg object-fit object-cover" />
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
          </>
        </Context.Provider>
      </DisplayLayout>
    </div >
  );
}

export default function Home() {

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Products />
      </Suspense>
    </div >
  );
}