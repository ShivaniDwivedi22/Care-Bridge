import { useNavigate } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
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
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl mb-6">404</h1>
        <h2 className="text-3xl mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button onClick={handleHome} size="lg">
          <Home className="mr-2 h-5 w-5" />
          Go Back Home
        </Button>
      </div>
      <Footer />
    </div>
  );
}
