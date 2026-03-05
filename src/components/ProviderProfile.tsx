import { useState } from "react";
import { Calendar, DollarSign, Star, TrendingUp, CheckCircle, Clock, MessageSquare, Edit, ArrowLeft } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar } from "./ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Progress } from "./ui/progress";

interface ProviderProfileProps {
  onBack?: () => void;
}

export function ProviderProfile({ onBack }: ProviderProfileProps) {
  const [selectedMonth, setSelectedMonth] = useState(new Date());

  // Sample data
  const providerData = {
    name: "Provider 1",
    rating: 4.9,
    totalReviews: 127,
    jobsCompleted: 89,
    totalEarnings: 12450,
    memberSince: "Jan 2024",
    services: ["Babysitting", "Elder Care", "House Help"],
    languages: ["Hindi", "Punjabi", "Gujarati"],
    responseRate: 95,
    responseTime: "2 hours"
  };

  // Calendar data - sample for current month
  const calendarDays = generateCalendarDays(selectedMonth);

  const stats = [
    { label: "Jobs Completed", value: providerData.jobsCompleted, icon: CheckCircle, color: "text-green-600", bgColor: "bg-green-100" },
    { label: "Total Earnings", value: `$${providerData.totalEarnings.toLocaleString()}`, icon: DollarSign, color: "text-blue-600", bgColor: "bg-blue-100" },
    { label: "Average Rating", value: providerData.rating, icon: Star, color: "text-yellow-600", bgColor: "bg-yellow-100" },
    { label: "Response Rate", value: `${providerData.responseRate}%`, icon: TrendingUp, color: "text-purple-600", bgColor: "bg-purple-100" }
  ];

  const recentJobs = [
    { id: 1, service: "Babysitting", client: "Seeker 1", date: "Mar 15, 2024", amount: 120, rating: 5, review: "Excellent with kids! Very punctual and caring." },
    { id: 2, service: "Elder Care", client: "Seeker 2", date: "Mar 12, 2024", amount: 150, rating: 5, review: "My mother loved her. Will book again." },
    { id: 3, service: "House Help", client: "Seeker 3", date: "Mar 10, 2024", amount: 80, rating: 4, review: "Good work, very thorough cleaning." },
    { id: 4, service: "Babysitting", client: "Seeker 4", date: "Mar 8, 2024", amount: 140, rating: 5, review: "Amazing! Kids had a great time." },
    { id: 5, service: "Elder Care", client: "Seeker 5", date: "Mar 5, 2024", amount: 160, rating: 5, review: "Very professional and kind." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-6">
          <Button variant="ghost" onClick={onBack} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
          
          <Card className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <Avatar className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-2xl">
                  PS
                </Avatar>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-3xl">{providerData.name}</h1>
                    <Badge className="bg-green-100 text-green-700">Verified</Badge>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-xl">{providerData.rating}</span>
                    <span className="text-gray-500">({providerData.totalReviews} reviews)</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {providerData.services.map(service => (
                      <Badge key={service} variant="outline">{service}</Badge>
                    ))}
                  </div>
                </div>
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700">
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
        <Tabs defaultValue="calendar" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
            <TabsTrigger value="jobs">Job History</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          {/* Calendar Tab */}
          <TabsContent value="calendar">
            <Card className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <h2 className="text-2xl">My Availability Calendar</h2>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" variant="outline" className="bg-green-50 hover:bg-green-100 border-green-300">
                    Mark Weekdays Available
                  </Button>
                  <Button size="sm" variant="outline" className="bg-blue-50 hover:bg-blue-100 border-blue-300">
                    Mark Weekends Available
                  </Button>
                  <Button size="sm" variant="outline" className="bg-purple-50 hover:bg-purple-100 border-purple-300">
                    Holistic View
                  </Button>
                </div>
              </div>

              <div className="flex gap-4 text-sm mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-200 border border-green-400 rounded"></div>
                  <span>Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-200 border border-blue-400 rounded"></div>
                  <span>Booked</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-200 border border-yellow-400 rounded"></div>
                  <span>Tentative</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-100 border border-gray-300 rounded"></div>
                  <span>Unavailable</span>
                </div>
              </div>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-6">
                <p className="text-sm text-blue-800">
                  <strong>Quick Tip:</strong> Click any day to toggle availability, or use quick actions above to mark multiple days at once. 
                  Use "Holistic View" to see your month at a glance with earnings and booking statistics.
                </p>
              </div>
              
              <CalendarView days={calendarDays} />

              {/* Upcoming Bookings */}
              <div className="mt-8">
                <h3 className="text-xl mb-4">Upcoming This Week</h3>
                <div className="space-y-3">
                  <Card className="p-4 border-l-4 border-l-blue-500">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Babysitting - Seeker 1</p>
                        <p className="text-sm text-gray-600">Tomorrow, 9:00 AM - 5:00 PM</p>
                      </div>
                      <Badge className="bg-blue-100 text-blue-700">Confirmed</Badge>
                    </div>
                  </Card>
                  <Card className="p-4 border-l-4 border-l-yellow-500">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Elder Care - Seeker 2</p>
                        <p className="text-sm text-gray-600">Mar 22, 10:00 AM - 2:00 PM</p>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-700">Pending</Badge>
                    </div>
                  </Card>
                  <Card className="p-4 border-l-4 border-l-blue-500">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">House Help - Seeker 3</p>
                        <p className="text-sm text-gray-600">Mar 24, 8:00 AM - 12:00 PM</p>
                      </div>
                      <Badge className="bg-blue-100 text-blue-700">Confirmed</Badge>
                    </div>
                  </Card>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Job History Tab */}
          <TabsContent value="jobs">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl">Job History</h2>
                <div className="flex gap-2">
                  <Badge variant="outline">Last 30 Days</Badge>
                </div>
              </div>

              {/* Monthly Earnings Chart */}
              <div className="mb-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                <h3 className="text-lg mb-4">Earnings This Month</h3>
                <p className="text-3xl mb-2">$1,840</p>
                <Progress value={73} className="h-2 mb-2" />
                <p className="text-sm text-gray-600">73% of your monthly goal ($2,500)</p>
              </div>

              {/* Recent Jobs List */}
              <div className="space-y-4">
                {recentJobs.map((job) => (
                  <Card key={job.id} className="p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg">{job.service}</h3>
                          <Badge variant="outline" className="text-xs">{job.client}</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{job.date}</p>
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < job.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                        <p className="text-sm text-gray-700 italic">"{job.review}"</p>
                      </div>
                      <div className="text-right ml-4">
                        <p className="text-xl text-green-600">${job.amount}</p>
                        <CheckCircle className="h-5 w-5 text-green-600 ml-auto mt-1" />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews">
            <Card className="p-6">
              <h2 className="text-2xl mb-6">Client Reviews</h2>
              
              {/* Rating Summary */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg">
                  <p className="text-5xl mb-2">{providerData.rating}</p>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600">Based on {providerData.totalReviews} reviews</p>
                </div>

                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => {
                    const percentage = rating === 5 ? 85 : rating === 4 ? 12 : rating === 3 ? 3 : 0;
                    return (
                      <div key={rating} className="flex items-center gap-2">
                        <span className="text-sm w-8">{rating} ★</span>
                        <Progress value={percentage} className="h-2 flex-1" />
                        <span className="text-sm w-12 text-right">{percentage}%</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Recent Reviews */}
              <div className="space-y-4">
                {recentJobs.slice(0, 5).map((job) => (
                  <Card key={job.id} className="p-4">
                    <div className="flex items-start gap-3">
                      <Avatar className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white">
                        {job.client.split(' ').map(n => n[0]).join('')}
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-medium">{job.client}</p>
                          <p className="text-sm text-gray-500">{job.date}</p>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < job.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                        <p className="text-sm text-gray-700">{job.review}</p>
                        <Badge variant="outline" className="mt-2 text-xs">{job.service}</Badge>
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

// Helper function to generate calendar days
function generateCalendarDays(month: Date) {
  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const firstDay = new Date(year, monthIndex, 1);
  const lastDay = new Date(year, monthIndex + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();

  const days = [];
  
  // Add empty cells for days before the first day of the month
  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push({ date: null, status: null });
  }

  // Sample statuses for demonstration
  const statusMap: { [key: number]: 'available' | 'booked' | 'tentative' | 'unavailable' } = {
    1: 'available', 2: 'available', 3: 'booked', 5: 'available',
    7: 'tentative', 8: 'available', 10: 'booked', 12: 'available',
    14: 'available', 15: 'booked', 17: 'tentative', 19: 'available',
    21: 'booked', 22: 'tentative', 24: 'available', 26: 'available',
    28: 'booked', 29: 'available'
  };

  // Add actual days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    days.push({
      date: day,
      status: statusMap[day] || 'available'
    });
  }

  return days;
}

// Calendar View Component
function CalendarView({ days }: { days: Array<{ date: number | null; status: string | null }> }) {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getStatusColor = (status: string | null) => {
    switch (status) {
      case 'available':
        return 'bg-green-200 border-green-400 hover:bg-green-300';
      case 'booked':
        return 'bg-blue-200 border-blue-400 hover:bg-blue-300';
      case 'tentative':
        return 'bg-yellow-200 border-yellow-400 hover:bg-yellow-300';
      case 'unavailable':
        return 'bg-gray-100 border-gray-300';
      default:
        return '';
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
