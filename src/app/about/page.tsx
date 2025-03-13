'use client';

import DisplayLayout from "@/components/layout";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";
import { Divider } from "antd";
import { TbTarget } from "react-icons/tb";
import { FaEye } from "react-icons/fa";


export default function Home() {
    const { language } = useLanguage();
    const t = translations[language].about;
    return (
        <div>
            <DisplayLayout>
                <>
                    <div className="bg-black h-[16rem] md:h-[20rem] px-5 md:px-20 w-full relative">
                        <h3 className="text-white text-xl md:text-3xl font-bold absolute bottom-16 md:bottom-24">
                            {
                                language === "en" ?
                                    "Who We Are" :
                                    language === "ru" ?
                                        "Кто мы" :
                                        language === "fr" ?
                                            "Qui nous sommes" :
                                            "من نحن"
                            }
                        </h3>
                    </div>
                    <div className="pt-20 md:pt-28 mb-32">
                        <div className="px-5 md:px-0 md:w-[60%] mx-auto">
                            <h4 className="text-xl md:text-2xl mb-5 font-bold leading-relaxed md:leading-relaxed">
                                {t.story}
                            </h4>
                            <div className="w-full">
                                <img src="/abt.jpg" alt="novatradar" className="h-[16rem] md:h-[30rem] w-full object-fit object-cover rounded-lg" />
                            </div>
                            <div className="flex flex-col gap-10 mt-10">
                                <div>
                                    <p className="text-base leading-loose">
                                        {t.sect1}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-base leading-loose">
                                        {t.sect2}
                                    </p>
                                </div>
                                <div>
                                    <Divider orientation="left" plain>{t.head1}</Divider>
                                    <p className="text-base leading-loose">
                                        {t.sect3}
                                    </p>
                                    <ul className="flex flex-col mt-5 gap-5">
                                        <li>- {t.list1}</li>
                                        <li>- {t.list2}</li>
                                        <li>- {t.list3}</li>
                                    </ul>
                                </div>
                                <div>
                                    <Divider orientation="left" plain>{t.head2}</Divider>
                                    <p className="text-base leading-loose">
                                        {t.sect4}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-base leading-loose">
                                        {t.sect5}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-base leading-loose">
                                        {t.sect6}
                                    </p>
                                </div>
                                <div className="flex flex-col md:grid grid-cols-2 gap-4 mt-5">
                                    <div className="border- border-solid border-2 p-4 rounded-xl">
                                        <TbTarget className="text-4xl text-center mx-auto mb-5" />
                                        <h4 className="text-center font-bold text-xl mb-2">{t.missionTitle}</h4>
                                        <p className="text-base leading-loose text-center">
                                            {t.mission}
                                        </p>
                                    </div>
                                    <div className="border- border-solid border-2 p-4 rounded-xl">
                                        <FaEye className="text-4xl text-center mx-auto mb-5" />
                                        <h4 className="text-center font-bold text-xl mb-2">{t.visionTitle}</h4>
                                        <p className="text-base leading-loose text-center">
                                            {t.vision}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/*

                                <p className="leading-loose">
                                    {t.sect2}
                                </p>

                                <p className="leading-loose">
                                    {t.sect3}
                                </p>

                                <p className="leading-loose">
                                    {t.sect4}
                                </p>

                                <p className="leading-loose">
                                    {t.sect5}
                                </p>
                            </div> */}
                        </div>
                    </div>
                </>
            </DisplayLayout>
        </div>
    );
}
