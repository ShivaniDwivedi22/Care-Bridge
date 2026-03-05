import { useNavigate } from "react-router";
import { NeedDetailsForm, NeedDetails } from "../../components/NeedDetailsForm";

export default function SeekerDetails() {
  const navigate = useNavigate();
  const selectedCategory = sessionStorage.getItem("selectedCategory") || "";

  const handleSubmit = (details: NeedDetails) => {
    // Store the need details in sessionStorage for the next step
    sessionStorage.setItem("needDetails", JSON.stringify(details));
    navigate("/seeker/matches");
  };

  const handleBack = () => {
    navigate("/seeker");
  };

  if (!selectedCategory) {
    // If no category selected, redirect to categories page
    navigate("/seeker");
    return null;
  }

  return (
    <NeedDetailsForm 
      selectedCategory={selectedCategory}
      onSubmit={handleSubmit}
      onBack={handleBack}
    />
  );
}
