import { useNavigate } from "react-router";
import { ProviderSignup } from "../../components/ProviderSignup";

export default function ProviderSignupPage() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/provider/dashboard");
  };

  const handleBack = () => {
    navigate("/provider");
  };

  return (
    <ProviderSignup 
      onSubmit={handleSubmit}
      onBack={handleBack}
    />
  );
}
