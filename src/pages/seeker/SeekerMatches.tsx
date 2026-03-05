import { useNavigate } from "react-router";
import { ProviderMatches, MatchedProvider } from "../../components/ProviderMatches";
import { NeedDetails } from "../../components/NeedDetailsForm";

// Mock provider data
const mockMatchedProviders: MatchedProvider[] = [
  {
    id: 1,
    name: "Provider 1",
    photo: "https://images.unsplash.com/photo-1559307183-517680cd78d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21hbiUyMHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYwODAyMjM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.9,
    reviewCount: 127,
    hourlyRate: 32,
    distance: "2.3 km",
    languages: ["Hindi", "Punjabi", "Gujarati"],
    verified: true,
    bio: "Experienced childcare provider with 8 years helping families in Toronto. CPR certified and background checked. Love working with children of all ages!",
    matchScore: 95,
    responseTime: "< 1 hour",
    certifications: ["CPR Certified", "First Aid", "Background Check"],
    isFamilyFavorite: true,
    repeatBookings: 34,
    hasIntroVideo: true
  },
  {
    id: 2,
    name: "Provider 2",
    photo: "https://images.unsplash.com/photo-1656634195486-4f94c0617963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjYXJlZ2l2ZXIlMjBoZWxwaW5nfGVufDF8fHx8MTc2MDgwMjI0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.8,
    reviewCount: 89,
    hourlyRate: 28,
    distance: "3.1 km",
    languages: ["Gujarati", "Hindi", "Tamil"],
    verified: true,
    bio: "Specialized in elder care and postpartum support. Understand traditional care practices. Patient and caring approach to all families.",
    matchScore: 92,
    responseTime: "< 2 hours",
    certifications: ["Elder Care Certified", "Postpartum Doula"],
    repeatBookings: 21,
    hasIntroVideo: true
  },
  {
    id: 3,
    name: "Provider 3",
    photo: "https://images.unsplash.com/photo-1593119036766-86a93ec2ec2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBncmFuZG1vdGhlciUyMGVsZGVybHl8ZW58MXx8fHwxNzYwODAyMjM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5.0,
    reviewCount: 156,
    hourlyRate: 35,
    distance: "4.5 km",
    languages: ["Telugu", "Hindi", "Kannada"],
    verified: true,
    bio: "Experienced in cooking traditional South Indian meals and providing household help. Excellent references from families in the NY/NJ area. Very reliable and flexible.",
    matchScore: 88,
    responseTime: "< 3 hours",
    certifications: ["Food Safety", "Background Check"],
    isFamilyFavorite: true,
    repeatBookings: 47,
    hasIntroVideo: false
  }
];

export default function SeekerMatches() {
  const navigate = useNavigate();
  const needDetailsJson = sessionStorage.getItem("needDetails");
  
  if (!needDetailsJson) {
    // If no need details, redirect to categories page
    navigate("/seeker");
    return null;
  }

  const needDetails: NeedDetails = JSON.parse(needDetailsJson);

  const handleSelectProvider = (provider: MatchedProvider) => {
    // Store the selected provider in sessionStorage for checkout
    sessionStorage.setItem("selectedProvider", JSON.stringify(provider));
    navigate("/seeker/checkout");
  };

  const handleBack = () => {
    navigate("/seeker/details");
  };

  return (
    <ProviderMatches 
      matches={mockMatchedProviders}
      needDetails={needDetails}
      onSelectProvider={handleSelectProvider}
      onBack={handleBack}
    />
  );
}