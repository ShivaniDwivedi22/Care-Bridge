import { useState } from "react";
import { User, MapPin, DollarSign, Calendar, Upload, ShieldCheck, ArrowRight, Video, Bell, Languages } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { Switch } from "./ui/switch";
import { serviceCategories } from "./ServiceCategories";

interface ProviderSignupProps {
  onSubmit?: () => void;
  onBack?: () => void;
}

export function ProviderSignup({ onSubmit, onBack }: ProviderSignupProps) {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        {onBack && (
          <Button variant="outline" onClick={onBack} className="mb-6">
            ← Back
          </Button>
        )}

        <Card className="p-8">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {[1, 2, 3, 4].map((s) => (
                <div 
                  key={s}
                  className={`w-1/4 h-2 rounded ${s <= step ? 'bg-purple-600' : 'bg-gray-200'} ${s > 1 ? 'ml-2' : ''}`}
                />
              ))}
            </div>
            <div className="text-sm text-gray-600">
              Step {step} of 4
            </div>
          </div>

          {/* Step 1: Personal Info */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl mb-2">Personal Information</h2>
                <p className="text-gray-600">Let families know who you are</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
              </div>

              <div>
                <Label htmlFor="location">Location / Postal Code</Label>
                <Input id="location" placeholder="Enter your location" />
              </div>

              <div>
                <Label htmlFor="photo">Profile Photo</Label>
                <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-purple-400 transition-colors cursor-pointer">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 5MB</p>
                </div>
              </div>

              <div>
                <Label htmlFor="bio">Bio / Introduction</Label>
                <Textarea 
                  id="bio"
                  placeholder="Tell families about your experience, skills, and what makes you a great care provider..."
                  rows={4}
                />
              </div>

              <Button className="w-full bg-purple-600 hover:bg-purple-700" onClick={() => setStep(2)}>
                Continue
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          )}

          {/* Step 2: Services */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl mb-2">Services Offered</h2>
                <p className="text-gray-600">Select all services you can provide</p>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                {serviceCategories.map((category) => {
                  const Icon = category.icon;
                  const isSelected = selectedServices.includes(category.id);
                  return (
                    <div
                      key={category.id}
                      onClick={() => toggleService(category.id)}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        isSelected 
                          ? 'border-purple-500 bg-purple-50' 
                          : 'border-gray-200 hover:border-purple-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg ${category.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span>{category.title}</span>
                            {isSelected && (
                              <ShieldCheck className="h-4 w-4 text-purple-600" />
                            )}
                          </div>
                          <p className="text-xs text-gray-600">{category.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex gap-3">
                <Button variant="outline" className="flex-1" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button 
                  className="flex-1 bg-purple-600 hover:bg-purple-700" 
                  onClick={() => setStep(3)}
                  disabled={selectedServices.length === 0}
                >
                  Continue
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Rates & Availability */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl mb-2">Rates & Availability</h2>
                <p className="text-gray-600">Set your pricing and schedule</p>
              </div>

              <div>
                <Label htmlFor="hourlyRate" className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Hourly Rate (CAD)
                </Label>
                <Input id="hourlyRate" type="number" placeholder="25" />
                <p className="text-sm text-gray-500 mt-1">Suggested: $20-50/hour based on your services</p>
              </div>

              <div>
                <Label className="flex items-center gap-2 mb-3">
                  <Calendar className="h-4 w-4" />
                  Availability
                </Label>
                <div className="space-y-2">
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                    <div key={day} className="flex items-center gap-3 p-3 border rounded-lg">
                      <Checkbox id={day} />
                      <Label htmlFor={day} className="flex-1 cursor-pointer">{day}</Label>
                      <Input type="time" className="w-28" defaultValue="09:00" />
                      <span className="text-gray-500">to</span>
                      <Input type="time" className="w-28" defaultValue="17:00" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" className="flex-1" onClick={() => setStep(2)}>
                  Back
                </Button>
                <Button className="flex-1 bg-purple-600 hover:bg-purple-700" onClick={() => setStep(4)}>
                  Continue
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 4: Verification */}
          {step === 4 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl mb-2">Verification</h2>
                <p className="text-gray-600">Build trust with background verification</p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-6 w-6 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-blue-900 mb-1">Why verify?</p>
                    <p className="text-sm text-blue-700">
                      Verified providers get 3x more bookings and can charge higher rates. 
                      Verification is optional but highly recommended.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="idUpload">Government-Issued ID</Label>
                <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-purple-400 transition-colors cursor-pointer">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm text-gray-600">Upload your ID (Driver's License, Passport)</p>
                  <p className="text-xs text-gray-400 mt-1">Securely encrypted and verified</p>
                </div>
              </div>

              <div>
                <Label>Payment Method Preference</Label>
                <div className="space-y-2 mt-2">
                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <Checkbox id="interac" defaultChecked />
                    <Label htmlFor="interac" className="flex-1 cursor-pointer">Interac e-Transfer</Label>
                  </div>
                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <Checkbox id="paypal" />
                    <Label htmlFor="paypal" className="flex-1 cursor-pointer">PayPal</Label>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm cursor-pointer">
                  I agree to the Terms of Service and Privacy Policy. I understand background checks may be conducted.
                </Label>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" className="flex-1" onClick={() => setStep(3)}>
                  Back
                </Button>
                <Button className="flex-1 bg-green-600 hover:bg-green-700" onClick={onSubmit}>
                  Complete Registration
                  <ShieldCheck className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}