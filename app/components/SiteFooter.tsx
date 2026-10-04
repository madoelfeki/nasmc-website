import Image from "next/image";
import Link from "next/link";
import styles from "./SiteFooter.module.css";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Our Role", href: "/our-role" },
  { label: "Projects", href: "/projects" },
  { label: "News", href: "/news" },
  { label: "Training", href: "/training" },
  { label: "Knowledge Hub", href: "/knowledge-hub" },
  { label: "Documents", href: "/documents" },
  { label: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.container}>
        <div className={styles.identityBlock}>
          <Link href="/" aria-label="NASMC home" className={styles.identity}>
            <Image src="/images/nasmc-logo.svg" alt="" width={48} height={48} />
            <span>National AirSpace Management Center</span>
          </Link>
          <p>Official Digital Gateway of NASMC, Egypt.</p>
        </div>

        <nav className={styles.navigation} aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <Link href={link.href} key={link.href}>{link.label}</Link>
          ))}
        </nav>

        <div className={styles.bottom}>
          <span>NASMC — Egypt</span>
          <span>National AirSpace Management Center</span>
        </div>
      </div>
    </footer>
  );
}
