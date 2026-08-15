"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone, Send, Youtube } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="footer" id="contact">
      <div className="shell footer-grid">
        <div className="footer-brand" data-reveal style={{ "--i": 0 } as React.CSSProperties}>
          <Link className="brand" href="/">
            <span className="brand-mark">
              <Image
                src="/logo.svg"
                alt="Lucky Tours"
                width={140}
                height={52}
              />
            </span>
          </Link>
          <p>{t("footer.desc")}</p>
          <div className="socials">
            <a href="#" aria-label="Instagram">
              <Instagram size={17} />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook size={17} />
            </a>
            <a href="#" aria-label="Telegram">
              <Send size={17} />
            </a>
            <a href="#" aria-label="YouTube">
              <Youtube size={17} />
            </a>
          </div>
        </div>
        <div className="footer-column" data-reveal style={{ "--i": 1 } as React.CSSProperties}>
          <h3>{t("footer.col1")}</h3>
          <Link href="/#about">{t("nav.about")}</Link>
          <Link href="/tours">{t("nav.tours")}</Link>
          <Link href="/#services">{t("nav.services")}</Link>
          <Link href="/#contact">{t("nav.contact")}</Link>
        </div>
        <div className="footer-column" data-reveal style={{ "--i": 2 } as React.CSSProperties}>
          <h3>{t("footer.col2")}</h3>
          <Link href="/tours/turkiya">Turkiya & BAA</Link>
          <Link href="/tours/gruziya">Gruziya & Azarbayjon</Link>
          <Link href="/tours/tailand">Tailand & Malayziya</Link>
          <Link href="/tours/xitoy">Xitoy & Vetnam</Link>
        </div>
        <div className="footer-column" data-reveal style={{ "--i": 3 } as React.CSSProperties}>
          <h3>{t("footer.col3")}</h3>
          <Link href="/#services">FAQ</Link>
          <Link href="/#contact">Foydalanish shartlari</Link>
          <Link href="/#contact">Maxfiylik siyosati</Link>
        </div>
        <div className="footer-column contact-column" data-reveal style={{ "--i": 4 } as React.CSSProperties}>
          <h3>{t("footer.col4")}</h3>
          <a href="tel:+998712000001">
            <Phone size={16} /> +998 71 200 00 01
          </a>
          <a href="mailto:info@luckytours.uz">
            <Mail size={16} /> info@luckytours.uz
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=41.274361,69.213694"
            target="_blank"
            rel="noopener noreferrer"
            title="Google Xaritalarda ko‘rish (41°16'27.7&quot;N 69°12'49.3&quot;E)"
          >
            <MapPin size={16} /> Toshkent Shahri Chilonzor ko’chasi 87 dom 13-uy
          </a>
        </div>
      </div>
      <div className="footer-bottom shell">
        <span>{t("footer.rights")}</span>
        <span>{t("footer.studio")}</span>
      </div>
    </footer>
  );
}
