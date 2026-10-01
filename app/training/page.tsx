import Link from "next/link";

export const metadata = {
  title: "Training | NASMC",
  description:
    "Official training information from the National Airspace Management Center.",
};

export default function TrainingPage() {
  return (
    <main className="role-detail-page">
      <section className="role-detail-hero">
        <div className="role-detail-inner">
          <p className="role-detail-eyebrow">TRAINING</p>
          <h1>Training</h1>
          <p>Official training information will be published here.</p>
          <Link href="/" className="role-detail-back">
            ← Back to NASMC
          </Link>
        </div>
      </section>
    </main>
  );
}
