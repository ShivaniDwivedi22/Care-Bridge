import { useState } from "react";
import { useNavigate } from "react-router";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Calendar, Clock, FileText, MessageSquare, TrendingUp, Users, DollarSign } from "lucide-react";

interface Booking {
  id: string;
  service: string;
  provider: string;
  date: string;
  time: string;
  status: "upcoming" | "completed" | "cancelled";
  cost: number;
}

interface CareNote {
  id: string;
  author: string;
  content: string;
  timestamp: string;
}

export function FamilyDashboard() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const navigate = useNavigate();

  // Mock data
  const upcomingBookings: Booking[] = [
    {
      id: "1",
      service: "Babysitting",
      provider: "Provider 1",
      date: "2026-03-05",
      time: "9:00 AM - 5:00 PM",
      status: "upcoming",
      cost: 256
    },
    {
      id: "2",
      service: "Elder Care",
      provider: "Provider 2",
      date: "2026-03-06",
      time: "2:00 PM - 6:00 PM",
      status: "upcoming",
      cost: 112
    },
    {
      id: "3",
      service: "House Help",
      provider: "Provider 3",
      date: "2026-03-08",
      time: "10:00 AM - 2:00 PM",
      status: "upcoming",
      cost: 140
    }
  ];

  const pastBookings: Booking[] = [
    {
      id: "4",
      service: "Postpartum Care",
      provider: "Provider 2",
      date: "2026-02-28",
      time: "8:00 AM - 4:00 PM",
      status: "completed",
      cost: 224
    },
    {
      id: "5",
      service: "Food/Tiffin",
      provider: "Provider 3",
      date: "2026-02-25",
      time: "Delivered",
      status: "completed",
      cost: 65
    }
  ];

  const careNotes: CareNote[] = [
    {
      id: "1",
      author: "User 1",
      content: "Medication administered at 2 PM as scheduled. Patient doing well.",
      timestamp: "2026-03-02 2:15 PM"
    },
    {
      id: "2",
      author: "Provider 2",
      content: "Completed physical therapy exercises. Patient showed improvement in mobility.",
      timestamp: "2026-03-01 4:30 PM"
    },
    {
      id: "3",
      author: "User 2",
      content: "Changed dietary preference to vegetarian for this week.",
      timestamp: "2026-02-28 9:00 AM"
    }
  ];

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl mb-2">Family Care Dashboard</h1>
          <p className="text-gray-600">
            Manage your family's care bookings, plans, and collaboration
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Upcoming</p>
                <p className="text-2xl">{upcomingBookings.length}</p>
              </div>
              <Calendar className="h-8 w-8 text-indigo-600" />
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Completed</p>
                <p className="text-2xl">{pastBookings.length}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Family Members</p>
                <p className="text-2xl">4</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">This Month</p>
                <p className="text-2xl">$797</p>
              </div>
              <DollarSign className="h-8 w-8 text-purple-600" />
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Bookings */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="mb-4">
                  <TabsTrigger value="upcoming">Upcoming Bookings</TabsTrigger>
                  <TabsTrigger value="past">Past Bookings</TabsTrigger>
                </TabsList>

                <TabsContent value="upcoming">
                  <div className="space-y-3">
                    {upcomingBookings.map((booking) => (
                      <div
                        key={booking.id}
                        className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-medium">{booking.service}</h4>
                            <p className="text-sm text-gray-600">{booking.provider}</p>
                          </div>
                          <Badge className="bg-green-100 text-green-700">
                            {booking.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {booking.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {booking.time}
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-200">
                          <span className="font-medium">${booking.cost}</span>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              View Details
                            </Button>
                            <Button size="sm" variant="outline">
                              Message
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="past">
                  <div className="space-y-3">
                    {pastBookings.map((booking) => (
                      <div
                        key={booking.id}
                        className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-medium">{booking.service}</h4>
                            <p className="text-sm text-gray-600">{booking.provider}</p>
                          </div>
                          <Badge className="bg-blue-100 text-blue-700">
                            {booking.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {booking.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {booking.time}
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-200">
                          <span className="font-medium">${booking.cost}</span>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              View Details
                            </Button>
                            <Button size="sm" variant="outline">
                              Rebook
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Care Notes */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-gray-500" />
                  <h3 className="font-medium">Care History & Notes</h3>
                </div>
                <Button size="sm" variant="outline">Add Note</Button>
              </div>

              <div className="space-y-3">
                {careNotes.map((note) => (
                  <div key={note.id} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">{note.author}</span>
                      <span className="text-xs text-gray-500">{note.timestamp}</span>
                    </div>
                    <p className="text-sm text-gray-600">{note.content}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Family Chat */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="h-5 w-5 text-gray-500" />
                <h3 className="font-medium">Family Chat</h3>
              </div>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                Open Family Chat
              </Button>
              <p className="text-sm text-gray-500 mt-2">
                Coordinate care with family members in real-time
              </p>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="font-medium mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => navigate("/seeker/care-plan")}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Create Care Plan
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Invite Family Member
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <DollarSign className="h-4 w-4 mr-2" />
                  View Payment History
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}