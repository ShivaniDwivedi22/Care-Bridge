import { Baby, Users, Home, UtensilsCrossed, Heart, Sparkles, ChefHat } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export const serviceCategories = [
  {
    id: "babysitting",
    icon: Baby,
    title: "Babysitting",
    description: "Trusted childcare for your little ones",
    color: "bg-pink-100 text-pink-600",
    borderColor: "hover:border-pink-300"
  },
  {
    id: "elder-care",
    icon: Users,
    title: "Elder Care",
    description: "Compassionate care for seniors",
    color: "bg-blue-100 text-blue-600",
    borderColor: "hover:border-blue-300"
  },
  {
    id: "house-help",
    icon: Home,
    title: "House Help",
    description: "Cleaning, organizing, and home maintenance",
    color: "bg-green-100 text-green-600",
    borderColor: "hover:border-green-300"
  },
  {
    id: "food-tiffin",
    icon: UtensilsCrossed,
    title: "Food / Tiffin",
    description: "Home-cooked meals delivered daily",
    color: "bg-orange-100 text-orange-600",
    borderColor: "hover:border-orange-300"
  },
  {
    id: "postpartum",
    icon: Heart,
    title: "Postpartum Care",
    description: "Support for new mothers and babies",
    color: "bg-rose-100 text-rose-600",
    borderColor: "hover:border-rose-300",
    featured: true
  },
  {
    id: "festival",
    icon: Sparkles,
    title: "Festival Support",
    description: "Extra help during celebrations",
    color: "bg-purple-100 text-purple-600",
    borderColor: "hover:border-purple-300",
    featured: true
  },
  {
    id: "catering",
    icon: ChefHat,
    title: "Catering / Events",
    description: "Professional catering services",
    color: "bg-amber-100 text-amber-600",
    borderColor: "hover:border-amber-300"
  }
];

interface ServiceCategoriesProps {
  onSelectCategory?: (categoryId: string) => void;
}

export function ServiceCategories({ onSelectCategory }: ServiceCategoriesProps) {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Choose Your Service</h2>
          <p className="text-xl text-gray-600">
            Select the type of care or support you're looking for
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {serviceCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.id}
                className={`p-6 hover:shadow-lg transition-all cursor-pointer border-2 ${category.borderColor} relative`}
                onClick={() => onSelectCategory?.(category.id)}
              >
                {category.featured && (
                  <Badge className="absolute top-3 right-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                    Popular
                  </Badge>
                )}
                <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl mb-2">{category.title}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
