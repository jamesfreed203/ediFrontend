'use client';

import PlansSection from "../components/pricing/PlansSection";

export default function PricingPage({ pricingPlans }){
    return (
        <main>
            <PlansSection pricingPlans={pricingPlans}/>
        </main>
    );
}