import { motion } from "motion/react";
import { Check, Star, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const pricingPlans = [
  {
    title: "1 BHK Repainting",
    price: "4,999",
    features: [
      "Complete wall preparation",
      "Premium quality paint",
      "Professional finish",
      "Clean-up included",
      "1 Year warranty",
    ],
    popular: false,
  },
  {
    title: "2 BHK Repainting",
    price: "8,999",
    features: [
      "Complete wall preparation",
      "Premium quality paint",
      "Professional finish",
      "Clean-up included",
      "1 Year warranty",
      "Free consultation",
    ],
    popular: true,
  },
  {
    title: "3 BHK Repainting",
    price: "12,999",
    features: [
      "Complete wall preparation",
      "Premium quality paint",
      "Professional finish",
      "Clean-up included",
      "2 Year warranty",
      "Free consultation",
      "Color matching service",
    ],
    popular: false,
  },
];

export function Pricing() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-[#0f1f3d] via-[#1a3a52] to-[#2a4a62] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#D4AF37] to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#D4AF37] to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 px-6 py-3 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-[#D4AF37]">Special Offers</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Quality painting services at competitive rates
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#0f1f3d] px-6 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              <div className={`bg-white rounded-2xl shadow-2xl p-8 h-full ${
                plan.popular ? "ring-4 ring-[#D4AF37] scale-105" : ""
              }`}>
                <h3 className="text-2xl md:text-3xl mb-4 text-[#1a3a52]">
                  {plan.title}
                </h3>
                <div className="mb-6">
                  <span className="text-5xl text-[#1a3a52]">₹{plan.price}</span>
                  <span className="text-gray-600 ml-2">onwards</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full text-lg py-6 rounded-xl ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#D4AF37] to-[#FFD700] hover:from-[#C09E2F] hover:to-[#E5C100] text-[#0f1f3d]"
                      : "bg-[#1a3a52] hover:bg-[#2a4a62] text-white"
                  }`}
                  onClick={scrollToContact}
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-2xl p-8 text-center shadow-2xl"
        >
          <h3 className="text-2xl md:text-3xl text-[#0f1f3d] mb-4">
            Custom Pricing Available
          </h3>
          <p className="text-xl text-[#1a3a52] mb-2">
            Per sq ft pricing from ₹7 to ₹30
          </p>
          <p className="text-gray-700">
            Based on paint quality, texture work, and project requirements
          </p>
        </motion.div>
      </div>
    </section>
  );
}
