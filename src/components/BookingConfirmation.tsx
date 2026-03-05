import { CheckCircle, Calendar, MapPin, Clock, Mail, MessageCircle, User, LayoutDashboard, Repeat } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

interface BookingConfirmationProps {
  onBackHome?: () => void;
  onViewProfile?: () => void;
  onViewDashboard?: () => void;
  onCreateCarePlan?: () => void;
}

export function BookingConfirmation({ onBackHome, onViewProfile, onViewDashboard, onCreateCarePlan }: BookingConfirmationProps) {
  return (
    <div className="py-16 bg-gradient-to-br from-green-50 to-emerald-50 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card className="p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          
          <h1 className="text-4xl mb-3">Booking Confirmed!</h1>
          <p className="text-xl text-gray-600 mb-8">
            Your care service has been successfully booked
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
            <h3 className="text-xl mb-4">Booking Details</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-gray-500 mt-0.5" />
                <div>
                  <div className="text-sm text-gray-500">Date & Time</div>
                  <div>October 25, 2025 at 2:00 PM</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-gray-500 mt-0.5" />
                <div>
                  <div className="text-sm text-gray-500">Duration</div>
                  <div>4 hours</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                <div>
                  <div className="text-sm text-gray-500">Location</div>
                  <div>Downtown, Toronto</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 mb-8 text-sm text-left">
            <div className="flex items-start gap-2">
              <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <p className="text-blue-900 mb-1">Confirmation email sent</p>
                <p className="text-blue-700">
                  We've sent a confirmation email with all the details and your provider's contact information.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Button className="w-full bg-indigo-600 hover:bg-indigo-700" size="lg">
              <MessageCircle className="h-5 w-5 mr-2" />
              Message Your Provider
            </Button>
            <div className="grid grid-cols-2 gap-3">
              <Button className="bg-purple-600 hover:bg-purple-700" size="lg" onClick={onViewDashboard}>
                <LayoutDashboard className="h-5 w-5 mr-2" />
                Dashboard
              </Button>
              <Button className="bg-green-600 hover:bg-green-700" size="lg" onClick={onCreateCarePlan}>
                <Repeat className="h-5 w-5 mr-2" />
                Care Plan
              </Button>
            </div>
            <Button variant="outline" className="w-full" size="lg" onClick={onBackHome}>
              Back to Home
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t text-sm text-gray-600">
            <p>Need to make changes? Contact us at support@carebridge.com or call 1-800-CARE-BRG</p>
          </div>
        </Card>
      </div>
    </div>
  );
}