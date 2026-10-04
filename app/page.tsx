"use client";

import Image from "next/image";
import Link from "next/link";
import type { MouseEvent as ReactMouseEvent } from "react";
import styles from "./page.module.css";
import ProjectsNews from "./components/ProjectsNews";
import HomepageContactCta from "./components/HomepageCompletion";

const digitalPortals = [
  { number: "01", title: "Services Portal", description: "A future destination for official services information." },
  { number: "02", title: "Training Portal", description: "A future destination for official training information.", href: "/training" },
  { number: "03", title: "Knowledge Hub", description: "A future destination for official knowledge and publications.", href: "/knowledge-hub" },
  { number: "04", title: "Careers Portal", description: "A future destination for official careers information." },
  { number: "05", title: "Employee Portal", description: "A future destination for employee digital services." },
];

export default function Home() {
  const scrollToSection = (
    event: ReactMouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    event.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ block: "start" });
  };

  return (
    <div className={styles.page}>
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
              National AirSpace
              <br />
              Management Center
            </h1>

            <p className={styles.description}>
              The official digital gateway of the National AirSpace
              Management Center, Egypt.
            </p>

            <div className={styles.ctas}>
              <Link
                href="#about"
                className={styles.primary}
                onClick={(event) => scrollToSection(event, "about")}
              >
                Discover NASMC
              </Link>

              <Link
                href="#our-role"
                className={styles.secondary}
                onClick={(event) => scrollToSection(event, "our-role")}
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

        <section id="about" className={styles.aboutSection}>
          <div className={styles.aboutContainer}>
            <div className={styles.aboutContent}>
              <p className={styles.sectionEyebrow}>
                ABOUT NASMC
              </p>

              <h2 className={styles.aboutTitle}>
                A national institution dedicated to the development and optimal use of airspace.
              </h2>

              <p className={styles.aboutText}>
                The National AirSpace Management Center is a public economic authority established to support the development, planning and optimal use of airspace within its defined legal mandate.
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

        <section id="our-role" className={styles.roleSection}>
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
                The public gateway will connect visitors with planned
                functional portals. Official availability will be confirmed
                as information is published.
              </p>
            </div>

            <div className={styles.digitalGatewayGrid}>
              {digitalPortals.map((portal) => (
                <article className={styles.digitalGatewayCard} key={portal.number}>
                  <div className={styles.digitalGatewayCardTop}>
                    <span className={styles.digitalGatewayNumber}>{portal.number}</span>
                    <span className={styles.digitalGatewayStatus}>Future portal</span>
                  </div>
                  <h3>{portal.title}</h3>
                  <p>{portal.description}</p>
                  {portal.href && (
                    <Link href={portal.href} className={styles.digitalGatewayLink}>
                      Explore {portal.title.replace(" Portal", "")} <span aria-hidden="true">→</span>
                    </Link>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <ProjectsNews />

        <HomepageContactCta />

      </main>
    </div>
  );
}
