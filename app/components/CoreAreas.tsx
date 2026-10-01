import styles from "../page.module.css";

type CoreArea = {
  number: string;
  title: string;
  description: string;
  artworkSrc?: string | null;
  artworkAlt?: string;
};

const areas: CoreArea[] = [
  {
    number: "01",
    title: "Airspace Planning & Development",
    description:
      "Planning and developing airways and terminal areas within the Center’s defined responsibilities.",
  },
  {
    number: "02",
    title: "Routes, Traffic Flow & Efficiency",
    description:
      "Supporting route planning and the organization of air traffic flow for efficient use of airspace.",
  },
  {
    number: "03",
    title: "Aviation Studies & Technical Support",
    description:
      "Technical studies, advice, information and related support for air navigation activities.",
  },
  {
    number: "04",
    title: "Training & Qualification",
    description:
      "Supporting training and qualification activities within the Center’s defined legal mandate.",
  },
];

function CoreAreaArtwork({ index }: { index: number }) {
  return (
    <div className={styles.coreAreaArtwork} aria-hidden="true">
      <div className={styles.coreAreaGrid} />

      {index === 0 && (
        <>
          <div className={`${styles.coreOrbit} ${styles.coreOrbitOne}`} />
          <div className={`${styles.coreOrbit} ${styles.coreOrbitTwo}`} />
          <div className={`${styles.corePoint} ${styles.corePointOne}`} />
          <div className={`${styles.corePoint} ${styles.corePointTwo}`} />
          <div className={`${styles.corePoint} ${styles.corePointThree}`} />
        </>
      )}

      {index === 1 && (
        <>
          <div className={`${styles.coreRoute} ${styles.coreRouteOne}`} />
          <div className={`${styles.coreRoute} ${styles.coreRouteTwo}`} />
          <div className={`${styles.coreRoute} ${styles.coreRouteThree}`} />
          <div className={`${styles.coreRouteDot} ${styles.coreRouteDotOne}`} />
          <div className={`${styles.coreRouteDot} ${styles.coreRouteDotTwo}`} />
          <div className={`${styles.coreRouteDot} ${styles.coreRouteDotThree}`} />
        </>
      )}

      {index === 2 && (
        <>
          <div className={styles.coreStudyRing} />
          <div className={styles.coreStudyRingSmall} />
          <div className={styles.coreStudyPoint} />
          <div className={styles.coreStudyLine} />
        </>
      )}

      {index === 3 && (
        <>
          <div className={styles.coreTrainingCircle}>
            <span>+</span>
          </div>
          <div className={`${styles.coreTrainingNode} ${styles.coreTrainingNodeOne}`} />
          <div className={`${styles.coreTrainingNode} ${styles.coreTrainingNodeTwo}`} />
          <div className={`${styles.coreTrainingNode} ${styles.coreTrainingNodeThree}`} />
        </>
      )}
    </div>
  );
}

export default function CoreAreas() {
  return (
    <section className={styles.coreAreasSection}>
      <div className={styles.coreAreasContainer}>

        <div className={styles.coreAreasHeader}>
          <div>
            <p className={styles.sectionEyebrow}>CORE AREAS</p>

            <h2 className={styles.coreAreasTitle}>
              Capabilities across
              <br />
              the airspace ecosystem.
            </h2>
          </div>

          <p className={styles.coreAreasIntro}>
            NASMC’s role brings together planning, technical studies,
            airspace efficiency and professional development within its
            defined mandate.
          </p>
        </div>

        <div className={styles.coreAreasGrid}>
          {areas.map((area, index) => (
            <article
              key={area.number}
              className={styles.coreAreaCard}
            >
              <div className={styles.coreAreaTop}>
                <span className={styles.coreAreaNumber}>
                  {area.number}
                </span>

                <span className={styles.coreAreaArrow} aria-hidden="true">
                  ↗
                </span>
              </div>

              <div className={styles.coreAreaVisual}>
                {area.artworkSrc ? (
                  <img
                    src={area.artworkSrc}
                    alt={area.artworkAlt || ""}
                  />
                ) : (
                  <CoreAreaArtwork index={index} />
                )}
              </div>

              <div className={styles.coreAreaContent}>
                <h3>{area.title}</h3>

                <p>{area.description}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
