"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import LanguageSelector from "./components/LanguageSelector";
import AppearanceSelector from "./components/AppearanceSelector";
import ProjectsNews from "./components/ProjectsNews";
import HomepageCompletion, {
  HomepageFooter,
} from "./components/HomepageCompletion";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // Close desktop dropdown when clicking outside the navigation
      if (
        openMenu &&
        navRef.current &&
        !navRef.current.contains(target)
      ) {
        setOpenMenu(null);
      }

      // Close mobile menu when clicking outside it
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

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen, openMenu]);

  const toggleMenu = (menu: string) => {
    setOpenMenu((current) => (current === menu ? null : menu));
  };

  return (
    <div className={styles.page}>
      {/* =========================================
          HEADER
          ========================================= */}

      <header
        className={`site-header${isScrolled ? " site-header-scrolled" : ""}`}
      >
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
        <nav
          ref={navRef}
          className="main-nav"
          aria-label="Main navigation"
        >
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

          {/* Desktop Language */}
          <div className="desktop-action">
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
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
              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
              >
                About NASMC
              </Link>

              <Link
                href="/our-role"
                onClick={() => setMenuOpen(false)}
              >
                Our Role
              </Link>

              <Link
                href="/about/leadership"
                onClick={() => setMenuOpen(false)}
              >
                Leadership
              </Link>

              <Link
                href="/about/mission-vision"
                onClick={() => setMenuOpen(false)}
              >
                Mission & Vision
              </Link>

              <Link
                href="/about/organizational-structure"
                onClick={() => setMenuOpen(false)}
              >
                Organizational Structure
              </Link>

              <Link
                href="/about/legal-basis"
                onClick={() => setMenuOpen(false)}
              >
                Legal Basis
              </Link>
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
              <Link
                href="/services"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>

              <Link
                href="/projects"
                onClick={() => setMenuOpen(false)}
              >
                Projects & Initiatives
              </Link>

              <Link
                href="/training"
                onClick={() => setMenuOpen(false)}
              >
                Training
              </Link>

              <Link
                href="/research"
                onClick={() => setMenuOpen(false)}
              >
                Research & Studies
              </Link>
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
              <Link
                href="/news"
                onClick={() => setMenuOpen(false)}
              >
                News
              </Link>

              <Link
                href="/announcements"
                onClick={() => setMenuOpen(false)}
              >
                Announcements
              </Link>

              <Link
                href="/documents"
                onClick={() => setMenuOpen(false)}
              >
                Publications & Documents
              </Link>

              <Link
                href="/media"
                onClick={() => setMenuOpen(false)}
              >
                Media Center
              </Link>
            </div>
          )}

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
          >
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
          <div
            className={styles.heroBackground}
            aria-hidden="true"
          >
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

              <Link
                href="/our-role"
                className={styles.secondary}
              >
                Explore Our Role
              </Link>
            </div>
          </div>

          <div
            className={styles.heroVisual}
            aria-hidden="true"
          >
            <div className="airspace-ring ring-one" />
            <div className="airspace-ring ring-two" />
            <div className="airspace-ring ring-three" />

            <div className="airspace-center">
              <span />
            </div>

            <div className="flight-dot" />
          </div>
        </section>

        {/* =========================================
            ABOUT NASMC
            ========================================= */}

        <section className={styles.aboutSection}>
          <div className={styles.aboutContainer}>
            <div className={styles.aboutContent}>
              <p className={styles.sectionEyebrow}>
                ABOUT NASMC
              </p>

              <h2 className={styles.aboutTitle}>
                A national institution dedicated to the development and optimal use of airspace.
              </h2>

              <p className={styles.aboutText}>
                The National Airspace Management Center is a public economic authority established to support the development, planning and optimal use of airspace within its defined legal mandate.
              </p>

              <Link
                href="/about"
                className={styles.aboutLink}
              >
                Explore the Center
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div
              className={styles.aboutVisual}
              aria-hidden="true"
            >
              <Image
                src="/images/about-nasmc-airspace-v2.png"
                alt=""
                fill
                sizes="(max-width: 480px) calc(100vw - 40px), (max-width: 760px) calc(100vw - 48px), 440px"
                className={styles.aboutVisualImage}
              />
            </div>
          </div>
        </section>


        {/* =========================================
            OUR ROLE
            ========================================= */}

        <section className={styles.roleSection}>
          <div className={styles.roleContainer}>
            <div className={styles.roleIntro}>
              <p className={styles.sectionEyebrow}>OUR ROLE</p>

              <h2 className={styles.roleTitle}>
                Supporting the planning, development and efficient use of airspace.
              </h2>

              <p className={styles.roleText}>
                NASMC works within its defined legal mandate to support the
                planning, development and optimal use of airspace,
                and to contribute to the safety and efficiency of air navigation
                services.
              </p>
            </div>

            <div className={styles.roleGrid}>
              <article className={styles.roleCard}>
                <span className={styles.roleNumber}>01</span>
                <h3>Airspace Planning &amp; Development</h3>
                <p>
                  Planning, designing and developing airways and terminal areas
                  within the Center&apos;s defined responsibilities.
                </p>
              </article>

              <article className={styles.roleCard}>
                <span className={styles.roleNumber}>02</span>
                <h3>Aviation Studies &amp; Technical Support</h3>
                <p>
                  Conducting technical studies and providing technical advice,
                  information and services related to air navigation.
                </p>
              </article>

              <article className={styles.roleCard}>
                <span className={styles.roleNumber}>03</span>
                <h3>Airspace Efficiency &amp; Traffic Flow</h3>
                <p>
                  Contributing to the planning of routes and the organization of
                  air traffic flow to support efficient use of airspace.
                </p>
              </article>

              <article className={styles.roleCard}>
                <span className={styles.roleNumber}>04</span>
                <h3>Training &amp; Qualification</h3>
                <p>
                  Supporting training and qualification activities within the
                  Center&apos;s legal mandate.
                </p>
              </article>
            </div>

            <div className={styles.roleLinkWrap}>
              <Link href="/our-role" className={styles.aboutLink}>
                Explore Our Role
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>


        {/* =========================================
            AIRSPACE VISUALIZATION
            ========================================= */}

        <section className={styles.airspaceSection}>
          <div className={styles.airspaceContainer}>

            <div className={styles.airspaceCopy}>
              <p className={styles.sectionEyebrow}>
                AIRSPACE
              </p>

              <h2 className={styles.airspaceTitle}>
                A connected view of airspace.
              </h2>

              <p className={styles.airspaceText}>
                Airspace is a structured environment of routes, sectors,
                flows and interconnected aviation activities. NASMC supports
                its planning and development within its defined legal mandate.
              </p>

              <Link
                href="/our-role"
                className={styles.airspaceLink}
              >
                Discover how NASMC contributes
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div
              className={styles.airspaceVisual}
              aria-hidden="true"
            >
              <div className={styles.airspaceGrid} />

              <div className={`${styles.airspaceSector} ${styles.sectorOne}`}>
                <span>SECTOR 01</span>
              </div>

              <div className={`${styles.airspaceSector} ${styles.sectorTwo}`}>
                <span>SECTOR 02</span>
              </div>

              <div className={`${styles.airspaceSector} ${styles.sectorThree}`}>
                <span>SECTOR 03</span>
              </div>

              <div className={`${styles.route} ${styles.routeOne}`} />
              <div className={`${styles.route} ${styles.routeTwo}`} />
              <div className={`${styles.route} ${styles.routeThree}`} />
              <div className={`${styles.route} ${styles.routeFour}`} />

              <div className={`${styles.airspaceNode} ${styles.nodeOne}`}>
                <span />
              </div>

              <div className={`${styles.airspaceNode} ${styles.nodeTwo}`}>
                <span />
              </div>

              <div className={`${styles.airspaceNode} ${styles.nodeThree}`}>
                <span />
              </div>

              <div className={`${styles.airspaceNode} ${styles.nodeFour}`}>
                <span />
              </div>

              <div className={styles.airspaceCenter}>
                <div className={styles.airspaceCenterPulse} />
                <span />
              </div>

              <div className={styles.flowLine} />
              <div className={styles.flowLineTwo} />

              <div className={`${styles.visualLabel} ${styles.visualLabelTop}`}>
                AIRSPACE
              </div>

              <div className={`${styles.visualLabel} ${styles.visualLabelBottom}`}>
                ROUTES · FLOW · CONNECTIONS
              </div>
            </div>

          </div>
        </section>

        {/* =========================================
            DIGITAL GATEWAY
            ========================================= */}

        <section className={styles.digitalGatewaySection}>
          <div className={styles.digitalGatewayContainer}>
            <div className={styles.digitalGatewayHeader}>
              <div>
                <p className={styles.sectionEyebrow}>DIGITAL GATEWAY</p>
                <h2 className={styles.digitalGatewayTitle}>
                  A connected digital future.
                </h2>
              </div>

              <p className={styles.digitalGatewayIntro}>
                Explore current NASMC information and discover the future
                digital services planned for this gateway.
              </p>
            </div>

            <div className={styles.digitalGatewayGrid}>
              <article className={`${styles.digitalGatewayCard} ${styles.digitalGatewayCardAvailable}`}>
                <div className={styles.digitalGatewayCardTop}>
                  <span className={styles.digitalGatewayNumber}>01</span>
                  <span className={`${styles.digitalGatewayStatus} ${styles.digitalGatewayStatusAvailable}`}>
                    Available now
                  </span>
                </div>

                <h3>NASMC information</h3>
                <p>
                  Read about the Center&apos;s role and areas of work.
                </p>

                <Link href="/our-role" className={styles.digitalGatewayLink}>
                  Explore our role <span aria-hidden="true">→</span>
                </Link>
              </article>

              <article className={styles.digitalGatewayCard}>
                <div className={styles.digitalGatewayCardTop}>
                  <span className={styles.digitalGatewayNumber}>02</span>
                  <span className={styles.digitalGatewayStatus}>
                    Future digital services
                  </span>
                </div>

                <h3>Digital services</h3>
                <p>
                  A future home for official online services as they become
                  available.
                </p>
              </article>

              <article className={styles.digitalGatewayCard}>
                <div className={styles.digitalGatewayCardTop}>
                  <span className={styles.digitalGatewayNumber}>03</span>
                  <span className={styles.digitalGatewayStatus}>
                    Future digital services
                  </span>
                </div>

                <h3>Training &amp; knowledge</h3>
                <p>
                  A future space for official learning resources and
                  publications.
                </p>
              </article>
            </div>
          </div>
        </section>

        <ProjectsNews />

        <HomepageCompletion />

      </main>

      <HomepageFooter />
    </div>
  );
}
