import { useNavigate } from "react-router";
import { ServiceCategories } from "../../components/ServiceCategories";

export default function SeekerCategories() {
  const navigate = useNavigate();

  const handleSelectCategory = (categoryId: string) => {
    // Store the selected category in sessionStorage for the next step
    sessionStorage.setItem("selectedCategory", categoryId);
    navigate("/seeker/details");
  };

  return <ServiceCategories onSelectCategory={handleSelectCategory} />;
}
