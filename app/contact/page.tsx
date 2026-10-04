import InternalPageHero from "../components/InternalPageHero";

export const metadata = {
  title: "Contact | NASMC",
  description:
    "Official contact information for the National AirSpace Management Center.",
};

export default function ContactPage() {
  return (
    <main>
      <InternalPageHero
        eyebrow="CONTACT"
        title="Contact NASMC"
        description="[OFFICIAL CONTACT INFORMATION REQUIRED]"
      />
    </main>
  );
}
