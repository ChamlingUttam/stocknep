import PricingHeader from "./PricingHeader";
import PricingCard from "./PricingCard";
import { PLANS } from "./pricingData";

export default function PricingTable() {
  return (
    <div
      className="w-full min-h-screen py-16 px-4 flex items-center justify-center"
      style={{ background: "#F5F6F8" }}
    >
      <div className="w-full max-w-6xl">
        <PricingHeader />

        <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          {PLANS.map((plan) => (
            <PricingCard
              key={plan.name}
              plan={plan}
            />
          ))}
        </div>
      </div>
    </div>
  );
}