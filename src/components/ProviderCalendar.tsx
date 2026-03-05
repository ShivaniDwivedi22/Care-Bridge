import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { Calendar as CalendarIcon, Clock, Repeat, Zap, ChevronLeft, ChevronRight } from "lucide-react";

interface CalendarEvent {
  id: string;
  date: string;
  time: string;
  type: "booking" | "recurring" | "blocked";
  client?: string;
  service?: string;
}

export function ProviderCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 2, 2)); // March 2026
  const [emergencyAvailable, setEmergencyAvailable] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Mock events
  const events: CalendarEvent[] = [
    {
      id: "1",
      date: "2026-03-05",
      time: "9:00 AM - 5:00 PM",
      type: "booking",
      client: "Seeker 1",
      service: "Babysitting"
    },
    {
      id: "2",
      date: "2026-03-08",
      time: "2:00 PM - 6:00 PM",
      type: "recurring",
      client: "Seeker 2",
      service: "Elder Care"
    },
    {
      id: "3",
      date: "2026-03-10",
      time: "All Day",
      type: "blocked"
    }
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return { firstDay, daysInMonth };
  };

  const { firstDay, daysInMonth } = getDaysInMonth(currentDate);
  const monthName = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const getEventsForDate = (day: number) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.filter(event => event.date === dateStr);
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-6">
          <h2 className="text-3xl mb-2">My Calendar</h2>
          <p className="text-gray-600">Manage your availability and bookings</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-medium">{monthName}</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={previousMonth}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={nextMonth}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Day Headers */}
              <div className="grid grid-cols-7 gap-2 mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2">
                {/* Empty cells for days before month starts */}
                {Array.from({ length: firstDay }).map((_, index) => (
                  <div key={`empty-${index}`} className="aspect-square" />
                ))}

                {/* Days of the month */}
                {Array.from({ length: daysInMonth }).map((_, index) => {
                  const day = index + 1;
                  const dayEvents = getEventsForDate(day);
                  const isToday = day === 2 && currentDate.getMonth() === 2; // March 2

                  return (
                    <div
                      key={day}
                      className={`aspect-square p-2 border rounded-lg cursor-pointer transition-all ${
                        isToday 
                          ? 'border-purple-500 bg-purple-50' 
                          : dayEvents.length > 0
                          ? 'border-blue-300 bg-blue-50 hover:bg-blue-100'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))}
                    >
                      <div className="text-sm font-medium mb-1">{day}</div>
                      <div className="space-y-1">
                        {dayEvents.slice(0, 2).map((event) => (
                          <div
                            key={event.id}
                            className={`text-xs px-1 py-0.5 rounded truncate ${
                              event.type === 'booking'
                                ? 'bg-blue-200 text-blue-800'
                                : event.type === 'recurring'
                                ? 'bg-green-200 text-green-800'
                                : 'bg-gray-200 text-gray-800'
                            }`}
                          >
                            {event.type === 'blocked' ? 'Blocked' : event.service}
                          </div>
                        ))}
                        {dayEvents.length > 2 && (
                          <div className="text-xs text-gray-500">+{dayEvents.length - 2} more</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="flex gap-4 mt-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-200 rounded" />
                  <span>Booking</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-200 rounded" />
                  <span>Recurring</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-200 rounded" />
                  <span>Blocked</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Emergency Availability */}
            <Card className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <Zap className="h-5 w-5 text-orange-500 mt-1" />
                <div className="flex-1">
                  <h3 className="font-medium mb-1">Emergency Availability</h3>
                  <p className="text-sm text-gray-600">
                    Accept last-minute bookings with 25% bonus pay
                  </p>
                </div>
                <Switch
                  checked={emergencyAvailable}
                  onCheckedChange={setEmergencyAvailable}
                />
              </div>
              {emergencyAvailable && (
                <div className="bg-orange-50 border border-orange-100 rounded-lg p-3">
                  <p className="text-sm text-orange-800">
                    ✓ You're now visible for emergency requests
                  </p>
                </div>
              )}
            </Card>

            {/* Recurring Bookings */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Repeat className="h-5 w-5 text-green-600" />
                <h3 className="font-medium">Recurring Bookings</h3>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 border border-green-100 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-sm">Elder Care</span>
                    <Badge className="bg-green-600">Weekly</Badge>
                  </div>
                  <p className="text-xs text-gray-600">Every Tuesday, 2:00 PM - 6:00 PM</p>
                  <p className="text-xs text-gray-500 mt-1">Seeker 2</p>
                </div>
                <Button variant="outline" className="w-full" size="sm">
                  <Repeat className="h-4 w-4 mr-2" />
                  Manage Recurring
                </Button>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="font-medium mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Clock className="h-4 w-4 mr-2" />
                  Block Time Off
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  Set Weekly Hours
                </Button>
              </div>
            </Card>

            {/* Selected Date Events */}
            {selectedDate && (
              <Card className="p-6">
                <h3 className="font-medium mb-3">
                  {selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
                </h3>
                <div className="space-y-2">
                  {getEventsForDate(selectedDate.getDate()).map((event) => (
                    <div key={event.id} className="p-3 bg-gray-50 rounded-lg">
                      <div className="font-medium text-sm mb-1">
                        {event.type === 'blocked' ? 'Blocked' : event.service}
                      </div>
                      <div className="text-xs text-gray-600">{event.time}</div>
                      {event.client && (
                        <div className="text-xs text-gray-500 mt-1">{event.client}</div>
                      )}
                    </div>
                  ))}
                  {getEventsForDate(selectedDate.getDate()).length === 0 && (
                    <p className="text-sm text-gray-500">No bookings for this day</p>
                  )}
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
