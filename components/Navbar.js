"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="page-container navbar-inner">
        <Link href="/" className="navbar-logo" onClick={closeMenu}>
          <Image
            src="/images/logo-prestige.jpeg"
            alt="Prestige Drive"
            width={68}
            height={68}
            priority
          />

          <div className="navbar-brand">
            <span>Prestige Drive</span>
            <small>Wedding Cars & VIP Executive Travel</small>
          </div>
        </Link>

        <nav className={`navbar-menu ${menuOpen ? "is-open" : ""}`}>
          <Link href="/" onClick={closeMenu}>
            {t.nav.home}
          </Link>

          <Link href="/sluzby" onClick={closeMenu}>
            {t.nav.services}
          </Link>

          <Link href="/baliky" onClick={closeMenu}>
            {t.nav.packages}
          </Link>

          <Link href="/galeria" onClick={closeMenu}>
            {t.nav.gallery}
          </Link>

          <Link href="/kontakt" onClick={closeMenu}>
            {t.nav.contact}
          </Link>

          <div className="language-switcher">
            {["sk", "en", "de"].map((item) => (
              <button
                key={item}
                type="button"
                className={language === item ? "active" : ""}
                onClick={() => {
                  setLanguage(item);
                  closeMenu();
                }}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>

          <Link
            href="/kontakt"
            className="navbar-contact-button"
            onClick={closeMenu}
          >
            {t.nav.availability}
          </Link>
        </nav>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          aria-label={menuOpen ? "Zavrieť menu" : "Otvoriť menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}