"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { href: "/", label: "Domov" },
  { href: "/sluzby", label: "Služby" },
  { href: "/galeria", label: "Galéria" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          aria-label="Prestige – domov"
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
            menuOpen ? "Zatvoriť menu" : "Otvoriť menu"
          }
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((current) => !current)}
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
            aria-label="Hlavná navigácia"
          >
            {navigation.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className={isActive(item.href) ? "active" : ""}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href="tel:+421947969596"
            className="site-header-phone"
          >
            <span>Rezervácie</span>
            <strong>0947 969 596</strong>
          </a>
        </div>

      </div>
    </header>
  );
}