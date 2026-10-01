"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import LanguageSelector from "./components/LanguageSelector";
import AppearanceSelector from "./components/AppearanceSelector";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    if (
      !target.closest(".mobile-menu") &&
      !target.closest(".mobile-menu-button")
    ) {
      setMenuOpen(false);
    }
  };

  if (menuOpen) {
    document.addEventListener("click", handleClickOutside);
  }

  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}, [menuOpen]);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className={styles.page}>
      {/* =========================================
          HEADER
          ========================================= */}

      <header className="site-header">
        {/* Logo */}
        <div className="brand">
          <Link href="/" aria-label="NASMC Home">
            <Image
              src="/images/nasmc-logo.svg"
              alt="National Airspace Management Center"
              width={76}
              height={76}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="main-nav" aria-label="Main navigation">
          <Link href="/">Home</Link>

          <div className="nav-dropdown">
            <button
              type="button"
              onClick={() => toggleMenu("center")}
              aria-expanded={openMenu === "center"}
            >
              The Center <span>⌄</span>
            </button>

            {openMenu === "center" && (
              <div className="dropdown-menu">
                <Link href="/about">About NASMC</Link>
                <Link href="/our-role">Our Role</Link>
                <Link href="/about/leadership">Leadership</Link>
                <Link href="/about/mission-vision">
                  Mission & Vision
                </Link>
                <Link href="/about/organizational-structure">
                  Organizational Structure
                </Link>
                <Link href="/about/legal-basis">Legal Basis</Link>
              </div>
            )}
          </div>

          <div className="nav-dropdown">
            <button
              type="button"
              onClick={() => toggleMenu("activities")}
              aria-expanded={openMenu === "activities"}
            >
              Activities <span>⌄</span>
            </button>

            {openMenu === "activities" && (
              <div className="dropdown-menu">
                <Link href="/services">Services</Link>
                <Link href="/projects">Projects & Initiatives</Link>
                <Link href="/training">Training</Link>
                <Link href="/research">Research & Studies</Link>
              </div>
            )}
          </div>

          <div className="nav-dropdown">
            <button
              type="button"
              onClick={() => toggleMenu("knowledge")}
              aria-expanded={openMenu === "knowledge"}
            >
              Knowledge & Media <span>⌄</span>
            </button>

            {openMenu === "knowledge" && (
              <div className="dropdown-menu">
                <Link href="/news">News</Link>
                <Link href="/announcements">Announcements</Link>
                <Link href="/documents">
                  Publications & Documents
                </Link>
                <Link href="/media">Media Center</Link>
              </div>
            )}
          </div>

          <Link href="/contact">Contact</Link>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          {/* Desktop Search */}
          <button
            type="button"
            className="search-button desktop-action"
            aria-label="Search"
          >
            ⌕
          </button>

          {/* Desktop Theme */}
          <div className="desktop-action">
  <AppearanceSelector />
</div>

<div className="desktop-action">
  <LanguageSelector />
</div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            ☰
          </button>
        </div>
      </header>

      {/* =========================================
          MOBILE MENU
          ========================================= */}

      {menuOpen && (
        <div className="mobile-menu">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <button
            type="button"
            onClick={() => toggleMenu("mobile-center")}
          >
            The Center <span>›</span>
          </button>

          {openMenu === "mobile-center" && (
            <div className="mobile-submenu">
              <Link href="/about">About NASMC</Link>
              <Link href="/our-role">Our Role</Link>
              <Link href="/about/leadership">Leadership</Link>
              <Link href="/about/mission-vision">
                Mission & Vision
              </Link>
              <Link href="/about/organizational-structure">
                Organizational Structure
              </Link>
              <Link href="/about/legal-basis">Legal Basis</Link>
            </div>
          )}

          <button
            type="button"
            onClick={() => toggleMenu("mobile-activities")}
          >
            Activities <span>›</span>
          </button>

          {openMenu === "mobile-activities" && (
            <div className="mobile-submenu">
              <Link href="/services">Services</Link>
              <Link href="/projects">Projects & Initiatives</Link>
              <Link href="/training">Training</Link>
              <Link href="/research">Research & Studies</Link>
            </div>
          )}

          <button
            type="button"
            onClick={() => toggleMenu("mobile-knowledge")}
          >
            Knowledge & Media <span>›</span>
          </button>

          {openMenu === "mobile-knowledge" && (
            <div className="mobile-submenu">
              <Link href="/news">News</Link>
              <Link href="/announcements">Announcements</Link>
              <Link href="/documents">
                Publications & Documents
              </Link>
              <Link href="/media">Media Center</Link>
            </div>
          )}

          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

          {/* Mobile utility actions */}
          <div className="mobile-menu-divider" />

<div className="mobile-menu-actions">

  <button
    type="button"
    className="mobile-action"
    onClick={() => setMenuOpen(false)}
  >
    <span className="mobile-action-icon">⌕</span>
    <span>Search</span>
  </button>

  <AppearanceSelector mobile />

  <LanguageSelector
    mobile
    onSelect={() => setMenuOpen(false)}
  />

</div>
        </div>
      )}

      {/* =========================================
    HERO
    ========================================= */}

<main className={styles.main}>
  <section className={styles.hero}>
    <div className={styles.heroBackground} aria-hidden="true">
      <div className={styles.heroGrid} />
      <div className={styles.heroOrb} />
      <div className={styles.heroFlightPath} />
      <div className={styles.heroFlightPathSecondary} />
    </div>

    <div className={styles.heroContent}>
      <p className={styles.eyebrow}>
        OFFICIAL DIGITAL GATEWAY
      </p>

      <h1>
        National Airspace
        <br />
        Management Center
      </h1>

      <p className={styles.description}>
        The official digital gateway of the National Airspace
        Management Center, Egypt.
      </p>

      <div className={styles.ctas}>
        <Link href="/about" className={styles.primary}>
          Discover NASMC
        </Link>

        <Link href="/our-role" className={styles.secondary}>
          Explore Our Role
        </Link>
      </div>
    </div>

    <div className={styles.heroVisual} aria-hidden="true">
    <div className="airspace-ring ring-one" />
    <div className="airspace-ring ring-two" />
    <div className="airspace-ring ring-three" />

    <div className="airspace-center">
      <span />
    </div>

    <div className="flight-dot" />
    </div>
  </section>
</main>
    </div>
  );
}