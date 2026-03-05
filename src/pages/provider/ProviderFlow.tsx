import { Outlet } from "react-router";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useNavigate } from "react-router";

export default function ProviderFlow() {
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
      <Outlet />
      <Footer />
    </div>
  );
}
