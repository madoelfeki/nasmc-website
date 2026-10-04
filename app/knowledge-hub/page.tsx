import InternalPageHero from "../components/InternalPageHero";

export const metadata = {
  title: "Knowledge Hub | NASMC",
  description:
    "Official publications and knowledge resources from the National AirSpace Management Center.",
};

export default function KnowledgeHubPage() {
  return (
    <main>
      <InternalPageHero
        eyebrow="KNOWLEDGE & PUBLICATIONS"
        title="Knowledge Hub"
        description="Official publications and knowledge resources will be published here."
      />
    </main>
  );
}
