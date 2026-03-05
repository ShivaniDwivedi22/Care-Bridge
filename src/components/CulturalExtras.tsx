import { Sparkles, Heart, Plane } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CulturalExtras() {
  const extras = [
    {
      icon: Sparkles,
      title: "Festival Helpers",
      description: "Extra hands for Diwali, Eid, Holi, or any celebration. From cooking traditional dishes to rangoli and decoration setup, we connect you with helpers who understand your traditions.",
      image: "https://images.unsplash.com/photo-1699860807907-d14a60827a25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXdhbGklMjBjZWxlYnJhdGlvbiUyMGZhbWlseXxlbnwxfHx8fDE3NjA4MDIyMzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "bg-purple-100 text-purple-600",
      badge: "Popular"
    },
    {
      icon: Heart,
      title: "Postpartum Mother & Baby Care",
      description: "Specialized care for new mothers and newborns. Traditional postpartum support including meal prep, baby care guidance, and household help during this precious time.",
      image: "https://images.unsplash.com/photo-1722926899166-e3fda985add4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aCUyMGFzaWFuJTIwbW90aGVyJTIwYmFieXxlbnwxfHx8fDE3NjA4MDIyMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "bg-rose-100 text-rose-600",
      badge: "Specialized"
    },
    {
      icon: Plane,
      title: "Travel Support for Parents",
      description: "Peace of mind when traveling to India. Connect with verified caregivers for elderly parents while you're away, with regular updates and emergency support available.",
      image: "https://images.unsplash.com/photo-1738235337917-92d500d6711f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGVsZGVybHklMjBjb3VwbGUlMjBoYXBweXxlbnwxfHx8fDE3NjA4MDI0OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "bg-blue-100 text-blue-600",
      badge: "New"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Culturally-Aware Care Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand your traditions, language, and cultural needs. Find care that feels like family.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {extras.map((extra) => {
            const Icon = extra.icon;
            return (
              <Card key={extra.title} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <ImageWithFallback 
                    src={extra.image}
                    alt={extra.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-3 right-3 bg-white text-gray-900">
                    {extra.badge}
                  </Badge>
                </div>
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-lg ${extra.color} flex items-center justify-center mb-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl mb-3">{extra.title}</h3>
                  <p className="text-gray-600">{extra.description}</p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="p-6 max-w-3xl mx-auto bg-white/80 backdrop-blur">
            <h3 className="text-xl mb-3">Language Support Available</h3>
            <p className="text-gray-600 mb-4">
              Find care providers who speak your language and understand your cultural preferences
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Hindi', 'Punjabi', 'Gujarati', 'Tamil', 'Telugu', 'Kannada', 'Malayalam', 'Bengali', 'Marathi', 'Urdu'].map((lang) => (
                <Badge key={lang} variant="secondary">
                  {lang}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
