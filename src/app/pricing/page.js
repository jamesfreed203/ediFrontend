import PricingSection from "../components/pricing/PricingSection";

async function getPricingData() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pricing`, {
    cache: 'no-store',
    next: { revalidate: 3600 }
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch pricing data');
  }
  
  return response.json();
}

export default async function PlansPage() {
  const pricingData = await getPricingData();
  
  return (
    <>
      <main>
        <PricingSection pricingPlans={pricingData || []} />
      </main>
    </>
  );
}