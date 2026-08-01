"use client";

import Link from "next/link";
import { useLanguage } from "../../components/LanguageProvider";

export default function ServicesPage() {
  const { t } = useLanguage();
  const page = t.servicesPage;

  return (
    <main className="pd-services-page">
      <section className="pd-services-hero">
        <div className="pd-services-hero-image" aria-hidden="true" />
        <div className="pd-services-hero-overlay" aria-hidden="true" />

        <div className="pd-services-container pd-services-hero-content">
          <p className="pd-services-label">{page.heroLabel}</p>

          <h1>
            {page.heroTitleTop}
            <span>{page.heroTitleBottom}</span>
          </h1>

          <p className="pd-services-hero-text">
            {page.heroText}
          </p>

          <div className="pd-services-hero-actions">
            <Link href="/kontakt" className="pd-button pd-button-gold">
              {page.checkAvailability}
            </Link>

            <a
              href="tel:+421947969596"
              className="pd-button pd-button-outline"
            >
              0947 969 596
            </a>
          </div>
        </div>
      </section>

      <section className="pd-services-benefits">
        <div className="pd-services-container pd-services-benefits-grid">
          {page.benefits.map((item) => (
            <div className="pd-services-benefit" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="pd-transfer-prices" id="ceny-transferov">
        <div className="pd-services-container">
          <div className="pd-transfer-prices-heading">
            <div>
              <p className="pd-services-label">
                {page.transferPricesLabel}
              </p>

              <h2>
                {page.transferPricesTitleTop}
                <span>{page.transferPricesTitleBottom}</span>
              </h2>
            </div>

            <p>{page.transferPricesText}</p>
          </div>

          <div className="pd-transfer-prices-grid">
            {page.transferPrices.map((transfer, index) => (
              <article
                className="pd-transfer-price-card"
                key={transfer.city}
              >
                <div className="pd-transfer-price-top">
                  <span className="pd-transfer-price-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="pd-transfer-price-label">
                    {page.transferLabel}
                  </span>
                </div>

                <h3>{transfer.city}</h3>
                <strong>{transfer.price}</strong>
                <p>{transfer.description}</p>

                <Link href="/kontakt" className="pd-service-link">
                  {page.orderTransfer}
                  <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>

          <p className="pd-transfer-prices-note">
            {page.transferPricesNote}
          </p>
        </div>
      </section>

      <section className="pd-services-offer" id="ponuka">
        <div className="pd-services-container">
          <div className="pd-services-heading-row">
            <div>
              <p className="pd-services-label">
                {page.offerLabel}
              </p>

              <h2>
                {page.offerTitleTop}
                <span>{page.offerTitleBottom}</span>
              </h2>
            </div>

            <p>{page.offerText}</p>
          </div>

          <div className="pd-services-grid">
            {page.services.map((service) => (
              <article
                className="pd-service-card"
                key={service.number}
              >
                <div className="pd-service-card-top">
                  <span className="pd-service-number">
                    {service.number}
                  </span>

                  <span className="pd-service-subtitle">
                    {service.subtitle}
                  </span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.text}</p>

                <ul>
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <span aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href="/kontakt" className="pd-service-link">
                  {page.serviceButton}
                  <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pd-services-why">
        <div className="pd-services-container pd-services-why-grid">
          <div className="pd-services-why-heading">
            <p className="pd-services-label">
              {page.whyLabel}
            </p>

            <h2>
              {page.whyTitleTop}
              <span>{page.whyTitleBottom}</span>
            </h2>
          </div>

          <div className="pd-services-why-list">
            {page.whyItems.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pd-services-process">
        <div className="pd-services-container">
          <div className="pd-services-process-heading">
            <p className="pd-services-label">
              {page.processLabel}
            </p>

            <h2>
              {page.processTitleTop}
              <span>{page.processTitleBottom}</span>
            </h2>
          </div>

          <div className="pd-services-process-grid">
            {page.process.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pd-services-cta">
        <div className="pd-services-container pd-services-cta-inner">
          <div>
            <p className="pd-services-label">
              {page.ctaLabel}
            </p>

            <h2>
              {page.ctaTitleTop}
              <span>{page.ctaTitleBottom}</span>
            </h2>

            <p>{page.ctaText}</p>
          </div>

          <div className="pd-services-cta-actions">
            <Link href="/kontakt" className="pd-button pd-button-gold">
              {page.ctaInquiry}
            </Link>

            <a
              href="tel:+421947969596"
              className="pd-button pd-button-outline"
            >
              {page.ctaCall}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
