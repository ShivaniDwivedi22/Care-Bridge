import { Star, MapPin, DollarSign, Languages, ShieldCheck, MessageCircle, Clock, Award, Heart, Video, Zap } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { NeedDetails } from "./NeedDetailsForm";

export interface MatchedProvider {
  id: number;
  name: string;
  photo: string;
  rating: number;
  reviewCount: number;
  hourlyRate: number;
  distance: string;
  languages: string[];
  verified: boolean;
  bio: string;
  matchScore: number;
  responseTime?: string;
  certifications?: string[];
  isFamilyFavorite?: boolean;
  repeatBookings?: number;
  hasIntroVideo?: boolean;
}

interface ProviderMatchesProps {
  matches: MatchedProvider[];
  needDetails: NeedDetails;
  onSelectProvider?: (provider: MatchedProvider) => void;
  onBack?: () => void;
}

export function ProviderMatches({ matches, needDetails, onSelectProvider, onBack }: ProviderMatchesProps) {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <Button variant="outline" onClick={onBack} className="mb-6">
          ← Edit Search
        </Button>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-3xl">Top Matches for You</h2>
            {needDetails.isLastMinute && (
              <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                <Clock className="h-3 w-3 mr-1" />
                Last Minute
              </Badge>
            )}
          </div>
          <p className="text-gray-600">
            Found {matches.length} verified providers near {needDetails.location}
            {needDetails.isLastMinute && " who can accommodate urgent requests"}
          </p>
        </div>

        <div className="space-y-4">
          {matches.map((provider) => (
            <Card key={provider.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={provider.photo} alt={provider.name} />
                  <AvatarFallback>{provider.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="text-xl">{provider.name}</h3>
                        {provider.verified && (
                          <ShieldCheck className="h-5 w-5 text-green-600 fill-green-100" />
                        )}
                        <Badge className="bg-indigo-100 text-indigo-700">
                          {provider.matchScore}% Match
                        </Badge>
                        {provider.isFamilyFavorite && (
                          <Badge className="bg-pink-100 text-pink-700">
                            <Heart className="h-3 w-3 mr-1 fill-pink-700" />
                            Family Favorite
                          </Badge>
                        )}
                        {provider.hasIntroVideo && (
                          <Badge variant="outline" className="text-purple-700 border-purple-300">
                            <Video className="h-3 w-3 mr-1" />
                            Intro Video
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600 flex-wrap">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{provider.rating}</span>
                          <span className="text-gray-400">({provider.reviewCount})</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{provider.distance} away</span>
                        </div>
                        {provider.responseTime && (
                          <div className="flex items-center gap-1 text-green-600">
                            <Zap className="h-4 w-4" />
                            <span>{provider.responseTime}</span>
                          </div>
                        )}
                        {provider.repeatBookings && provider.repeatBookings > 0 && (
                          <div className="flex items-center gap-1 text-blue-600">
                            <span className="font-medium">{provider.repeatBookings} repeat bookings</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center justify-end gap-1 text-xl">
                        <DollarSign className="h-5 w-5" />
                        <span>{provider.hourlyRate}/hr</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-3">{provider.bio}</p>

                  {provider.certifications && provider.certifications.length > 0 && (
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="h-4 w-4 text-gray-500" />
                      <div className="flex gap-2 flex-wrap">
                        {provider.certifications.map((cert) => (
                          <Badge key={cert} variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-2 mb-4">
                    <Languages className="h-4 w-4 text-gray-500" />
                    <div className="flex gap-2 flex-wrap">
                      {provider.languages.map((lang) => (
                        <Badge key={lang} variant="outline" className="text-xs">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      className="flex-1 bg-indigo-600 hover:bg-indigo-700"
                      onClick={() => onSelectProvider?.(provider)}
                    >
                      Book Now
                    </Button>
                    <Button variant="outline">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Message
                    </Button>
                    {provider.hasIntroVideo && (
                      <Button variant="outline">
                        <Video className="h-4 w-4 mr-2" />
                        Watch
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}