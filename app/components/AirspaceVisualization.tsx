import styles from "../page.module.css";

type AirspaceVisualizationProps = {
  artworkSrc?: string | null;
  artworkAlt?: string;
};

export default function AirspaceVisualization({
  artworkSrc = null,
  artworkAlt = "",
}: AirspaceVisualizationProps) {
  return (
    <div className={styles.airspaceVisual}>

      {artworkSrc ? (
        <div className={styles.airspaceArtwork}>
          <img
            src={artworkSrc}
            alt={artworkAlt}
          />
        </div>
      ) : (
        <div
          className={styles.airspaceFallback}
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
      )}

    </div>
  );
}
