import CoreAreas from "../components/CoreAreas";
import InternalPageHero from "../components/InternalPageHero";

export const metadata = {
  title: "Our Role | NASMC",
  description:
    "The role and core areas of the National AirSpace Management Center.",
};

export default function OurRolePage() {
  return (
    <main>
      <InternalPageHero
        eyebrow="OUR ROLE"
        title="Supporting the planning, development and efficient use of airspace."
        description="NASMC works within its defined legal mandate across airspace planning, technical studies, airspace efficiency and training."
      />
      <CoreAreas />
    </main>
  );
}
