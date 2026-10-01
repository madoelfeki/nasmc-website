import Link from "next/link";
import styles from "../page.module.css";

type PreviewItem = {
  id: string;
  message: string;
};

type ProjectsNewsProps = {
  projects?: PreviewItem[];
  news?: PreviewItem[];
};

const projectPlaceholders: PreviewItem[] = [
  {
    id: "project-information",
    message: "Official project information will be published here.",
  },
];

const newsPlaceholders: PreviewItem[] = [
  {
    id: "news-information",
    message: "Official news will be published here.",
  },
];

export default function ProjectsNews({
  projects = projectPlaceholders,
  news = newsPlaceholders,
}: ProjectsNewsProps) {
  return (
    <section
      className={styles.projectsNewsSection}
      aria-labelledby="projects-news-title"
    >
      <div className={styles.projectsNewsContainer}>
        <header className={styles.projectsNewsHeader}>
          <p className={styles.sectionEyebrow}>PROJECTS &amp; NEWS</p>
          <h2 id="projects-news-title" className={styles.projectsNewsTitle}>
            Developments, initiatives and updates.
          </h2>
          <p className={styles.projectsNewsIntro}>
            This space will share official NASMC projects, institutional
            developments and updates as verified content becomes available.
          </p>
        </header>

        <div className={styles.projectsNewsColumns}>
          <section
            className={styles.projectsNewsPanel}
            aria-labelledby="projects-preview-title"
          >
            <div className={styles.projectsNewsPanelHeader}>
              <h3 id="projects-preview-title">Projects &amp; Initiatives</h3>
              <span className={styles.projectsNewsPanelLabel}>PREVIEW</span>
            </div>

            <div className={styles.projectsPreviewList}>
              {projects.map((project) => (
                <article
                  className={styles.projectPreviewCard}
                  key={project.id}
                >
                  <span className={styles.projectsNewsPlaceholderLabel}>
                    Official content coming soon
                  </span>
                  <p>{project.message}</p>
                </article>
              ))}
            </div>

            <Link href="/projects" className={styles.projectsNewsLink}>
              View all projects <span aria-hidden="true">→</span>
            </Link>
          </section>

          <section
            className={styles.projectsNewsPanel}
            aria-labelledby="news-preview-title"
          >
            <div className={styles.projectsNewsPanelHeader}>
              <h3 id="news-preview-title">News &amp; Updates</h3>
              <span className={styles.projectsNewsPanelLabel}>PREVIEW</span>
            </div>

            <div className={styles.newsPreviewList}>
              {news.map((item) => (
                <article className={styles.newsPreviewItem} key={item.id}>
                  <span
                    className={styles.newsPreviewMarker}
                    aria-hidden="true"
                  />
                  <p>{item.message}</p>
                  <span className={styles.projectsNewsPlaceholderLabel}>
                    Official content coming soon
                  </span>
                </article>
              ))}
            </div>

            <Link href="/news" className={styles.projectsNewsLink}>
              View all news <span aria-hidden="true">→</span>
            </Link>
          </section>
        </div>
      </div>
    </section>
  );
}
