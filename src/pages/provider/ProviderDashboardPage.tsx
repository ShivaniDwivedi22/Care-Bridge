import { useNavigate } from "react-router";
import { ProviderDashboard } from "../../components/ProviderDashboard";

export default function ProviderDashboardPage() {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate("/provider/profile");
  };

  return <ProviderDashboard onViewProfile={handleViewProfile} />;
}
