import { useNavigate } from "react-router";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { TrustSafety } from "../components/TrustSafety";
import { CulturalExtras } from "../components/CulturalExtras";
import { Footer } from "../components/Footer";

export default function HomePage() {
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
      <Hero 
        onNeedCareClick={handleNeedCare}
        onProvideCareClick={handleProvideCare}
      />
      <TrustSafety />
      <CulturalExtras />
      <Footer />
    </div>
  );
}
