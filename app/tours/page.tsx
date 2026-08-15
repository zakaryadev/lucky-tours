"use client";

import Image from "next/image";
import Link from "next/link";
import { startTransition, useState, ViewTransition } from "react";
import { ArrowRight, Calendar, Compass, MapPin, Search, Star } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageTransition } from "@/components/page-transition";
import { useLanguage } from "@/context/LanguageContext";
import { toursList } from "@/lib/toursData";

export default function ToursPage() {
  const { lang, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("all");

  // Oddiy setState VT'ni ishga tushirmaydi — startTransition ichida kartochkalar
  // eski o'rnidan yangisiga siljiydi (FLIP tekin), birdan almashmaydi.
  const filterByCountry = (slug: string) =>
    startTransition(() => setSelectedCountry(slug));

  const filteredTours = toursList.filter((tour) => {
    const titleMatch =
      tour.title[lang].toLowerCase().includes(searchTerm.toLowerCase()) ||
      tour.country[lang].toLowerCase().includes(searchTerm.toLowerCase()) ||
      tour.city[lang].toLowerCase().includes(searchTerm.toLowerCase());

    const countryMatch =
      selectedCountry === "all" ||
      tour.slug.toLowerCase() === selectedCountry.toLowerCase();

    return titleMatch && countryMatch;
  });

  return (
    <PageTransition>
      <div className="tours-page-wrapper">
        <div className="tours-hero-bg">
          <SiteHeader />
          <div className="shell tours-hero-content">
            <p className="section-label" style={{ color: "white" }}>
              LUCKY TOURS
            </p>
            <h1>{t("tours.title")}</h1>
            <p className="tours-hero-desc">{t("tours.subtitle")}</p>

            <div className="tours-search-bar">
              <Search size={20} className="search-icon" />
              <input
                type="text"
                placeholder={t("tours.search")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        <main className="shell section tours-main">
          {/* Country Filter Pills */}
          <div className="country-filters">
            <button
              type="button"
              className={`filter-btn ${selectedCountry === "all" ? "active" : ""}`}
              onClick={() => filterByCountry("all")}
            >
              {t("tours.all")}
            </button>
            {toursList.map((tour) => (
              <button
                key={tour.slug}
                type="button"
                className={`filter-btn ${selectedCountry === tour.slug ? "active" : ""}`}
                onClick={() => filterByCountry(tour.slug)}
              >
                {tour.country[lang]}
              </button>
            ))}
          </div>

          {/* Tours Cards Grid — filtr o'zgarganda krossfeyd (share="auto"),
              sahifa navigatsiyasida jim (default="none"). */}
          <ViewTransition
            key={selectedCountry}
            name="tours-grid"
            share="auto"
            default="none"
          >
            <div className="tours-grid">
              {filteredTours.length > 0 ? (
                filteredTours.map((tour) => (
                  <article key={tour.slug} className="tour-card-full">
                    <div className="tour-card-image">
                      {/* Kartochka rasmi → detal galereya rasmiga aylanadi.
                          tour.image === gallery[0] bo'lgani uchun morph silliq. */}
                      <ViewTransition
                        name={`tour-${tour.slug}`}
                        share="morph"
                        default="none"
                      >
                        <Image
                          src={tour.image}
                          alt={tour.title[lang]}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </ViewTransition>
                      <div className="tour-card-badge-row">
                        {tour.badge && (
                          <span className="tour-badge">{tour.badge[lang]}</span>
                        )}
                        <span className="tour-rating">
                          <Star size={13} fill="currentColor" /> {tour.rating}
                        </span>
                      </div>
                    </div>

                    <div className="tour-card-body">
                      <div className="tour-meta-row">
                        <span>
                          <MapPin size={14} /> {tour.city[lang]}
                        </span>
                        <span>
                          <Calendar size={14} /> {tour.duration[lang]}
                        </span>
                      </div>

                      <h3>{tour.title[lang]}</h3>
                      <p className="tour-desc-snippet">{tour.description[lang]}</p>

                      <div className="tour-highlights-mini">
                        {tour.highlights[lang].slice(0, 2).map((item, idx) => (
                          <span key={idx} className="highlight-pill">
                            <Compass size={12} /> {item}
                          </span>
                        ))}
                      </div>

                      <div className="tour-card-footer">
                        <div className="tour-price">
                          <strong>{tour.price}</strong>
                          <small>{t("tours.priceFrom")}</small>
                        </div>

                        <Link
                          href={`/tours/${tour.slug}`}
                          className="primary-button"
                          transitionTypes={["nav-forward"]}
                        >
                          {t("tours.details")} <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))
              ) : (
                <div className="no-tours-found">
                  <p>Topilmadi / No tours match your search criteria.</p>
                </div>
              )}
            </div>
          </ViewTransition>
        </main>

        <SiteFooter />
      </div>
    </PageTransition>
  );
}
