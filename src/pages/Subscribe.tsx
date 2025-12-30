import { type FC, useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router";

/* ------------------ Types ------------------ */

type PlanId = "basic" | "pro" | "enterprise";

interface Plan {
  id: PlanId;
  name: string;
  price: number;
  description: string;
}

/* ------------------ Data ------------------ */

const PLANS: Plan[] = [
  {
    id: "basic",
    name: "Basic",
    price: 9,
    description: "For personal use",
  },
  {
    id: "pro",
    name: "Pro",
    price: 29,
    description: "For professionals",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 99,
    description: "For teams & companies",
  },
];

/* ------------------ Component ------------------ */

const SubscriptionPage: FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan>(PLANS[1]);
  const navigate = useNavigate();

  const [payment, setPayment] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPayment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubscribe = () => {
    // 🔌 Integrate Stripe / Razorpay here
    console.log("Plan:", selectedPlan);
    console.log("Payment:", payment);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8 grid md:grid-cols-2 gap-8">
        {/* ---------------- Plans ---------------- */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Choose your plan</h2>

          <div className="space-y-4">
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan)}
                className={`cursor-pointer border rounded-xl p-4 transition
                  ${
                    selectedPlan.id === plan.id
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{plan.name}</h3>
                    <p className="text-sm text-gray-500">{plan.description}</p>
                  </div>
                  <span className="text-lg font-semibold">
                    ${plan.price}/mo
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- Payment ---------------- */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Payment details</h2>

          <div className="space-y-4">
            <input
              name="name"
              value={payment.name}
              onChange={handleChange}
              placeholder="Cardholder Name"
              className="w-full border rounded-lg px-4 py-2"
            />

            <input
              name="cardNumber"
              value={payment.cardNumber}
              onChange={handleChange}
              placeholder="Card Number"
              className="w-full border rounded-lg px-4 py-2"
            />

            <div className="flex gap-4">
              <input
                name="expiry"
                value={payment.expiry}
                onChange={handleChange}
                placeholder="MM / YY"
                className="w-1/2 border rounded-lg px-4 py-2"
              />
              <input
                name="cvv"
                value={payment.cvv}
                onChange={handleChange}
                placeholder="CVV"
                className="w-1/2 border rounded-lg px-4 py-2"
              />
            </div>

            {/* ---------------- Summary ---------------- */}
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between text-sm">
                <span>Plan</span>
                <span>{selectedPlan.name}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg mt-1">
                <span>Total</span>
                <span>${selectedPlan.price}/month</span>
              </div>
            </div>

            <button
              onClick={handleSubscribe}
              className="w-full mt-4 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Subscribe & Pay
            </button>

            <p className="text-xs text-gray-500 text-center">
              Secure payment • Cancel anytime
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SubscriptionPage;
