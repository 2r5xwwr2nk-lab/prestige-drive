"use client";

import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Svadobná doprava",
    subtitle: "Wedding Cars",
    text: "Elegantný príchod na váš výnimočný deň s profesionálnym šoférom, pripraveným vozidlom a osobným prístupom.",
    features: [
      "Profesionálny šofér v obleku",
      "VIP červený koberec",
      "Možnosť šampanského",
      "Individuálny harmonogram",
    ],
  },
  {
    number: "02",
    title: "VIP transfer",
    subtitle: "Executive Travel",
    text: "Prémiová osobná doprava pre klientov, ktorí očakávajú komfort, diskrétnosť, presnosť a reprezentatívny servis.",
    features: [
      "Diskrétny osobný servis",
      "Presné plánovanie trasy",
      "Komfortná a pokojná jazda",
      "Dostupnosť podľa dohody",
    ],
  },
  {
    number: "03",
    title: "Letiskový transfer",
    subtitle: "Airport Transfer",
    text: "Bezstarostný transfer na letisko alebo z letiska s vyzdvihnutím na adrese a pomocou s batožinou.",
    features: [
      "Vyzdvihnutie na adrese",
      "Pomoc s batožinou",
      "Čakanie podľa dohody",
      "Transfer po celom Slovensku",
    ],
  },
  {
    number: "04",
    title: "Firemná doprava",
    subtitle: "Business Class",
    text: "Reprezentatívna doprava pre obchodné stretnutia, firemných partnerov, konferencie a významných hostí.",
    features: [
      "Profesionálna prezentácia",
      "Flexibilné časové možnosti",
      "Diskrétnosť a spoľahlivosť",
      "Individuálna cenová ponuka",
    ],
  },
  {
    number: "05",
    title: "Eventy a oslavy",
    subtitle: "Special Events",
    text: "Štýlový odvoz na ples, oslavu, galavečer, výročie alebo inú udalosť, pri ktorej záleží na každom detaile.",
    features: [
      "Luxusný príchod",
      "Čakanie podľa programu",
      "Večerné a nočné transfery",
      "Trasa podľa požiadaviek",
    ],
  },
  {
    number: "06",
    title: "Súkromný šofér",
    subtitle: "Private Chauffeur",
    text: "Osobný šofér a prémiové vozidlo presne podľa vašich požiadaviek na súkromné aj pracovné cesty.",
    features: [
      "Osobný prístup",
      "Časová flexibilita",
      "Prémiový komfort",
      "Trasa podľa potrieb",
    ],
  },
];

const benefits = [
  {
    value: "24/7",
    label: "Dostupnosť podľa dohody",
  },
  {
    value: "100 %",
    label: "Diskrétny prístup",
  },
  {
    value: "VIP",
    label: "Osobný servis",
  },
  { value: "SLOVENSKO", label: "Transfery po celej krajine" },
];

const transferPrices = [
  {
    city: "Bratislava",
    price: "od 89 €",
    description: "Komfortný transfer do Bratislavy.",
  },
  {
    city: "Viedeň",
    price: "od 119 €",
    description: "Transfer do Viedne alebo na letisko Schwechat.",
  },
  {
    city: "Budapešť",
    price: "od 139 €",
    description: "Prémiová doprava do Budapešti.",
  },
  {
    city: "Košice",
    price: "od 159 €",
    description: "Súkromný transfer do Košíc.",
  },
];

const process = [
  {
    number: "01",
    title: "Pošlete nám detaily",
    text: "Napíšete termín, miesto vyzdvihnutia, cieľ cesty a vaše požiadavky.",
  },
  {
    number: "02",
    title: "Potvrdíme ponuku",
    text: "Pripravíme individuálnu cenu a spoločne potvrdíme presný harmonogram.",
  },
  {
    number: "03",
    title: "Postaráme sa o cestu",
    text: "V dohodnutom čase vás vyzdvihne profesionálny šofér v pripravenom vozidle.",
  },
];

export default function ServicesPage() {
  return (
    <main className="pd-services-page">
      <section className="pd-services-hero">
        <div className="pd-services-hero-image" aria-hidden="true" />
        <div className="pd-services-hero-overlay" aria-hidden="true" />

        <div className="pd-services-container pd-services-hero-content">
          <p className="pd-services-label">PRESTIGE</p>

          <h1>
            Prémiová doprava
            <span>pre výnimočné chvíle.</span>
          </h1>

          <p className="pd-services-hero-text">
            Svadobné vozidlo, VIP transfer alebo osobný šofér. Každú cestu
            pripravíme presne podľa vašich požiadaviek.
          </p>

          <div className="pd-services-hero-actions">
            <Link href="/kontakt" className="pd-button pd-button-gold">
              Overiť dostupnosť
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
          {benefits.map((item) => (
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
              <p className="pd-services-label">VIP TRANSFERY</p>

              <h2>
                Orientačné ceny
                <span>vybraných transferov.</span>
              </h2>
            </div>

            <p>
              Komfortná cesta s profesionálnym šoférom a prémiovým vozidlom.
              Presnú cenu vám potvrdíme podľa miesta vyzdvihnutia, termínu a
              individuálnych požiadaviek.
            </p>
          </div>

          <div className="pd-transfer-prices-grid">
            {transferPrices.map((transfer, index) => (
              <article
                className="pd-transfer-price-card"
                key={transfer.city}
              >
                <div className="pd-transfer-price-top">
                  <span className="pd-transfer-price-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="pd-transfer-price-label">
                    Transfer
                  </span>
                </div>

                <h3>{transfer.city}</h3>
                <strong>{transfer.price}</strong>
                <p>{transfer.description}</p>

                <Link href="/kontakt" className="pd-service-link">
                  Objednať transfer
                  <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>

          <p className="pd-transfer-prices-note">
            Uvedené ceny sú orientačné. Konečná cena závisí od presného miesta
            nástupu, termínu, času čakania, trasy a doplnkových požiadaviek.
          </p>
        </div>
      </section>

      <section className="pd-services-offer" id="ponuka">
        <div className="pd-services-container">
          <div className="pd-services-heading-row">
            <div>
              <p className="pd-services-label">NAŠE SLUŽBY</p>

              <h2>
                Viac než odvoz.
                <span>Kompletný servis.</span>
              </h2>
            </div>

            <p>
              Dôraz kladieme na presnosť, komfort, diskrétnosť a reprezentatívny
              vzhľad počas každej jazdy.
            </p>
          </div>

          <div className="pd-services-grid">
            {services.map((service) => (
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
                  Overiť dostupnosť
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
            <p className="pd-services-label">PREČO PRESTIGE</p>

            <h2>
              Detail, ktorý
              <span>robí rozdiel.</span>
            </h2>
          </div>

          <div className="pd-services-why-list">
            <article>
              <span>01</span>

              <div>
                <h3>Profesionálny šofér</h3>

                <p>
                  Elegantne oblečený, diskrétny a vždy pripravený. Profesionálny
                  šofér je rovnako dôležitý ako samotné vozidlo.
                </p>
              </div>
            </article>

            <article>
              <span>02</span>

              <div>
                <h3>Luxusné vozidlo</h3>

                <p>
                  Komfort, elegancia a dokonalá čistota pripravená pre každý
                  výnimočný okamih.
                </p>
              </div>
            </article>

            <article>
              <span>03</span>

              <div>
                <h3>Presnosť</h3>

                <p>
                  Vždy načas a podľa vopred dohodnutého harmonogramu.
                </p>
              </div>
            </article>

            <article>
              <span>04</span>

              <div>
                <h3>Bezpečnosť</h3>

                <p>
                  Maximálny dôraz na bezpečnú, pohodlnú a pokojnú jazdu počas
                  celej cesty.
                </p>
              </div>
            </article>

            <article>
              <span>05</span>

              <div>
                <h3>Individuálny prístup</h3>

                <p>
                  Každú objednávku riešime osobne a podľa vašich potrieb od
                  prvého kontaktu až po posledný kilometer.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="pd-services-process">
        <div className="pd-services-container">
          <div className="pd-services-process-heading">
            <p className="pd-services-label">AKO TO FUNGUJE</p>

            <h2>
              Jednoduchá rezervácia.
              <span>Dokonalá cesta.</span>
            </h2>
          </div>

          <div className="pd-services-process-grid">
            {process.map((item) => (
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
            <p className="pd-services-label">REZERVÁCIA</p>

            <h2>
              Máte termín?
              <span>Overte si dostupnosť.</span>
            </h2>

            <p>
              Napíšte nám základné informácie a pripravíme vám individuálnu
              cenovú ponuku.
            </p>
          </div>

          <div className="pd-services-cta-actions">
            <Link href="/kontakt" className="pd-button pd-button-gold">
              Nezáväzný dopyt
            </Link>

            <a
              href="tel:+421947969596"
              className="pd-button pd-button-outline"
            >
              Zavolať teraz
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}