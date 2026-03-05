import { useNavigate } from "react-router";
import { BookingConfirmation } from "../../components/BookingConfirmation";

export default function SeekerConfirmed() {
  const navigate = useNavigate();

  const handleBackHome = () => {
    // Clear session storage when going back home
    sessionStorage.removeItem("selectedCategory");
    sessionStorage.removeItem("needDetails");
    sessionStorage.removeItem("selectedProvider");
    navigate("/");
  };

  const handleViewProfile = () => {
    navigate("/seeker/profile");
  };

  const handleViewDashboard = () => {
    navigate("/seeker/dashboard");
  };

  const handleCreateCarePlan = () => {
    navigate("/seeker/care-plan");
  };

  return (
    <BookingConfirmation 
      onBackHome={handleBackHome}
      onViewProfile={handleViewProfile}
      onViewDashboard={handleViewDashboard}
      onCreateCarePlan={handleCreateCarePlan}
    />
  );
}