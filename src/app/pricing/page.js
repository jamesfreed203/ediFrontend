import PricingPage from "../page-containers/PricingPage";
import { apiRoutes, bearerToken } from "../models/commonConstants";
import axios from "axios";

// Prevent caching in Next.js to always pull fresh data on each request
export const fetchCache = "only-no-store";
export const revalidate = 0;

async function getPricingData() {
  try{
    const response = await axios.get(apiRoutes.getPlansData, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": bearerToken
      }
    });

    return response.data;
  }catch(error){
    console.error("Error fetching data: ", error);
    return {data: null};
  }
}

// Metadata for SEO
export async function generateMetadata() {
  return {
    title: "Pricing Plans | EDI",
    description: "",
  };
};

export default async function Pricing() {
  const pricingData = await getPricingData();
  
  return (
    <PricingPage pricingPlans={pricingData?.data || []} />
  );
}