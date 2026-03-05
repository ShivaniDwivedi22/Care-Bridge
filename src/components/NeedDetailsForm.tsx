import { useState, useEffect } from "react";
import { Calendar, MapPin, Clock, Languages, Users2, ShieldCheck, ArrowRight, AlertCircle } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { serviceCategories } from "./ServiceCategories";

interface NeedDetailsFormProps {
  selectedCategory: string;
  onSubmit?: (details: NeedDetails) => void;
  onBack?: () => void;
}

export interface NeedDetails {
  category: string;
  location: string;
  date: string;
  time: string;
  duration: string;
  language: string;
  gender: string;
  verifiedOnly: boolean;
  additionalNotes: string;
  isLastMinute: boolean;
}

export function NeedDetailsForm({ selectedCategory, onSubmit, onBack }: NeedDetailsFormProps) {
  const category = serviceCategories.find(c => c.id === selectedCategory);
  const [details, setDetails] = useState<NeedDetails>({
    category: selectedCategory,
    location: "",
    date: "",
    time: "",
    duration: "",
    language: "",
    gender: "",
    verifiedOnly: true,
    additionalNotes: "",
    isLastMinute: false
  });

  // Check if booking is last minute (within 48 hours)
  useEffect(() => {
    if (details.date) {
      const bookingDate = new Date(details.date);
      const now = new Date();
      const hoursUntilBooking = (bookingDate.getTime() - now.getTime()) / (1000 * 60 * 60);
      
      setDetails(prev => ({
        ...prev,
        isLastMinute: hoursUntilBooking <= 48 && hoursUntilBooking >= 0
      }));
    }
  }, [details.date]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(details);
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <Button variant="outline" onClick={onBack} className="mb-6">
          ← Back to Categories
        </Button>

        <Card className="p-8">
          <div className="mb-6">
            {category && (
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-10 h-10 rounded-lg ${category.color} flex items-center justify-center`}>
                  <category.icon className="h-5 w-5" />
                </div>
                <h2 className="text-3xl">{category.title}</h2>
              </div>
            )}
            <p className="text-gray-600">Tell us about your care needs</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Location */}
            <div>
              <Label htmlFor="location" className="flex items-center gap-2 mb-2">
                <MapPin className="h-4 w-4" />
                Location / Postal Code
              </Label>
              <Input 
                id="location"
                placeholder="Enter your location or postal code"
                value={details.location}
                onChange={(e) => setDetails({...details, location: e.target.value})}
                required
              />
            </div>

            {/* Date & Time */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="date" className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4" />
                  Date Needed
                </Label>
                <Input 
                  id="date"
                  type="date"
                  value={details.date}
                  onChange={(e) => setDetails({...details, date: e.target.value})}
                  required
                />
              </div>
              <div>
                <Label htmlFor="time" className="flex items-center gap-2 mb-2">
                  <Clock className="h-4 w-4" />
                  Time
                </Label>
                <Input 
                  id="time"
                  type="time"
                  value={details.time}
                  onChange={(e) => setDetails({...details, time: e.target.value})}
                  required
                />
              </div>
            </div>

            {/* Last Minute Booking Alert */}
            {details.isLastMinute && (
              <div className="p-4 bg-orange-50 border-2 border-orange-200 rounded-lg flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-orange-900 mb-1">Last Minute Booking</p>
                  <p className="text-orange-700">
                    This booking is within 48 hours. A 25% surcharge will be added to support providers who can accommodate urgent requests.
                  </p>
                </div>
              </div>
            )}

            {/* Duration */}
            <div>
              <Label htmlFor="duration" className="mb-2 block">
                Duration
              </Label>
              <Select value={details.duration} onValueChange={(value) => setDetails({...details, duration: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-2">1-2 hours</SelectItem>
                  <SelectItem value="3-4">3-4 hours</SelectItem>
                  <SelectItem value="5-8">5-8 hours</SelectItem>
                  <SelectItem value="full-day">Full day (8+ hours)</SelectItem>
                  <SelectItem value="ongoing">Ongoing / Regular</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Preferences */}
            <div className="border-t pt-6">
              <h3 className="text-lg mb-4">Preferences (Optional)</h3>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="language" className="flex items-center gap-2 mb-2">
                    <Languages className="h-4 w-4" />
                    Language Preference
                  </Label>
                  <Select value={details.language} onValueChange={(value) => setDetails({...details, language: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Any language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any language</SelectItem>
                      <SelectItem value="hindi">Hindi</SelectItem>
                      <SelectItem value="punjabi">Punjabi</SelectItem>
                      <SelectItem value="gujarati">Gujarati</SelectItem>
                      <SelectItem value="tamil">Tamil</SelectItem>
                      <SelectItem value="telugu">Telugu</SelectItem>
                      <SelectItem value="kannada">Kannada</SelectItem>
                      <SelectItem value="malayalam">Malayalam</SelectItem>
                      <SelectItem value="bengali">Bengali</SelectItem>
                      <SelectItem value="marathi">Marathi</SelectItem>
                      <SelectItem value="urdu">Urdu</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="gender" className="flex items-center gap-2 mb-2">
                    <Users2 className="h-4 w-4" />
                    Gender Preference
                  </Label>
                  <Select value={details.gender} onValueChange={(value) => setDetails({...details, gender: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="No preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">No preference</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="male">Male</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="verified"
                  checked={details.verifiedOnly}
                  onCheckedChange={(checked) => setDetails({...details, verifiedOnly: checked as boolean})}
                />
                <Label htmlFor="verified" className="flex items-center gap-2 cursor-pointer">
                  <ShieldCheck className="h-4 w-4 text-green-600" />
                  Show only verified providers (Recommended)
                </Label>
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <Label htmlFor="notes" className="mb-2 block">
                Additional Information
              </Label>
              <Textarea 
                id="notes"
                placeholder="Any special requirements, preferences, or information for providers..."
                value={details.additionalNotes}
                onChange={(e) => setDetails({...details, additionalNotes: e.target.value})}
                rows={4}
              />
            </div>

            <Button type="submit" size="lg" className="w-full bg-indigo-600 hover:bg-indigo-700">
              Find Providers
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
