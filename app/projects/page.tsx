import InternalPageHero from "../components/InternalPageHero";

export const metadata = {
  title: "Projects & Initiatives | NASMC",
  description:
    "Official project and initiative information from the National AirSpace Management Center.",
};

export default function ProjectsPage() {
  return (
    <main>
      <InternalPageHero
        eyebrow="PROJECTS & INITIATIVES"
        title="Projects & Initiatives"
        description="Official project information will be published here."
      />
    </main>
  );
}
