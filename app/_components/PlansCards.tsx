import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, Sparkle, X } from "lucide-react";

const plans = [
  {
    name: "Concorrente",
    price: 330,
    period: "/mês",
    features: [
      { text: "Consequat ex proident", included: false },
      { text: "Deserunt sit cupidatat", included: false },
      { text: "Amet id ea et nisi cillum", included: false },
    ],
    button: { text: "X", disabled: true },
    highlight: false,
  },
  {
    name: "ISA Clinic",
    price: 110,
    period: "/mês",
    features: [
      { text: "Consequat ex proident", included: true },
      { text: "Deserunt sit cupidatat adipisicing", included: true },
      { text: "Amet id ea et nisi cillum consectetur", included: true },
      { text: "Excepteur nisi eiusmod proident", included: true },
      { text: "Magna eu anim commodo qui nisif", included: true },
    ],
    button: { text: "Falar com consultor", disabled: false },
    highlight: true,
    recommended: true,
  },
  {
    name: "ISA Go",
    price: 80,
    period: "/mês",
    features: [
      { text: "Consequat ex proident", included: true },
      { text: "Deserunt sit cupidatat", included: true },
      { text: "Amet id ea et nisi cillum", included: true },
    ],
    button: { text: "Falar com consultor", disabled: false },
    highlight: false,
  },
];

export default function PlansCards() {
  return (
    <div className="w-full flex flex-col items-center mt-8">
      <div className="flex flex-col items-center lg:flex-row gap-6 justify-center lg:items-end w-full max-w-5xl">
        {plans.map((plan) => (
          <PlanCard key={plan.name} plan={plan} />
        ))}
      </div>
    </div>
  );
}

type PlanFeature = {
  text: string;
  included: boolean;
};

type Plan = {
  name: string;
  price: number;
  period: string;
  features: PlanFeature[];
  button: { text: string; disabled: boolean };
  highlight: boolean;
  recommended?: boolean;
};

function PlanCard({ plan }: { plan: Plan }) {
  const isRecommended = plan.recommended;
  return (
    <div
      className={cn(
        "relative flex flex-col border border-ver rounded-3xl shadow-lg transition-all duration-300 w-4/5 sm:w-3/5 lg:w-fit"
      )}
      style={{
        boxShadow: isRecommended ? "0 6px 0 0 #2c444b" : "0 2px 16px 0 #0001",
      }}
    >
      {isRecommended && (
        <div className="w-full bg-verde-musgo text-white text-center py-4 text-lg font-semibold rounded-t-3xl flex items-center justify-center gap-2">
          Recomendado{" "}
          <span className="text-base">
            <Sparkle size={18} />
          </span>
        </div>
      )}

      <div
        className={cn(
          "w-full flex flex-col items-center px-8 pt-8 pb-6 rounded-t-3xl",
          isRecommended ? "bg-white" : "bg-[#f5f8f7]"
        )}
      >
        <h3 className="text-2xl font-semibold text-center mb-2 text-gray-800">
          {plan.name}
        </h3>
        <div className="flex items-end justify-center mb-2">
          <span className="text-3xl font-bold text-gray-900">
            R${plan.price}
          </span>
          <span className="ml-1 text-base text-gray-500">{plan.period}</span>
        </div>
      </div>

      <div className={cn("flex-1 w-full flex flex-col gap-3 px-8 py-6")}>
        {plan.features.map((feature: PlanFeature, i: number) => (
          <div
            key={i}
            className="flex items-center gap-3 text-base text-gray-700"
          >
            {feature.included ? (
              <span className="text-verde-musgo text-xl">
                <Check />
              </span>
            ) : (
              <span className="text-gray-400 text-xl">
                <X />
              </span>
            )}
            <span
              className={feature.included ? "" : "text-gray-400 line-through"}
            >
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center px-8 pb-8">
        <Button disabled={plan.button.disabled}>{plan.button.text}</Button>
      </div>
    </div>
  );
}
