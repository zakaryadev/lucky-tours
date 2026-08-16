"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Check,
  Copy,
  Download,
  ExternalLink,
  Maximize2,
  PhoneCall,
  QrCode,
  ShieldCheck,
  Smartphone,
  X,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageTransition } from "@/components/page-transition";
import { useLanguage } from "@/context/LanguageContext";

export default function PaymentPage() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const recipientName = "SHAXRUX AXMEDOV OLIMJON O'G'LI";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(recipientName);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API is not permitted
      const textArea = document.createElement("textarea");
      textArea.value = recipientName;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const supportedApps = [
    { name: "Payme", color: "#00CCCC" },
    { name: "Click", color: "#0088FF" },
    { name: "Uzum Bank", color: "#7000FF" },
    { name: "Anorbank", color: "#E60000" },
    { name: "Milliy (NBU)", color: "#00529C" },
    { name: "Agrobank", color: "#00A859" },
    { name: "Kapitalbank", color: "#E30613" },
    { name: "Hamkorbank", color: "#0066B3" },
    { name: "Ipak Yuli Bank", color: "#1B365D" },
    { name: "SQB Bank", color: "#004B87" },
  ];

  return (
    <PageTransition>
      <div className="payment-page-wrapper">
        <div className="payment-hero-bg">
          <SiteHeader />
          <div className="shell payment-hero-content">
            <p className="section-label" style={{ color: "rgba(255, 255, 255, 0.85)" }}>
              {t("payment.heroLabel")}
            </p>
            <h1>{t("payment.heroTitle")}</h1>
            <p className="payment-hero-desc">{t("payment.heroDesc")}</p>
          </div>
        </div>

        <main className="shell payment-main-section">
          <div className="payment-grid">
            {/* Left Column: QR Poster Card & Recipient Info */}
            <div className="payment-left-col">
              <div className="qr-poster-card">
                <div className="qr-header-badge">
                  <ShieldCheck size={16} />
                  <span>Paynet Rasmiy To'lov KODI</span>
                </div>

                <div
                  className="qr-image-wrapper"
                  onClick={() => setIsZoomed(true)}
                  title="Kattalashtirish uchun bosing"
                >
                  <Image
                    src="/payment.png"
                    alt="Paynet QR To'lov KODI"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 340px"
                  />
                </div>

                <div className="qr-actions-row">
                  <button
                    type="button"
                    className="qr-action-btn"
                    onClick={() => setIsZoomed(true)}
                  >
                    <Maximize2 size={15} />
                    <span>Kattalashtirish</span>
                  </button>
                  <a
                    href="/payment.png"
                    download="luckytours-paynet-qr.png"
                    className="qr-action-btn"
                  >
                    <Download size={15} />
                    <span>{t("payment.downloadQr")}</span>
                  </a>
                </div>
              </div>

              {/* Recipient Details Card */}
              <div className="recipient-card">
                <div className="recipient-header">
                  <span>{t("payment.recipientLabel")}</span>
                  <span style={{ color: "#0c5bea" }}>{t("payment.systemName")}</span>
                </div>
                <div className="recipient-name-row">
                  <div className="recipient-name">{recipientName}</div>
                  <button
                    type="button"
                    className={`copy-button ${copied ? "copied" : ""}`}
                    onClick={handleCopy}
                  >
                    {copied ? (
                      <>
                        <Check size={14} />
                        <span>{t("payment.copiedBtn")}</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>{t("payment.copyBtn")}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Steps & Supported Apps & Support Card */}
            <div className="payment-right-col">
              {/* Step-by-Step Instructions */}
              <div className="steps-card">
                <h3>{t("payment.stepsTitle")}</h3>
                <div className="steps-list">
                  <div className="step-item">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h4>{t("payment.step1Title")}</h4>
                      <p>{t("payment.step1Desc")}</p>
                    </div>
                  </div>

                  <div className="step-item">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h4>{t("payment.step2Title")}</h4>
                      <p>{t("payment.step2Desc")}</p>
                    </div>
                  </div>

                  <div className="step-item">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h4>{t("payment.step3Title")}</h4>
                      <p>{t("payment.step3Desc")}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Supported Payment Apps */}
              <div className="supported-apps-card">
                <h3>{t("payment.supportedApps")}</h3>
                <p>QR kodni istalgan to'lov va bank ilovalaridan skanerlab to'lashingiz mumkin:</p>
                <div className="apps-tags-grid">
                  {supportedApps.map((app) => (
                    <div key={app.name} className="app-tag">
                      <span
                        className="app-icon-dot"
                        style={{ backgroundColor: app.color }}
                      >
                        {app.name.charAt(0)}
                      </span>
                      <span>{app.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Support Card */}
              <div className="payment-help-card">
                <div>
                  <h4>{t("payment.helpTitle")}</h4>
                  <p>{t("payment.helpDesc")}</p>
                </div>
                <a href="tel:+998956760066" className="primary-button">
                  <PhoneCall size={16} />
                  <span>{t("payment.callSupport")}</span>
                </a>
              </div>
            </div>
          </div>
        </main>

        <SiteFooter />

        {/* Modal for Zoomed QR Code */}
        {isZoomed && (
          <div
            className="qr-modal-overlay"
            onClick={() => setIsZoomed(false)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              backgroundColor: "rgba(3, 20, 46, 0.85)",
              backdropFilter: "blur(12px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <div
              className="qr-modal-content"
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                maxWidth: "520px",
                width: "100%",
                background: "white",
                borderRadius: "24px",
                padding: "24px",
                boxShadow: "0 24px 60px rgba(0,0,0,0.3)",
              }}
            >
              <button
                type="button"
                onClick={() => setIsZoomed(false)}
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "none",
                  background: "#f0f4f9",
                  color: "#0a2548",
                  display: "grid",
                  placeItems: "center",
                  cursor: "pointer",
                }}
              >
                <X size={20} />
              </button>

              <h3 style={{ margin: "0 0 16px", fontSize: "18px", color: "#062a5c" }}>
                Paynet QR To'lov KODI
              </h3>

              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "1 / 1.35",
                  borderRadius: "16px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/payment.png"
                  alt="Paynet QR Code Zoomed"
                  fill
                  sizes="520px"
                  style={{ objectFit: "contain" }}
                />
              </div>

              <div style={{ marginTop: "18px", textAlign: "center" }}>
                <p style={{ margin: "0 0 12px", fontSize: "14px", fontWeight: 700, color: "#062a5c" }}>
                  Qabul qiluvchi: {recipientName}
                </p>
                <a
                  href="/payment.png"
                  download="luckytours-paynet-qr.png"
                  className="primary-button"
                  style={{ width: "100%" }}
                >
                  <Download size={16} />
                  <span>{t("payment.downloadQr")}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
}
