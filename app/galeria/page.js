"use client";

import Image from "next/image";
import { useLanguage } from "../../components/LanguageProvider";

export default function GaleriaPage() {
  const { t } = useLanguage();

  const galleryItems = [
    {
      src: "/images/8b581e8d-1069-4a35-93d5-a160ea259ad3-1_all_16345.jpg",
      alt: "Prestige Drive",
      className: "gallery-page-item gallery-page-item-featured",
      position: "center",
    },
    {
      src: "/images/8b581e8d-1069-4a35-93d5-a160ea259ad3-1_all_16355.jpg",
      alt: "Prestige Drive",
      className: "gallery-page-item gallery-page-item-tall",
      position: "center",
    },
    {
      src: "/images/8b581e8d-1069-4a35-93d5-a160ea259ad3-1_all_17475.jpg",
      alt: "VIP transfer Prestige Drive",
      className: "gallery-page-item gallery-page-item-small",
      position: "center",
    },
    {
      src: "/images/8b581e8d-1069-4a35-93d5-a160ea259ad3-1_all_17538.jpg",
      alt: "Luxusný interiér Prestige Drive",
      className: "gallery-page-item gallery-page-item-small",
      position: "center",
    },
    {
      src: "/images/8b581e8d-1069-4a35-93d5-a160ea259ad3-1_all_17937.jpg",
      alt: "VIP preprava Prestige Drive",
      className: "gallery-page-item gallery-page-item-small",
      position: "center",
    },
    {
      src: "/images/8b581e8d-1069-4a35-93d5-a160ea259ad3-1_all_17940.jpg",
      alt: "Prestige Drive chauffeur service",
      className: "gallery-page-item gallery-page-item-small",
      position: "center",
    },
    {
      src: "/images/8b581e8d-1069-4a35-93d5-a160ea259ad3-1_all_18090.jpg",
      alt: "Executive travel Prestige Drive",
      className: "gallery-page-item gallery-page-item-medium",
      position: "center",
    },
    {
      src: "/images/8b581e8d-1069-4a35-93d5-a160ea259ad3-1_all_18212.jpg",
      alt: "Prestige Drive",
      className: "gallery-page-item gallery-page-item-medium",
      position: "center",
    },
    {
      src: "/images/8b581e8d-1069-4a35-93d5-a160ea259ad3-1_all_18755.jpg",
      alt: "Profesionálny šofér Prestige Drive",
      className: "gallery-page-item gallery-page-item-medium",
      position: "center",
    },
    {
      src: "/images/80681.jpg",
      alt: "Volvo Prestige Drive",
      className: "gallery-page-item gallery-page-item-medium",
      position: "center",
    },
    {
      src: "/images/81404.jpg",
      alt: "VIP transfer Prestige Drive",
      className: "gallery-page-item gallery-page-item-medium",
      position: "center",
    },
    {
      src: "/images/81481.jpg",
      alt: "Luxusný interiér vozidla",
      className: "gallery-page-item gallery-page-item-medium",
      position: "center",
    },
    {
      src: "/images/81527.png",
      alt: "Prestige Drive chauffeur",
      className: "gallery-page-item gallery-page-item-medium",
      position: "center",
    },
    {
      src: "/images/81609.jpg",
      alt: "Profesionálny šofér Prestige Drive",
      className: "gallery-page-item gallery-page-item-medium",
      position: "center",
    },
    {
      src: "/images/81611.jpg",
      alt: "VIP preprava Prestige Drive",
      className: "gallery-page-item gallery-page-item-medium",
      position: "center",
    },
    {
      src: "/images/81617.jpg",
      alt: "Luxusný interiér Prestige Drive",
      className: "gallery-page-item gallery-page-item-medium",
      position: "center",
    },
  ];

  return (
    <main className="gallery-page">
      <section className="gallery-page-section">
        <div className="page-container">
          <div className="gallery-page-heading">
            <div>
              <p className="section-label">
                {t.galleryPage.eyebrow}
              </p>

              <h1>
                {t.galleryPage.titleTop}{" "}
                <span>{t.galleryPage.titleBottom}</span>
              </h1>
            </div>

            <p>{t.galleryPage.text}</p>
          </div>

          <div className="gallery-page-grid">
            {galleryItems.map((item, index) => (
              <article
                className={item.className}
                key={item.src}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  priority={index === 0}
                  sizes="
                    (max-width: 700px) 100vw,
                    (max-width: 1100px) 50vw,
                    33vw
                  "
                  style={{
                    objectPosition: item.position,
                  }}
                />

                <div className="gallery-page-overlay">
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}