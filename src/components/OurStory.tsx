import { Heart, Target, Users } from "lucide-react";
import { Card } from "./ui/card";

export function OurStory() {
  const teamMembers = [
    {
      name: "Team Member 1",
      role: "Founder & CEO",
      bio: "Former tech professional who saw the gap in culturally-aware care services for families."
    },
    {
      name: "Team Member 2",
      role: "Head of Community",
      bio: "Passionate about connecting families with trusted providers who understand their needs."
    },
    {
      name: "Team Member 3",
      role: "Technology Lead",
      bio: "Building secure, easy-to-use platforms that bring communities together."
    }
  ];

  return (
    <div className="py-16 bg-white" id="our-story">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Our Story */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="h-8 w-8 text-indigo-600" />
            <h2 className="text-4xl">Our Story</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              From late-night chai cravings to festive marigold rushes, we know life doesn't slow down when you're far from home. Care Bridge was born to bring Indian families in the U.S. and Canada a little closer to the comfort of their roots—while keeping everyday care simple and stress-free.
            </p>
          </div>
        </div>

        {/* Our Mission */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Target className="h-8 w-8 text-purple-600" />
            <h2 className="text-4xl">Our Mission</h2>
          </div>
          <Card className="p-8 bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200">
            <p className="text-xl text-gray-700 leading-relaxed">
              To connect you with trusted helpers who speak your language, honor your traditions, and treat your loved ones like their own—because real care should feel like family, not a chore.
            </p>
          </Card>
        </div>

        {/* Our Team */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Users className="h-8 w-8 text-orange-600" />
            <h2 className="text-4xl">Our Team</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <Card key={member.name} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl text-indigo-600">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl mb-1">{member.name}</h3>
                <p className="text-indigo-600 mb-3">{member.role}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}