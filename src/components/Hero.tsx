import { Search, UserPlus, ArrowRight, Clock, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroProps {
  onNeedCareClick?: () => void;
  onProvideCareClick?: () => void;
}

export function Hero({ onNeedCareClick, onProvideCareClick }: HeroProps) {
  return (
    <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl mb-6">
            Your Community Care Marketplace
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Connect with trusted care providers for every need — from babysitting to elder care, 
            postpartum support to festival helpers. Safe, verified, and local.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-12">
            <span>✓ Verified Providers</span>
            <span>✓ Secure Payments</span>
            <span>✓ Community Reviews</span>
            <span>✓ 24/7 Support</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="overflow-hidden hover:shadow-xl transition-all cursor-pointer border-2 hover:border-indigo-400 group" onClick={onNeedCareClick}>
            <div className="relative h-48 overflow-hidden">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1677081791346-1c1d9688dc1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwYXJlbnRzJTIwYmFieSUyMHRvZGRsZXJ8ZW58MXx8fHwxNzYwODAyNDg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Working parents with young children"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-white/90 backdrop-blur-sm text-indigo-600 rounded-full flex items-center justify-center">
                  <Search className="h-5 w-5" />
                </div>
                <span className="text-white text-lg">Need Care</span>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl mb-3">Find Care for Your Loved Ones</h2>
              <p className="text-gray-600 mb-6">
                Juggling work and family? Connect with trusted care providers who understand your culture and language.
              </p>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700" size="lg">
                Find a Provider
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>

          <Card className="overflow-hidden hover:shadow-xl transition-all cursor-pointer border-2 hover:border-purple-400 group" onClick={onProvideCareClick}>
            <div className="relative h-48 overflow-hidden">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1759668358660-0d06064f0f84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVlbGFuY2UlMjB3b3JrJTIwbGFwdG9wJTIwY29mZmVlfGVufDF8fHx8MTc2MDk3NDg4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Earn flexible income as a care provider"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-white/90 backdrop-blur-sm text-purple-600 rounded-full flex items-center justify-center">
                  <UserPlus className="h-5 w-5" />
                </div>
                <span className="text-white text-lg">Provide Care</span>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl mb-3">Earn Extra Cash on Your Schedule</h2>
              <p className="text-gray-600 mb-6">
                Looking for flexible side income? Turn your care skills into earnings. Set your rates, choose your hours.
              </p>
              <Button className="w-full bg-purple-600 hover:bg-purple-700" size="lg">
                Become a Provider
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>

          <Card className="overflow-hidden hover:shadow-xl transition-all cursor-pointer border-2 hover:border-orange-400 group relative" onClick={onNeedCareClick}>
            <Badge className="absolute top-3 right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white z-10 animate-pulse">
              <Zap className="h-3 w-3 mr-1" />
              Fast
            </Badge>
            <div className="relative h-48 overflow-hidden">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmdlbnQlMjBwaG9uZSUyMGNhbGx8ZW58MXx8fHwxNzYwODAyNDg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Last minute urgent care service"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-white/90 backdrop-blur-sm text-orange-600 rounded-full flex items-center justify-center">
                  <Clock className="h-5 w-5" />
                </div>
                <span className="text-white text-lg">Last Minute</span>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl mb-3">Need Care Right Away?</h2>
              <p className="text-gray-600 mb-4">
                Emergency or last-minute bookings available! Get matched with providers who can help within 24-48 hours.
              </p>
              <p className="text-sm text-orange-600 mb-6">
                +25% surcharge for urgent service
              </p>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600" size="lg">
                Book Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
