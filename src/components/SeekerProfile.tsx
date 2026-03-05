import { useState } from "react";
import { Calendar, Heart, DollarSign, Star, Clock, MapPin, ArrowLeft, Edit, MessageSquare } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar } from "./ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Progress } from "./ui/progress";

interface SeekerProfileProps {
  onBack?: () => void;
}

export function SeekerProfile({ onBack }: SeekerProfileProps) {
  const [selectedMonth] = useState(new Date());

  // Sample seeker data
  const seekerData = {
    name: "User 1",
    location: "New York, NY",
    memberSince: "Dec 2023",
    totalBookings: 23,
    totalSpent: 3840,
    favoriteProviders: 5,
    upcomingBookings: 2,
    pendingRequests: 1
  };

  const stats = [
    { label: "Total Bookings", value: seekerData.totalBookings, icon: Calendar, color: "text-blue-600", bgColor: "bg-blue-100" },
    { label: "Total Spent", value: `$${seekerData.totalSpent}`, icon: DollarSign, color: "text-green-600", bgColor: "bg-green-100" },
    { label: "Favorite Providers", value: seekerData.favoriteProviders, icon: Heart, color: "text-pink-600", bgColor: "bg-pink-100" },
    { label: "Pending Requests", value: seekerData.pendingRequests, icon: Clock, color: "text-orange-600", bgColor: "bg-orange-100" }
  ];

  const upcomingBookings = [
    { 
      id: 1, 
      service: "Babysitting", 
      provider: "Provider 1", 
      date: "Oct 27, 2025", 
      time: "9:00 AM - 5:00 PM", 
      status: "confirmed",
      amount: 120,
      rating: 4.9,
      isLastMinute: true
    },
    { 
      id: 2, 
      service: "Elder Care", 
      provider: "Provider 2", 
      date: "Nov 2, 2025", 
      time: "10:00 AM - 4:00 PM", 
      status: "confirmed",
      amount: 150,
      rating: 4.8,
      isLastMinute: false
    },
    { 
      id: 3, 
      service: "House Help", 
      provider: "Provider 3", 
      date: "Nov 5, 2025", 
      time: "8:00 AM - 12:00 PM", 
      status: "pending",
      amount: 80,
      rating: 5.0,
      isLastMinute: false
    }
  ];

  const pastBookings = [
    { 
      id: 1, 
      service: "Babysitting", 
      provider: "Provider 1", 
      date: "Mar 15, 2024", 
      amount: 120, 
      myRating: 5,
      providerRating: 4.9,
      reviewed: true
    },
    { 
      id: 2, 
      service: "Elder Care", 
      provider: "Provider 2", 
      date: "Mar 10, 2024", 
      amount: 150, 
      myRating: 5,
      providerRating: 4.8,
      reviewed: true
    },
    { 
      id: 3, 
      service: "Food/Tiffin", 
      provider: "Provider 4", 
      date: "Mar 8, 2024", 
      amount: 200, 
      myRating: 4,
      providerRating: 4.7,
      reviewed: true
    },
    { 
      id: 4, 
      service: "Postpartum Care", 
      provider: "Provider 5", 
      date: "Feb 28, 2024", 
      amount: 300, 
      myRating: 5,
      providerRating: 5.0,
      reviewed: true
    },
    { 
      id: 5, 
      service: "House Help", 
      provider: "Provider 3", 
      date: "Feb 25, 2024", 
      amount: 80, 
      myRating: 0,
      providerRating: 5.0,
      reviewed: false
    }
  ];

  const favoriteProviders = [
    { name: "Provider 1", service: "Babysitting", rating: 4.9, bookings: 8 },
    { name: "Provider 2", service: "Elder Care", rating: 4.8, bookings: 5 },
    { name: "Provider 4", service: "Food/Tiffin", rating: 4.7, bookings: 4 },
    { name: "Provider 5", service: "Postpartum Care", rating: 5.0, bookings: 3 },
    { name: "Provider 3", service: "House Help", rating: 5.0, bookings: 3 }
  ];

  // Generate calendar for seeker
  const calendarDays = generateSeekerCalendar(selectedMonth);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-6">
          <Button variant="ghost" onClick={onBack} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <Card className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <Avatar className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-400 flex items-center justify-center text-white text-2xl">
                  RK
                </Avatar>
                <div>
                  <h1 className="text-3xl mb-1">{seekerData.name}</h1>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>{seekerData.location}</span>
                  </div>
                  <p className="text-sm text-gray-500">Member since {seekerData.memberSince}</p>
                </div>
              </div>
              <Button className="bg-indigo-600 hover:bg-indigo-700">
                <Edit className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
            </div>
          </Card>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className={`w-10 h-10 rounded-full ${stat.bgColor} flex items-center justify-center`}>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
              <p className="text-2xl">{stat.value}</p>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="bookings" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl">
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          {/* Upcoming Bookings Tab */}
          <TabsContent value="bookings">
            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-2xl mb-6">Upcoming Bookings</h2>
                <div className="space-y-4">
                  {upcomingBookings.map((booking) => (
                    <Card key={booking.id} className={`p-4 border-l-4 ${
                      booking.status === 'confirmed' ? 'border-l-green-500' : 'border-l-yellow-500'
                    }`}>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-start gap-3 flex-1">
                          <Avatar className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white">
                            {booking.provider.split(' ').map(n => n[0]).join('')}
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-lg">{booking.service}</h3>
                              <Badge className={
                                booking.status === 'confirmed' 
                                  ? 'bg-green-100 text-green-700' 
                                  : 'bg-yellow-100 text-yellow-700'
                              }>
                                {booking.status}
                              </Badge>
                              {booking.isLastMinute && (
                                <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                                  <Clock className="h-3 w-3 mr-1" />
                                  Last Minute
                                </Badge>
                              )}
                            </div>
                            <p className="font-medium text-gray-700 mb-1">{booking.provider}</p>
                            <div className="flex items-center gap-1 mb-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm">{booking.rating}</span>
                            </div>
                            <p className="text-sm text-gray-600">{booking.date} • {booking.time}</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <p className="text-xl">${booking.amount}</p>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <MessageSquare className="h-4 w-4 mr-1" />
                              Message
                            </Button>
                            {booking.status === 'pending' && (
                              <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                                Cancel
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </Card>

              {/* Quick Actions */}
              <Card className="p-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <h3 className="text-xl mb-2">Need Care?</h3>
                <p className="mb-4 text-indigo-100">Book your next trusted provider in minutes</p>
                <Button className="bg-white text-indigo-600 hover:bg-indigo-50">
                  Find a Provider
                </Button>
              </Card>
            </div>
          </TabsContent>

          {/* Calendar Tab */}
          <TabsContent value="calendar">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl">My Bookings Calendar</h2>
                <div className="flex gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-200 border border-green-400 rounded"></div>
                    <span>Confirmed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-yellow-200 border border-yellow-400 rounded"></div>
                    <span>Pending</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-200 border border-blue-400 rounded"></div>
                    <span>Completed</span>
                  </div>
                </div>
              </div>
              
              <SeekerCalendarView days={calendarDays} />

              {/* This Week's Schedule */}
              <div className="mt-8">
                <h3 className="text-xl mb-4">This Week's Schedule</h3>
                <div className="space-y-3">
                  {upcomingBookings.slice(0, 3).map((booking) => (
                    <Card key={booking.id} className="p-4 border-l-4 border-l-green-500">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{booking.service} with {booking.provider}</p>
                          <p className="text-sm text-gray-600">{booking.date} • {booking.time}</p>
                        </div>
                        <Badge className="bg-green-100 text-green-700">${booking.amount}</Badge>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Favorite Providers Tab */}
          <TabsContent value="favorites">
            <Card className="p-6">
              <h2 className="text-2xl mb-6">My Favorite Providers</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {favoriteProviders.map((provider, index) => (
                  <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-3">
                      <Avatar className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white">
                        {provider.name.split(' ').map(n => n[0]).join('')}
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-lg">{provider.name}</h3>
                          <Heart className="h-5 w-5 fill-pink-500 text-pink-500" />
                        </div>
                        <Badge variant="outline" className="mb-2 text-xs">{provider.service}</Badge>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm">{provider.rating}</span>
                          </div>
                          <p className="text-sm text-gray-600">{provider.bookings} bookings</p>
                        </div>
                        <Button size="sm" className="w-full mt-3 bg-indigo-600 hover:bg-indigo-700">
                          Book Again
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Booking History Tab */}
          <TabsContent value="history">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl">Booking History</h2>
                <Badge variant="outline">All Time</Badge>
              </div>

              {/* Spending Summary */}
              <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                <h3 className="text-lg mb-4">Total Spending</h3>
                <p className="text-3xl mb-2">${seekerData.totalSpent}</p>
                <p className="text-sm text-gray-600">Across {seekerData.totalBookings} bookings</p>
                <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl text-blue-600">$1,840</p>
                    <p className="text-xs text-gray-600">Last Month</p>
                  </div>
                  <div>
                    <p className="text-2xl text-green-600">8</p>
                    <p className="text-xs text-gray-600">Bookings</p>
                  </div>
                  <div>
                    <p className="text-2xl text-purple-600">4.8</p>
                    <p className="text-xs text-gray-600">Avg Rating</p>
                  </div>
                </div>
              </div>

              {/* Past Bookings */}
              <div className="space-y-4">
                {pastBookings.map((booking) => (
                  <Card key={booking.id} className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3 flex-1">
                        <Avatar className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white">
                          {booking.provider.split(' ').map(n => n[0]).join('')}
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-lg">{booking.service}</h3>
                            <Badge variant="outline" className="text-xs">{booking.provider}</Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{booking.date}</p>
                          
                          {booking.reviewed ? (
                            <div className="flex items-center gap-1">
                              <span className="text-sm text-gray-600">Your rating:</span>
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`h-3 w-3 ${i < booking.myRating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                                />
                              ))}
                            </div>
                          ) : (
                            <Button size="sm" variant="outline">
                              Leave a Review
                            </Button>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg">${booking.amount}</p>
                        <Badge className="bg-blue-100 text-blue-700 mt-1">Completed</Badge>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

// Helper function to generate seeker calendar
function generateSeekerCalendar(month: Date) {
  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const firstDay = new Date(year, monthIndex, 1);
  const lastDay = new Date(year, monthIndex + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();

  const days = [];
  
  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push({ date: null, status: null });
  }

  const statusMap: { [key: number]: 'confirmed' | 'pending' | 'completed' } = {
    3: 'completed', 10: 'completed', 15: 'completed',
    21: 'confirmed', 24: 'confirmed', 25: 'pending'
  };

  for (let day = 1; day <= daysInMonth; day++) {
    days.push({
      date: day,
      status: statusMap[day] || null
    });
  }

  return days;
}

// Seeker Calendar View Component
function SeekerCalendarView({ days }: { days: Array<{ date: number | null; status: string | null }> }) {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getStatusColor = (status: string | null) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-200 border-green-400 hover:bg-green-300';
      case 'pending':
        return 'bg-yellow-200 border-yellow-400 hover:bg-yellow-300';
      case 'completed':
        return 'bg-blue-200 border-blue-400 hover:bg-blue-300';
      default:
        return 'border-gray-200 hover:bg-gray-50';
    }
  };

  return (
    <div>
      <div className="grid grid-cols-7 gap-2 mb-2">
        {weekDays.map(day => (
          <div key={day} className="text-center font-medium text-sm text-gray-600 py-2">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {days.map((day, index) => (
          <div
            key={index}
            className={`aspect-square flex items-center justify-center border rounded-lg transition-all cursor-pointer ${
              day.date ? getStatusColor(day.status) : ''
            }`}
          >
            {day.date && <span className="text-sm">{day.date}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
