import { useNavigate } from "react-router";
import { WhyJoinProvider } from "../../components/WhyJoinProvider";

export default function ProviderWhy() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/provider/signup");
  };

  return <WhyJoinProvider onGetStarted={handleGetStarted} />;
}
