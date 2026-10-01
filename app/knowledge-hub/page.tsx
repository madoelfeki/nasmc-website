import Link from "next/link";

export const metadata = {
  title: "Knowledge Hub | NASMC",
  description:
    "Official publications and knowledge resources from the National Airspace Management Center.",
};

export default function KnowledgeHubPage() {
  return (
    <main className="role-detail-page">
      <section className="role-detail-hero">
        <div className="role-detail-inner">
          <p className="role-detail-eyebrow">KNOWLEDGE &amp; PUBLICATIONS</p>
          <h1>Knowledge Hub</h1>
          <p>Official publications and knowledge resources will be published here.</p>
          <Link href="/" className="role-detail-back">
            ← Back to NASMC
          </Link>
        </div>
      </section>
    </main>
  );
}
