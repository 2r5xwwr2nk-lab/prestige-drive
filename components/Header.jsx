"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageProvider";

export default function Header() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigation = [
    {
      href: "/",
      label: t.nav.home,
    },
    {
      href: "/sluzby",
      label: t.nav.services,
    },
    {
      href: "/galeria",
      label: t.nav.gallery,
    },
    {
      href: "/kontakt",
      label: t.nav.contact,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function isActive(href) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  }

  function handleLanguageChange(newLanguage) {
    setLanguage(newLanguage);
    setMenuOpen(false);
  }

  return (
    <header
      className={`site-header ${
        scrolled ? "site-header-scrolled" : ""
      }`}
    >
      <div className="page-container site-header-inner">
        <Link
          href="/"
          className="site-logo"
          aria-label={t.header.homeAria}
          onClick={() => setMenuOpen(false)}
        >
          <div className="site-logo-image">
            <Image
              src="/images/logo-header.png"
              alt="Prestige Wedding Cars & VIP Executive Travel"
              fill
              priority
              sizes="300px"
            />
          </div>
        </Link>

        <button
          type="button"
          className={`menu-toggle ${
            menuOpen ? "is-open" : ""
          }`}
          aria-label={
            menuOpen
              ? t.header.closeMenu
              : t.header.openMenu
          }
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => {
            setMenuOpen((current) => !current);
          }}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          id="main-navigation"
          className={`site-header-menu ${
            menuOpen ? "is-open" : ""
          }`}
        >
          <nav
            className="site-navigation"
            aria-label={t.header.navigationAria}
          >
            {navigation.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className={isActive(item.href) ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div
            className="language-switcher"
            aria-label="Výber jazyka"
          >
            {["sk", "en", "de"].map((item) => (
              <button
                key={item}
                type="button"
                className={
                  language === item ? "active" : ""
                }
                aria-pressed={language === item}
                aria-label={`Zmeniť jazyk na ${item.toUpperCase()}`}
                onClick={() => handleLanguageChange(item)}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>

          <a
            href="tel:+421947969596"
            className="site-header-phone"
          >
            <span>{t.header.reservations}</span>
            <strong>0947 969 596</strong>
          </a>
        </div>
      </div>
    </header>
  );
}