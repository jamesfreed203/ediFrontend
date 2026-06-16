'use client';

import HeroBanner from "../components/homepage/HeroBanner";
import HarmonySection from "../components/homepage/HarmonySection";
import ReportSection from "../components/homepage/ReportSection";
import LogoSliderSection from "../components/homepage/LogoSliderSection";
import PromoSection from "../components/homepage/PromoSection";
import EdiBundleSection from "../components/homepage/EdiBundleSection";

export default function HomePage(){
    return (
        <main>
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
            <HarmonySection />
            <ReportSection />
            <LogoSliderSection />
            <PromoSection />
            <EdiBundleSection />
        </main>
    );
}