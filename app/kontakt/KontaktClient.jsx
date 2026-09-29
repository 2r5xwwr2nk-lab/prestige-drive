"use client";

import { useLanguage } from "../../components/LanguageProvider";

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.5"
        r="0.8"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M13.7 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2H8v3h2.5v8h3.2Z" />
    </svg>
  );
}

export default function KontaktClient() {
  const { t } = useLanguage();
  const page = t.contactPage;

  return (
    <main className="contact-page">
      <section className="contact-page-section">
        <div className="page-container contact-page-grid">
          <div className="contact-page-info">
            <p className="section-label">
              {page.eyebrow}
            </p>

            <h1>{page.title}</h1>

            <p className="contact-page-intro">
              {page.intro}
            </p>

            <div className="contact-info-list">
              <article className="contact-info-card">
                <span>{page.phoneLabel}</span>

                <a href="tel:+421947969596">
                  {page.phone}
                </a>
              </article>

              <article className="contact-info-card">
                <span>{page.emailLabel}</span>

                <a href={`mailto:${page.email}`}>
                  {page.email}
                </a>
              </article>

              <article className="contact-info-card">
                <span>{page.addressLabel}</span>

                <p>
                  {page.addressLineOne}
                  <br />
                  {page.addressLineTwo}
                </p>
              </article>

              <article className="contact-info-card">
                <span>{page.availabilityLabel}</span>

                <p>
                  {page.availabilityDays}
                  <br />
                  {page.availabilityHours}
                </p>
              </article>
            </div>

            <div className="contact-quick-actions">
              <a
                href="tel:+421947969596"
                className="button button-gold"
              >
                {page.callButton}
              </a>

              <a
                href={`mailto:${page.email}`}
                className="button button-outline"
              >
                {page.emailButton}
              </a>
            </div>

            <div className="contact-socials">
              <div className="contact-socials-heading">
                <p className="section-label">
                  {page.socialsLabel}
                </p>

                <h2>{page.socialsTitle}</h2>
              </div>

              <div className="contact-socials-list">

                {/* INSTAGRAM */}
                <a
                  href="https://www.instagram.com/prestigedrivesk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                  aria-label="Instagram Prestige Drive"
                >
                  <span className="contact-social-icon">
                    <InstagramIcon />
                  </span>

                  <span className="contact-social-copy">
                    <small>Instagram</small>
                    <strong>@prestigedrivesk</strong>
                  </span>

                  <span
                    className="contact-social-arrow"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>

                {/* FACEBOOK */}
                <a
                  href="https://www.facebook.com/share/184uerGhJT/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                  aria-label="Facebook Prestige Drive"
                >
                  <span className="contact-social-icon">
                    <FacebookIcon />
                  </span>

                  <span className="contact-social-copy">
                    <small>Facebook</small>
                    <strong>Prestige Drive</strong>
                  </span>

                  <span
                    className="contact-social-arrow"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-map-card">
            <iframe
              src="https://www.google.com/maps?q=Vajansk%C3%A9ho%20607%2F2%2C%20962%2005%20Hri%C5%88ov%C3%A1&z=16&output=embed"
              title={page.mapTitle}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div
              className="contact-map-shade"
              aria-hidden="true"
            />

            <div className="contact-map-info">
              <p className="contact-map-label">
                {page.mapLabel}
              </p>

              <h2>{page.addressLineOne}</h2>

              <p className="contact-map-address">
                {page.addressLineTwo}
              </p>

              <div className="contact-map-buttons">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Vajansk%C3%A9ho%20607%2F2%2C%20962%2005%20Hri%C5%88ov%C3%A1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-gold"
                >
                  {page.openMap}
                </a>

                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Vajansk%C3%A9ho%20607%2F2%2C%20962%2005%20Hri%C5%88ov%C3%A1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-outline"
                >
                  {page.navigate}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}