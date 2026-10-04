import InternalPageHero from "../components/InternalPageHero";

export const metadata = {
  title: "Training | NASMC",
  description:
    "Official training information from the National AirSpace Management Center.",
};

export default function TrainingPage() {
  return (
    <main>
      <InternalPageHero
        eyebrow="TRAINING"
        title="Training"
        description="Official training information will be published here."
      />
    </main>
  );
}
