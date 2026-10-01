import Link from "next/link";

export const metadata = {
  title: "Projects & Initiatives | NASMC",
  description:
    "Official project and initiative information from the National Airspace Management Center.",
};

export default function ProjectsPage() {
  return (
    <main className="role-detail-page">
      <section className="role-detail-hero">
        <div className="role-detail-inner">
          <p className="role-detail-eyebrow">PROJECTS &amp; INITIATIVES</p>
          <h1>Projects &amp; Initiatives</h1>
          <p>Official project information will be published here.</p>
          <Link href="/" className="role-detail-back">
            ← Back to NASMC
          </Link>
        </div>
      </section>
    </main>
  );
}
