import MobileMenu from "./components/front/MobileMenu";
import Header from "./components/front/Header";
import HeroBanner from "./components/front/homepage/HeroBanner";


export default function Home() {
  return (
    <div>
      <Header />
      <MobileMenu />
      <HeroBanner
      title="Automation with AI accountability at its core."
      subtitle="With an advanced layered AI architecture, Jitterbit Harmony provides a modern approach to end-to-end integration and automation."
      primaryButtonText="Get a Demo"
      primaryButtonLink="https://www.jitterbit.com/get-a-demo/"
      secondaryButtonText="Learn more about the Harmony platform"
      secondaryButtonLink="https://www.jitterbit.com/harmony/"
      imageSrc="/assets/img/HarmonyTitle-HeroImage-Ring.jpg"
      imageAlt="Harmony"
    />
    </div>
  );
}