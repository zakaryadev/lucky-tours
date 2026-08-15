"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { CSSProperties, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

function UzCircleFlag() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ borderRadius: "50%", display: "block" }}
    >
      <clipPath id="uz-circle">
        <circle cx="16" cy="16" r="16" />
      </clipPath>
      <g clipPath="url(#uz-circle)">
        <rect width="32" height="10" fill="#0099B5" />
        <rect y="10" width="32" height="1" fill="#CE1126" />
        <rect y="11" width="32" height="10" fill="#FFFFFF" />
        <rect y="21" width="32" height="1" fill="#CE1126" />
        <rect y="22" width="32" height="10" fill="#1EB53A" />
        {/* Crescent */}
        <circle cx="6" cy="5" r="2.8" fill="#FFFFFF" />
        <circle cx="7.2" cy="5" r="2.2" fill="#0099B5" />
        {/* Stars */}
        <circle cx="11" cy="3.2" r="0.6" fill="#FFFFFF" />
        <circle cx="13" cy="3.2" r="0.6" fill="#FFFFFF" />
        <circle cx="15" cy="3.2" r="0.6" fill="#FFFFFF" />
        <circle cx="11" cy="5" r="0.6" fill="#FFFFFF" />
        <circle cx="13" cy="5" r="0.6" fill="#FFFFFF" />
        <circle cx="15" cy="5" r="0.6" fill="#FFFFFF" />
        <circle cx="11" cy="6.8" r="0.6" fill="#FFFFFF" />
        <circle cx="13" cy="6.8" r="0.6" fill="#FFFFFF" />
        <circle cx="15" cy="6.8" r="0.6" fill="#FFFFFF" />
      </g>
    </svg>
  );
}

function UkCircleFlag() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ borderRadius: "50%", display: "block" }}
    >
      <clipPath id="uk-circle">
        <circle cx="16" cy="16" r="16" />
      </clipPath>
      <g clipPath="url(#uk-circle)">
        <rect width="32" height="32" fill="#012169" />
        <path d="M0,0 L32,32 M32,0 L0,32" stroke="#FFFFFF" strokeWidth="6" />
        <path d="M0,0 L32,32 M32,0 L0,32" stroke="#C8102E" strokeWidth="3.5" />
        <path d="M16,0 V32 M0,16 H32" stroke="#FFFFFF" strokeWidth="10" />
        <path d="M16,0 V32 M0,16 H32" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.tours"), href: "/tours" },
    { label: t("nav.destinations"), href: "/#destinations" },
    { label: t("nav.packages"), href: "/#packages" },
    { label: t("nav.services"), href: "/#services" },
    { label: t("nav.about"), href: "/#about" },
    { label: t("nav.contact"), href: "/#contact" },
  ];

  const toggleLanguage = () => {
    setLang(lang === "uz" ? "en" : "uz");
  };

  return (
    <header
      className="site-header shell"
      style={{ viewTransitionName: "site-header" } as CSSProperties}
    >
      <Link className="brand" href="/" aria-label="Lucky Tours">
        <span className="brand-mark">
          <Image
            src="/logo.svg"
            alt="Lucky Tours"
            width={140}
            height={52}
            priority
          />
        </span>
      </Link>

      <nav
        className={`nav ${menuOpen ? "nav-open" : ""}`}
        aria-label="Asosiy navigatsiya"
      >
        {navItems.map((item, i) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            style={{ "--i": i } as CSSProperties}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="header-actions">
        {/* Single Circular Flag Button Language Switcher */}
        <button
          type="button"
          className="lang-circle-toggle"
          onClick={toggleLanguage}
          aria-label={`Switch language to ${lang === "uz" ? "English" : "O'zbekcha"}`}
          title={
            lang === "uz"
              ? "O'zbekcha — English tili uchun bosing"
              : "English — O'zbek tili uchun bosing"
          }
        >
          {lang === "uz" ? <UzCircleFlag /> : <UkCircleFlag />}
        </button>

        <a className="phone-pill" href="tel:+998956760066">
          <Phone size={16} /> +998 95 676 00 66
        </a>

        <Link className="primary-button header-plan-btn" href="/#booking">
          {t("hero.btn.plan")}
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-label="Menyuni ochish"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
