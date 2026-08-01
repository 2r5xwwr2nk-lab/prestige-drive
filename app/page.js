"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../components/LanguageProvider";
import Hero from "../components/Hero";

export default function HomePage() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <main>
      <Hero />

      {/* ÚVOD */}
      <section className="intro-section" id="uvod">
        <div className="page-container intro-grid">
          <div className="intro-heading">
            <p className="section-label">
              {t.intro.eyebrow}
            </p>

            <h2>{t.intro.title}</h2>
          </div>

          <div className="intro-copy">
            <p>{t.intro.textOne}</p>
            <p>{t.intro.textTwo}</p>

            <div className="intro-signature">
              <span>{t.intro.brand}</span>
              <small>{t.intro.slogan}</small>
            </div>
          </div>
        </div>
      </section>

      {/* SLUŽBY */}
      <section className="services-preview" id="sluzby">
        <div className="page-container">
          <div className="section-heading centered">
            <p className="section-label">
              {t.services.eyebrow}
            </p>

            <h2>{t.services.title}</h2>
          </div>

          <div className="services-grid">
            <article className="service-card service-card-wedding">
              <div className="service-overlay" />

              <div className="service-card-content">
                <span className="service-number">01</span>

                <h3>{t.services.weddingTitle}</h3>

                <p>{t.services.weddingText}</p>

                <Link href="/sluzby" className="text-link">
                  {t.services.weddingButton}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>

            <article className="service-card service-card-vip">
              <div className="service-overlay" />

              <div className="service-card-content">
                <span className="service-number">02</span>

                <h3>{t.services.vipTitle}</h3>

                <p>{t.services.vipText}</p>

                <Link href="/sluzby" className="text-link">
                  {t.services.vipButton}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SVADOBNÉ BALÍKY */}
      <section className="packages-preview" id="baliky">
        <div className="page-container">
          <div className="section-heading centered">
            <p className="section-label">
              {t.packages.eyebrow}
            </p>

            <h2>{t.packages.title}</h2>

            <p className="section-subtitle">
              {t.packages.subtitle}
            </p>
          </div>

          <div className="packages-grid">
            {/* PRESTIGE BASIC */}
            <article className="package-card">
              <div className="package-top">
                <p className="package-name">
                  {t.packages.basicName}
                </p>

                <p className="package-price">
                  {t.packages.basicPrice}
                </p>
              </div>

              <p className="package-description">
                {t.packages.basicText}
              </p>

              <ul className="package-features">
                {t.packages.basicFeatures.map((feature) => (
                  <li key={feature}>
                    <span aria-hidden="true">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="package-extras">
                <p>{t.packages.extrasLabel}</p>

                {t.packages.basicExtras.map((extra) => (
                  <span key={extra}>
                    + {extra}
                  </span>
                ))}
              </div>

              <Link
                href="/kontakt"
                className="button button-outline-dark"
              >
                {t.packages.basicButton}
              </Link>
            </article>

            {/* PRESTIGE GOLD */}
            <article className="package-card package-card-gold">
              <div className="package-badge">
                {t.packages.goldBadge}
              </div>

              <div className="package-top">
                <p className="package-name">
                  {t.packages.goldName}
                </p>

                <p className="package-price">
                  {t.packages.goldPrice}
                </p>
              </div>

              <p className="package-description">
                {t.packages.goldText}
              </p>

              <ul className="package-features">
                {t.packages.goldFeatures.map((feature) => (
                  <li key={feature}>
                    <span aria-hidden="true">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/kontakt"
                className="button button-gold"
              >
                {t.packages.goldButton}
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* PREČO PRESTIGE */}
      <section className="why-section" id="preco-my">
        <div className="page-container why-grid">
          <div className="why-heading">
            <p className="section-label">
              {t.whyUs.eyebrow}
            </p>

            <h2>
              {t.whyUs.titleTop}
              <br />
              {t.whyUs.titleBottom}
            </h2>

            <div className="why-line" />
          </div>

          <div className="why-list">
            {t.whyUs.items.map((item, index) => (
              <article
                className="why-item"
                key={`${item.title}-${index}`}
              >
                <span className="why-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALÉRIA */}
      <section className="gallery-preview" id="galeria">
        <div className="page-container">
          <div className="gallery-heading-row">
            <div className="section-heading">
              <p className="section-label">
                {t.gallery.eyebrow}
              </p>

              <h2>{t.gallery.title}</h2>

              <p className="section-subtitle">
                {t.gallery.text}
              </p>
            </div>

            <Link
              href="/galeria"
              className="button button-outline-dark"
            >
              {t.gallery.button}
            </Link>
          </div>

          <div className="gallery-grid">
            <article className="gallery-item gallery-item-large">
              <Image
                src="/images/wedding-hero.png"
                alt={t.galleryPage.images.wedding}
                fill
                sizes="(max-width: 820px) 100vw, 66vw"
              />
            </article>

            <article className="gallery-item gallery-item-forbes">
              <Image
                src="/images/53205.jpg"
                alt={t.galleryPage.images.premiumRide}
                fill
                sizes="(max-width: 820px) 100vw, 34vw"
              />
            </article>

            <article className="gallery-item gallery-item-dark">
              <div className="gallery-quote">
                <p className="gallery-quote-eyebrow">
                  {t.gallery.quoteEyebrow}
                </p>

                <h3>
                  {t.gallery.quoteTitle}
                  <span>{t.gallery.quoteBottom}</span>
                </h3>

                <div
                  className="gallery-stars"
                  aria-label={t.gallery.starsAria}
                >
                  <span aria-hidden="true">★</span>
                  <span aria-hidden="true">★</span>
                  <span aria-hidden="true">★</span>
                  <span aria-hidden="true">★</span>
                  <span aria-hidden="true">★</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer" id="kontakt">
        <div className="page-container footer-main">
          <div className="footer-brand">
            <Image
              src="/images/51300.png"
              alt={t.footer.brand}
              width={68}
              height={68}
            />

            <div>
              <h3>{t.footer.brand}</h3>
              <p>{t.footer.slogan}</p>
            </div>
          </div>

          <div className="footer-contact">
            <a href="tel:+421947969596">
              {t.contactPage.phone}
            </a>

            <a href="mailto:prestigedriveransfer@gmail.com">
              {t.contactPage.email}
            </a>

            <span>
              {t.contactPage.addressLineOne},{" "}
              {t.contactPage.addressLineTwo}
            </span>
          </div>

          <nav
            className="footer-nav"
            aria-label={t.footer.navigationAria}
          >
            <Link href="/">
              {t.footer.home}
            </Link>

            <Link href="/sluzby">
              {t.footer.services}
            </Link>

            <Link href="/galeria">
              {t.footer.gallery}
            </Link>

            <Link href="/kontakt">
              {t.footer.contact}
            </Link>
          </nav>
        </div>

        <div className="page-container footer-bottom">
          <p>
            © {currentYear} {t.footer.brand}.{" "}
            {t.footer.rights}
          </p>

          <p>{t.footer.website}</p>
        </div>
      </footer>
    </main>
  );
}