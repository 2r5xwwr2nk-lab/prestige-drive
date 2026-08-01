"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="prestige-hero">
      <div className="prestige-hero-image" aria-hidden="true" />
      <div className="prestige-hero-overlay" aria-hidden="true" />
      <div className="prestige-hero-glow" aria-hidden="true" />

      <div className="prestige-hero-container">
        <div className="prestige-hero-content">
          <div className="prestige-hero-rating">
            <span
              className="prestige-stars"
              aria-label={t.hero.starsAria}
            >
              ★★★★★
            </span>

            <span className="prestige-rating-text">
              {t.hero.ratingText}
            </span>
          </div>

          <p className="prestige-hero-label">
            {t.hero.eyebrow}
          </p>

          <h1>
            <span>{t.hero.titleTop}</span>
            {t.hero.titleMain}
            <small>{t.hero.titleBottom}</small>
          </h1>

          <p className="prestige-hero-description">
            {t.hero.descriptionOne}
            <br />
            <br />
            {t.hero.descriptionTwo}
          </p>

          <div className="prestige-hero-actions">
            <Link
              href="/kontakt"
              className="prestige-button-primary"
            >
              {t.hero.primaryButton}
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              href="/sluzby"
              className="prestige-button-secondary"
            >
              {t.hero.secondaryButton}
            </Link>
          </div>

          <div className="prestige-hero-details">
            <div>
              <strong>24 / 7</strong>
              <span>{t.hero.availability}</span>
            </div>

            <div>
              <strong>100 %</strong>
              <span>{t.hero.discretion}</span>
            </div>

            <div>
              <strong>VIP</strong>
              <span>{t.hero.personalService}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="prestige-scroll" aria-hidden="true">
        <span />
        <p>{t.hero.discover}</p>
      </div>

      <style jsx>{`
        .prestige-hero {
          position: relative;
          min-height: 100svh;
          display: flex;
          align-items: center;
          overflow: hidden;
          isolation: isolate;
          background: #030303;
        }

        .prestige-hero-image {
          position: absolute;
          z-index: -3;
          inset: 0;

          background-image: url("/images/wedding-hero.png");
          background-repeat: no-repeat;
          background-position: center 54%;
          background-size: cover;

          transform: scale(1.02);
          animation: heroZoom 14s ease-out forwards;
          will-change: transform;
        }

        .prestige-hero-overlay {
          position: absolute;
          z-index: -2;
          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.98) 0%,
              rgba(0, 0, 0, 0.92) 27%,
              rgba(0, 0, 0, 0.7) 51%,
              rgba(0, 0, 0, 0.28) 76%,
              rgba(0, 0, 0, 0.1) 100%
            ),
            linear-gradient(
              to top,
              rgba(0, 0, 0, 0.98) 0%,
              rgba(0, 0, 0, 0.32) 47%,
              rgba(0, 0, 0, 0.45) 100%
            );
        }

        .prestige-hero-glow {
          position: absolute;
          z-index: -1;
          top: 17%;
          left: 4%;

          width: 520px;
          height: 520px;

          border-radius: 50%;
          background: rgba(198, 161, 91, 0.1);
          filter: blur(130px);

          pointer-events: none;
        }

        .prestige-hero-container {
          position: relative;
          z-index: 2;

          width: min(1200px, calc(100% - 48px));
          margin-inline: auto;
          padding: 150px 0 110px;
        }

        .prestige-hero-content {
          max-width: 860px;
          animation: contentReveal 1s ease-out both;
        }

        .prestige-hero-rating {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 27px;
        }

        .prestige-stars {
          color: #e3c47d;
          font-size: 12px;
          line-height: 1;
          letter-spacing: 0.2em;
          text-shadow: 0 0 18px rgba(227, 196, 125, 0.3);
        }

        .prestige-rating-text {
          position: relative;
          padding-left: 17px;

          color: rgba(255, 255, 255, 0.62);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .prestige-rating-text::before {
          position: absolute;
          top: 50%;
          left: 0;

          width: 1px;
          height: 20px;

          background: rgba(227, 196, 125, 0.5);
          content: "";
          transform: translateY(-50%);
        }

        .prestige-hero-label {
          margin: 0 0 20px;

          color: #d8b86e;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.28em;
          text-transform: uppercase;
        }

        .prestige-hero h1 {
          max-width: 940px;
          margin: 0;

          color: #f7f4ee;
          font-family: var(--font-heading), Georgia, serif;
          font-size: clamp(51px, 6.4vw, 90px);
          font-weight: 400;
          line-height: 0.95;
          letter-spacing: -0.045em;

          text-shadow: 0 22px 60px rgba(0, 0, 0, 0.64);
        }

        .prestige-hero h1 > span {
          display: block;

          background: linear-gradient(
            100deg,
            #a97d35 0%,
            #efd38d 44%,
            #bd9147 76%,
            #f3dc9a 100%
          );

          background-clip: text;
          color: transparent;

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .prestige-hero h1 small {
          display: block;
          margin-top: 10px;

          color: #ffffff;
          font-family: var(--font-heading), Georgia, serif;
          font-size: 0.55em;
          font-weight: 400;
          line-height: 1.08;
          letter-spacing: 0.01em;
        }

        .prestige-hero-description {
          max-width: 650px;
          margin: 30px 0 0;
          padding-left: 19px;

          border-left: 1px solid rgba(227, 196, 125, 0.58);

          color: rgba(239, 235, 227, 0.78);
          font-size: 15px;
          line-height: 1.82;

          text-shadow: 0 3px 16px rgba(0, 0, 0, 0.72);
        }

        .prestige-hero-actions {
          margin-top: 37px;

          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 13px;
        }

        .prestige-button-primary,
        .prestige-button-secondary {
          min-height: 56px;

          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 13px;

          padding: 15px 27px;
          border-radius: 3px;

          font-size: 10px;
          font-weight: 800;
          line-height: 1.2;
          letter-spacing: 0.14em;
          text-align: center;
          text-transform: uppercase;

          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            background 0.3s ease,
            box-shadow 0.3s ease;
        }

        .prestige-button-primary {
          border: 1px solid rgba(255, 240, 202, 0.28);

          background: linear-gradient(
            135deg,
            #e8ca82,
            #c0964a 58%,
            #9a702f
          );

          color: #090806;
          box-shadow: 0 16px 40px rgba(198, 161, 91, 0.23);
        }

        .prestige-button-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 22px 50px rgba(198, 161, 91, 0.34);
        }

        .prestige-button-primary > span {
          font-size: 16px;
          line-height: 1;
          transition: transform 0.3s ease;
        }

        .prestige-button-primary:hover > span {
          transform: translateX(4px);
        }

        .prestige-button-secondary {
          border: 1px solid rgba(227, 196, 125, 0.42);
          background: rgba(0, 0, 0, 0.34);
          color: #e7cc89;

          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        .prestige-button-secondary:hover {
          border-color: rgba(227, 196, 125, 0.8);
          background: rgba(198, 161, 91, 0.12);
          transform: translateY(-3px);
        }

        .prestige-hero-details {
          width: min(610px, 100%);
          margin-top: 33px;
          padding-top: 23px;

          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));

          border-top: 1px solid rgba(255, 255, 255, 0.14);
        }

        .prestige-hero-details div {
          display: grid;
          gap: 5px;
          padding-right: 24px;
        }

        .prestige-hero-details div + div {
          padding-left: 24px;
          border-left: 1px solid rgba(255, 255, 255, 0.11);
        }

        .prestige-hero-details strong {
          color: #f0d28a;
          font-family: var(--font-heading), Georgia, serif;
          font-size: 25px;
          font-weight: 500;
          line-height: 1;
        }

        .prestige-hero-details span {
          color: rgba(255, 255, 255, 0.48);
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .prestige-scroll {
          position: absolute;
          z-index: 3;
          right: 38px;
          bottom: 36px;

          display: flex;
          align-items: center;
          gap: 13px;

          transform: rotate(90deg);
          transform-origin: right bottom;
        }

        .prestige-scroll > span {
          width: 42px;
          height: 1px;

          overflow: hidden;
          background: rgba(255, 255, 255, 0.25);
        }

        .prestige-scroll > span::after {
          width: 100%;
          height: 100%;
          display: block;

          background: #d8b86e;
          content: "";

          animation: scrollLine 2.2s ease-in-out infinite;
        }

        .prestige-scroll p {
          margin: 0;

          color: rgba(255, 255, 255, 0.46);
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        @keyframes contentReveal {
          from {
            opacity: 0;
            transform: translateY(24px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroZoom {
          from {
            transform: scale(1.08);
          }

          to {
            transform: scale(1.02);
          }
        }

        @keyframes scrollLine {
          0% {
            transform: translateX(-110%);
          }

          50%,
          100% {
            transform: translateX(110%);
          }
        }

        @media (max-width: 1200px) {
          .prestige-hero-container {
            width: min(100% - 64px, 1100px);
          }

          .prestige-hero h1 {
            font-size: clamp(50px, 6.5vw, 80px);
          }
        }

        @media (max-width: 900px) {
          .prestige-hero-image {
            background-position: 63% center;
          }

          .prestige-hero-overlay {
            background:
              linear-gradient(
                90deg,
                rgba(0, 0, 0, 0.97) 0%,
                rgba(0, 0, 0, 0.84) 49%,
                rgba(0, 0, 0, 0.45) 100%
              ),
              linear-gradient(
                to top,
                rgba(0, 0, 0, 0.98),
                rgba(0, 0, 0, 0.12) 62%
              );
          }

          .prestige-hero-container {
            width: min(100% - 42px, 820px);
          }

          .prestige-scroll {
            display: none;
          }
        }

        @media (max-width: 650px) {
          .prestige-hero {
            min-height: 100svh;
            align-items: flex-end;
          }

          .prestige-hero-image {
            background-position: 61% center;
          }

          .prestige-hero-overlay {
            background:
              linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.36) 0%,
                rgba(0, 0, 0, 0.58) 31%,
                rgba(0, 0, 0, 0.97) 72%,
                #030303 100%
              );
          }

          .prestige-hero-glow {
            top: 40%;
            left: -20%;
            width: 360px;
            height: 360px;
          }

          .prestige-hero-container {
            width: min(100% - 32px, 600px);
            padding: 128px 0 48px;
          }

          .prestige-hero-rating {
            gap: 11px;
            margin-bottom: 19px;
          }

          .prestige-stars {
            font-size: 10px;
          }

          .prestige-rating-text {
            font-size: 7px;
            letter-spacing: 0.13em;
          }

          .prestige-hero-label {
            margin-bottom: 16px;
            font-size: 8px;
            letter-spacing: 0.2em;
          }

          .prestige-hero h1 {
            font-size: clamp(41px, 11.7vw, 58px);
            line-height: 0.97;
            letter-spacing: -0.04em;
          }

          .prestige-hero h1 small {
            margin-top: 8px;
            font-size: 0.5em;
          }

          .prestige-hero-description {
            margin-top: 22px;
            padding-left: 14px;
            font-size: 13px;
            line-height: 1.66;
          }

          .prestige-hero-actions {
            margin-top: 27px;
            display: grid;
            grid-template-columns: 1fr;
          }

          .prestige-button-primary,
          .prestige-button-secondary {
            width: 100%;
            min-height: 53px;
          }

          .prestige-hero-details {
            margin-top: 29px;
            padding-top: 18px;
          }

          .prestige-hero-details div {
            padding-right: 8px;
          }

          .prestige-hero-details div + div {
            padding-left: 8px;
          }

          .prestige-hero-details strong {
            font-size: 19px;
          }

          .prestige-hero-details span {
            font-size: 6px;
            letter-spacing: 0.09em;
          }
        }

        @media (max-width: 390px) {
          .prestige-hero h1 {
            font-size: clamp(37px, 11vw, 45px);
          }

          .prestige-rating-text {
            max-width: 145px;
            line-height: 1.5;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .prestige-hero-image,
          .prestige-hero-content,
          .prestige-scroll > span::after {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}