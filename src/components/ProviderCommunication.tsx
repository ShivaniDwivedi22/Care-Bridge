import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { MessageSquare, Camera, Send, Clock, CheckCircle } from "lucide-react";

interface VisitUpdate {
  id: string;
  bookingId: string;
  client: string;
  message: string;
  photos: string[];
  timestamp: string;
  status: "sent" | "read";
}

export function ProviderCommunication() {
  const [activeBookingId, setActiveBookingId] = useState("1");
  const [message, setMessage] = useState("");

  // Mock active bookings
  const activeBookings = [
    {
      id: "1",
      client: "Seeker 1",
      service: "Babysitting",
      date: "Today",
      status: "in-progress"
    },
    {
      id: "2",
      client: "Seeker 2",
      service: "Elder Care",
      date: "Tomorrow",
      status: "upcoming"
    }
  ];

  // Mock visit updates
  const visitUpdates: VisitUpdate[] = [
    {
      id: "1",
      bookingId: "1",
      client: "Seeker 1",
      message: "Arrived on time. Children are having lunch now. Will start outdoor activities after.",
      photos: [],
      timestamp: "2:15 PM",
      status: "read"
    },
    {
      id: "2",
      bookingId: "2",
      client: "Seeker 2",
      message: "Completed morning exercises. Patient is resting now. Will prepare lunch shortly.",
      photos: [],
      timestamp: "Yesterday, 11:30 AM",
      status: "read"
    }
  ];

  const handleSendUpdate = () => {
    if (message.trim()) {
      console.log("Sending update:", message);
      setMessage("");
    }
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-6">
          <h2 className="text-3xl mb-2">Communication Center</h2>
          <p className="text-gray-600">Send visit updates and photos to families</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Active Bookings List */}
          <div>
            <Card className="p-4">
              <h3 className="font-medium mb-4">Active Bookings</h3>
              <div className="space-y-2">
                {activeBookings.map((booking) => (
                  <div
                    key={booking.id}
                    onClick={() => setActiveBookingId(booking.id)}
                    className={`p-3 rounded-lg cursor-pointer transition-all ${
                      activeBookingId === booking.id
                        ? 'bg-purple-50 border-2 border-purple-500'
                        : 'bg-gray-50 border-2 border-transparent hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-sm">{booking.client}</span>
                      <Badge 
                        className={
                          booking.status === "in-progress"
                            ? "bg-green-100 text-green-700"
                            : "bg-blue-100 text-blue-700"
                        }
                      >
                        {booking.status === "in-progress" ? "In Progress" : "Upcoming"}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-600">{booking.service}</p>
                    <p className="text-xs text-gray-500">{booking.date}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Tips */}
            <Card className="p-4 mt-4 bg-gradient-to-br from-blue-50 to-indigo-50">
              <h4 className="font-medium text-sm mb-2">💡 Communication Tips</h4>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Send regular updates during care</li>
                <li>• Share photos of activities (with permission)</li>
                <li>• Report any concerns immediately</li>
                <li>• Keep families informed and reassured</li>
              </ul>
            </Card>
          </div>

          {/* Main Communication Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Send Update Card */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="h-5 w-5 text-purple-600" />
                <h3 className="font-medium">Send Visit Update</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <Textarea
                    placeholder="Share what's happening during the visit... (e.g., activities, meals, health updates, child's mood, etc.)"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                  />
                </div>

                <div>
                  <Button variant="outline" className="w-full">
                    <Camera className="h-4 w-4 mr-2" />
                    Add Photos (Optional)
                  </Button>
                  <p className="text-xs text-gray-500 mt-1">
                    Share photos of activities, meals, or other appropriate moments
                  </p>
                </div>

                <Button 
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  onClick={handleSendUpdate}
                  disabled={!message.trim()}
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Update
                </Button>
              </div>
            </Card>

            {/* Previous Updates */}
            <Card className="p-6">
              <h3 className="font-medium mb-4">Previous Updates</h3>
              <div className="space-y-4">
                {visitUpdates
                  .filter(update => update.bookingId === activeBookingId)
                  .map((update) => (
                    <div key={update.id} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <MessageSquare className="h-4 w-4 text-purple-600" />
                          <span className="font-medium text-sm">To: {update.client}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Clock className="h-3 w-3" />
                          {update.timestamp}
                          {update.status === "read" && (
                            <CheckCircle className="h-3 w-3 text-green-600" />
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-gray-700">{update.message}</p>
                      {update.photos.length > 0 && (
                        <div className="flex gap-2 mt-3">
                          {update.photos.map((photo, idx) => (
                            <div key={idx} className="w-20 h-20 bg-gray-200 rounded-lg" />
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                {visitUpdates.filter(update => update.bookingId === activeBookingId).length === 0 && (
                  <p className="text-sm text-gray-500 text-center py-8">
                    No updates sent yet for this booking
                  </p>
                )}
              </div>
            </Card>

            {/* Benefits of Regular Updates */}
            <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <h4 className="font-medium mb-3">Why Regular Updates Matter</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-green-900">Build Trust</p>
                    <p className="text-green-700 text-xs">Families appreciate transparency</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-green-900">Get Better Reviews</p>
                    <p className="text-green-700 text-xs">Communication improves ratings</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-green-900">More Repeat Bookings</p>
                    <p className="text-green-700 text-xs">Families rebook responsive providers</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-green-900">Peace of Mind</p>
                    <p className="text-green-700 text-xs">Reduce family anxiety</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
