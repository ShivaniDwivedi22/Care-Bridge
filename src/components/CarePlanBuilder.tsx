import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Switch } from "./ui/switch";
import { Badge } from "./ui/badge";
import { Calendar, Plus, X, Repeat, FileText, Users, Share2 } from "lucide-react";

interface CarePlanService {
  id: string;
  name: string;
  provider: string;
}

interface CarePlanBuilderProps {
  onSave?: (plan: any) => void;
  onCancel?: () => void;
}

export function CarePlanBuilder({ onSave, onCancel }: CarePlanBuilderProps) {
  const [planName, setPlanName] = useState("");
  const [isRecurring, setIsRecurring] = useState(false);
  const [frequency, setFrequency] = useState("weekly");
  const [notes, setNotes] = useState("");
  const [services, setServices] = useState<CarePlanService[]>([]);
  const [invitedMembers, setInvitedMembers] = useState<string[]>([]);
  const [newMemberEmail, setNewMemberEmail] = useState("");

  const handleAddService = () => {
    const newService: CarePlanService = {
      id: Date.now().toString(),
      name: "New Service",
      provider: "TBD"
    };
    setServices([...services, newService]);
  };

  const handleRemoveService = (id: string) => {
    setServices(services.filter(s => s.id !== id));
  };

  const handleInviteMember = () => {
    if (newMemberEmail && !invitedMembers.includes(newMemberEmail)) {
      setInvitedMembers([...invitedMembers, newMemberEmail]);
      setNewMemberEmail("");
    }
  };

  const handleRemoveMember = (email: string) => {
    setInvitedMembers(invitedMembers.filter(e => e !== email));
  };

  const handleSave = () => {
    const plan = {
      name: planName,
      isRecurring,
      frequency,
      notes,
      services,
      invitedMembers,
      createdAt: new Date().toISOString()
    };
    onSave?.(plan);
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-6">
          <h2 className="text-3xl mb-2">Create Care Plan</h2>
          <p className="text-gray-600">
            Build a comprehensive care plan with multiple services, recurring bookings, and family collaboration
          </p>
        </div>

        <div className="space-y-6">
          {/* Plan Name */}
          <Card className="p-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="planName">Plan Name</Label>
                <Input
                  id="planName"
                  placeholder="e.g., Weekly Elder Care Schedule"
                  value={planName}
                  onChange={(e) => setPlanName(e.target.value)}
                />
              </div>

              {/* Recurring Settings */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Repeat className="h-5 w-5 text-gray-500" />
                  <div>
                    <Label>Recurring Booking</Label>
                    <p className="text-sm text-gray-500">Schedule this plan to repeat automatically</p>
                  </div>
                </div>
                <Switch
                  checked={isRecurring}
                  onCheckedChange={setIsRecurring}
                />
              </div>

              {isRecurring && (
                <div>
                  <Label>Frequency</Label>
                  <div className="flex gap-2 mt-2">
                    {["daily", "weekly", "biweekly", "monthly"].map((freq) => (
                      <Button
                        key={freq}
                        variant={frequency === freq ? "default" : "outline"}
                        onClick={() => setFrequency(freq)}
                        className="capitalize"
                      >
                        {freq}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Services */}
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-gray-500" />
                  <h3 className="text-lg">Services</h3>
                </div>
                <Button onClick={handleAddService} variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Service
                </Button>
              </div>

              {services.length === 0 ? (
                <p className="text-gray-500 text-center py-8">
                  No services added yet. Click "Add Service" to get started.
                </p>
              ) : (
                <div className="space-y-2">
                  {services.map((service) => (
                    <div key={service.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{service.name}</p>
                        <p className="text-sm text-gray-500">Provider: {service.provider}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveService(service.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Card>

          {/* Notes & Tips */}
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-gray-500" />
                <h3 className="text-lg">Notes & Care Tips</h3>
              </div>
              <Textarea
                placeholder="Add special instructions, preferences, dietary restrictions, medication schedules, or any important information for providers..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={5}
              />
            </div>
          </Card>

          {/* Family Collaboration */}
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-gray-500" />
                <div>
                  <h3 className="text-lg">Family Collaboration</h3>
                  <p className="text-sm text-gray-500">Invite family members to view and manage this care plan</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Input
                  placeholder="Enter family member's email"
                  value={newMemberEmail}
                  onChange={(e) => setNewMemberEmail(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleInviteMember()}
                />
                <Button onClick={handleInviteMember}>
                  <Plus className="h-4 w-4 mr-2" />
                  Invite
                </Button>
              </div>

              {invitedMembers.length > 0 && (
                <div className="space-y-2">
                  <Label>Invited Members</Label>
                  <div className="flex gap-2 flex-wrap">
                    {invitedMembers.map((email) => (
                      <Badge key={email} variant="secondary" className="pr-1">
                        {email}
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-5 w-5 p-0 ml-2"
                          onClick={() => handleRemoveMember(email)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Share2 className="h-5 w-5 text-indigo-600 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-indigo-900 mb-1">Family Features</p>
                    <ul className="text-indigo-700 space-y-1">
                      <li>• Shared calendar view of all bookings</li>
                      <li>• Family chat for coordination</li>
                      <li>• Split payment options</li>
                      <li>• Real-time updates and notifications</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Actions */}
          <div className="flex gap-3">
            <Button
              onClick={handleSave}
              className="flex-1 bg-indigo-600 hover:bg-indigo-700"
              disabled={!planName}
            >
              Save Care Plan
            </Button>
            <Button variant="outline" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
