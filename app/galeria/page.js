"use client";

import Image from "next/image";
import { useLanguage } from "../../components/LanguageProvider";

export default function GaleriaPage() {
  const { t } = useLanguage();

  const galleryItems = [
    {
      src: "/images/wedding-hero.png",
      alt: t.galleryPage.images.wedding,
      className: "gallery-page-item gallery-page-item-featured",
      position: "center",
    },
    {
      src: "/images/53205.jpg",
      alt: t.galleryPage.images.premiumRide,
      className: "gallery-page-item gallery-page-item-tall",
      position: "center",
    },
    {
      src: "/images/53199.jpg",
      alt: t.galleryPage.images.chauffeur,
      className: "gallery-page-item gallery-page-item-small",
      position: "center",
    },
    {
      src: "/images/53201.jpg",
      alt: t.galleryPage.images.vipInterior,
      className: "gallery-page-item gallery-page-item-small",
      position: "center",
    },
    {
      src: "/images/53204.jpg",
      alt: t.galleryPage.images.luxuryInterior,
      className: "gallery-page-item gallery-page-item-small",
      position: "center",
    },
    {
      src: "/images/53244.jpg",
      alt: t.galleryPage.images.vehicle,
      className: "gallery-page-item gallery-page-item-small",
      position: "center",
    },
    {
      src: "/images/8b581e8d-1069-4a35-93d5-a160ea259ad3-1_all_16283.jpg",
      alt: t.galleryPage.images.prestigeChauffeur,
      className: "gallery-page-item gallery-page-item-medium",
      position: "center",
    },
    {
      src: "/images/53190.jpg",
      alt: t.galleryPage.images.refreshments,
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
                {t.galleryPage.titleTop}
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