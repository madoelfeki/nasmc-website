import InternalPageHero from "../components/InternalPageHero";

export const metadata = {
  title: "News & Updates | NASMC",
  description:
    "Official news and institutional updates from the National AirSpace Management Center.",
};

export default function NewsPage() {
  return (
    <main>
      <InternalPageHero
        eyebrow="NEWS & UPDATES"
        title="News & Updates"
        description="Official news will be published here."
      />
    </main>
  );
}
