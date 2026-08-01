import Image from "next/image";

const galleryItems = [
  {
    src: "/images/wedding-hero.png",
    alt: "Svadobná doprava Prestige s profesionálnym šoférom",
    className: "gallery-page-item gallery-page-item-featured",
    position: "center",
  },
  {
    src: "/images/53205.jpg",
    alt: "Komfortná jazda v prémiovom vozidle",
    className: "gallery-page-item gallery-page-item-tall",
    position: "center",
  },
  {
    src: "/images/53199.jpg",
    alt: "Profesionálny šofér pri prémiovom vozidle",
    className: "gallery-page-item gallery-page-item-small",
    position: "center",
  },
  {
    src: "/images/53201.jpg",
    alt: "VIP cestovanie v komfortnom interiéri",
    className: "gallery-page-item gallery-page-item-small",
    position: "center",
  },
  {
    src: "/images/53204.jpg",
    alt: "Luxusný interiér vozidla Prestige",
    className: "gallery-page-item gallery-page-item-small",
    position: "center",
  },
  {
    src: "/images/53244.jpg",
    alt: "Prémiové vozidlo pripravené na cestu",
    className: "gallery-page-item gallery-page-item-small",
    position: "center",
  },
  {
    src: "/images/8b581e8d-1069-4a35-93d5-a160ea259ad3-1_all_16283.jpg",
    alt: "Profesionálny šofér Prestige",
    className: "gallery-page-item gallery-page-item-medium",
    position: "center",
  },
  {
    src: "/images/53190.jpg",
    alt: "Prémiový servis a občerstvenie vo vozidle",
    className: "gallery-page-item gallery-page-item-medium",
    position: "center",
  },
  
];

export default function GaleriaPage() {
  return (
    <main className="gallery-page">
      <section className="gallery-page-section">
        <div className="page-container">
          <div className="gallery-page-heading">
            <div>
              <p className="section-label">
                PRESTIGE V KAŽDOM DETAILE
              </p>

              <h2>
                Každý detail vytvára
                <span>výnimočný zážitok.</span>
              </h2>
            </div>

            <p>
              Profesionálny šofér, prémiové vozidlo a osobný servis
              pripravený pre svadby, VIP transfery aj výnimočné udalosti.
            </p>
          </div>

          <div className="gallery-page-grid">
            {galleryItems.map((item, index) => (
              <article
                className={item.className}
                key={`${item.src}-${index}`}
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