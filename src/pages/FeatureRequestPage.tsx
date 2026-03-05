import { useNavigate } from "react-router";
import { Header } from "../components/Header";
import { FeatureRequest } from "../components/FeatureRequest";
import { Footer } from "../components/Footer";

export default function FeatureRequestPage() {
  const navigate = useNavigate();

  const handleNeedCare = () => {
    navigate("/seeker");
  };

  const handleProvideCare = () => {
    navigate("/provider");
  };

  const handleHome = () => {
    navigate("/");
  };

  const handleOurStoryClick = () => {
    navigate("/our-story");
  };

  const handleFeatureRequestClick = () => {
    navigate("/feature-request");
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onNeedCareClick={handleNeedCare}
        onProvideCareClick={handleProvideCare}
        onHomeClick={handleHome}
        onOurStoryClick={handleOurStoryClick}
        onFeatureRequestClick={handleFeatureRequestClick}
      />
      <FeatureRequest />
      <Footer />
    </div>
  );
}
