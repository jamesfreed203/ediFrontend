import ContactPage from "../page-containers/ContactPage";

// Metadata for SEO
export async function generateMetadata() {
  return {
    title: "Contact Us | EDI",
    description: "",
  };
};

export default function Contact(){
    return (
        <ContactPage />
    );
}