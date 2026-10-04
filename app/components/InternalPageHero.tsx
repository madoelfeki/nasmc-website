import styles from "./InternalPageHero.module.css";

type InternalPageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function InternalPageHero({
  eyebrow,
  title,
  description,
}: InternalPageHeroProps) {
  return (
    <header className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </header>
  );
}
