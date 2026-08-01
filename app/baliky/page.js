"use client";

import Link from "next/link";

export default function BalikyPage() {
  return (
    <main className="packages-page">

      <section className="page-hero packages-hero">
        <div className="page-hero-overlay" />

        <div className="page-container page-hero-content">
          <span className="section-label">
            PRESTIGE DRIVE
          </span>

          <h1>Vyberte si svoj balík</h1>

          <p>
            Dva balíky. Jeden prémiový štandard.
            Vyberte si rozsah služieb, ktorý najlepšie
            vyhovuje vášmu svadobnému dňu.
          </p>
        </div>
      </section>

      <section className="packages-section">
        <div className="page-container">

          <div className="packages-grid">

            <article className="package-box">

              <span className="package-type">
                BASIC
              </span>

              <h2>199 €</h2>

              <ul>
                <li>Luxusná limuzína Volvo S90</li>
                <li>Profesionálny šofér</li>
                <li>Pristavenie vozidla</li>
                <li>Do 4 hodín</li>
                <li>100 km v cene</li>
              </ul>

              <Link
                href="/kontakt"
                className="button button-outline-dark"
              >
                Rezervovať Basic
              </Link>

            </article>

            <article className="package-box package-gold">

              <div className="package-badge">
                ODPORÚČAME
              </div>

              <span className="package-type">
                PRESTIGE GOLD
              </span>

              <h2>299 €</h2>

              <ul>
                <li>Luxusná limuzína Volvo S90</li>
                <li>Profesionálny šofér</li>
                <li>VIP červený koberec</li>
                <li>Šampanské</li>
                <li>Svadobná výzdoba vozidla</li>
                <li>Do 6 hodín</li>
                <li>150 km v cene</li>
              </ul>

              <Link
                href="/kontakt"
                className="button button-gold"
              >
                Rezervovať Gold
              </Link>

            </article>

          </div>

        </div>
      </section>

    </main>
  );
}