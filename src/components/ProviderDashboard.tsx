import { CheckCircle, XCircle, DollarSign, Calendar, TrendingUp, Download, User, Clock, Star, Award, Zap, Heart, Users, MessageSquare, Send, Camera, Gift } from "lucide-react";
import { useNavigate } from "react-router";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface ProviderDashboardProps {
  onViewProfile?: () => void;
}

export function ProviderDashboard({ onViewProfile }: ProviderDashboardProps) {
  const navigate = useNavigate();
  
  const bookingRequests = [
    {
      id: 1,
      service: "Babysitting",
      client: "Seeker 1",
      date: "Oct 27, 2025",
      time: "2:00 PM - 6:00 PM",
      rate: 28,
      location: "Downtown, Toronto",
      status: "pending",
      isLastMinute: true,
      isRepeatClient: false
    },
    {
      id: 2,
      service: "Elder Care",
      client: "Seeker 2",
      date: "Oct 30, 2025",
      time: "9:00 AM - 5:00 PM",
      rate: 35,
      location: "Scarborough",
      status: "pending",
      isLastMinute: false,
      isRepeatClient: true
    },
    {
      id: 3,
      service: "House Help",
      client: "Seeker 3",
      date: "Nov 2, 2025",
      time: "10:00 AM - 2:00 PM",
      rate: 25,
      location: "Mississauga",
      status: "pending",
      isLastMinute: false,
      isRepeatClient: false
    }
  ];

  const earnings = {
    thisWeek: 425,
    thisMonth: 1650,
    total: 8920,
    pending: 245
  };

  const reputationStats = {
    responseTime: "< 1 hour",
    completedBookings: 127,
    repeatClients: 34,
    rating: 4.9,
    familyFavorite: true
  };

  const completedBookings = [
    {
      id: 4,
      service: "Babysitting",
      client: "Seeker 4",
      date: "Oct 20, 2025",
      hours: 4,
      earned: 112,
      rating: 5
    },
    {
      id: 5,
      service: "Elder Care",
      client: "Seeker 5",
      date: "Oct 18, 2025",
      hours: 8,
      earned: 280,
      rating: 5
    }
  ];

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl mb-2">Provider Dashboard</h1>
            <p className="text-gray-600">Manage your bookings and earnings</p>
          </div>
          <Button onClick={onViewProfile} className="bg-purple-600 hover:bg-purple-700">
            <User className="mr-2 h-4 w-4" />
            View Profile
          </Button>
        </div>

        {/* Reputation Stats */}
        <Card className="p-6 mb-8 bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
          <div className="flex items-center gap-2 mb-4">
            <Award className="h-6 w-6 text-purple-600" />
            <h3 className="text-lg font-medium">Your Reputation</h3>
            {reputationStats.familyFavorite && (
              <Badge className="bg-pink-100 text-pink-700">
                <Heart className="h-3 w-3 mr-1 fill-pink-700" />
                Family Favorite
              </Badge>
            )}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <Zap className="h-4 w-4 text-green-600" />
                <span className="text-sm text-gray-600">Response Time</span>
              </div>
              <p className="text-xl font-medium">{reputationStats.responseTime}</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle className="h-4 w-4 text-blue-600" />
                <span className="text-sm text-gray-600">Completed</span>
              </div>
              <p className="text-xl font-medium">{reputationStats.completedBookings}</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <Users className="h-4 w-4 text-purple-600" />
                <span className="text-sm text-gray-600">Repeat Clients</span>
              </div>
              <p className="text-xl font-medium">{reputationStats.repeatClients}</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span className="text-sm text-gray-600">Rating</span>
              </div>
              <p className="text-xl font-medium">{reputationStats.rating}</p>
            </div>
          </div>
        </Card>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">This Week</span>
              <TrendingUp className="h-5 w-5 text-green-600" />
            </div>
            <div className="text-3xl">${earnings.thisWeek}</div>
            <div className="text-sm text-green-600 mt-1">↑ 12% from last week</div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">This Month</span>
              <Calendar className="h-5 w-5 text-blue-600" />
            </div>
            <div className="text-3xl">${earnings.thisMonth}</div>
            <div className="text-sm text-gray-500 mt-1">18 bookings completed</div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Total Earned</span>
              <DollarSign className="h-5 w-5 text-purple-600" />
            </div>
            <div className="text-3xl">${earnings.total}</div>
            <div className="text-sm text-gray-500 mt-1">127 total bookings</div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Pending</span>
              <Download className="h-5 w-5 text-orange-600" />
            </div>
            <div className="text-3xl">${earnings.pending}</div>
            <Button variant="outline" size="sm" className="w-full mt-2">
              Withdraw Funds
            </Button>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Button 
            variant="outline" 
            className="h-auto p-4 justify-start"
            onClick={() => navigate("/provider/calendar")}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Calendar className="h-5 w-5 text-blue-600" />
              </div>
              <div className="text-left">
                <p className="font-medium">Manage Calendar</p>
                <p className="text-xs text-gray-500">Set availability & emergency hours</p>
              </div>
            </div>
          </Button>
          
          <Button 
            variant="outline" 
            className="h-auto p-4 justify-start"
            onClick={() => navigate("/provider/communication")}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <MessageSquare className="h-5 w-5 text-green-600" />
              </div>
              <div className="text-left">
                <p className="font-medium">Send Visit Update</p>
                <p className="text-xs text-gray-500">Share photos & messages</p>
              </div>
            </div>
          </Button>
          
          <Button 
            variant="outline" 
            className="h-auto p-4 justify-start"
            onClick={() => navigate("/provider/growth")}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Gift className="h-5 w-5 text-purple-600" />
              </div>
              <div className="text-left">
                <p className="font-medium">Refer Providers</p>
                <p className="text-xs text-gray-500">Earn $50 per referral</p>
              </div>
            </div>
          </Button>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="requests" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="requests">
              Booking Requests ({bookingRequests.length})
            </TabsTrigger>
            <TabsTrigger value="history">Completed</TabsTrigger>
          </TabsList>

          {/* Booking Requests */}
          <TabsContent value="requests" className="space-y-4">
            {bookingRequests.map((booking) => (
              <Card key={booking.id} className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl">{booking.service}</h3>
                      {booking.isLastMinute ? (
                        <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                          <Clock className="h-3 w-3 mr-1" />
                          Last Minute +25%
                        </Badge>
                      ) : (
                        <Badge>New Request</Badge>
                      )}
                      {booking.isRepeatClient && (
                        <Badge className="bg-green-100 text-green-700">
                          <Users className="h-3 w-3 mr-1" />
                          Repeat Client
                        </Badge>
                      )}
                    </div>
                    <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
                      <div>
                        <span className="text-gray-500">Client:</span> {booking.client}
                      </div>
                      <div>
                        <span className="text-gray-500">Date:</span> {booking.date}
                      </div>
                      <div>
                        <span className="text-gray-500">Time:</span> {booking.time}
                      </div>
                      <div>
                        <span className="text-gray-500">Location:</span> {booking.location}
                      </div>
                    </div>
                    <div className="mt-3 text-lg">
                      <span className="text-gray-600">Rate:</span> ${booking.rate}/hour
                      {booking.isLastMinute && (
                        <span className="text-sm text-orange-600 ml-2">
                          (${(booking.rate * 1.25).toFixed(0)}/hour with surcharge)
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1 md:flex-initial">
                      <XCircle className="h-4 w-4 mr-2" />
                      Decline
                    </Button>
                    <Button className="flex-1 md:flex-initial bg-green-600 hover:bg-green-700">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Accept
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Completed Bookings */}
          <TabsContent value="history" className="space-y-4">
            {completedBookings.map((booking) => (
              <Card key={booking.id} className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl">{booking.service}</h3>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        Completed
                      </Badge>
                    </div>
                    <div className="grid md:grid-cols-3 gap-2 text-sm text-gray-600">
                      <div>
                        <span className="text-gray-500">Client:</span> {booking.client}
                      </div>
                      <div>
                        <span className="text-gray-500">Date:</span> {booking.date}
                      </div>
                      <div>
                        <span className="text-gray-500">Hours:</span> {booking.hours}
                      </div>
                    </div>
                    <div className="mt-3">
                      <span className="text-gray-600">Rating:</span>
                      <span className="text-yellow-500 ml-2">{'★'.repeat(booking.rating)}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-2xl text-green-600">${booking.earned}</div>
                    <div className="text-sm text-gray-500">Paid</div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}