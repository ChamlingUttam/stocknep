
"use client";

import { useEffect, useState } from "react";
import PricingHeader from "./PricingHeader";
import PricingCard from "./PricingCard";
import api from "@/api/api";
import { API_ENDPOINTS } from "@/api/api-endpoints";

type PricingPlan = {
  subscription: string;
  description: string;
  short_description: string | null;
  amount: string;
};

type PricingCardPlan = {
  name: string;
  price: string;
  tagline: string;
  features: string[];
};

export default function PricingTable() {
  const [plans, setPlans] = useState<PricingCardPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const response = await api.get(API_ENDPOINTS.PUBLIC.PRICING);

        const pricingData: PricingPlan[] = response.data.data.data;

        const formattedPlans = pricingData.map((plan) => {
          const lines = plan.description
            .split("\n")
            .map((line) => line.trim())
            .filter(Boolean);

          const features = lines
            .filter((line) => line.startsWith("✅"))
            .map((line) => line.replace("✅", "").trim());

          const valueIndex = lines.findIndex((line) =>
            line.startsWith("Value:")
          );

          const tagline =
            valueIndex !== -1 && lines[valueIndex + 1]
              ? lines[valueIndex + 1]
                  .replace(/[“”"]/g, "")
                  .trim()
              : plan.short_description || "";

          return {
            name: plan.subscription,
            price: Number(plan.amount).toLocaleString("en-IN"),
            tagline,
            features,
          };
        });

        setPlans(formattedPlans);
      } catch (err) {
        console.error("Failed to fetch pricing:", err);
        setError("Failed to load pricing plans.");
      } finally {
        setLoading(false);
      }
    };

    fetchPricing();
  }, []);

  return (
    <div
      className="w-full min-h-screen py-16 px-4 flex items-center justify-center"
      style={{ background: "#F5F6F8" }}
    >
      <div className="w-full max-w-6xl">
        <PricingHeader />

        {loading && (
          <div className="text-center py-10 text-[#003773]">
            Loading pricing plans...
          </div>
        )}

        {error && (
          <div className="text-center py-10 text-red-500">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="flex flex-col lg:flex-row gap-6 lg:px-9.5 items-stretch">
            {plans.map((plan) => (
              <PricingCard
                key={plan.name}
                plan={plan}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

