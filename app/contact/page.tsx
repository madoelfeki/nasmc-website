import Link from "next/link";

export const metadata = {
  title: "Contact | NASMC",
  description:
    "Official contact information for the National Airspace Management Center.",
};

export default function ContactPage() {
  return (
    <main className="role-detail-page">
      <section className="role-detail-hero">
        <div className="role-detail-inner">
          <p className="role-detail-eyebrow">CONTACT</p>
          <h1>Contact NASMC</h1>
          <p>[OFFICIAL CONTACT INFORMATION REQUIRED]</p>
          <Link href="/" className="role-detail-back">
            ← Back to NASMC
          </Link>
        </div>
      </section>
    </main>
  );
}
