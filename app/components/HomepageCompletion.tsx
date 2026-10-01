import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";

const learningAreas = [
  {
    title: "Training",
    description:
      "Official training information will be published here when available.",
    href: "/training",
    linkLabel: "Explore training",
  },
  {
    title: "Knowledge & Publications",
    description:
      "Official publications and knowledge resources will be shared here.",
    href: "/knowledge-hub",
    linkLabel: "Visit the Knowledge Hub",
  },
];

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Our Role", href: "/our-role" },
  { label: "Projects", href: "/projects" },
  { label: "News", href: "/news" },
  { label: "Training", href: "/training" },
  { label: "Knowledge Hub", href: "/knowledge-hub" },
  { label: "Contact", href: "/contact" },
];

export default function HomepageCompletion() {
  return (
    <>
      <section
        className={styles.trainingKnowledgeSection}
        aria-labelledby="training-knowledge-title"
      >
        <div className={styles.trainingKnowledgeContainer}>
          <div className={styles.trainingKnowledgeHeader}>
            <p className={styles.sectionEyebrow}>TRAINING &amp; KNOWLEDGE</p>
            <h2
              id="training-knowledge-title"
              className={styles.trainingKnowledgeTitle}
            >
              Learning, training and knowledge.
            </h2>
            <p className={styles.trainingKnowledgeIntro}>
              Official learning information and knowledge resources will be
              added as they become available.
            </p>
          </div>

          <div className={styles.trainingKnowledgeGrid}>
            {learningAreas.map((area) => (
              <article className={styles.learningPreviewCard} key={area.href}>
                <div>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </div>
                <Link href={area.href} className={styles.learningPreviewLink}>
                  {area.linkLabel} <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className={styles.contactCtaSection}
        aria-labelledby="contact-cta-title"
      >
        <div className={styles.contactCtaContainer}>
          <div className={styles.contactCtaCopy}>
            <p className={styles.sectionEyebrow}>CONTACT NASMC</p>
            <h2 id="contact-cta-title">Connect with the Center.</h2>
            <p className={styles.contactPlaceholder}>
              [OFFICIAL CONTACT INFORMATION REQUIRED]
            </p>
          </div>
          <Link href="/contact" className={styles.contactCtaLink}>
            Contact NASMC <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}

export function HomepageFooter() {
  return (
    <footer className={styles.siteFooter}>
        <div className={styles.siteFooterContainer}>
          <div className={styles.siteFooterIdentity}>
            <Link href="/" aria-label="NASMC home" className={styles.siteFooterBrand}>
              <Image
                src="/images/nasmc-logo.svg"
                alt=""
                width={48}
                height={48}
              />
              <span>National Airspace Management Center</span>
            </Link>
            <p>Official Digital Gateway of NASMC, Egypt.</p>
          </div>

          <nav className={styles.siteFooterNav} aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.siteFooterBottom}>
            <span>NASMC — Egypt</span>
            <span>National Airspace Management Center</span>
          </div>
        </div>
    </footer>
  );
}
