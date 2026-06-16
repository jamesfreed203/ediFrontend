import HomePage from "./page-containers/HomePage";

// Metadata for SEO
export async function generateMetadata() {
  return {
    title: "Homepage | EDI",
    description: "",
  };
};

export default function Home() {
  return (
    <HomePage />
  );
}