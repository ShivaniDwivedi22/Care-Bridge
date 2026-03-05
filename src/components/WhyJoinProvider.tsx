import { DollarSign, Calendar, ShieldCheck, Users, TrendingUp, Heart, ArrowRight } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface WhyJoinProviderProps {
  onGetStarted?: () => void;
}

export function WhyJoinProvider({ onGetStarted }: WhyJoinProviderProps) {
  const benefits = [
    {
      icon: DollarSign,
      title: "Earn on Your Terms",
      description: "Set your own rates and keep 85-90% of what you earn. No hidden fees.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Calendar,
      title: "Flexible Schedule",
      description: "Work when you want. Choose jobs that fit your availability and lifestyle.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: ShieldCheck,
      title: "Trusted Platform",
      description: "Join a verified community with secure payments and background checks.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Users,
      title: "Growing Community",
      description: "Connect with thousands of families looking for trusted care providers.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: TrendingUp,
      title: "Build Your Reputation",
      description: "Grow your profile with reviews and ratings from satisfied clients.",
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: Heart,
      title: "Make a Difference",
      description: "Provide meaningful care and support to families in your community.",
      color: "bg-red-100 text-red-600"
    }
  ];

  const stats = [
    { value: "10,000+", label: "Active Providers" },
    { value: "$45/hr", label: "Average Earnings" },
    { value: "50,000+", label: "Jobs Completed" },
    { value: "4.8★", label: "Average Rating" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl mb-6">
                Turn Your Care Skills Into Income
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join Care Bridge and connect with families who need your expertise. 
                Whether you're experienced in childcare, elder care, or household services, 
                we help you build a thriving care business.
              </p>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700" onClick={onGetStarted}>
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1753162659724-004dd26e1de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHdvcmtpbmclMjBjb25maWRlbnR8ZW58MXx8fHwxNzYxMDU1MTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional care provider"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl mb-2 text-purple-600">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Why Providers Love Care Bridge</h2>
            <p className="text-xl text-gray-600">
              Everything you need to succeed as a care provider
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <Card key={benefit.title} className="p-6">
                  <div className={`w-12 h-12 rounded-lg ${benefit.color} flex items-center justify-center mb-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Getting Started is Easy</h2>
            <p className="text-xl text-gray-600">Join in minutes and start earning</p>
          </div>

          <div className="space-y-6">
            {[
              { step: 1, title: "Create Your Profile", desc: "Add your info, services, rates, and availability" },
              { step: 2, title: "Get Verified", desc: "Complete background check and upload ID (optional but recommended)" },
              { step: 3, title: "Receive Bookings", desc: "Accept job requests from families in your area" },
              { step: 4, title: "Provide Care & Get Paid", desc: "Complete the service and receive secure payment" }
            ].map((item) => (
              <Card key={item.step} className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700" onClick={onGetStarted}>
              Start Your Provider Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}