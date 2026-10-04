"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import AppearanceSelector from "./AppearanceSelector";
import LanguageSelector from "./LanguageSelector";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (openMenu && navRef.current && !navRef.current.contains(target)) {
        setOpenMenu(null);
      }

      const element = event.target as HTMLElement;
      if (
        menuOpen &&
        !element.closest(".mobile-menu") &&
        !element.closest(".mobile-menu-button")
      ) {
        setMenuOpen(false);
        setOpenMenu(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen, openMenu]);

  const toggleMenu = (menu: string) => {
    setOpenMenu((current) => (current === menu ? null : menu));
  };

  const closeMobileMenu = () => setMenuOpen(false);
  const handleHomeClick = () => {
    setMenuOpen(false);
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <header className={`site-header${isScrolled ? " site-header-scrolled" : ""}`}>
        <div className="brand">
          <Link href="/" aria-label="NASMC Home" onClick={handleHomeClick}>
            <Image
              src="/images/nasmc-logo-full.png"
              alt="National AirSpace Management Center"
              width={1252}
              height={1222}
              priority
            />
          </Link>
        </div>

        <nav ref={navRef} className="main-nav" aria-label="Main navigation">
          <Link href="/" onClick={handleHomeClick}>Home</Link>

          <div className="nav-dropdown">
            <button type="button" onClick={() => toggleMenu("center")} aria-expanded={openMenu === "center"}>
              The Center <span>⌄</span>
            </button>
            {openMenu === "center" && (
              <div className="dropdown-menu">
                <Link href="/about">About NASMC</Link>
                <Link href="/our-role">Our Role</Link>
                <Link href="/about/leadership">Leadership</Link>
                <Link href="/about/mission-vision">Mission &amp; Vision</Link>
                <Link href="/about/organizational-structure">Organizational Structure</Link>
                <Link href="/about/legal-basis">Legal Basis</Link>
              </div>
            )}
          </div>

          <div className="nav-dropdown">
            <button type="button" onClick={() => toggleMenu("activities")} aria-expanded={openMenu === "activities"}>
              Activities <span>⌄</span>
            </button>
            {openMenu === "activities" && (
              <div className="dropdown-menu">
                <Link href="/services">Services</Link>
                <Link href="/projects">Projects &amp; Initiatives</Link>
                <Link href="/training">Training</Link>
                <Link href="/research">Research &amp; Studies</Link>
              </div>
            )}
          </div>

          <div className="nav-dropdown">
            <button type="button" onClick={() => toggleMenu("knowledge")} aria-expanded={openMenu === "knowledge"}>
              Knowledge &amp; Media <span>⌄</span>
            </button>
            {openMenu === "knowledge" && (
              <div className="dropdown-menu">
                <Link href="/news">News</Link>
                <Link href="/announcements">Announcements</Link>
                <Link href="/documents">Publications &amp; Documents</Link>
                <Link href="/media">Media Center</Link>
              </div>
            )}
          </div>

          <Link href="/contact">Contact</Link>
        </nav>

        <div className="header-actions">
          <button type="button" className="search-button desktop-action" aria-label="Search">⌕</button>
          <div className="desktop-action"><AppearanceSelector /></div>
          <div className="desktop-action"><LanguageSelector /></div>
          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => {
              setMenuOpen((current) => !current);
              setOpenMenu(null);
            }}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            ☰
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          <Link href="/" onClick={handleHomeClick}>Home</Link>

          <button type="button" onClick={() => toggleMenu("mobile-center")} aria-expanded={openMenu === "mobile-center"}>
            The Center <span>›</span>
          </button>
          {openMenu === "mobile-center" && (
            <div className="mobile-submenu">
              <Link href="/about" onClick={closeMobileMenu}>About NASMC</Link>
              <Link href="/our-role" onClick={closeMobileMenu}>Our Role</Link>
              <Link href="/about/leadership" onClick={closeMobileMenu}>Leadership</Link>
              <Link href="/about/mission-vision" onClick={closeMobileMenu}>Mission &amp; Vision</Link>
              <Link href="/about/organizational-structure" onClick={closeMobileMenu}>Organizational Structure</Link>
              <Link href="/about/legal-basis" onClick={closeMobileMenu}>Legal Basis</Link>
            </div>
          )}

          <button type="button" onClick={() => toggleMenu("mobile-activities")} aria-expanded={openMenu === "mobile-activities"}>
            Activities <span>›</span>
          </button>
          {openMenu === "mobile-activities" && (
            <div className="mobile-submenu">
              <Link href="/services" onClick={closeMobileMenu}>Services</Link>
              <Link href="/projects" onClick={closeMobileMenu}>Projects &amp; Initiatives</Link>
              <Link href="/training" onClick={closeMobileMenu}>Training</Link>
              <Link href="/research" onClick={closeMobileMenu}>Research &amp; Studies</Link>
            </div>
          )}

          <button type="button" onClick={() => toggleMenu("mobile-knowledge")} aria-expanded={openMenu === "mobile-knowledge"}>
            Knowledge &amp; Media <span>›</span>
          </button>
          {openMenu === "mobile-knowledge" && (
            <div className="mobile-submenu">
              <Link href="/news" onClick={closeMobileMenu}>News</Link>
              <Link href="/announcements" onClick={closeMobileMenu}>Announcements</Link>
              <Link href="/documents" onClick={closeMobileMenu}>Publications &amp; Documents</Link>
              <Link href="/media" onClick={closeMobileMenu}>Media Center</Link>
            </div>
          )}

          <Link href="/contact" onClick={closeMobileMenu}>Contact</Link>
          <div className="mobile-menu-divider" />
          <div className="mobile-menu-actions">
            <button type="button" className="mobile-action" onClick={closeMobileMenu}>
              <span className="mobile-action-icon">⌕</span><span>Search</span>
            </button>
            <AppearanceSelector mobile />
            <LanguageSelector mobile onSelect={closeMobileMenu} />
          </div>
        </div>
      )}
    </>
  );
}
