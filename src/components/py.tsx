'use client';

import Image from "next/image";

import Big1 from "@/assets/images/big1.jpg";
import Big2 from "@/assets/images/big2.jpg";
import Big3 from "@/assets/images/big3.jpg";

import { BsArrowUpRightCircle } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import DisplayLayout from "@/components/layout";
import Link from "next/link";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";
import { Modal, Tabs } from "antd";
import { useEffect, useState } from "react";
import db from "@/utils/db.json";

export default function Homepage() {

  const [openDrawer, setOpenDrawer] = useState(false);
  const [products, setProducts] = useState<any>([]);


  useEffect(() => {
    const dbtest = db;
    console.log(dbtest)
    setProducts(dbtest);
  }, []);

  const { language } = useLanguage();
  const t = translations[language].home;


  const toggleModalDisplay = () => setOpenDrawer(!openDrawer);

  return (
    <div>
      <DisplayLayout>
        <>
          <div className="hero h-[650px] md:h-screen bg-black flex items-cente px-5 md:px-20">
            <div className="md:w-[80%] flex items-center justify-center mx-auto text-center">
              <div>
                {/* <div className="px-7 py-3 mb-5 font-medium text-sm bg-white rounded-full w-max">See How We Impact</div> */}
                <h3 className="md:w-[80%] mx-auto text-white text-center text-4xl md:text-6xl font-medium leading-tight md:leading-tight mb-3 md:mb-5">{t.heroTitle}</h3>
                <p className="md:w-[60%] mx-auto text-sm md:text-lg mb-8 md:leading-loose leading-loose text-white">
                  {t.heroBody}
                </p>
                <Link href="/about" className="flex items-center gap-5 mx-auto text-sm md:text-base w-max bg-primary rounded-full py-1 px-2 pl-5 text-center text-black font-medium">
                  {t.heroButton}
                  <span className="size-14 bg-black rounded-full text-white flex items-center justify-center"><FaArrowRightLong className="text-xl" /></span>
                </Link>
              </div>
            </div>
          </div>
          <div className="px-5 md:px-20 mt-24 mb-14">
            <div className="w-full">
              <div className="">
                {/* <div className="h-[12rem] md:h-[20rem] mb-14 rounded-3xl w-full bg-[#F1F1F1]"></div> */}
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl md:text-2xl font-bold">Our Products</h3>
                  <div className="">
                    <Link href="/products" className="text-black text-lg border-b-2 border-solid border-black">View All Products</Link>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 gap-y-10 md:gap-10">
                  {
                    products.map((products: string, id: string) => (
                      <div className="" key={id} onClick={toggleModalDisplay}>
                        <div className="h-[12rem] md:h-[18rem] w-full bg-[#F1F1F1]"></div>
                        <div className="mt-2 md:mt-5">
                          {/* <h4 className="text-base md:text-lg font-medium">{products.name}</h4> */}
                          <p className="mt-1 md:mt-3 text-black opacity-80">
                            <span className="text-sm md:text-lg">View Details</span>
                          </p>
                        </div>
                      </div>
                    ))
                  }
                  <div className="" onClick={toggleModalDisplay}>
                    <div className="h-[12rem] md:h-[18rem] w-full bg-[#F1F1F1]"></div>
                    <div className="mt-2 md:mt-5">
                      <h4 className="text-base md:text-lg font-medium">Osopiro Rice</h4>
                      <p className="mt-1 md:mt-3 text-black opacity-80">
                        <span className="text-sm uppercas">NGN</span>
                        <span className="text-sm md:text-lg">15,000.00</span>
                      </p>
                    </div>
                  </div>
                  <div className="" onClick={toggleModalDisplay}>
                    <div className="h-[12rem] md:h-[18rem] w-full bg-[#F1F1F1]"></div>
                    <div className="mt-2 md:mt-5">
                      <h4 className="text-base md:text-lg font-medium">Osopiro Rice</h4>
                      <p className="mt-1 md:mt-3 text-black opacity-80">
                        <span className="text-sm uppercas">NGN</span>
                        <span className="text-sm md:text-lg">15,000.00</span>
                      </p>
                    </div>
                  </div>
                  <div className="" onClick={toggleModalDisplay}>
                    <div className="h-[12rem] md:h-[18rem] w-full bg-[#F1F1F1]"></div>
                    <div className="mt-2 md:mt-5">
                      <h4 className="text-base md:text-lg font-medium">Osopiro Rice</h4>
                      <p className="mt-1 md:mt-3 text-black opacity-80">
                        <span className="text-sm uppercas">NGN</span>
                        <span className="text-sm md:text-lg">15,000.00</span>
                      </p>
                    </div>
                  </div>
                  <div className="" onClick={toggleModalDisplay}>
                    <div className="h-[12rem] md:h-[18rem] w-full bg-[#F1F1F1]"></div>
                    <div className="mt-2 md:mt-5">
                      <h4 className="text-base md:text-lg font-medium">Osopiro Rice</h4>
                      <p className="mt-1 md:mt-3 text-black opacity-80">
                        <span className="text-sm uppercas">NGN</span>
                        <span className="text-sm md:text-lg">15,000.00</span>
                      </p>
                    </div>
                  </div>
                  <div className="" onClick={toggleModalDisplay}>
                    <div className="h-[12rem] md:h-[18rem] w-full bg-[#F1F1F1]"></div>
                    <div className="mt-2 md:mt-5">
                      <h4 className="text-base md:text-lg font-medium">Osopiro Rice</h4>
                      <p className="mt-1 md:mt-3 text-black opacity-80">
                        <span className="text-sm uppercas">NGN</span>
                        <span className="text-sm md:text-lg">15,000.00</span>
                      </p>
                    </div>
                  </div>
                  <div className="" onClick={toggleModalDisplay}>
                    <div className="h-[12rem] md:h-[18rem] w-full bg-[#F1F1F1]"></div>
                    <div className="mt-2 md:mt-5">
                      <h4 className="text-base md:text-lg font-medium">Osopiro Rice</h4>
                      <p className="mt-1 md:mt-3 text-black opacity-80">
                        <span className="text-sm uppercas">NGN</span>
                        <span className="text-sm md:text-lg">15,000.00</span>
                      </p>
                    </div>
                  </div>
                  <div className="" onClick={toggleModalDisplay}>
                    <div className="h-[12rem] md:h-[18rem] w-full bg-[#F1F1F1]"></div>
                    <div className="mt-2 md:mt-5">
                      <h4 className="text-base md:text-lg font-medium">Osopiro Rice</h4>
                      <p className="mt-1 md:mt-3 text-black opacity-80">
                        <span className="text-sm uppercas">NGN</span>
                        <span className="text-sm md:text-lg">15,000.00</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="flex flex-col md:grid grid-cols-1/2 mt-14 gap-5 md:gap-20 items-start">
              <div className="hidden md:flex gap-2 items-center">
                <div className="size-2 bg-black rounded-full"></div>
                <p className="w-full md:leading-relaxed leading-relaxed text-base md:text-xl">{t.belowTitle}?</p>
              </div>
              <div>
                <h4 className="w-[80%] md:w-full text-xl md:text-4xl md:w-[50%] mb-2 md:mb-4 leading-normal md:leading-normal font-bold">
                  {t.belowBody}
                </h4>
                <p className="text-sm md:text-lg md:leading-loose leading-loose">
                  {t.belowTag}
                </p>
                <Link href="" className="hidden md:flex mt-10 flex items-center gap-5 text-sm md:text-base w-max bg-primary rounded-full py-1 px-2 pl-5 text-center text-black font-medium">
                  {t.belowButton}
                  <span className="size-14 bg-black rounded-full text-white flex items-center justify-center"><FaArrowRightLong className="text-xl" /></span>
                </Link>
              </div>
            </div>
            <div className="flex flex-col md:grid grid-cols-1/2 mt-7 md:mt-14 gap-5 md:gap-10 items-start">
              <Image src={Sub1} alt="nkwn" className="h-[20rem] md:h-[25rem] rounded-2xl object-fit object-cover" />
              <Image src={Sub2} alt="nkwn" className="hidden md:block h-[20rem] md:h-[25rem] rounded-2xl object-fit object-cover" />
            </div> */}
          </div>
          <div className="bg-black mt-20 md:mt-32 px-5 md:px-20 py-20 md:py-32">
            <div className="md:w-[75%]">
              <div className="px-7 md:px-5 py-3 mb-5 font-medium text-sm bg-primary rounded-full w-max md:mx-0">{t.blackTag}</div>
              <h3 className="text-white text-2xl md:text-5xl font-medium leading-snug md:leading-snug mb-5">{t.blackTitle}</h3>
              <p className="md:w-[90%] text-sm md:text-lg md:leading-loose leading-loose text-white opacity-80">
                {t.blackStory}
              </p>
            </div>
            <div className="mt-10 md:mt-20 flex flex-col md:grid grid-cols-3 gap-10">
              <div>
                {/* <div className="h-[20rem] md:h-[25rem] bg-white opacity-60 mb-5"></div> */}
                <Image src={Big1} alt="nkwn" className="h-[20rem] md:h-[25rem] mb-5 object-fit object-cover rounded-2xl" />
                <p className="text-white opacity-80 mb-2">Our Story</p>
                <h4 className="text-xl md:text-2xl text-white mb-2 font-medium">How We Impact</h4>
                <p className="text-white opacity-80 leading-loose md:leading-loose text-sm">
                  Sura Vision - is a trailblazing investment firm that envisions a future of innovation and transformative impact.
                </p>
                <button className="mt-5 rounded-full bg-white text-sm py-4 px-8 flex items-center gap-3">View More <BsArrowUpRightCircle className="text-xl" /></button>
              </div>
              <div>
                <Image src={Big2} alt="nkwn" className="h-[20rem] md:h-[25rem] mb-5 object-fit object-cover rounded-2xl" />
                <p className="text-white opacity-80 mb-2">Our Story</p>
                <h4 className="text-xl md:text-2xl text-white mb-2 font-medium">How We Impact</h4>
                <p className="text-white opacity-80 leading-loose md:leading-loose text-sm">
                  Sura Vision - is a trailblazing investment firm that envisions a future of innovation and transformative impact.
                </p>
                <button className="mt-5 rounded-full bg-white text-sm py-4 px-8 flex items-center gap-3">View More <BsArrowUpRightCircle className="text-xl" /></button>
              </div>
              <div>
                <Image src={Big3} alt="nkwn" className="h-[20rem] md:h-[25rem] mb-5 object-fit object-cover rounded-2xl" />
                <p className="text-white opacity-80 mb-2">Our Story</p>
                <h4 className="text-xl md:text-2xl text-white mb-2 font-medium">How We Impact</h4>
                <p className="text-white opacity-80 leading-loose md:leading-loose text-sm">
                  Sura Vision - is a trailblazing investment firm that envisions a future of innovation and transformative impact.
                </p>
                <button className="mt-5 rounded-full bg-white text-sm py-4 px-8 flex items-center gap-3">View More <BsArrowUpRightCircle className="text-xl" /></button>
              </div>
            </div>
          </div>
          <div className="text-center md:text-left mb-32 mt-20 md:mt-32 px-5 md:px-20 flex flex-col-reverse md:grid md:gap-14 grid-cols-2">
            <div>
              <div>
                <h3 className="text-2xl md:text-5xl md:w-[90%] font-bold mb-3 md:leading-tight leading-tight capitalise">{t.bottomTitle}</h3>
                <p className="text-sm md:text-base md:leading-loose leading-loose">
                  {t.bottomStory}
                </p>
                <div className="mt-12 flex flex-col md:grid grid-cols-2 gap-10">
                  <div>
                    <div className="size-20 mx-auto md:mx-0 mb-4 rounded-full bg-[#CFF34E]"></div>
                    <h4 className="text-3xl font-worksans font-medium mb-2">50%</h4>
                    <p className="font-[500] md:font-normal text-sm md:leading-loose leading-loose">
                      Sura Vision - is a trailblazing investment firm that envisions a future of innovation and transformative impact.
                    </p>
                  </div>
                  <div>
                    <div className="size-20 mx-auto md:mx-0 mb-4 rounded-full bg-[#CFF34E]"></div>
                    <h4 className="text-3xl font-worksans font-medium mb-2">50%</h4>
                    <p className="font-[500] md:font-normal text-sm md:leading-loose leading-loose">
                      Sura Vision - is a trailblazing investment firm that envisions a future of innovation and transformative impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full w-full br-img"></div>
          </div>
          <div className="px-20 grid grid-cols-2 gap-20 mb-32">
            <div>
              <h3 className="text-5xl font-bold mb-5 leading-tight">Frequently Asked Questions</h3>
              <p className="text-lg text-black leading-relaxed">
                Sura Vision - is a trailblazing investment firm that envisions a future of innovation and transformative impact.
              </p>
            </div>
            <div>
              <div className="border-y-2 py-7 border-[#EDEFF3] border-solid">
                <div className="top mb-5 flex items-center justify-between">
                  <h5 className="text-xl font-bold">How do I buy your products?</h5>
                  <span className="text-xl font-bold">-</span>
                </div>
                <div>
                  <p className="text-base opacity-80 text-black leading-loose">
                    NovaTradar is a pioneering platform dedicated to sustainable farming solutions that empower farmers and businesses alike. Our journey began with a vision to transform agriculture through innovative.
                  </p>
                </div>
              </div>
              <div className="border-b-2 py-7 border-[#EDEFF3] border-solid">
                <div className="top flex items-center justify-between">
                  <h5 className="text-xl font-bold">How do I buy your products?</h5>
                  <span className="text-xl font-bold">+</span>
                </div>
              </div>
              <div className="border-b-2 py-7 border-[#EDEFF3] border-solid">
                <div className="top flex items-center justify-between">
                  <h5 className="text-xl font-bold">How do I buy your products?</h5>
                  <span className="text-xl font-bold">+</span>
                </div>
              </div>
              <div className="border-b-2 py-7 border-[#EDEFF3] border-solid">
                <div className="top flex items-center justify-between">
                  <h5 className="text-xl font-bold">How do I buy your products?</h5>
                  <span className="text-xl font-bold">+</span>
                </div>
              </div>
            </div>
          </div>
          <Modal open={openDrawer} onClose={toggleModalDisplay} onCancel={toggleModalDisplay} footer={null}>
            <div className="text-center">
              <h4 className="mb-2 text-2xl font-bold">Buy bulk maize for exports</h4>
            </div>
            <div className="h-[15rem] w-full bg-black rounded-xl">

            </div>
            <div className="mt-5">
              <Tabs type="card">
                <Tabs.TabPane tab="Description" key={1}>
                  <p className="text-sm md:leading-loose leading-loose">
                    Get premium yellow and white Maize
                  </p>
                  <p className="text-sm md:leading-loose leading-loose">
                    Typical smell characteristic of natural grain, free from strange odors, with a bright yellow or white color depending on the variety, and free from foreign matter. NON-GMO.
                  </p>
                  <p className="text-sm md:leading-loose leading-loose">
                    Our maize is carefully selected to ensure top quality, making it ideal for human consumption, animal feed, and industrial use. It is rich in essential nutrients, including carbohydrates, fiber, and vitamins.
                  </p>
                  <p className="text-sm md:leading-loose leading-loose">
                    Maize is a versatile grain used in various food products, from flour and cereals to snacks and beverages.
                  </p>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Specifications" key={2}>

                </Tabs.TabPane>
              </Tabs>
              <div className="flex items-center justify-center">
                <button className="text-sm md:text-base bg-primary text-black py-5 px-12 rounded-lg md:mt-5 text-base block">Get a Quote</button>
              </div>
            </div>
          </Modal>
        </>
      </DisplayLayout>
    </div>
  );
}
