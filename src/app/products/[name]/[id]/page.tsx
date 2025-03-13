
'use client';

import DisplayLayout from "@/components/layout";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";
import { Skeleton, notification } from "antd";
import { TbTarget } from "react-icons/tb";
import { FaEye } from "react-icons/fa";
import React, { useState, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import { axiosURL } from "@/utils/axios";
import Link from "next/link";

interface ProductInterface {
  translation: any;
  image: string;
  name: string;
  id: string;
}

export default function ProductDetail() {

  const { language } = useLanguage();
  const [displayQuote, setDisplayQuote] = useState(false);
  const path = usePathname();
  const [loadingData, setLoadingData] = useState(true);
  const Context = React.createContext({ name: 'Default' });
  const [product, setProduct] = useState<ProductInterface>({
    translation: {
    },
    image: "",
    name: "",
    id: ""
  });
  const [products, setProducts] = useState<ProductInterface[]>([{
    translation: {
    },
    image: "",
    name: "",
    id: ""
  }]);

  const [api, contextHolder] = notification.useNotification();

  const openNotification = (message: string) => {
    api.info({
      message: ``,
      description: <Context.Consumer>{() => message}</Context.Consumer>,
    });
  };

  const contextValue = useMemo(() => ({ name: 'Ant Design' }), []);

  useEffect(() => {
    const id = path.split("/")[3];
    const handleFetchProduct = () => {
      setLoadingData(true);
      axiosURL(`/api/v1/${id}`)
        .then(data => {
          const dbtest = data.data.data;
          if (dbtest.product) {
            setLoadingData(false);
            setProduct(dbtest.product);
            setProducts(dbtest.products)
          } else {
            openNotification('Product not found. Please go back to try again');
          }
          // setDbData(dbtest.slice(rand, rand + 8));
        })
        .catch((err) => {
          // setLoadingData(false);
          openNotification('An error occurred while fetching products. Please reload to try again')
        })
    }
    handleFetchProduct();
  }, []);

  const t = translations[language].home;
  const toggleQuoteModal = () => {
    setDisplayQuote(true);
  }
  const toggleQuoteController = () => {
    setDisplayQuote(false);
  }

  return (
    <div>
      <DisplayLayout displayQuote={displayQuote} toggleQuoteController={toggleQuoteController} productName={product?.name ? (JSON.parse(product?.translation))[language]?.name : ""}>
        <Context.Provider value={contextValue}>
          {contextHolder}
          <>
            <>
              <div className="pt-40 md:pt-44 mb-32 px-5 md:px-20">
                <div className="flex flex-col md:grid grid-cols-2 gap-10 md:gap-20">
                  <div>
                    {
                      loadingData ?
                        <Skeleton.Image style={{ height: "100%", width: "100%", minHeight: "15rem" }} active={true} />
                        :
                        <img src={`${process.env.NEXT_PUBLIC_LIVE_URL}${product?.image}`} alt={(JSON.parse(product?.translation))[language]?.name} className="w-full h-full rounded-lg object-fit object-cover max-h-[28rem]" />
                    }
                  </div>
                  <div>
                    {
                      loadingData ?
                        <div>
                          <Skeleton.Button style={{ width: "60%", marginBottom: 20 }} active={true} />
                          <Skeleton.Button style={{ height: "15rem", width: "100%", marginBottom: 20 }} active={true} />
                          <Skeleton.Button style={{ height: "2rem", width: "10%" }} active={true} />
                        </div>
                        :
                        <div>
                          <h3 className="font-bold text-2xl mb-3">{(JSON.parse(product.translation))[language]?.name}</h3>
                          <p className="text-sm md:text-base leading-loose">
                            {(JSON.parse(product.translation))[language]?.description}
                          </p>
                          <div className="mt-7">
                            <div className="grid grid-cols-2 md:items-center gap-10">
                              <div>
                                <p className="text-sm mb-2">{t.modal_storage}</p>
                                <p className="text-base">{(JSON.parse(product.translation))[language]?.storage}</p>
                                {/* <p className="text-base">{selectedProduct.translation[language ? language : "en"]?.storage}</p> */}
                              </div>
                              <div>
                                <p className="text-sm mb-2">{t.modal_shelf}</p>
                                <p className="text-base">{(JSON.parse(product.translation))[language]?.shelfLife}</p>
                                {/* <p className="text-base">{selectedProduct.translation[language ? language : "en"]?.shelfLife}</p> */}
                              </div>
                              {/* <div>
                                                    <p className="text-sm mb-2">{t.modal_type}</p>
                                                    <p className="text-base">{(JSON.parse(product.translation))[language]?.name}</p>
                                                <div>
                                                    <p className="text-sm mb-2">{t.modal_moisture}</p>
                                                    <p className="text-base">{(JSON.parse(product.translation))[language]?.name}</p>
                                                </div> */}
                            </div>
                            <div className="mt-10">
                              <p className="text-sm mb-2">{t.modal_packaging}</p>
                              <p className="text-base">{(JSON.parse(product.translation))[language]?.packaging}</p>
                              {/* <p className="text-base">{selectedProduct.translation[language ? language : "en"]?.storage}</p> */}
                            </div>

                            <button onClick={toggleQuoteModal} className="w-full block text-sm md:text-sm bg-primary text-black py-5 px-10 rounded-lg mt-5 md:mt-10 text-base block">{t.modal_quote}</button>
                          </div>
                        </div>
                    }
                  </div>
                </div>

                <div className="mt-20">
                  <h4 className="text-xl md:text-2xl mb-2">{t.similar}</h4>
                  <div className="flex flex-col md:grid grid-cols-4 gap-10">
                    {
                      loadingData ?
                        new Array(4).fill(0).map((_id, index) => (
                          <Skeleton.Image key={index} style={{ height: "15rem", width: "100%", marginBottom: 20 }} active={true} />
                        ))
                        :
                        products.map((product, index) => (
                          <div className="cursor-pointer" key={index}>
                            <Link href={`/products/${(JSON.parse(product?.translation))[language]?.name}/${product.id}`}>
                              {/* <div className="h-[12rem] md:h-[18rem] w-full bg-[#F1F1F1]"></div> */}
                              {/* <div className="h-[12rem] md:h-[18rem] w-full bg-[#F1F1F1]"></div> */}
                              <img src={`${process.env.NEXT_PUBLIC_LIVE_URL}${product?.image}`} alt={(JSON.parse(product.translation))[language]?.name} className="w-full h-[12rem] md:h-[18rem] rounded-l object-fit object-cover" />
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
            </>
          </>
        </Context.Provider>
      </DisplayLayout>
    </div >
  );
}