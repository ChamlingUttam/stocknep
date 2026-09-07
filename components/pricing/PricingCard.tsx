import { Check } from "lucide-react";

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

type PricingCardProps = {
  plan: {
    name: string;
    price: string;
    tagline: string;
    features: string[];
    highlighted?: boolean;
  };
};

export default function PricingCard({ plan }: PricingCardProps) {
  return (
    <Card
      className={`flex  flex-col relative overflow-hidden transition-transform duration-200 w-full lg:flex-1 ${
        plan.highlighted ? "lg:-translate-y-2" : ""
      }`}
      style={{
        borderRadius: "20px",
        border: plan.highlighted
          ? "2px solid #2E6FF2"
          : "1px solid #E3E6EC",
        background: "#FFFFFF",
        boxShadow: plan.highlighted
          ? "0 20px 40px -12px rgba(15,27,45,0.20)"
          : "0 1px 2px rgba(16,24,40,0.04)",
      }}
    >
      <CardHeader className="pb-4 pt-8 px-7">
        <h2
          className="text-xl font-semibold mb-2"
          style={{ color:  plan.highlighted ?"#007BFF" :"#033773" }}
        >
          {plan.name}
        </h2>

        <div className="flex items-baseline gap-1.5 mb-4">
          <span
            className="text-3xl font-semibold"
            style={{ color: plan.highlighted ?"#007BFF" :"#033773"   }}
          >
            NPR {plan.price}/month
          </span>
{/*  */}
        </div>

        <p
          className="text-sm leading-relaxed "
          style={{ color: "#003773" }}
        >
          {plan.tagline}
        </p>
      </CardHeader>

      <CardContent className="flex-1 px-7 pt-2 pb-6">
        <div
          className="h-px w-full mb-5"
          style={{ background: "#E3E6EC" }}
        />

        <ul className="space-y-3">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2.5"
            >
              <span
                className="flex-shrink-0 rounded-full flex items-center justify-center mt-0.5"
                style={{
                  width: "18px",
                  height: "18px",
                  background: "#EDF2FF",
                }}
              >
                <Check
                  size={12}
                  strokeWidth={3}
                  color="#2E6FF2"
                />
              </span>

              <span
                className="text-sm"
                style={{ color: "#344054" }}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="px-7 pb-8 pt-2">
        <Button
          className="w-full"
          style={{
            background: plan.highlighted
              ? "#2E6FF2"
              : "transparent",

            color: plan.highlighted
              ? "#FFFFFF"
              : "#2E6FF2",

            border: plan.highlighted
              ? "none"
              : "1px solid #2E6FF2",

            borderRadius: "10px",
            height: "42px",
            fontWeight: 500,
          }}
        >
          Get started
        </Button>
      </CardFooter>
    </Card>
  );
}