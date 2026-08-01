export const metadata = {
  title: "Kontakt | Prestige Drive",
  description:
    "Kontaktujte Prestige Drive a overte si dostupnosť termínu pre svadobnú dopravu, VIP transfer alebo osobného šoféra.",
};

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
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
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

export default function KontaktPage() {
  return (
    <main className="contact-page">
      <section className="contact-page-section">
        <div className="page-container contact-page-grid">
          <div className="contact-page-info">
            <p className="section-label">KONTAKT</p>

            <h1>Sme pripravení pre vás.</h1>

            <p className="contact-page-intro">
              Zavolajte nám alebo nám napíšte e-mail. Radi pripravíme
              individuálnu ponuku presne podľa vašich požiadaviek.
            </p>

            <div className="contact-info-list">
              <article className="contact-info-card">
                <span>TELEFÓN</span>

                <a href="tel:+421947969596">
                  0947 969 596
                </a>
              </article>

              <article className="contact-info-card">
                <span>E-MAIL</span>

                <a href="mailto:prestigedriveransfer@gmail.com">
                  prestigedriveransfer@gmail.com
                </a>
              </article>

              <article className="contact-info-card">
                <span>ADRESA</span>

                <p>
                  Vajanského 607/2
                  <br />
                  962 05 Hriňová
                </p>
              </article>

              <article className="contact-info-card">
                <span>DOSTUPNOSŤ</span>

                <p>
                  Pondelok – Nedeľa
                  <br />
                  24 / 7
                </p>
              </article>
            </div>

            <div className="contact-quick-actions">
              <a
                href="tel:+421947969596"
                className="button button-gold"
              >
                Zavolať
              </a>

              <a
                href="mailto:prestigedriveransfer@gmail.com"
                className="button button-outline"
              >
                Napísať e-mail
              </a>
            </div>

            <div className="contact-socials">
              <div className="contact-socials-heading">
                <p className="section-label">SOCIÁLNE SIETE</p>
                <h2>Sledujte Prestige.</h2>
              </div>

              <div className="contact-socials-list">
                <a
                  href="https://www.instagram.com/prestigeslovakia?igsh=emtsaDYybzk1d2hz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                  aria-label="Otvoriť Instagram Prestige Slovakia"
                >
                  <span className="contact-social-icon">
                    <InstagramIcon />
                  </span>

                  <span className="contact-social-copy">
                    <small>Instagram</small>
                    <strong>@prestigeslovakia</strong>
                  </span>

                  <span className="contact-social-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>

                <a
                  href="https://www.facebook.com/share/184uerGhJT/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                  aria-label="Otvoriť Facebook Prestige"
                >
                  <span className="contact-social-icon">
                    <FacebookIcon />
                  </span>

                  <span className="contact-social-copy">
                    <small>Facebook</small>
                    <strong>Prestige Slovakia</strong>
                  </span>

                  <span className="contact-social-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-map-card">
            <iframe
              src="https://www.google.com/maps?q=Vajansk%C3%A9ho%20607%2F2%2C%20962%2005%20Hri%C5%88ov%C3%A1&z=16&output=embed"
              title="Prestige Drive – Vajanského 607/2, Hriňová"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="contact-map-shade" />

            <div className="contact-map-info">
              <p className="contact-map-label">
                PRESTIGE
              </p>

              <h2>Vajanského 607/2</h2>

              <p className="contact-map-address">
                962 05 Hriňová
              </p>

              <div className="contact-map-buttons">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Vajansk%C3%A9ho%20607%2F2%2C%20962%2005%20Hri%C5%88ov%C3%A1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-gold"
                >
                  Otvoriť mapu
                </a>

                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Vajansk%C3%A9ho%20607%2F2%2C%20962%2005%20Hri%C5%88ov%C3%A1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-outline"
                >
                  Navigovať
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}