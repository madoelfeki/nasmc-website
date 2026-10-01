import Link from "next/link";

export const metadata = {
  title: "News & Updates | NASMC",
  description:
    "Official news and institutional updates from the National Airspace Management Center.",
};

export default function NewsPage() {
  return (
    <main className="role-detail-page">
      <section className="role-detail-hero">
        <div className="role-detail-inner">
          <p className="role-detail-eyebrow">NEWS &amp; UPDATES</p>
          <h1>News &amp; Updates</h1>
          <p>Official news will be published here.</p>
          <Link href="/" className="role-detail-back">
            ← Back to NASMC
          </Link>
        </div>
      </section>
    </main>
  );
}
