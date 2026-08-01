"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../components/LanguageProvider";
import Hero from "../components/Hero";

const whyItems = [
  {
    title: "Profesionálny šofér",
    text: "Elegantne oblečený, diskrétny a vždy pripravený. Pri vašej službe je profesionálny šofér rovnako dôležitý ako samotné vozidlo.",
  },
  {
    title: "Luxusné vozidlo",
    text: "Komfort, elegancia a dokonalá čistota pre každý výnimočný okamih.",
  },
  {
    title: "Presnosť",
    text: "Vždy načas a podľa vopred dohodnutého harmonogramu.",
  },
  {
    title: "Bezpečnosť",
    text: "Maximálny dôraz na bezpečnú a pohodlnú jazdu počas celej cesty.",
  },
  {
    title: "Individuálny prístup",
    text: "Každá jazda je prispôsobená vašim požiadavkám od prvého kontaktu až po posledný kilometer.",
  },
];

const basicFeatures = [
  "Luxusné vozidlo",
  "Profesionálny šofér v obleku",
  "Pristavenie vozidla podľa dohody",
  "Až 100 km jazdy v cene",
  "Individuálne plánovanie času",
];

const basicExtras = [
  "Svadobné fotografovanie s vzidlom +50 €",
  
  "Svadobná výzdoba vozidla +50 €",
];



const goldFeatures = [
  "Luxusná limuzína",
  "Profesionálny šofér v obleku",
  "Až 120 km jazdy v cene",
  "Individuálna koordinácia trasy",
  "Šampanské pre mladomanželov",
  "Slávnostné rozprestretie červeného koberca",
  "Prémiový osobný prístup",
];

export default function HomePage() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <main>
      <Hero />

      <section className="intro-section" id="uvod">
        <div className="page-container intro-grid">
          <div className="intro-heading">
            <p className="section-label">{t.intro.eyebrow}</p>
            <h2>{t.intro.title}</h2>
          </div>

          <div className="intro-copy">
            <p>{t.intro.textOne}</p>
            <p>{t.intro.textTwo}</p>

            <div className="intro-signature">
              <span>Prestige</span>
              <small>Wedding Cars &amp; VIP Executive Travel</small>
            </div>
          </div>
        </div>
      </section>

      <section className="services-preview" id="sluzby">
        <div className="page-container">
          <div className="section-heading centered">
            <p className="section-label">{t.services.eyebrow}</p>
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

      <section className="packages-preview" id="baliky">
        <div className="page-container">
          <div className="section-heading centered">
            <p className="section-label">SVADOBNÉ BALÍKY</p>
            <h2>Vyberte si svoj výnimočný zážitok.</h2>
            <p className="section-subtitle">
              Dva balíky, jednoduchý výber a servis pripravený presne podľa
              vášho termínu.
            </p>
          </div>

          <div className="packages-grid">
            <article className="package-card">
              <div className="package-top">
                <p className="package-name">Prestige Basic</p>
                <p className="package-price">{t.packages.basicPrice}</p>
              </div>

              <p className="package-description">
                Elegantná svadobná doprava pre páry, ktoré hľadajú štýl,
                pohodlie a profesionálny servis.
              </p>

              <ul className="package-features">
                {basicFeatures.map((feature) => (
                  <li key={feature}>
                    <span aria-hidden="true">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="package-extras">
                <p>VOLITEĽNÝ DOPLNOK</p>
                {basicExtras.map((extra) => (
                  <span key={extra}>+ {extra}</span>
                ))}
              </div>

              <Link href="/sluzby" className="button button-outline-dark">
                Overiť dostupnosť
              </Link>
            </article>

            <article className="package-card package-card-gold">
              <div className="package-badge">Najobľúbenejší</div>

              <div className="package-top">
                <p className="package-name">Prestige Gold</p>
                <p className="package-price">{t.packages.goldPrice}</p>
              </div>

              <p className="package-description">
                Viac než len odvoz. Päťhviezdičkový zážitok pripravený pre
                váš výnimočný deň.
              </p>

              <ul className="package-features">
                {goldFeatures.map((feature) => (
                  <li key={feature}>
                    <span aria-hidden="true">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href="/sluzby" className="button button-gold">
                Chcem Prestige Gold
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="why-section" id="preco-my">
        <div className="page-container why-grid">
          <div className="why-heading">
            <p className="section-label">PREČO PRESTIGE</p>
            <h2>
              Každý detail vytvára
              <br />
              výnimočný zážitok.
            </h2>
            <div className="why-line" />
          </div>

          <div className="why-list">
            {whyItems.map((item, index) => (
              <article className="why-item" key={item.title}>
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

      <section className="gallery-preview" id="galeria">
        <div className="page-container">
          <div className="gallery-heading-row">
            <div className="section-heading">
              <p className="section-label">PRESTIGE V KAŽDOM DETAILE</p>
              <h2>Každý detail vytvára výnimočný zážitok.</h2>
              <p className="section-subtitle">
                Profesionálny šofér, individuálny servis a pohodlie, ktoré si
                všimnete pri každej ceste.
              </p>
            </div>

            <Link href="/galeria" className="button button-outline-dark">
              Zobraziť galériu
            </Link>
          </div>

          <div className="gallery-grid">
            <article className="gallery-item gallery-item-large">
              <Image
                src="/images/wedding-hero.png"
                alt="Prestige Volvo"
                fill
                sizes="(max-width: 820px) 100vw, 66vw"
              />
            </article>

            <article className="gallery-item gallery-item-forbes">
              <Image
                src="/images/53205.jpg"
                alt="VIP klient počas cesty Prestige"
                fill
                sizes="(max-width: 820px) 100vw, 34vw"
              />
            </article>

            <article className="gallery-item gallery-item-dark">
              <div className="gallery-quote">
                <p className="gallery-quote-eyebrow">Viac než len odvoz.</p>

                <h3>
                  5-hviezdičkový zážitok
                  <span>na kolesách.</span>
                </h3>

                <div className="gallery-stars" aria-label="Päť hviezdičiek">
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

      <footer className="footer" id="kontakt">
        <div className="page-container footer-main">
          <div className="footer-brand">
            <Image
              src="/images/51300.png"
              alt="Prestige"
              width={68}
              height={68}
            />

            <div>
              <h3>Prestige</h3>
              <p>Wedding Cars &amp; VIP Executive Travel</p>
            </div>
          </div>

          <div className="footer-contact">
            <a href="tel:+421947969596">0947 969 596</a>

            <a href="mailto:prestigedriveransfer@gmail.com">
              prestigedriveransfer@gmail.com
            </a>

            <span>Vajanského 607/2, 962 05 Hriňová</span>
          </div>

          <nav className="footer-nav" aria-label="Navigácia v pätičke">
            <Link href="/">Domov</Link>
            <Link href="/sluzby">Služby</Link>
            <Link href="/galeria">Galéria</Link>
            <Link href="/kontakt">Kontakt</Link>
          </nav>
        </div>

        <div className="page-container footer-bottom">
          <p>© {currentYear} Prestige. Všetky práva vyhradené.</p>
          <p>prestigedrive.sk</p>
        </div>
      </footer>
    </main>
  );
}