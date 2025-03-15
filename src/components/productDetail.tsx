'use client';

import DisplayLayout from '@/components/layout';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import { Skeleton, notification } from 'antd';
import { useState, useEffect, createContext } from 'react';
import { useParams } from 'next/navigation';
import { axiosURL } from '@/utils/axios';
import Link from 'next/link';
import Image from 'next/image';

// Define your product interface
interface ProductInterface {
    translation: any;
    image: string;
    name: string;
    id: string;
}

// Create a notification context
const NotificationContext = createContext({ name: 'Default' });

// const ProductDetail = ({ productData }) => {
const ProductDetail = () => {
    const { language } = useLanguage();
    const { id, name } = useParams(); // Get product ID and name from URL params
    const [displayQuote, setDisplayQuote] = useState(false);
    const [loadingData, setLoadingData] = useState(true);
    const [product, setProduct] = useState<ProductInterface | null>({
        translation: "",
        image: "",
        name: "",
        id: ""
    });
    const [products, setProducts] = useState<ProductInterface[]>([]);
    const [api, contextHolder] = notification.useNotification();

    const openNotification = (message: string) => {
        api.info({
            message: '',
            description: <NotificationContext.Consumer>{() => message}</NotificationContext.Consumer>,
        });
    };

    const fetchProduct = async () => {
        try {
            setLoadingData(true);
            const response = await axiosURL(`/api/v1/${id}`); // Modify the endpoint if necessary
            const data = response.data.data;

            if (data.product) {
                setProduct(data.product);
                setProducts(data.products);
            } else {
                openNotification('Product not found. Please go back to try again');
            }
        } catch (error) {
            openNotification('An error occurred while fetching products. Please reload to try again');
        } finally {
            setLoadingData(false);
        }
    };

    useEffect(() => {
        if (id) fetchProduct();
    }, [id]);

    const t = translations[language].home;
    const toggleQuoteModal = () => setDisplayQuote(true);
    const toggleQuoteController = () => setDisplayQuote(false);

    return (
        <DisplayLayout
            displayQuote={displayQuote}
            toggleQuoteController={toggleQuoteController}
            productName={product ? JSON.parse(product.translation)[language]?.name : ''}
        >
            <NotificationContext.Provider value={{ name: 'Ant Design' }}>
                {contextHolder}
                <div className="pt-40 md:pt-44 mb-32 px-5 md:px-20">
                    <div className="flex flex-col md:grid grid-cols-2 gap-10 md:gap-20">
                        {/* Product Image */}
                        <div>
                            {loadingData ? (
                                <Skeleton.Image style={{ height: '100%', width: '100%', minHeight: '15rem' }} active />
                            ) : (
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_LIVE_URL}${product?.image}`}
                                    alt={product ? JSON.parse(product.translation)[language]?.name : ''}
                                    className="w-full h-full rounded-lg object-cover max-h-[28rem]"
                                />
                            )}
                        </div>

                        {/* Product Details */}
                        <div>
                            {loadingData ? (
                                <>
                                    <Skeleton.Button style={{ width: '60%', marginBottom: 20 }} active />
                                    <Skeleton.Button style={{ height: '15rem', width: '100%', marginBottom: 20 }} active />
                                    <Skeleton.Button style={{ height: '2rem', width: '10%' }} active />
                                </>
                            ) : (
                                product && (
                                    <>
                                        <h3 className="font-bold text-2xl mb-3">{JSON.parse(product.translation)[language]?.name}</h3>
                                        <p className="text-sm md:text-base leading-loose">
                                            {JSON.parse(product.translation)[language]?.description}
                                        </p>

                                        <div className="mt-7 grid grid-cols-2 md:items-center gap-10">
                                            <div>
                                                <p className="text-sm mb-2">{t.modal_storage}</p>
                                                <p className="text-base">{JSON.parse(product.translation)[language]?.storage}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm mb-2">{t.modal_shelf}</p>
                                                <p className="text-base">{JSON.parse(product.translation)[language]?.shelfLife}</p>
                                            </div>
                                        </div>

                                        <div className="mt-10">
                                            <p className="text-sm mb-2">{t.modal_packaging}</p>
                                            <p className="text-base">{JSON.parse(product.translation)[language]?.packaging}</p>
                                        </div>

                                        <button
                                            onClick={toggleQuoteModal}
                                            className="w-full block text-sm md:text-sm bg-primary text-black py-5 px-10 rounded-lg mt-5 md:mt-10 text-base"
                                        >
                                            {t.modal_quote}
                                        </button>
                                    </>
                                )
                            )}
                        </div>
                    </div>

                    {/* Similar Products Section */}
                    <div className="mt-20">
                        <h4 className="text-xl md:text-2xl mb-2">{t.similar}</h4>
                        <div className="flex flex-col md:grid grid-cols-4 gap-10">
                            {loadingData
                                ? new Array(4).fill(0).map((_id, index) => (
                                    <Skeleton.Image key={index} style={{ height: '15rem', width: '100%', marginBottom: 20 }} active />
                                ))
                                : products.map((product, index) => (
                                    <div className="cursor-pointer" key={index}>
                                        <Link href={`/products/${JSON.parse(product.translation)[language]?.name}/${product.id}`}>
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_LIVE_URL}${product.image}`}
                                                alt={JSON.parse(product.translation)[language]?.name}
                                                className="w-full h-[12rem] md:h-[18rem] rounded-lg object-cover"
                                            />
                                            <div className="mt-2 md:mt-5">
                                                <h4 className="text-base md:text-lg font-medium">
                                                    {JSON.parse(product.translation)[language]?.name}
                                                </h4>
                                                <p className="mt-1 md:mt-3 text-black opacity-80">
                                                    <span className="text-sm md:text-lg">{t?.details}</span>
                                                </p>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </NotificationContext.Provider>
        </DisplayLayout>
    );
};

export default ProductDetail;
