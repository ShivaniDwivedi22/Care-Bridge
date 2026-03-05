import { useState } from "react";
import { Lightbulb, Send, CheckCircle } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export function FeatureRequest() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    title: "",
    description: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log("Feature request submitted:", formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        type: "",
        title: "",
        description: ""
      });
    }, 3000);
  };

  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
            <Lightbulb className="h-8 w-8 text-indigo-600" />
          </div>
          <h1 className="text-4xl mb-4">Share Your Ideas</h1>
          <p className="text-xl text-gray-600">
            Help us build a better Care Bridge! Your feedback shapes our future features.
          </p>
        </div>

        {submitted ? (
          <Card className="p-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-3xl mb-3">Thank You!</h2>
            <p className="text-xl text-gray-600">
              We've received your suggestion and our team will review it soon.
            </p>
          </Card>
        ) : (
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input 
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
              </div>

              {/* Request Type */}
              <div>
                <Label htmlFor="type">Request Type</Label>
                <Select value={formData.type} onValueChange={(value) => setFormData({...formData, type: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="feature">New Feature</SelectItem>
                    <SelectItem value="improvement">Improvement</SelectItem>
                    <SelectItem value="bug">Bug Report</SelectItem>
                    <SelectItem value="service">New Service Category</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Title */}
              <div>
                <Label htmlFor="title">Title</Label>
                <Input 
                  id="title"
                  placeholder="Brief summary of your idea"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  required
                />
              </div>

              {/* Description */}
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description"
                  placeholder="Tell us more about your idea, what problem it solves, or how it would help you..."
                  rows={6}
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  required
                />
                <p className="text-sm text-gray-500 mt-2">
                  Be as detailed as possible. The more context you provide, the better we can understand your needs.
                </p>
              </div>

              <Button type="submit" size="lg" className="w-full bg-indigo-600 hover:bg-indigo-700">
                <Send className="mr-2 h-5 w-5" />
                Submit Request
              </Button>
            </form>
          </Card>
        )}

        {/* Popular Requests */}
        <div className="mt-12">
          <h3 className="text-2xl mb-6 text-center">Popular Requests We're Working On</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "In-app messaging between seekers and providers",
              "Video call feature for interviews",
              "Multiple language support in app",
              "Recurring booking schedules",
              "Provider certification verification",
              "Emergency backup provider list"
            ].map((item, index) => (
              <Card key={index} className="p-4 flex items-start gap-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm text-indigo-600">{index + 1}</span>
                </div>
                <p className="text-gray-700">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}