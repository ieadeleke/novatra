// src/types/language.ts
export type Language = 'en' | 'fr' | 'ru' | 'ar';

export interface TranslationContent {
    title: string;
    name: string;
    email: string;
    message: string;
    submit: string;
    description: string;
    emailAddress: string;
    phone: string;
    fullName: string;
    topic: string;
    location: string;
    whatsapp: string;
    telegram: string;
    infoMail: string;
    support: string;
}

export interface NavContent {
    about: string;
    home: string;
    products: string;
    contact: string;
    quote: string;
    copyright?: string;
    whatsapp?: string;
    emailAddress?: string;
    phone?: string;
    company: string;
    
    all_products: string;
    food_products: string;
    livestock_products: string;
    industrial_products: string;
    agro_products: string;
    footer_story: string;
}

export interface AboutContent {
    story: string;
    sect1: string;
    sect2: string;
    sect3: string;
    sect4: string;
    sect5: string;
    sect6: string;
    mission: string;
    vision: string;
    missionTitle: string;
    visionTitle: string;
    list1: string;
    list2: string;
    list3: string;
    head1: string;
    head2: string;
    head3: string;
    head4: string;
}
export interface HomeContent {
    heroTitle: string;
    heroBody: string;
    heroButton: string;
    blockTestimonial1?: string;
    blockTestimonial2?: string;
    blockTestimonialStory1?: string;
    blockTestimonialStory2?: string;

    bottom_feel: string;
    bottom_story: string;
    bottom_link: string;

    collabStory: string;
    collabTitle: string;
    collabBar1: string;
    collabBar2: string;

    similar: string;

    propsHeader1?: string;
    propsHeader2?: string;
    propsHeader3?: string;
    propsHeader4?: string;
    propsStory1?: string;
    propsStory2?: string;
    propsStory3?: string;
    propsStory4?: string;

    categoryHeader1?: string;
    categoryStory1?: string;

    categoryHeader2?: string;
    categoryStory2?: string;
    categoryHeader3?: string;
    categoryStory3?: string;
    categoryHeader4?: string;
    categoryStory4?: string;

    productsTag?: string;
    productsLink?: string;

    faqHeader?: string;
    faqStory?: string;

    questionHeader1?: string;
    questionStory1?: string;
    questionHeader2?: string;
    questionStory2?: string;
    questionHeader3?: string;
    questionStory3?: string;
    questionHeader4?: string;
    questionStory4?: string;


    belowTitle: string;
    belowBody: string;
    belowTag: string;
    belowButton: string;
    blackTitle: string;
    blackStory: string;
    blackTag: string;
    bottomTitle: string;
    bottomStory: string;
    bottomTag: string;

    details: string;
    modal_description: string;
    modal_spec: string;
    modal_packaging: string;
    modal_delivery: string;
    modal_shelf: string;
    modal_storage: string;
    modal_fat: string;
    modal_moisture: string;
    modal_type: string;
    modal_quote: string;

    all_products: string;
    food_products: string;
    livestock_products: string;
    industrial_products: string;
    agro_products: string;
}

export interface Translations {
    en: {
        contact: TranslationContent;
        about: AboutContent,
        home: HomeContent,
        nav: NavContent
    };
    fr: {
        contact: TranslationContent;
        about: AboutContent,
        home: HomeContent,
        nav: NavContent
    };
    ru: {
        contact: TranslationContent;
        about: AboutContent,
        home: HomeContent,
        nav: NavContent
    };
    ar: {
        contact: TranslationContent;
        about: AboutContent,
        home: HomeContent,
        nav: NavContent
    }
}