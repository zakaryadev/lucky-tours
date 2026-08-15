"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  useState,
  FormEvent,
  useEffect,
  useCallback,
  ViewTransition,
} from "react";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Compass,
  Expand,
  Grid,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Star,
  X,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageTransition } from "@/components/page-transition";
import { useLanguage } from "@/context/LanguageContext";
import { toursList } from "@/lib/toursData";

export default function TourDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { lang, t } = useLanguage();

  const [bookingSent, setBookingSent] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "itinerary">(
    "overview",
  );

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const tour = toursList.find(
    (item) => item.slug.toLowerCase() === slug?.toLowerCase(),
  );

  const openLightbox = (index: number) => {
    setActiveImageIdx(index);
    setLightboxOpen(true);
  };

  const nextImage = useCallback(() => {
    if (!tour) return;
    setActiveImageIdx((prev) => (prev + 1) % tour.gallery.length);
  }, [tour]);

  const prevImage = useCallback(() => {
    if (!tour) return;
    setActiveImageIdx(
      (prev) => (prev - 1 + tour.gallery.length) % tour.gallery.length,
    );
  }, [tour]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, nextImage, prevImage]);

  if (!tour) {
    return (
      <div>
        <SiteHeader />
        <div
          className="shell section"
          style={{ minHeight: "60vh", paddingTop: "120px" }}
        >
          <h2>Tur topilmadi / Tour not found</h2>
          <p>Kechirasiz, siz qidirgan tur topilmadi.</p>
          <Link
            href="/tours"
            className="primary-button"
            style={{ marginTop: "20px" }}
          >
            <ArrowLeft size={16} /> {t("detail.back")}
          </Link>
        </div>
        <SiteFooter />
      </div>
    );
  }

  const handleBooking = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBookingSent(true);
  };

  const otherTours = toursList
    .filter((item) => item.slug !== tour.slug)
    .slice(0, 3);
  const galleryImages = tour.gallery;
  const mainImage = galleryImages[0];
  const thumbImages = galleryImages.slice(1, 5);

  return (
    <PageTransition>
      <div className="tour-detail-wrapper">
        <div className="tour-detail-hero-bg">
          <SiteHeader />

          <div className="shell tour-detail-hero">
            <Link
              href="/tours"
              className="back-link"
              transitionTypes={["nav-back"]}
            >
              <ArrowLeft size={16} /> {t("detail.back")}
            </Link>

            <div className="tour-hero-header">
              <div>
                <p className="hero-pretitle" style={{ marginBottom: "8px" }}>
                  LUCKY TOURS • PREMIYUM SAYOHAT
                </p>
                <span className="country-badge">
                  <MapPin size={14} /> {tour.country[lang]} — {tour.city[lang]}
                </span>
                <h1>{tour.title[lang]}</h1>
              </div>

              <div className="tour-hero-price-box">
                <span className="price-label">{t("detail.price")}</span>
                <strong>{tour.price}</strong>
                <small>{t("tours.priceFrom")}</small>
              </div>
            </div>

            <div className="tour-quick-info">
              <div className="info-chip">
                <Clock size={16} />
                <span>
                  <strong>{t("detail.duration")}:</strong> {tour.duration[lang]}
                </span>
              </div>
              <div className="info-chip">
                <Star size={16} className="star-icon" fill="currentColor" />
                <span>
                  <strong>{t("detail.rating")}:</strong> {tour.rating} (
                  {tour.reviewsCount})
                </span>
              </div>
              <div className="info-chip">
                <ShieldCheck size={16} />
                <span>
                  <strong>Kafolat:</strong> 100% Ishonchli
                </span>
              </div>
            </div>
          </div>
        </div>

        <main className="shell section tour-detail-content">
          {/* Interactive Gallery Layout */}
          <div className="interactive-gallery-container">
            {/* Main Large Image */}
            <div
              className="gallery-main-featured"
              onClick={() => openLightbox(0)}
              role="button"
              tabIndex={0}
              aria-label="Rasmni katta ko&#39;rish"
            >
              <ViewTransition
                name={`tour-${tour.slug}`}
                share="morph"
                default="none"
              >
                <Image
                  src={mainImage}
                  alt={tour.title[lang]}
                  fill
                  sizes="(max-width: 900px) 100vw, 60vw"
                  priority
                  quality={80}
                />
              </ViewTransition>
              <div className="gallery-hover-overlay">
                <span className="expand-pill">
                  <Expand size={16} /> Rasmlarni ko&#39;rish (
                  {galleryImages.length})
                </span>
              </div>
            </div>

            {/* Thumbnails Grid */}
            <div className="gallery-thumbs-grid">
              {thumbImages.map((imgUrl, idx) => {
                const realIndex = idx + 1;
                const isLast = idx === 3 && galleryImages.length > 5;
                const remainingCount = galleryImages.length - 5;

                return (
                  <div
                    key={idx}
                    className="gallery-thumb-item"
                    onClick={() => openLightbox(realIndex)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Rasm ${realIndex + 1}`}
                  >
                    <Image
                      src={imgUrl}
                      alt={`${tour.title[lang]} - ${realIndex + 1}`}
                      fill
                      sizes="(max-width: 900px) 50vw, 20vw"
                      quality={75}
                    />
                    <div className="thumb-hover-overlay">
                      <Expand size={18} />
                    </div>

                    {isLast && remainingCount > 0 && (
                      <div className="more-photos-overlay">
                        <Grid size={18} />
                        <span>+{remainingCount + 1} foto</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Main 2-Column Section */}
          <div className="detail-layout">
            {/* Left Main Column */}
            <div className="detail-main-col">
              {/* Nav Tabs Bar */}
              <div className="detail-tabs-capsule">
                <button
                  type="button"
                  className={activeTab === "overview" ? "selected" : ""}
                  onClick={() => setActiveTab("overview")}
                >
                  {t("detail.overview")}
                </button>
                <button
                  type="button"
                  className={activeTab === "itinerary" ? "selected" : ""}
                  onClick={() => setActiveTab("itinerary")}
                >
                  {t("detail.itinerary")}
                </button>
              </div>

              {activeTab === "overview" ? (
                <div className="tab-content">
                  {/* Description */}
                  <section className="detail-card-block">
                    <p className="section-label">SAYOHAT TAFSILOTLARI</p>
                    <h2>{t("detail.overview")}</h2>
                    <p className="detail-description">
                      {tour.description[lang]}
                    </p>
                  </section>

                  {/* Highlights */}
                  <section className="detail-card-block">
                    <p className="section-label">ASOSIY AFZALLIKLAR</p>
                    <h2>{t("detail.highlights")}</h2>
                    <ul className="highlights-list">
                      {tour.highlights[lang].map((highlight, idx) => (
                        <li key={idx}>
                          <span className="icon-badge">
                            <Compass size={18} />
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* Included & Excluded */}
                  <section className="detail-card-block grid-2-col-clean">
                    <div className="inc-box">
                      <h3 className="inc-title">
                        <Check size={18} /> {t("detail.included")}
                      </h3>
                      <ul>
                        {tour.included[lang].map((item, idx) => (
                          <li key={idx}>
                            <Check size={14} className="check-icon" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="exc-box">
                      <h3 className="exc-title">
                        <X size={18} /> {t("detail.excluded")}
                      </h3>
                      <ul>
                        {tour.excluded[lang].map((item, idx) => (
                          <li key={idx}>
                            <X size={14} className="x-icon" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>
                </div>
              ) : (
                <div className="tab-content">
                  {/* Daily Itinerary */}
                  <section className="detail-card-block">
                    <p className="section-label">KUNLIK DASTUR</p>
                    <h2>{t("detail.itinerary")}</h2>
                    <div className="itinerary-timeline">
                      {tour.itinerary.map((step) => (
                        <div key={step.day} className="itinerary-step">
                          <div className="step-badge">
                            {step.day}-{t("detail.day")}
                          </div>
                          <div className="step-body">
                            <h3>{step.title[lang]}</h3>
                            <p>{step.text[lang]}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              )}
            </div>

            {/* Right Sidebar Column */}
            <aside className="detail-sidebar-col">
              <div className="booking-card-sticky">
                <div className="sidebar-price-header">
                  <div>
                    <span className="small-label">{t("detail.price")}</span>
                    <div className="price-big">{tour.price}</div>
                  </div>
                  <span className="badge-pill">{tour.duration[lang]}</span>
                </div>

                {!bookingSent ? (
                  <form className="sidebar-form" onSubmit={handleBooking}>
                    <h3>Turga ariza qoldirish</h3>
                    <p className="form-subtext">
                      Menejerimiz 10 daqiqa ichida siz bilan bog&#39;lanadi.
                    </p>

                    <label>
                      <span>Ismingiz</span>
                      <input
                        type="text"
                        required
                        placeholder="Masalan: Azizbek"
                      />
                    </label>

                    <label>
                      <span>Telefon raqamingiz</span>
                      <input type="tel" required defaultValue="+998 90 " />
                    </label>

                    <label>
                      <span>Taxminiy sayohat sanasi</span>
                      <input type="date" required defaultValue="2026-05-20" />
                    </label>

                    <button type="submit" className="primary-button full-width">
                      {t("detail.book")} <ArrowRight size={16} />
                    </button>
                  </form>
                ) : (
                  <div className="booking-success-box">
                    <div className="success-icon">
                      <Check size={28} />
                    </div>
                    <h3>Arizangiz qabul qilindi!</h3>
                    <p>
                      Tez orada menejerimiz siz bilan bog&#39;lanib, barcha
                      ma&#39;lumotlarni beradi.
                    </p>
                    <button
                      type="button"
                      className="secondary-btn"
                      onClick={() => setBookingSent(false)}
                    >
                      Yangi ariza qoldirish
                    </button>
                  </div>
                )}

                <div className="manager-contact-links">
                  <p className="mgr-label">{t("detail.contact")}:</p>
                  <a href="tel:+998956760066" className="contact-chip">
                    <Phone size={15} /> +998 95 676 00 66
                  </a>
                  <a
                    href="https://t.me/luckytours"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-chip telegram"
                  >
                    <Send size={15} /> Telegram orqali yozish
                  </a>
                </div>
              </div>
            </aside>
          </div>

          {/* Other Recommended Tours */}
          <section className="related-tours-section">
            <div className="section-heading-row">
              <div>
                <p className="section-label">TAVSIYA ETILADIGAN TURLAR</p>
                <h2>Boshqa mashhur yo&#39;nalishlar</h2>
              </div>
              <Link className="section-action" href="/tours">
                <span>Barchasini ko&lsquo;rish</span>
                <span className="round-arrow">
                  <ArrowRight size={18} />
                </span>
              </Link>
            </div>
            <div className="tours-grid mini">
              {otherTours.map((item) => (
                <article key={item.slug} className="tour-card-full">
                  <div className="tour-card-image">
                    <ViewTransition
                      name={`tour-${item.slug}`}
                      share="morph"
                      default="none"
                    >
                      <Image
                        src={item.image}
                        alt={item.title[lang]}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        quality={75}
                      />
                    </ViewTransition>
                  </div>
                  <div className="tour-card-body">
                    <div className="tour-meta-row">
                      <span>
                        <MapPin size={14} /> {item.city[lang]}
                      </span>
                      <span>
                        <Calendar size={14} /> {item.duration[lang]}
                      </span>
                    </div>
                    <h3>{item.title[lang]}</h3>
                    <div className="tour-card-footer">
                      <div className="tour-price">
                        <strong>{item.price}</strong>
                      </div>
                      <Link
                        href={`/tours/${item.slug}`}
                        className="primary-button"
                        transitionTypes={["nav-forward"]}
                      >
                        {t("tours.details")} <ChevronRight size={16} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>

        {/* FULLSCREEN LIGHTBOX MODAL */}
        {lightboxOpen && (
          <div className="lightbox-backdrop">
            <div className="lightbox-topbar">
              <span className="lightbox-counter">
                {activeImageIdx + 1} / {galleryImages.length}
              </span>
              <span className="lightbox-title">{tour.title[lang]}</span>
              <button
                type="button"
                className="lightbox-close-btn"
                onClick={() => setLightboxOpen(false)}
                aria-label="Yopish"
              >
                <X size={24} />
              </button>
            </div>

            <div className="lightbox-stage">
              <button
                type="button"
                className="lightbox-arrow left"
                onClick={prevImage}
                aria-label="Oldingi rasm"
              >
                <ChevronLeft size={32} />
              </button>

              <div className="lightbox-active-img-wrapper">
                <Image
                  src={galleryImages[activeImageIdx]}
                  alt={`${tour.title[lang]} - foto ${activeImageIdx + 1}`}
                  fill
                  className="lightbox-active-img"
                  priority
                  quality={90}
                />
              </div>

              <button
                type="button"
                className="lightbox-arrow right"
                onClick={nextImage}
                aria-label="Keyingi rasm"
              >
                <ChevronRight size={32} />
              </button>
            </div>

            {/* Bottom Thumbnails Strip */}
            <div className="lightbox-thumb-strip">
              {galleryImages.map((imgUrl, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`lightbox-strip-item ${activeImageIdx === idx ? "active" : ""}`}
                  onClick={() => setActiveImageIdx(idx)}
                >
                  <Image
                    src={imgUrl}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    sizes="80px"
                    quality={60}
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        <SiteFooter />
      </div>
    </PageTransition>
  );
}
