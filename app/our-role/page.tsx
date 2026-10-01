import Link from "next/link";
import CoreAreas from "../components/CoreAreas";

export const metadata = {
  title: "Our Role | NASMC",
  description:
    "The role and core areas of the National Airspace Management Center.",
};

export default function OurRolePage() {
  return (
    <main className="role-detail-page">
      <section className="role-detail-hero">
        <div className="role-detail-inner">
          <p className="role-detail-eyebrow">OUR ROLE</p>

          <h1>
            Supporting the planning,
            <br />
            development and efficient
            <br />
            use of airspace.
          </h1>

          <p>
            NASMC works within its defined legal mandate across airspace
            planning, technical studies, airspace efficiency and training.
          </p>

          <Link href="/" className="role-detail-back">
            ← Back to NASMC
          </Link>
        </div>
      </section>

      <CoreAreas />
    </main>
  );
}
