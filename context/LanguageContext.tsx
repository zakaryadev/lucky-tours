"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "uz" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  uz: {
    // Nav
    "nav.home": "Bosh sahifa",
    "nav.destinations": "Yo‘nalishlar",
    "nav.tours": "Turlar",
    "nav.packages": "Paketlar",
    "nav.services": "Xizmatlar",
    "nav.about": "Biz haqimizda",
    "nav.contact": "Aloqa",
    
    // Hero
    "hero.pretitle": "DUNYONI BIZ BILAN KASHF ETING",
    "hero.title1": "SAYOHATLAR",
    "hero.title2": "YANGI BOSQICHDA",
    "hero.description": "Premium yo‘nalishlar, unutilmas tajribalar va siz uchun eng yaxshi xizmat.",
    "hero.btn.plan": "Sayohatni rejalashtirish",
    "hero.btn.video": "Video tomosha qilish",

    // Offer
    "offer.badge": "Maxsus taklif",
    "offer.days": "9 kun / 4 kecha",
    "offer.from": "dan boshlab",

    // Booking Tabs
    "booking.tab.flights": "Aviabilet",
    "booking.tab.hotels": "Mehmonxona",
    "booking.tab.packages": "Paket turlar",
    "booking.tab.transfers": "Transfer",

    // Booking Form
    "booking.from": "Qayerdan",
    "booking.to": "Qayerga",
    "booking.departure": "Jo‘nab ketish",
    "booking.return": "Qaytish",
    "booking.passengers": "Yo‘lovchilar",
    "booking.search": "Qidirish",
    "booking.recent": "So‘nggi qidiruvlar:",

    // Destinations Section
    "dest.title": "Mashhur yo‘nalishlar",
    "dest.viewAll": "Barchasini ko‘rish",

    // Packages Section
    "pkg.label": "TANLANGAN PAKETLAR",
    "pkg.title": "Siz uchun tanlangan eng yaxshi paketlar",

    // Services Section
    "services.label": "BIZNING XIZMATLARIMIZ",
    "services.title": "Sayohatingizni biz oson qilamiz",
    "services.btn": "Xizmatlar bilan tanishish",
    "service1.title": "Viza yordami",
    "service1.desc": "Barcha turdagi vizalar uchun professional ko‘mak.",
    "service2.title": "Sug‘urta",
    "service2.desc": "Sayohat davomida to‘liq himoya va xavfsizlik.",
    "service3.title": "24/7 Qo‘llab-quvvatlash",
    "service3.desc": "Har doim siz bilan, istalgan vaqtda yordam.",
    "service4.title": "Moslashuvchan to‘lov",
    "service4.desc": "Qulay to‘lov usullari va bo‘lib to‘lash imkoniyati.",

    // Why Us Section
    "why.label": "NIMA UCHUN BIZ?",
    "why.title": "Lucky Tours bilan sayohat qilishning afzalliklari",
    "why.item1": "Eng yaxshi narx kafolati",
    "why.item2": "Ishonchli hamkorlar tarmog‘i",
    "why.item3": "Shaxsiy yondashuv va sifatli xizmat",
    "why.item4": "Yillar davomida ishonch va tajriba",
    "why.btn": "Batafsil ma’lumot",

    // Stats
    "stat.exp": "Yillik tajriba",
    "stat.clients": "Mamnun mijozlar",
    "stat.dest": "Yo‘nalishlar",
    "stat.reviews": "Ijobiy fikrlar",

    // Testimonials
    "test.label": "MIJOZLARIMIZ FIKRI",

    // Footer
    "footer.desc": "Dunyoning eng go‘zal joylariga sayohat qilish orzu bo‘lgan, biz esa uni amalga oshiramiz.",
    "footer.col1": "KOMPANIYA",
    "footer.col2": "YO‘NALISHLAR",
    "footer.col3": "MA’LUMOT",
    "footer.col4": "BOG‘LANISH",
    "footer.rights": "© 2026 Lucky Tours. Barcha huquqlar himoyalangan.",
    "footer.studio": "Saytni yaratish — Lucky Digital Studio",

    // Tours Page
    "tours.title": "Barcha Turlar va Paketlar",
    "tours.subtitle": "Dunyodagi eng go'zal davlatlar va unutilmas sarguzashtlar to'plami",
    "tours.search": "Yo'nalish yoki tur nomini qidiring...",
    "tours.all": "Barcha yo'nalishlar",
    "tours.details": "Batafsil ko'rish",
    "tours.priceFrom": "dan boshlab",

    // Tour Details Page
    "detail.back": "Turlarga qaytish",
    "detail.book": "Hozir band qilish",
    "detail.contact": "Menejer bilan bog'lanish",
    "detail.overview": "Tur haqida umumiy ma'lumot",
    "detail.highlights": "Asosiy avzalliklar",
    "detail.included": "Narxga kiritilgan",
    "detail.excluded": "Kiritilmagan",
    "detail.itinerary": "Kunlik sarguzasht dasturi",
    "detail.day": "-kun",
    "detail.location": "Joylashuv",
    "detail.duration": "Davomiyligi",
    "detail.rating": "Reyting",
    "detail.price": "Tur narxi",
    "detail.popular": "Mashhur tur",
  },
  en: {
    // Nav
    "nav.home": "Home",
    "nav.destinations": "Destinations",
    "nav.tours": "Tours",
    "nav.packages": "Packages",
    "nav.services": "Services",
    "nav.about": "About Us",
    "nav.contact": "Contact",
    
    // Hero
    "hero.pretitle": "DISCOVER THE WORLD WITH US",
    "hero.title1": "TRAVEL ON A",
    "hero.title2": "NEW LEVEL",
    "hero.description": "Premium destinations, unforgettable experiences and top-tier service for you.",
    "hero.btn.plan": "Plan Your Trip",
    "hero.btn.video": "Watch Video",

    // Offer
    "offer.badge": "Special Offer",
    "offer.days": "9 days / 4 nights",
    "offer.from": "starting from",

    // Booking Tabs
    "booking.tab.flights": "Flights",
    "booking.tab.hotels": "Hotels",
    "booking.tab.packages": "Packages",
    "booking.tab.transfers": "Transfers",

    // Booking Form
    "booking.from": "From",
    "booking.to": "To",
    "booking.departure": "Departure",
    "booking.return": "Return",
    "booking.passengers": "Passengers",
    "booking.search": "Search",
    "booking.recent": "Recent searches:",

    // Destinations Section
    "dest.title": "Popular Destinations",
    "dest.viewAll": "View All",

    // Packages Section
    "pkg.label": "SELECTED PACKAGES",
    "pkg.title": "The Best Packages Selected for You",

    // Services Section
    "services.label": "OUR SERVICES",
    "services.title": "We Make Your Travel Easy",
    "services.btn": "Explore Services",
    "service1.title": "Visa Support",
    "service1.desc": "Professional assistance for all visa types.",
    "service2.title": "Insurance",
    "service2.desc": "Full safety and protection during your travels.",
    "service3.title": "24/7 Support",
    "service3.desc": "Always with you, whenever you need help.",
    "service4.title": "Flexible Payment",
    "service4.desc": "Convenient payment methods and installment options.",

    // Why Us Section
    "why.label": "WHY CHOOSE US?",
    "why.title": "Advantages of Traveling with Lucky Tours",
    "why.item1": "Best price guarantee",
    "why.item2": "Reliable partner network",
    "why.item3": "Personalized approach & quality service",
    "why.item4": "Years of trust and rich experience",
    "why.btn": "Learn More",

    // Stats
    "stat.exp": "Years Experience",
    "stat.clients": "Happy Clients",
    "stat.dest": "Destinations",
    "stat.reviews": "Positive Reviews",

    // Testimonials
    "test.label": "CUSTOMER REVIEWS",

    // Footer
    "footer.desc": "Traveling to the world's most beautiful destinations was once a dream, we make it your reality.",
    "footer.col1": "COMPANY",
    "footer.col2": "DESTINATIONS",
    "footer.col3": "INFORMATION",
    "footer.col4": "CONTACT",
    "footer.rights": "© 2026 Lucky Tours. All rights reserved.",
    "footer.studio": "Website created by — Lucky Digital Studio",

    // Tours Page
    "tours.title": "All Tours & Packages",
    "tours.subtitle": "Collection of the most beautiful countries and unforgettable journeys worldwide",
    "tours.search": "Search destination or tour name...",
    "tours.all": "All Destinations",
    "tours.details": "View Details",
    "tours.priceFrom": "starting from",

    // Tour Details Page
    "detail.back": "Back to Tours",
    "detail.book": "Book Now",
    "detail.contact": "Contact Manager",
    "detail.overview": "Tour Overview",
    "detail.highlights": "Key Highlights",
    "detail.included": "What's Included",
    "detail.excluded": "What's Excluded",
    "detail.itinerary": "Daily Itinerary",
    "detail.day": "Day",
    "detail.location": "Location",
    "detail.duration": "Duration",
    "detail.rating": "Rating",
    "detail.price": "Tour Price",
    "detail.popular": "Popular Tour",
  },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "uz",
  setLang: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("uz");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("luckytours_lang") as Language) : null;
    if (saved && (saved === "uz" || saved === "en") && saved !== "uz") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    localStorage.setItem("luckytours_lang", newLang);
    if (
      typeof document !== "undefined" &&
      "startViewTransition" in document &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      document.startViewTransition(() => {
        setLangState(newLang);
      });
    } else {
      setLangState(newLang);
    }
  };

  const t = (key: string): string => {
    return translations[lang][key] || translations["uz"][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
