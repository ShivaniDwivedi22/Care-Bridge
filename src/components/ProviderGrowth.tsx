import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Users, Gift, TrendingUp, Award, Copy, Check, Mail, Share2 } from "lucide-react";

export function ProviderGrowth() {
  const [referralCode] = useState("PROVIDER1-2026");
  const [copied, setCopied] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  const referralStats = {
    totalReferred: 8,
    activeProviders: 5,
    bonusEarned: 250,
    nextBonus: 50
  };

  const referredProviders = [
    { id: "1", name: "Provider 4", status: "active", joined: "Feb 2026", earnings: 680 },
    { id: "2", name: "Provider 5", status: "active", joined: "Jan 2026", earnings: 1240 },
    { id: "3", name: "Provider 6", status: "pending", joined: "Mar 2026", earnings: 0 }
  ];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendInvite = () => {
    if (emailInput.trim()) {
      console.log("Sending invite to:", emailInput);
      setEmailInput("");
    }
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-8">
          <h2 className="text-3xl mb-2">Grow Together</h2>
          <p className="text-gray-600">
            Refer other providers and earn bonus rewards
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Referral Hero Section */}
            <Card className="p-8 bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Gift className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl mb-2">Earn $50 per Referral</h3>
                  <p className="text-purple-100">
                    Invite quality care providers to join Care Bridge. Earn $50 when they complete their first booking.
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-purple-100 mb-1">Your Referral Code</p>
                    <p className="text-xl font-medium">{referralCode}</p>
                  </div>
                  <Button
                    onClick={handleCopyCode}
                    className="bg-white text-purple-600 hover:bg-purple-50"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 mr-2" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1 bg-white text-purple-600 hover:bg-purple-50">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Link
                </Button>
                <Button className="flex-1 bg-white/20 hover:bg-white/30 text-white">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
              </div>
            </Card>

            {/* Referral Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-5 w-5 text-purple-600" />
                  <span className="text-sm text-gray-600">Total Referred</span>
                </div>
                <p className="text-2xl font-medium">{referralStats.totalReferred}</p>
              </Card>

              <Card className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-600">Active</span>
                </div>
                <p className="text-2xl font-medium">{referralStats.activeProviders}</p>
              </Card>

              <Card className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Gift className="h-5 w-5 text-blue-600" />
                  <span className="text-sm text-gray-600">Bonus Earned</span>
                </div>
                <p className="text-2xl font-medium">${referralStats.bonusEarned}</p>
              </Card>

              <Card className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="h-5 w-5 text-orange-600" />
                  <span className="text-sm text-gray-600">Next Bonus</span>
                </div>
                <p className="text-2xl font-medium">${referralStats.nextBonus}</p>
              </Card>
            </div>

            {/* Send Invite */}
            <Card className="p-6">
              <h3 className="font-medium mb-4">Send Personal Invite</h3>
              <div className="flex gap-3">
                <Input
                  placeholder="Enter friend's email address"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendInvite()}
                />
                <Button 
                  onClick={handleSendInvite}
                  className="bg-purple-600 hover:bg-purple-700"
                  disabled={!emailInput.trim()}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Invite
                </Button>
              </div>
            </Card>

            {/* Referred Providers */}
            <Card className="p-6">
              <h3 className="font-medium mb-4">Your Referrals</h3>
              <div className="space-y-3">
                {referredProviders.map((provider) => (
                  <div key={provider.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-medium">{provider.name}</p>
                        <p className="text-sm text-gray-600">Joined {provider.joined}</p>
                      </div>
                      <Badge
                        className={
                          provider.status === "active"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }
                      >
                        {provider.status}
                      </Badge>
                    </div>
                    {provider.status === "active" && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Total Earnings:</span>
                        <span className="font-medium">${provider.earnings}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* How It Works */}
            <Card className="p-6">
              <h3 className="font-medium mb-4">How It Works</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 text-purple-600 font-medium">
                    1
                  </div>
                  <div>
                    <p className="font-medium text-sm">Share Your Code</p>
                    <p className="text-xs text-gray-600">Send your referral code to friends who provide care services</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 text-purple-600 font-medium">
                    2
                  </div>
                  <div>
                    <p className="font-medium text-sm">They Sign Up</p>
                    <p className="text-xs text-gray-600">Your friend creates a provider profile and gets verified</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 text-purple-600 font-medium">
                    3
                  </div>
                  <div>
                    <p className="font-medium text-sm">First Booking</p>
                    <p className="text-xs text-gray-600">When they complete their first paid booking</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 text-green-600 font-medium">
                    ✓
                  </div>
                  <div>
                    <p className="font-medium text-sm">You Both Win!</p>
                    <p className="text-xs text-gray-600">You get $50, they get $25 welcome bonus</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Terms */}
            <Card className="p-6 bg-blue-50 border-blue-100">
              <h4 className="font-medium text-sm mb-2">Program Terms</h4>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Referred provider must be new to Care Bridge</li>
                <li>• Bonus paid after first completed booking</li>
                <li>• No limit on number of referrals</li>
                <li>• Bonus added to earnings within 7 days</li>
                <li>• Both parties must maintain good standing</li>
              </ul>
            </Card>

            {/* Leaderboard Teaser */}
            <Card className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
              <div className="flex items-center gap-2 mb-3">
                <Award className="h-5 w-5 text-orange-600" />
                <h4 className="font-medium">Top Referrer Bonus</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                The provider with most referrals this month wins an extra $200 bonus!
              </p>
              <Badge className="bg-orange-600">You're #5 this month</Badge>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
