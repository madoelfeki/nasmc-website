import Link from "next/link";
import styles from "../page.module.css";

export default function HomepageContactCta() {
  return (
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
  );
}
