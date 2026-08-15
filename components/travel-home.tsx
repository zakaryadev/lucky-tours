"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowLeftRight,
  BedDouble,
  CalendarDays,
  Car,
  Check,
  ChevronRight,
  Compass,
  CreditCard,
  FileCheck2,
  Headphones,
  Luggage,
  MapPin,
  Play,
  Plane,
  Search,
  ShieldCheck,
  Star,
  X,
} from "lucide-react";
import {
  CSSProperties,
  FormEvent,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CountUp } from "@/components/count-up";
import { useLanguage } from "@/context/LanguageContext";

// Stagger uchun --i CSS o'zgaruvchisini beruvchi qisqa yordamchi
const stagger = (i: number) => ({ "--i": i }) as CSSProperties;

const destinations = [
  {
    slug: "turkiya",
    name: "Turkiya",
    meta: "Istanbul va Antaliya",
    price: "$499",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=88",
  },
  {
    slug: "baa",
    name: "BAA",
    meta: "Dubay va Abu-Dabi",
    price: "$599",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=88",
  },
  {
    slug: "gruziya",
    name: "Gruziya",
    meta: "Tbilisi va Batumi",
    price: "$399",
    image:
      "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=1200&q=88",
  },
  {
    slug: "tailand",
    name: "Tailand",
    meta: "Puket va Bangkok",
    price: "$799",
    image:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=88",
  },
  {
    slug: "xitoy",
    name: "Xitoy",
    meta: "Pekin va Shanxay",
    price: "$899",
    image:
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=88",
  },
  {
    slug: "malayziya",
    name: "Malayziya",
    meta: "Kuala-Lumpur va Langkavi",
    price: "$849",
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=88",
  },
  {
    slug: "vetnam",
    name: "Vetnam",
    meta: "Nha Trang va Phu Quoc",
    price: "$749",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=88",
  },
  {
    slug: "azarbayjon",
    name: "Azarbayjon",
    meta: "Boku va Qabala",
    price: "$349",
    image:
      "https://images.unsplash.com/photo-1584646098378-0874589d76b1?auto=format&fit=crop&w=1200&q=88",
  },
];

const packages = [
  {
    slug: "turkiya",
    name: "Turkiya (Antaliya)",
    duration: "7 kun / 6 kecha",
    price: "$499",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=900&q=88",
    tone: "light",
    features: [
      { text: "Aviachiptalar", icon: Plane },
      { text: "All Inclusive Mehmonxona", icon: BedDouble },
      { text: "Transfer", icon: Car },
      { text: "Sug‘urta", icon: ShieldCheck },
    ],
  },
  {
    slug: "baa",
    name: "BAA (Dubay)",
    duration: "5 kun / 4 kecha",
    price: "$649",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=88",
    tone: "light",
    features: [
      { text: "Aviachiptalar", icon: Plane },
      { text: "Mehmonxona", icon: BedDouble },
      { text: "Transfer", icon: Car },
      { text: "City Tour", icon: MapPin },
    ],
  },
  {
    slug: "tailand",
    name: "Tailand (Puket)",
    duration: "8 kun / 7 kecha",
    price: "$899",
    image:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=88",
    tone: "dark",
    badge: "Eng mashhur",
    features: [
      { text: "Aviachiptalar", icon: Plane },
      { text: "Mehmonxona", icon: BedDouble },
      { text: "Transfer", icon: Car },
      { text: "Ekskursiyalar", icon: Compass },
      { text: "Sug‘urta", icon: ShieldCheck },
    ],
  },
  {
    slug: "gruziya",
    name: "Gruziya (Tbilisi)",
    duration: "5 kun / 4 kecha",
    price: "$399",
    image:
      "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=900&q=88",
    tone: "light",
    features: [
      { text: "Aviachiptalar", icon: Plane },
      { text: "Mehmonxona", icon: BedDouble },
      { text: "Transfer", icon: Car },
      { text: "Shahar bo‘ylab tur", icon: Compass },
    ],
  },
];

const testimonials = [
  {
    quote:
      "Dubai sayohatimiz ajoyib bo‘ldi! Xizmat sifati va tashkilotchilik eng yuqori darajada.",
    name: "Nodira Z.",
    city: "Toshkent",
    avatar: "https://i.pravatar.cc/96?img=47",
  },
  {
    quote:
      "Yevropa turimiz unutilmas bo‘ldi. Har bir detal o‘ylab chiqilgan, tavsiya qilaman!",
    name: "Jahongir M.",
    city: "Samarqand",
    avatar: "https://i.pravatar.cc/96?img=12",
  },
  {
    quote:
      "Bali orolida dam olish orzudan ham ajoyib chiqdi. Rahmat Lucky Tours!",
    name: "Malika K.",
    city: "Toshkent",
    avatar: "https://i.pravatar.cc/96?img=32",
  },
  {
    quote:
      "Viza olishda va marshrut tanlashda katta yordam berdilar. Juda ishonchli kompaniya.",
    name: "Azizbek T.",
    city: "Andijon",
    avatar: "https://i.pravatar.cc/96?img=11",
  },
];

// Booking panelning tishli konturi — soya va chekka bir xil geometriyadan
// foydalanishi shart, aks holda kesib tashlash joyiga tushmaydi.
const PANEL_PATH =
  "M7.95 61.17h316.85c4.37,0 7.95,-3.58 7.95,-7.95v-31.06c0,-4.38 -3.58,-7.95 -7.95,-7.95h-165.99c-10.45,0 -13.08,-14.21 -22.59,-14.21h-128.27c-4.37,0 -7.95,3.58 -7.95,7.95v45.27c0,4.37 3.58,7.95 7.95,7.95z";

function SectionAction({ href = "/tours" }: { href?: string }) {
  const { t } = useLanguage();
  return (
    <Link className="section-action" href={href}>
      <span>{t("dest.viewAll")}</span>
      <span className="round-arrow">
        <ArrowRight size={18} />
      </span>
    </Link>
  );
}

const bookingTabs = [
  { key: "Aviabilet", labelKey: "booking.tab.flights", icon: Plane },
  { key: "Mehmonxona", labelKey: "booking.tab.hotels", icon: BedDouble },
  { key: "Paket turlar", labelKey: "booking.tab.packages", icon: Luggage },
  { key: "Transfer", labelKey: "booking.tab.transfers", icon: Car },
] as const;

export function TravelHome() {
  const { t } = useLanguage();
  const [bookingType, setBookingType] = useState<string>(bookingTabs[0].key);
  const [searchMessage, setSearchMessage] = useState("");
  const [videoOpen, setVideoOpen] = useState(false);
  const [videoClosing, setVideoClosing] = useState(false);
  const destinationRail = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const [pill, setPill] = useState<{ x: number; w: number }>({
    x: 0,
    w: 0,
  });

  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchMessage(
      "Mos yo‘nalishlar topildi — takliflarni ko‘rish uchun turlar bo'limiga o'ting.",
    );
  };

  const scrollDestinations = (direction: number) => {
    destinationRail.current?.scrollBy({
      left: direction * 340,
      behavior: "smooth",
    });
  };

  // Aktiv tab ustidagi oq pill'ni o'lchab, transform bilan siljitamiz.
  const measurePill = useCallback(() => {
    const container = tabsRef.current;
    if (!container) return;
    const active = container.querySelector<HTMLButtonElement>(
      "button.selected",
    );
    if (!active) return;
    setPill({ x: active.offsetLeft, w: active.offsetWidth });
  }, []);

  useLayoutEffect(() => {
    measurePill();
  }, [bookingType, measurePill]);

  useEffect(() => {
    window.addEventListener("resize", measurePill);
    return () => window.removeEventListener("resize", measurePill);
  }, [measurePill]);

  const closeVideo = () => {
    setVideoClosing(true);
    window.setTimeout(() => {
      setVideoOpen(false);
      setVideoClosing(false);
    }, 260);
  };

  return (
    <main id="top">
      <div style={{ position: "relative" }}>
        <section className="hero" aria-label="Sayohatni rejalashtirish">
          <Image
            className="hero-image"
            src="/images/hero-plane-v1.png"
            alt="Bulutlar uzra uchayotgan yo‘lovchi samolyoti"
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-top-fade" />
          
          <SiteHeader />

          <div className="hero-content shell">
            <div className="hero-copy">
              <p className="hero-pretitle" data-hero style={stagger(0)}>
                {t("hero.pretitle")}
              </p>
              <h1 data-hero style={stagger(1)}>
                {t("hero.title1")}
                <br />
                {t("hero.title2")}
              </h1>
              <p className="hero-description" data-hero style={stagger(2)}>
                {t("hero.description")}
              </p>
              <div className="hero-actions">
                <div className="hero-actions-capsule" data-hero style={stagger(3)}>
                  <a className="primary-button" href="#booking">
                    {t("hero.btn.plan")} <ArrowRight size={17} />
                  </a>
                  <button
                    className="video-button"
                    type="button"
                    onClick={() => setVideoOpen(true)}
                  >
                    <span className="play-circle">
                      <Play size={14} fill="currentColor" />
                    </span>
                    {t("hero.btn.video")}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="offer-card">
            <div className="offer-top">
              <span>
                <Star size={14} fill="currentColor" /> {t("offer.badge")}
              </span>
              <ChevronRight size={18} />
            </div>
            <p>{t("offer.days")}</p>
            <strong>$ 649</strong>
            <small>{t("offer.from")}</small>
            <Link href="/tours/baa" aria-label="Taklifni ko‘rish">
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>

        <div className="booking-panel shell" id="booking">
          <div className="booking-glass-shape" />
          <svg
            className="booking-shape-border"
            viewBox="0 0 332.75 61.17"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="panelEdge" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="rgba(255, 255, 255, 0.9)" />
                <stop offset="1" stopColor="rgba(255, 255, 255, 0.35)" />
              </linearGradient>
              {/* Soya: siluetni blur qilib pastga suramiz, so'ng asl shaklni
                  kesib tashlaymiz (feComposite operator="out"). Shunda soya
                  shisha ostiga tushmaydi va backdrop-filter uni namuna olmaydi.
                  stdDeviation/dy user-unit'da — preserveAspectRatio="none"
                  bo'lgani uchun x 3.55, y 2.93 marta cho'ziladi. */}
              <filter
                id="panelShadow"
                x="-15%"
                y="-40%"
                width="130%"
                height="200%"
              >
                <feGaussianBlur
                  in="SourceAlpha"
                  stdDeviation="2.6 3.1"
                  result="blurred"
                />
                <feOffset in="blurred" dy="4.1" result="offset" />
                <feFlood floodColor="#052355" floodOpacity="0.42" result="tint" />
                <feComposite
                  in="tint"
                  in2="offset"
                  operator="in"
                  result="shadow"
                />
                <feComposite in="shadow" in2="SourceAlpha" operator="out" />
              </filter>
            </defs>
            <path d={PANEL_PATH} filter="url(#panelShadow)" />
            <path
              d={PANEL_PATH}
              fill="none"
              stroke="url(#panelEdge)"
              strokeWidth="0.75"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <div className="booking-panel-content">
            <div
              className="booking-tabs"
              role="tablist"
              aria-label="Xizmat turi"
              ref={tabsRef}
            >
              <span
                className="booking-tab-pill"
                aria-hidden="true"
                style={
                  {
                    "--pill-x": `${pill.x}px`,
                    "--pill-w": `${pill.w}px`,
                  } as CSSProperties
                }
              />
              {bookingTabs.map(({ key, labelKey, icon: Icon }) => (
                <button
                  key={key}
                  className={bookingType === key ? "selected" : ""}
                  type="button"
                  onClick={() => setBookingType(key)}
                  role="tab"
                  aria-selected={bookingType === key}
                >
                  <Icon size={17} /> {t(labelKey)}
                </button>
              ))}
            </div>
            <form className="booking-form" onSubmit={submitSearch}>
              <label>
                <span>{t("booking.from")}</span>
                <span className="field-line">
                  <input aria-label={t("booking.from")} defaultValue="Toshkent, UZB" />
                  <MapPin size={17} />
                </span>
              </label>
              <label>
                <span>{t("booking.to")}</span>
                <span className="field-line">
                  <input
                    aria-label={t("booking.to")}
                    defaultValue="Istalgan yo‘nalish"
                  />
                  <ArrowLeftRight size={17} />
                </span>
              </label>
              <label>
                <span>{t("booking.departure")}</span>
                <span className="field-line">
                  <input
                    aria-label={t("booking.departure")}
                    type="date"
                    defaultValue="2026-05-20"
                  />
                  <CalendarDays size={17} />
                </span>
              </label>
              <label>
                <span>{t("booking.return")}</span>
                <span className="field-line">
                  <input
                    aria-label={t("booking.return")}
                    type="date"
                    defaultValue="2026-05-27"
                  />
                  <CalendarDays size={17} />
                </span>
              </label>
              <label>
                <span>{t("booking.passengers")}</span>
                <span className="field-line">
                  <select aria-label={t("booking.passengers")}>
                    <option>2 Yo‘lovchi, Ekonom</option>
                    <option>1 Yo‘lovchi, Ekonom</option>
                    <option>2 Yo‘lovchi, Biznes</option>
                  </select>
                  <ArrowRight size={17} />
                </span>
              </label>
              <button
                className="search-button"
                type="submit"
                aria-label={t("booking.search")}
              >
                <Search size={23} />
              </button>
            </form>
            <div className="recent-searches">
              <strong>{t("booking.recent")}</strong>
              {[
                "Toshkent – Dubai",
                "Toshkent – Istanbul",
                "Toshkent – Bangkok",
              ].map((item) => (
                <button type="button" key={item}>
                  {item}
                </button>
              ))}
              <button
                type="button"
                className="recent-next"
                aria-label="Keyingi qidiruvlar"
              >
                <ChevronRight size={14} />
              </button>
              {searchMessage && (
                <span className="search-message">{searchMessage}</span>
              )}
            </div>
          </div>
        </div>
      </div>

      <section className="section shell" id="destinations">
        <div className="section-heading-row" data-reveal>
          <h2>{t("dest.title")}</h2>
          <div className="rail-actions">
            <Link href="/tours" style={{ color: "inherit", textDecoration: "none" }}>
              <span>{t("dest.viewAll")}</span>
            </Link>
            <button
              type="button"
              aria-label="Oldingi"
              onClick={() => scrollDestinations(-1)}
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Keyingi"
              onClick={() => scrollDestinations(1)}
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
        <div className="destination-grid" ref={destinationRail}>
          {destinations.map((destination, i) => (
            <Link href={`/tours/${destination.slug}`} key={destination.name} style={{ textDecoration: "none" }}>
              <article className="destination-card" data-reveal style={stagger(i % 4)}>
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  sizes="(max-width: 700px) 82vw, 25vw"
                />
                <div className="image-shade" />
                <div className="destination-copy">
                  <h3>{destination.name}</h3>
                  <p>{destination.meta}</p>
                  <strong>{destination.price}</strong>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section className="section package-section shell" id="packages">
        <div className="section-heading-row" data-reveal>
          <div>
            <p className="section-label">{t("pkg.label")}</p>
            <h2>{t("pkg.title")}</h2>
          </div>
          <SectionAction href="/tours" />
        </div>
        <div className="package-grid">
          {packages.map((item, i) => (
            <Link href={`/tours/${item.slug}`} key={item.name} style={{ textDecoration: "none" }}>
              <article
                className={`package-card ${item.tone === "dark" ? "package-dark" : ""}`}
                data-reveal
                style={stagger(i % 4)}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 700px) 82vw, 25vw"
                />
                <div className="package-shade" />
                {item.badge && (
                  <span className="package-badge">{item.badge}</span>
                )}
                <div className="package-copy">
                  <h3>{item.name}</h3>
                  <p>{item.duration}</p>
                  <ul>
                    {item.features.map((feat) => {
                      const IconComp = feat.icon;
                      return (
                        <li key={feat.text}>
                          <IconComp size={12} /> {feat.text}
                        </li>
                      );
                    })}
                  </ul>
                  <strong>{item.price}</strong>
                  <small>{t("offer.from")}</small>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section className="services section shell" id="services">
        <div className="services-intro" data-reveal="left">
          <p className="section-label">{t("services.label")}</p>
          <h2>
            {t("services.title")}
          </h2>
          <a className="primary-button" href="#booking">
            {t("services.btn")} <ArrowRight size={19} />
          </a>
        </div>
        <div className="service-list">
          <article data-reveal style={stagger(0)}>
            <span>
              <FileCheck2 size={24} />
            </span>
            <h3>{t("service1.title")}</h3>
            <p>{t("service1.desc")}</p>
          </article>
          <article data-reveal style={stagger(1)}>
            <span>
              <ShieldCheck size={24} />
            </span>
            <h3>{t("service2.title")}</h3>
            <p>{t("service2.desc")}</p>
          </article>
          <article data-reveal style={stagger(2)}>
            <span>
              <Headphones size={24} />
            </span>
            <h3>{t("service3.title")}</h3>
            <p>{t("service3.desc")}</p>
          </article>
          <article data-reveal style={stagger(3)}>
            <span>
              <CreditCard size={24} />
            </span>
            <h3>{t("service4.title")}</h3>
            <p>{t("service4.desc")}</p>
          </article>
        </div>
      </section>

      <div className="about-row shell" id="about">
        <div className="why-us-copy" data-reveal="left">
          <p>{t("why.label")}</p>
          <h2>{t("why.title")}</h2>
          <ul>
            <li>
              <Check size={15} /> {t("why.item1")}
            </li>
            <li>
              <Check size={15} /> {t("why.item2")}
            </li>
            <li>
              <Check size={15} /> {t("why.item3")}
            </li>
            <li>
              <Check size={15} /> {t("why.item4")}
            </li>
          </ul>
          <a className="primary-button" href="#booking">
            {t("why.btn")} <ArrowRight size={17} />
          </a>
        </div>
        <div className="stats-showcase" data-reveal="right">
          <div className="stats-image">
            <Image
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=90"
              alt="Tog'lar qarshisida turgan sayyoh"
              fill
              sizes="60vw"
            />
          </div>
          <div className="stats">
            <div>
              <strong>
                <CountUp value="12+" />
              </strong>
              <span>{t("stat.exp")}</span>
            </div>
            <div>
              <strong>
                <CountUp value="25K+" />
              </strong>
              <span>{t("stat.clients")}</span>
            </div>
            <div>
              <strong>
                <CountUp value="500+" />
              </strong>
              <span>{t("stat.dest")}</span>
            </div>
            <div>
              <strong>
                <CountUp value="98%" />
              </strong>
              <span>{t("stat.reviews")}</span>
            </div>
          </div>
        </div>
      </div>

      <section className="section testimonials shell">
        <div className="section-heading-row" data-reveal>
          <p className="section-label">{t("test.label")}</p>
          <SectionAction href="/tours" />
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item, i) => (
            <article
              className="testimonial-card"
              key={item.name}
              data-reveal
              style={stagger(i % 4)}
            >
              <span className="quote-mark">“</span>
              <p>{item.quote}</p>
              <div className="testimonial-bottom">
                <Image src={item.avatar} alt="" width={42} height={42} />
                <span>
                  <strong>{item.name}</strong>
                  <small>{item.city}</small>
                </span>
                <span className="stars" aria-label="5 yulduz">
                  <Star size={13} fill="currentColor" />
                  <Star size={13} fill="currentColor" />
                  <Star size={13} fill="currentColor" />
                  <Star size={13} fill="currentColor" />
                  <Star size={13} fill="currentColor" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />

      {videoOpen && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Sayohat videosi"
          data-closing={videoClosing ? "" : undefined}
          onClick={closeVideo}
        >
          <div className="video-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close"
              onClick={closeVideo}
              aria-label="Yopish"
            >
              <X />
            </button>
            <div className="video-poster">
              <Image
                src="/images/hero-plane-v2.png"
                alt="Sayohat videosi posteri"
                fill
                sizes="80vw"
              />
              <Play size={64} fill="currentColor" />
            </div>
            <div>
              <h2>Dunyo sizni kutmoqda</h2>
              <p>Lucky Tours bilan yangi manzillarni kashf eting.</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
