import { useState } from "react";
import { Card } from "../components/Card";
import Button from "../components/Button";

type Plan = {
  id: string;
  name: string;
  price: number;
  period: string;
  features: string[];
};

const PLANS: Plan[] = [
  {
    id: "basic",
    name: "Basic",
    price: 9,
    period: "month",
    features: ["Access core features", "Email support"],
  },
  {
    id: "pro",
    name: "Pro",
    price: 19,
    period: "month",
    features: ["Everything in Basic", "Priority support", "Advanced analytics"],
  },
  {
    id: "yearly",
    name: "Yearly",
    price: 199,
    period: "year",
    features: ["2 months free", "All Pro features"],
  },
];

export default function Subscription() {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [gateway, setGateway] = useState<"stripe" | "razorpay" | null>(null);

  const handleCheckout = () => {
    console.log({
      plan: selectedPlan,
      gateway,
    });
    // redirect to Stripe / Razorpay checkout
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">Choose Your Subscription</h1>
          <p className="text-gray-600 mt-2">Simple pricing. Cancel anytime.</p>
        </div>

        {/* Pricing Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {PLANS.map((plan) => (
            <Card
              key={plan.id}
              className={`cursor-pointer transition p-4 ${
                selectedPlan?.id === plan.id
                  ? "ring-2 ring-blue-500"
                  : "hover:shadow-md"
              }`}
            >
              <div className="space-y-4" onClick={() => setSelectedPlan(plan)}>
                <h2 className="text-xl font-semibold">{plan.name}</h2>
                <div className="text-3xl font-bold">
                  ${plan.price}
                  <span className="text-base font-normal text-gray-500">
                    /{plan.period}
                  </span>
                </div>

                <ul className="space-y-2 text-sm text-gray-600">
                  {plan.features.map((f) => (
                    <li key={f}>✓ {f}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Selected Plan + Gateway */}
        {selectedPlan && (
          <Card className={"p-4 border"}>
            <div className="space-y-6">
              {/* Plan Summary */}
              <div>
                <h3 className="text-lg font-semibold">Selected Plan</h3>
                <p className="text-gray-700">
                  {selectedPlan.name} – ${selectedPlan.price}/
                  {selectedPlan.period}
                </p>
              </div>

              {/* Payment Gateway */}
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Choose Payment Method
                </h3>

                <div className="flex gap-4">
                  <button
                    onClick={() => setGateway("stripe")}
                    className={`flex-1 rounded-xl border p-4 ${
                      gateway === "stripe"
                        ? "border-blue-500 bg-blue-50"
                        : "hover:border-gray-400"
                    }`}
                  >
                    💳 Stripe
                  </button>

                  <button
                    onClick={() => setGateway("razorpay")}
                    className={`flex-1 rounded-xl border p-4 ${
                      gateway === "razorpay"
                        ? "border-blue-500 bg-blue-50"
                        : "hover:border-gray-400"
                    }`}
                  >
                    🇮🇳 Razorpay
                  </button>
                </div>
              </div>

              {/* Checkout */}
              <Button onClick={handleCheckout} disabled={!gateway}>
                Continue to Pay
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
