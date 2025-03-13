// src/app/contact/page.tsx
'use client';

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

import DisplayLayout from "@/components/layout";
import { Input, notification } from "antd";
import { Spin } from 'antd';
import React, { useMemo, useState, } from 'react';
import { axiosURL } from "@/utils/axios";
import { LoadingOutlined } from '@ant-design/icons';


const Context = React.createContext({ name: 'Default' });

export default function Contact() {

  const { language } = useLanguage();
  const t = translations[language].contact;
  const [formData, setFormData] = useState({
    fullName: "", email: "", phoneNumber: "", message: ""
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


  const handleContactUs = () => {
    let { fullName, email, phoneNumber, message } = formData;
    if (fullName && email && phoneNumber && message) {
      setSendingForm(true);
      axiosURL.post("/contact-us", {
        fullName, email, phoneNumber, message
      })
        .then(data => {
          openNotification('Mail sent successfully')
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
      <DisplayLayout>
        <Context.Provider value={contextValue}>
          {contextHolder}
          <>
            <div className="bg-black h-[16rem] md:h-[20rem] px-5 md:px-20 w-full relative">
              <h3 className="text-white text-xl md:text-3xl font-bold absolute bottom-16 md:bottom-24">
                {
                  language === "en" ?
                    "Reach Out To Us" :
                    language === "ru" ?
                      "Свяжитесь с нами" :
                      language === "fr" ?
                        "Contactez-nous" :
                        "تواصل معنا"
                }
              </h3>
            </div>
            <div className="flex flex-col md:grid grid-cols-2 px-5 md:px-20 gap-10 md:gap-20 pt-14 md:pt-32 mb-32">
              <div className="flex">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h4 className="text-2xl md:text-4xl mb-2 md:mb-3 font-black">{t.topic}</h4>
                    <p className="text-sm md:text-lg mb-7 md:mb-19 md:w-[90%] leading-loose md:leading-loose font-[500] md:font-normal">
                      {t.description}
                    </p>
                    <div className="flex flex-col md:flex-row md:items-center justify-between items-center">
                      <div>
                        <h5 className="text-sm md:text-base text-black mb-4 opacity-80">{t.support}</h5>
                        <a href="mailTo:support@novatraders.com" className="text-lg md:text-2xl font-medium">support@novatradar.com</a>
                      </div>
                      <div>
                        <h5 className="text-sm md:text-base text-black mb-4 opacity-80">{t.infoMail}</h5>
                        <a href="mailTo:info@novatraders.com" className="text-lg md:text-2xl font-medium">info@novatradar.com</a>
                      </div>
                    </div>
                    <div className="mt-7 md:mt-10 flex flex-col md:flex-row md:items-center justify-between md:w-[85%]">
                      <div>
                        <h5 className="text-sm md:text-base text-black mb-4 opacity-80">{t.phone}</h5>
                        <a href="tel:+380936018625" className="text-black text-lg md:text-xl font-medium">(+380) 936 01 8625</a>
                      </div>
                      <div>
                        <h5 className="text-sm md:text-base text-black mb-4 opacity-80">{t.whatsapp}</h5>
                        <a href="tel:+380936018625" className="text-black text-lg md:text-xl font-medium">(+380) 936 01 8625</a>
                      </div>
                    </div>
                    <div className="mt-7 md:mt-10 flex flex-col md:flex-row md:items-center justify-between md:w-[85%]">
                      <div>
                        <h5 className="text-sm md:text-base text-black mb-4 opacity-80">{t.telegram}</h5>
                        <a href="tel:+380936018625" className="text-black text-lg md:text-xl font-medium">(+380) 936 01 8625</a>
                      </div>
                      <div className="mt-7 md:mt-0">
                        <h5 className="text-black mb-4 text-sm md:text-base opacity-80">{t.location}</h5>
                        <h4 className="text-black text-lg md:text-xl font-medium">Donetsk, Ukraine.</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {/* <LanguageSwitcher /> */}
                <form action="">
                  <div className="form-group w-full mb-5">
                    <label htmlFor="firstName" className="text-sm">{t.fullName}</label>
                    <Input onChange={handleFormUpdate} name="fullName" className="px-4 border-2 border-solid border-[#F2F2F2] w-full rounded-lg py-5" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="form-group w-full mb-5">
                      <label htmlFor="email" className="text-sm">{t.email}</label>
                      <Input onChange={handleFormUpdate} type="email" name="email" className="px-4 border-2 border-solid border-[#F2F2F2] w-full rounded-lg py-5" />
                    </div>
                    <div className="form-group w-full mb-5">
                      <label htmlFor="phoneNumber" className="text-sm">{t.phone}</label>
                      <Input onChange={handleFormUpdate} type="tel" name="phoneNumber" className="px-4 border-2 border-solid border-[#F2F2F2] w-full rounded-lg py-5" />
                    </div>
                  </div>
                  <div className="form-group w-full mb-5">
                    <label htmlFor="message" className="text-sm">{t.message}</label>
                    <textarea onChange={handleFormUpdate} name="message" rows={5} className="text-sm p-2 w-full border-2 border-solid border-[#F2F2F2] rounded-lg"></textarea>
                  </div>
                  <div className="md:flex justify-between items-center">
                    <div>
                    </div>
                    <button type="button" onClick={handleContactUs} disabled={sendingForm} className="text-sm md:text-base bg-primary text-black py-5 px-8 rounded-lg md:mt-5 text-base block">
                      {
                        sendingForm ? <Spin indicator={<LoadingOutlined spin />} size="large" /> : t.title
                      }
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </>
        </Context.Provider>
      </DisplayLayout>
    </div>
  );
}
