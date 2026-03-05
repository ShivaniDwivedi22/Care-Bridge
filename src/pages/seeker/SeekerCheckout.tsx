import { useNavigate } from "react-router";
import { BookingCheckout } from "../../components/BookingCheckout";
import { MatchedProvider } from "../../components/ProviderMatches";
import { NeedDetails } from "../../components/NeedDetailsForm";

export default function SeekerCheckout() {
  const navigate = useNavigate();
  const needDetailsJson = sessionStorage.getItem("needDetails");
  const selectedProviderJson = sessionStorage.getItem("selectedProvider");

  if (!needDetailsJson || !selectedProviderJson) {
    // If missing data, redirect to categories page
    navigate("/seeker");
    return null;
  }

  const needDetails: NeedDetails = JSON.parse(needDetailsJson);
  const selectedProvider: MatchedProvider = JSON.parse(selectedProviderJson);

  const handleConfirm = () => {
    navigate("/seeker/confirmed");
  };

  const handleBack = () => {
    navigate("/seeker/matches");
  };

  return (
    <BookingCheckout 
      provider={selectedProvider}
      needDetails={needDetails}
      onConfirm={handleConfirm}
      onBack={handleBack}
    />
  );
}
