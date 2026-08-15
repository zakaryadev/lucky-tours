export interface Tour {
  slug: string;
  title: { uz: string; en: string };
  country: { uz: string; en: string };
  city: { uz: string; en: string };
  price: string;
  duration: { uz: string; en: string };
  image: string;
  gallery: string[];
  description: { uz: string; en: string };
  highlights: { uz: string[]; en: string[] };
  included: { uz: string[]; en: string[] };
  excluded: { uz: string[]; en: string[] };
  itinerary: {
    day: number;
    title: { uz: string; en: string };
    text: { uz: string; en: string };
  }[];
  rating: number;
  reviewsCount: number;
  badge?: { uz: string; en: string };
}

export const toursList: Tour[] = [
  {
    slug: "turkiya",
    title: {
      uz: "Turkiya: Istanbul va Antaliya Sehrli Sayohati",
      en: "Turkey: Magical Journey to Istanbul & Antalya",
    },
    country: { uz: "Turkiya", en: "Turkey" },
    city: { uz: "Istanbul & Antaliya", en: "Istanbul & Antalya" },
    price: "$499",
    duration: { uz: "7 kun / 6 kecha", en: "7 Days / 6 Nights" },
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1527838832700-54595d2f114b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=900&q=80",
    ],
    description: {
      uz: "Turkiyaning boy tarixi, Moviy Masjid, Bosfor bo'g'ozi bo'ylab kruiz va Antaliyaning eng go'zal All-Inclusive plyajlarida unutilmas dam oling.",
      en: "Discover Turkey's rich history, the Blue Mosque, Bosphorus cruise, and relax on Antalya's finest All-Inclusive Mediterranean beaches.",
    },
    highlights: {
      uz: [
        "Bosfor bo'g'ozi bo'ylab yaxtada sayr",
        "Istanbuldagi tarixiy obidalar ekskursiyasi",
        "Antaliyadagi 5 yulduzli All Inclusive mehmonxona",
        "Qadimiy Kaleiçi shaharchasini kashf qilish",
      ],
      en: [
        "Yacht cruise along the Bosphorus strait",
        "Guided historical tour of Istanbul landmarks",
        "5-star All-Inclusive beach resort in Antalya",
        "Exploring ancient Kaleiçi old town",
      ],
    },
    included: {
      uz: [
        "Toshkent - Istanbul - Antaliya - Toshkent aviachiptalari",
        "5★ & 4★ mehmonxonalarda joylashuv",
        "Transfer va transport xizmatlari",
        "Nonushtalar va All Inclusive ovqatlanish",
        "Tibbiy sug'urta va gid ko'magi",
      ],
      en: [
        "Roundtrip flights from Tashkent",
        "Accommodation in 5★ & 4★ luxury hotels",
        "All airport and city transfers",
        "Daily breakfasts and All Inclusive meals in Antalya",
        "Travel insurance & expert guide support",
      ],
    },
    excluded: {
      uz: [
        "Shaxsiy xarajatlar va qo'shimcha sovg'alar",
        "Dasturdan tashqari ekskursiyalar",
      ],
      en: [
        "Personal expenses and souvenirs",
        "Optional tours outside the main program",
      ],
    },
    itinerary: [
      {
        day: 1,
        title: { uz: "Istanbulga etib kelish", en: "Arrival in Istanbul" },
        text: {
          uz: "Aeroportda kutib olish va mehmonxonaga joylashish. Kechki Bosfor ko'rinishidan bahramand bo'ling.",
          en: "Airport greeting and check-in at the hotel. Enjoy evening views of the Bosphorus.",
        },
      },
      {
        day: 2,
        title: { uz: "Istanbulning tarixiy yuragi", en: "Historical Istanbul" },
        text: {
          uz: "Sultonahmet, Hagia Sophia va Topkapi saroyiga tashrif. Tushlikdan so'ng Kapali Çarşı bozorini aylanish.",
          en: "Visit Sultanahmet, Hagia Sophia and Topkapi Palace. Grand Bazaar exploration after lunch.",
        },
      },
      {
        day: 3,
        title: { uz: "Antaliyaga parvoz", en: "Flight to Antalya" },
        text: {
          uz: "Ertalab Antaliyaga uchish va O'rta yer dengizi bo'yidagi 5 yulduzli kurortga joylashish.",
          en: "Morning flight to Antalya and check-in to a 5-star Mediterranean resort.",
        },
      },
      {
        day: 4,
        title: { uz: "Plyaj va dam olish", en: "Beach & Relaxation" },
        text: {
          uz: "O'rta yer dengizi plyajlarida to'liq dam olish va akvapark xizmatlaridan foydalanish.",
          en: "Full day relaxing at Mediterranean beaches and waterpark resort facilities.",
        },
      },
    ],
    rating: 4.9,
    reviewsCount: 184,
    badge: { uz: "Eng ommabop", en: "Most Popular" },
  },
  {
    slug: "baa",
    title: {
      uz: "BAA: Dubay va Abu-Dabi Hashamatli Turi",
      en: "UAE: Luxury Tour to Dubai & Abu Dhabi",
    },
    country: { uz: "BAA", en: "UAE" },
    city: { uz: "Dubay & Abu-Dabi", en: "Dubai & Abu Dhabi" },
    price: "$599",
    duration: { uz: "5 kun / 4 kecha", en: "5 Days / 4 Nights" },
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1546412414-8035e1776c9a?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=900&q=80",
    ],
    description: {
      uz: "Dunyoning eng baland binosi Burj Khalifa, Dubay fawvoralari, Sahro safarisi va Abu-Dabidagi Shayx Zayd masjidi mo'jizalari.",
      en: "Experience the iconic Burj Khalifa, Dubai Fountains, thrilling Desert Safari, and Sheikh Zayed Grand Mosque in Abu Dhabi.",
    },
    highlights: {
      uz: [
        "Burj Khalifa va Dubai Mall ekskursiyasi",
        "Jip avtomobillarida Sahro Safarisi va kechki shou",
        "Abu-Dabi Shayx Zayd masjidi va Luvr muzeyi",
        "Palm Jumeirah va Marina bo'ylab yaxta sayri",
      ],
      en: [
        "Burj Khalifa & Dubai Mall experience",
        "Thrilling 4x4 Desert Safari with barbecue dinner",
        "Sheikh Zayed Mosque & Louvre Abu Dhabi tour",
        "Yacht cruise around Palm Jumeirah & Marina",
      ],
    },
    included: {
      uz: [
        "Toshkent - Dubay - Toshkent aviachiptalari",
        "4★ / 5★ mehmonxonada joylashuv va shved stoli nonushtalari",
        "Transfer va barcha ekskursiyalar transporti",
        "Sahro Safarisi chiptasi va kechki ovqat",
        "Tibbiy sug'urta va 24/7 gid ko'magi",
      ],
      en: [
        "Roundtrip direct flights Tashkent - Dubai",
        "4★ / 5★ hotel stay with daily breakfast",
        "All airport transfers and safari transport",
        "Desert Safari ticket with BBQ dinner",
        "Travel insurance & 24/7 local guide",
      ],
    },
    excluded: {
      uz: ["Turizm solig'i (Tourism Dirham)", "Shaxsiy xarajatlar"],
      en: ["Tourism fee (Tourism Dirham)", "Personal expenses"],
    },
    itinerary: [
      {
        day: 1,
        title: { uz: "Dubayga parvoz", en: "Arrival in Dubai" },
        text: {
          uz: "Dubay xalqaro aeroportiga etib kelish, kutib olish va mehmonxonaga joylashish.",
          en: "Arrival at Dubai International Airport, warm welcome and hotel check-in.",
        },
      },
      {
        day: 2,
        title: { uz: "Dubay shahri va Burj Khalifa", en: "City Tour & Burj Khalifa" },
        text: {
          uz: "Dubay shahar ekskursiyasi, Palm Jumeirah, Burj Al Arab hamda Burj Khalifa kuzatuv maydonchasi.",
          en: "Dubai city tour, Palm Jumeirah photo stop, and Burj Khalifa observation deck.",
        },
      },
      {
        day: 3,
        title: { uz: "Sahro Safarisi sarguzashtlari", en: "Desert Safari Adventure" },
        text: {
          uz: "Tushdan so'ng 4x4 jiplarda qum tepaliklarida uchish, tuya minish va sahro lageridagi shou.",
          en: "Afternoon dune bashing in 4x4s, camel riding, and traditional bedouin camp show.",
        },
      },
    ],
    rating: 4.95,
    reviewsCount: 210,
    badge: { uz: "Premium", en: "Premium" },
  },
  {
    slug: "gruziya",
    title: {
      uz: "Gruziya: Tbilisi va Batumi Unutilmas Tur",
      en: "Georgia: Unforgettable Tbilisi & Batumi",
    },
    country: { uz: "Gruziya", en: "Georgia" },
    city: { uz: "Tbilisi & Batumi", en: "Tbilisi & Batumi" },
    price: "$399",
    duration: { uz: "5 kun / 4 kecha", en: "5 Days / 4 Nights" },
    image:
      "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1582234372722-50d7ccc30ebd?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80",
    ],
    description: {
      uz: "Qadimiy Tbilisi ko'chalari, Kavkaz tog'lari bag'ri, Mtsxeta va Qora dengiz bo'yidagi zamonaviy Batumi kurorti.",
      en: "Explore historic Tbilisi streets, Caucasus mountain panoramas, Mtskheta, and Black Sea coastal Batumi resort.",
    },
    highlights: {
      uz: [
        "Tbilisi eski shahri va Narikala qal'asi",
        "Mtsxeta va Jvari monastiri manzarasi",
        "Batumi bulvari hamda Qora dengiz sohili",
        "Gruzin milliy taomlari va Xachapuri tatib ko'rish",
      ],
      en: [
        "Tbilisi Old Town & Narikala Fortress cable car",
        "Mtskheta UNESCO sites & Jvari Monastery views",
        "Batumi Seaside Boulevard & Ali and Nino statue",
        "Authentic Georgian Khachapuri & Khinkali tasting",
      ],
    },
    included: {
      uz: [
        "Toshkent - Tbilisi - Toshkent aviachiptalari",
        "4★ mehmonxonalarda joylashuv",
        "Transport va ekskursiyalar",
        "Nordon va mazali Gruzin nonushtalari",
        "Gid xizmati va tibbiy sug'urta",
      ],
      en: [
        "Roundtrip flights Tashkent - Tbilisi",
        "4★ comfortable boutique hotel stay",
        "All city & intercity transfers",
        "Daily traditional Georgian breakfasts",
        "Tour guide & medical insurance",
      ],
    },
    excluded: {
      uz: ["Shaxsiy xarajatlar", "Kechki ovqatlar"],
      en: ["Personal expenses", "Dinners"],
    },
    itinerary: [
      {
        day: 1,
        title: { uz: "Tbilisiga etib kelish", en: "Arrival in Tbilisi" },
        text: {
          uz: "Tbilisi aeroportida kutib olish va mehmonxonaga joylashish. Tungi shahar bo'ylab sayr.",
          en: "Welcome at Tbilisi airport and check-in. Evening walk in illuminated Old Tbilisi.",
        },
      },
      {
        day: 2,
        title: { uz: "Tbilisi va Mtsxeta", en: "Tbilisi & Mtskheta" },
        text: {
          uz: "Narikala qal'asi, Oltingugurt hammomlari va qadimiy poytaxt Mtsxeta shahri.",
          en: "Narikala Fortress cable car, Sulphur Baths, and ancient capital Mtskheta.",
        },
      },
    ],
    rating: 4.88,
    reviewsCount: 142,
  },
  {
    slug: "tailand",
    title: {
      uz: "Tailand: Puket Orollari Tropik Sarguzashti",
      en: "Thailand: Tropical Phuket Islands Adventure",
    },
    country: { uz: "Tailand", en: "Thailand" },
    city: { uz: "Puket & Bangkok", en: "Phuket & Bangkok" },
    price: "$799",
    duration: { uz: "8 kun / 7 kecha", en: "8 Days / 7 Nights" },
    image:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1506665531195-3566fe294677?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1512553353614-82a7370096dc?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    ],
    description: {
      uz: "Phi Phi orollari, Maya Bay lagoonasi, James Bond oroli va Puketning firuza suvli jannatmonand plyajlari.",
      en: "Discover Phi Phi Islands, turquoise Maya Bay lagoon, James Bond Island, and Phuket's paradise beaches.",
    },
    highlights: {
      uz: [
        "Phi Phi orollariga tezkor katerda sayohat",
        "Maya Bay va Snorkeling sarguzashtlari",
        "Katta Budda haykali va Patong tungi hayoti",
        "Ekzotik mevalar va Tay massaji",
      ],
      en: [
        "Speedboat tour to Phi Phi Islands",
        "Maya Bay & crystal clear snorkeling",
        "Big Buddha viewpoint & Patong night market",
        "Exotic Thai fruit tasting & Thai spa massage",
      ],
    },
    included: {
      uz: [
        "Toshkent - Puket - Toshkent parvozi",
        "4★ Kurort mehmonxonasida joylashuv",
        "Katerlar va ekskursiya transporti",
        "Ekskursiya vaqtida tushlik va nonushtalar",
        "Sug'urta va mahalliy gidlar",
      ],
      en: [
        "Flights Tashkent - Phuket",
        "4★ Tropical Beach Resort accommodation",
        "Speedboat & island ferry transfers",
        "Daily breakfasts & island buffet lunches",
        "Insurance & local English/Russian guide",
      ],
    },
    excluded: {
      uz: ["Milliy bog'larga kirish badali", "Shaxsiy xarajatlar"],
      en: ["National Park fees", "Personal expenses"],
    },
    itinerary: [
      {
        day: 1,
        title: { uz: "Puketga etib kelish", en: "Arrival in Phuket" },
        text: {
          uz: "Aeroportda gul chambarchas bilan kutib olish va tropik kurortga joylashish.",
          en: "Warm Thai greeting at the airport and transfer to beachfront resort.",
        },
      },
      {
        day: 2,
        title: { uz: "Phi Phi orollari kruizi", en: "Phi Phi Islands Cruise" },
        text: {
          uz: "Kun bo'yi katerda Phi Phi Ley, Maya Bay va Monkey Beach orollarini kashf qilish.",
          en: "Full day speedboat excursion to Phi Phi Leh, Maya Bay, and Monkey Beach.",
        },
      },
    ],
    rating: 4.92,
    reviewsCount: 165,
    badge: { uz: "Tropik Jannat", en: "Tropical Paradise" },
  },
  {
    slug: "xitoy",
    title: {
      uz: "Xitoy: Pekin Devori va Shanxay Osmono'parlari",
      en: "China: Great Wall of Beijing & Shanghai Skyscrapers",
    },
    country: { uz: "Xitoy", en: "China" },
    city: { uz: "Pekin & Shanxay", en: "Beijing & Shanghai" },
    price: "$899",
    duration: { uz: "7 kun / 6 kecha", en: "7 Days / 6 Nights" },
    image:
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1538428494232-9c0d8a3ab396?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1543097692-fa13c6cd8595?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?auto=format&fit=crop&w=900&q=80",
    ],
    description: {
      uz: "Buyuk Xitoy Devori, Man etilgan shahar (Forbidden City), Pekin o'rdagi hamda Shanxayning The Bund sohilbo'yi manzaralari.",
      en: "Walk the Great Wall of China, Forbidden City, savor Peking Duck, and gaze at Shanghai's futuristic Bund skyline.",
    },
    highlights: {
      uz: [
        "Buyuk Xitoy Devori (Mutianyu) ga chiqish",
        "Pekindagi Taqiqlangan shahar va Yozgi Saroy",
        "Tezyurar poyezdda Shanxayga sayohat (350 km/s)",
        "Shanxay minorasi va Bund sohilbo'yi kruizi",
      ],
      en: [
        "Cable car ride to the Great Wall (Mutianyu section)",
        "Forbidden City & Summer Palace guided walk",
        "Bullet train ride from Beijing to Shanghai (350 km/h)",
        "Shanghai Tower viewpoint & Huangpu River cruise",
      ],
    },
    included: {
      uz: [
        "Aviachiptalar Toshkent - Pekin - Shanxay - Toshkent",
        "4★ Mehmonxonalarda joylashuv",
        "Tezyurar poyezd chiptalari",
        "Transferlar va kirish chiptalari",
        "Viza yordami va gid",
      ],
      en: [
        "International & domestic flights",
        "4★ Central hotel stay",
        "High-speed bullet train tickets",
        "All transfers and museum entry tickets",
        "Visa assistance & professional guide",
      ],
    },
    excluded: {
      uz: ["Shaxsiy shopping va sovg'alar"],
      en: ["Personal shopping and souvenirs"],
    },
    itinerary: [
      {
        day: 1,
        title: { uz: "Pekinga etib kelish", en: "Arrival in Beijing" },
        text: {
          uz: "Pekin aeroportida kutib olish va mehmonxonaga joylashish. Pekin o'rdagi kechki taomi.",
          en: "Welcome at Beijing airport and hotel check-in. Authentic Peking Duck dinner.",
        },
      },
    ],
    rating: 4.87,
    reviewsCount: 98,
  },
  {
    slug: "malayziya",
    title: {
      uz: "Malayziya: Petronas Minorasi va Langkavi Orool",
      en: "Malaysia: Petronas Towers & Langkawi Island",
    },
    country: { uz: "Malayziya", en: "Malaysia" },
    city: { uz: "Kuala-Lumpur & Langkavi", en: "Kuala Lumpur & Langkawi" },
    price: "$849",
    duration: { uz: "7 kun / 6 kecha", en: "7 Days / 6 Nights" },
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=900&q=80",
    ],
    description: {
      uz: "Kuala-Lumpurning mashhur Petronas egizak minorasi, Batu g'orlari va Langkavining osma ko'prigi (Sky Bridge).",
      en: "Marvel at Petronas Twin Towers, Batu Caves, and ride the breathtaking Langkawi Sky Bridge cable car.",
    },
    highlights: {
      uz: [
        "Petronas Minorasi va Skybridge kuzatuv maydoni",
        "Batu g'orlari va ulkan Oltin Budda haykali",
        "Langkavi SkyCab va Mangrov o'rmonlari kruizi",
      ],
      en: [
        "Petronas Twin Towers Skybridge visit",
        "Batu Caves & giant golden Lord Murugan statue",
        "Langkawi Cable Car & Mangrove boat safari",
      ],
    },
    included: {
      uz: ["Aviachiptalar va parvozlar", "4★ Mehmonxonalar va nonushtalar"],
      en: ["Flights Tashkent - Kuala Lumpur", "4★ Hotels with daily breakfast"],
    },
    excluded: {
      uz: ["Shaxsiy xarajatlar"],
      en: ["Personal expenses"],
    },
    itinerary: [
      {
        day: 1,
        title: { uz: "Kuala-Lumpurga etib kelish", en: "Arrival in Kuala Lumpur" },
        text: { uz: "Kutib olish va shaharga transfer.", en: "Welcome & transfer to KL hotel." },
      },
    ],
    rating: 4.9,
    reviewsCount: 112,
  },
  {
    slug: "vetnam",
    title: {
      uz: "Vetnam: Ha Long Ko'rfazi va Phu Quoc Oroli",
      en: "Vietnam: Ha Long Bay & Phu Quoc Island",
    },
    country: { uz: "Vetnam", en: "Vietnam" },
    city: { uz: "Nha Trang & Phu Quoc", en: "Nha Trang & Phu Quoc" },
    price: "$749",
    duration: { uz: "8 kun / 7 kecha", en: "8 Days / 7 Nights" },
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1504457047772-27faf1c00561?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=900&q=80",
    ],
    description: {
      uz: "UNESCO ro'yxatidagi Ha Long ko'rfazi zangori qoyalari, VinWonders akvaparki va Phu Quoc orolining toza suvlari.",
      en: "UNESCO Ha Long Bay limestone karst mountains, VinWonders amusement park, and Phu Quoc paradise beaches.",
    },
    highlights: {
      uz: [
        "Ha Long ko'rfazi kruiz kemasi",
        "Phu Quoc orolida dengiz kurorti va kabel yo'li",
      ],
      en: [
        "Overnight Ha Long Bay luxury cruise",
        "Cable car to Phu Quoc and beach resort stay",
      ],
    },
    included: {
      uz: ["Toshkent - Vetnam parvozlari", "Mehmonxonalarda joylashuv", "Gid"],
      en: ["Flights from Tashkent", "Hotel and cruise stay", "Guide support"],
    },
    excluded: {
      uz: ["Viza badali ($25)", "Shaxsiy xarajatlar"],
      en: ["Visa fee ($25)", "Personal expenses"],
    },
    itinerary: [
      {
        day: 1,
        title: { uz: "Xanoy/Nha Trangga etib kelish", en: "Arrival in Vietnam" },
        text: { uz: "Aeroportda kutib olish va transfer.", en: "Welcome & airport transfer." },
      },
    ],
    rating: 4.86,
    reviewsCount: 94,
  },
  {
    slug: "azarbayjon",
    title: {
      uz: "Azarbayjon: Boku Qadimiyligi va Qabala Tog'lari",
      en: "Azerbaijan: Ancient Baku & Qabala Mountains",
    },
    country: { uz: "Azarbayjon", en: "Azerbaijan" },
    city: { uz: "Boku & Qabala", en: "Baku & Qabala" },
    price: "$349",
    duration: { uz: "5 kun / 4 kecha", en: "5 Days / 4 Nights" },
    image:
      "https://images.unsplash.com/photo-1584646098378-0874589d76b1?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584646098378-0874589d76b1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1539651044670-315229da9d2f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80",
    ],
    description: {
      uz: "Bokuning Icheri Sheher qadimiy ko'chalari, Haydar Aliyev markazi, Olovli Minoralar hamda Qabala tog'li kurorti.",
      en: "Wander Baku's Icherisheher Old City, Heydar Aliyev Center, Flame Towers, and Qabala mountain resort.",
    },
    highlights: {
      uz: [
        "Boku eski shahri va Qiz Qal'asi",
        "Ateshgah Olov ibodatxonasi hamda Yanardag",
        "Qabala Tufandag osma yo'li",
      ],
      en: [
        "Maiden Tower & Icherisheher Old Town walk",
        "Ateshgah Fire Temple & Yanar Dag Burning Mountain",
        "Qabala Tufandag mountain cable car ride",
      ],
    },
    included: {
      uz: [
        "Toshkent - Boku - Toshkent parvozi",
        "4★ Mehmonxona va nonushtalar",
        "Ekskursiya transporti va gid",
      ],
      en: [
        "Roundtrip flights Tashkent - Baku",
        "4★ Hotel accommodation with breakfast",
        "All excursions and English/Russian speaking guide",
      ],
    },
    excluded: {
      uz: ["Shaxsiy xarajatlar"],
      en: ["Personal expenses"],
    },
    itinerary: [
      {
        day: 1,
        title: { uz: "Bokuga etib kelish", en: "Arrival in Baku" },
        text: { uz: "Aeroportda kutib olish va mehmonxonaga joylashish.", en: "Welcome at Baku airport and hotel transfer." },
      },
    ],
    rating: 4.85,
    reviewsCount: 104,
  },
];
