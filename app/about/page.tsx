import InternalPageHero from "../components/InternalPageHero";

export const metadata = {
  title: "About NASMC",
  description:
    "About the National AirSpace Management Center and its defined legal mandate.",
};

export default function AboutPage() {
  return (
    <main>
      <InternalPageHero
        eyebrow="ABOUT NASMC"
        title="A national institution dedicated to the development and optimal use of airspace."
        description="The National AirSpace Management Center is a public economic authority established to support the development, planning and optimal use of airspace within its defined legal mandate."
      />
    </main>
  );
}
