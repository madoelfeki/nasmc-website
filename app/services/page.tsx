import InternalPageHero from "../components/InternalPageHero";

export const metadata = {
  title: "Services | NASMC",
  description:
    "Official service information from the National AirSpace Management Center.",
};

export default function ServicesPage() {
  return (
    <main>
      <InternalPageHero
        eyebrow="SERVICES"
        title="Services"
        description="Official service information will be published here."
      />
    </main>
  );
}
