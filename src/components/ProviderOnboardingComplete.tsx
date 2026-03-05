import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import { Badge } from "./ui/badge";
import { Video, Bell, Languages, Upload } from "lucide-react";

interface OnboardingCompleteProps {
  onComplete?: () => void;
}

export function ProviderOnboardingComplete({ onComplete }: OnboardingCompleteProps) {
  const [introVideoUploaded, setIntroVideoUploaded] = useState(false);
  const [notifications, setNotifications] = useState({
    bookingRequests: true,
    messages: true,
    reviews: true,
    promotions: false,
  });
  const [languages, setLanguages] = useState<string[]>([]);

  const availableLanguages = [
    "Hindi", "Punjabi", "Gujarati", "Tamil", "Telugu", 
    "Kannada", "Malayalam", "Bengali", "Marathi", "Urdu"
  ];

  const toggleLanguage = (lang: string) => {
    setLanguages(prev => 
      prev.includes(lang) 
        ? prev.filter(l => l !== lang)
        : [...prev, lang]
    );
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-8">
          <h2 className="text-3xl mb-2">Complete Your Profile</h2>
          <p className="text-gray-600">
            Add these optional features to stand out and get more bookings
          </p>
        </div>

        <div className="space-y-6">
          {/* Intro Video */}
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Video className="h-6 w-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="font-medium">Upload Intro Video</h3>
                    <p className="text-sm text-gray-600">
                      Providers with intro videos get 2.5x more bookings
                    </p>
                  </div>
                  <Badge className="bg-purple-100 text-purple-700">Recommended</Badge>
                </div>
                
                {!introVideoUploaded ? (
                  <div className="mt-4 border-2 border-dashed rounded-lg p-6 text-center hover:border-purple-400 transition-colors cursor-pointer">
                    <Upload className="h-6 w-6 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-600">Upload a 30-60 second introduction video</p>
                    <p className="text-xs text-gray-400 mt-1">MP4, MOV up to 50MB</p>
                    <Button 
                      className="mt-3 bg-purple-600 hover:bg-purple-700"
                      onClick={() => setIntroVideoUploaded(true)}
                    >
                      Select Video
                    </Button>
                  </div>
                ) : (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-700 text-sm">✓ Video uploaded successfully</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-2"
                      onClick={() => setIntroVideoUploaded(false)}
                    >
                      Replace Video
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </Card>

          {/* Notification Preferences */}
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Bell className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium mb-4">Notification Preferences</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">Booking Requests</p>
                      <p className="text-xs text-gray-600">Get notified when families want to book you</p>
                    </div>
                    <Switch
                      checked={notifications.bookingRequests}
                      onCheckedChange={(checked) => 
                        setNotifications(prev => ({ ...prev, bookingRequests: checked }))
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">Messages</p>
                      <p className="text-xs text-gray-600">Real-time chat notifications</p>
                    </div>
                    <Switch
                      checked={notifications.messages}
                      onCheckedChange={(checked) => 
                        setNotifications(prev => ({ ...prev, messages: checked }))
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">Reviews</p>
                      <p className="text-xs text-gray-600">When families leave reviews</p>
                    </div>
                    <Switch
                      checked={notifications.reviews}
                      onCheckedChange={(checked) => 
                        setNotifications(prev => ({ ...prev, reviews: checked }))
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">Promotions</p>
                      <p className="text-xs text-gray-600">Tips and features to grow your business</p>
                    </div>
                    <Switch
                      checked={notifications.promotions}
                      onCheckedChange={(checked) => 
                        setNotifications(prev => ({ ...prev, promotions: checked }))
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Language Preferences */}
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Languages className="h-6 w-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium mb-2">Languages You Speak</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Select all languages to help families find you
                </p>
                <div className="flex gap-2 flex-wrap">
                  {availableLanguages.map((lang) => (
                    <Badge
                      key={lang}
                      variant={languages.includes(lang) ? "default" : "outline"}
                      className={`cursor-pointer ${
                        languages.includes(lang) 
                          ? 'bg-green-600 hover:bg-green-700' 
                          : 'hover:border-green-400'
                      }`}
                      onClick={() => toggleLanguage(lang)}
                    >
                      {lang}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Summary */}
          <Card className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
            <h3 className="font-medium mb-3">Your Profile is Ready!</h3>
            <div className="space-y-2 text-sm mb-4">
              <div className="flex items-center gap-2">
                <span className={introVideoUploaded ? "text-green-600" : "text-gray-400"}>
                  {introVideoUploaded ? "✓" : "○"}
                </span>
                <span>Intro video {introVideoUploaded ? "uploaded" : "not uploaded"}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Notification preferences set</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={languages.length > 0 ? "text-green-600" : "text-gray-400"}>
                  {languages.length > 0 ? "✓" : "○"}
                </span>
                <span>{languages.length} language{languages.length !== 1 ? 's' : ''} selected</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              You can update these settings anytime from your dashboard
            </p>
            <Button 
              className="w-full bg-purple-600 hover:bg-purple-700"
              onClick={onComplete}
            >
              Go to Dashboard
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
