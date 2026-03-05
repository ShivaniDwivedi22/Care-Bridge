import { ShieldCheck, CreditCard, Star, Phone } from "lucide-react";
import { Card } from "./ui/card";

export function TrustSafety() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Verified Providers",
      description: "All providers undergo background checks and identity verification. We ensure only trusted individuals join our platform.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Encrypted payment processing with funds held in escrow until service completion. Your money is protected every step of the way.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Star,
      title: "Community Reviews",
      description: "Real reviews from verified bookings. Read honest feedback and ratings from families who've used our providers.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Round-the-clock customer support and emergency assistance. We're always here when you need help or have concerns.",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <div className="py-16 bg-white" id="safety">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Your Safety is Our Priority</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've built comprehensive safety measures to ensure trust and security for both care seekers and providers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="p-6 text-center">
                <div className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center mb-4 mx-auto`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-r from-indigo-50 to-purple-50">
            <h3 className="text-2xl mb-4 text-center">Additional Safety Features</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Insurance coverage for all bookings</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Emergency contact system</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Transparent pricing with no hidden fees</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>In-platform messaging (no personal info shared)</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Cancellation protection</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Dispute resolution support</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
