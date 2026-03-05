import { useNavigate } from "react-router";
import { ProviderProfile } from "../../components/ProviderProfile";

export default function ProviderProfilePage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/provider/dashboard");
  };

  return <ProviderProfile onBack={handleBack} />;
}
