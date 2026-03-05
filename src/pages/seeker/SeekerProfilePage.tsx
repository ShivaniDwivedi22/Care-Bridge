import { useNavigate } from "react-router";
import { SeekerProfile } from "../../components/SeekerProfile";

export default function SeekerProfilePage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return <SeekerProfile onBack={handleBack} />;
}
