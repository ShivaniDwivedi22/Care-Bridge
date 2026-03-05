import { CreditCard, ShieldCheck, CheckCircle, AlertCircle } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { MatchedProvider } from "./ProviderMatches";
import { NeedDetails } from "./NeedDetailsForm";

interface BookingCheckoutProps {
  provider: MatchedProvider;
  needDetails: NeedDetails;
  onConfirm?: () => void;
  onBack?: () => void;
}

export function BookingCheckout({ provider, needDetails, onConfirm, onBack }: BookingCheckoutProps) {
  const calculateTotal = () => {
    const hours = needDetails.duration === "1-2" ? 2 : 
                  needDetails.duration === "3-4" ? 4 :
                  needDetails.duration === "5-8" ? 8 :
                  needDetails.duration === "full-day" ? 10 : 4;
    return provider.hourlyRate * hours;
  };

  const subtotal = calculateTotal();
  const lastMinuteSurcharge = needDetails.isLastMinute ? subtotal * 0.25 : 0;
  const serviceFee = subtotal * 0.1;
  const total = subtotal + lastMinuteSurcharge + serviceFee;

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <Button variant="outline" onClick={onBack} className="mb-6">
          ← Back to Matches
        </Button>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Booking Summary */}
          <div className="md:col-span-2">
            <Card className="p-6 mb-6">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl">Booking Details</h2>
                {needDetails.isLastMinute && (
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                    Last Minute Booking
                  </Badge>
                )}
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Provider</span>
                  <span>{provider.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Service</span>
                  <span>{needDetails.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date</span>
                  <span>{new Date(needDetails.date).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time</span>
                  <span>{needDetails.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span>{needDetails.duration} hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location</span>
                  <span>{needDetails.location}</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl mb-4">Payment Information</h3>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="cardName">Cardholder Name</Label>
                  <Input id="cardName" placeholder="John Doe" />
                </div>
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" />
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-blue-600 mt-0.5" />
                <div className="text-sm">
                  <p className="text-blue-900 mb-1">Secure Payment</p>
                  <p className="text-blue-700">
                    Your payment information is encrypted and secure. Payment is held until service completion.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="p-6 sticky top-24">
              <h3 className="text-xl mb-4">Order Summary</h3>
              
              {needDetails.isLastMinute && (
                <div className="mb-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div className="text-xs text-orange-800">
                      <p>Last minute booking surcharge applied</p>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {needDetails.isLastMinute && (
                  <div className="flex justify-between">
                    <span className="text-gray-600 flex items-center gap-1">
                      Last Minute Surcharge 
                      <span className="text-xs">(+25%)</span>
                    </span>
                    <span className="text-orange-600">${lastMinuteSurcharge.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">Service Fee</span>
                  <span>${serviceFee.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span>Total</span>
                  <span className="text-2xl">${total.toFixed(2)}</span>
                </div>
              </div>

              <Button 
                className="w-full bg-green-600 hover:bg-green-700 mb-4" 
                size="lg"
                onClick={onConfirm}
              >
                <CreditCard className="mr-2 h-5 w-5" />
                Confirm Booking
              </Button>

              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Free cancellation up to 24h before</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Satisfaction guaranteed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>24/7 customer support</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
