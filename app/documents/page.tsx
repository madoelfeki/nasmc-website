import InternalPageHero from "../components/InternalPageHero";

export const metadata = {
  title: "Documents | NASMC",
  description:
    "Official documents and publications from the National AirSpace Management Center.",
};

export default function DocumentsPage() {
  return (
    <main>
      <InternalPageHero
        eyebrow="DOCUMENTS & PUBLICATIONS"
        title="Documents"
        description="Official documents and publications will be published here."
      />
    </main>
  );
}
