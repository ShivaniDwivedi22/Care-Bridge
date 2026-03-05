import { useNavigate } from "react-router";
import { CarePlanBuilder } from "../../components/CarePlanBuilder";
import { toast } from "sonner@2.0.3";

export default function CarePlanPage() {
  const navigate = useNavigate();

  const handleSave = (plan: any) => {
    // In a real app, this would save to backend
    console.log("Saving care plan:", plan);
    toast.success("Care plan created successfully!");
    navigate("/seeker/dashboard");
  };

  const handleCancel = () => {
    navigate("/seeker/dashboard");
  };

  return <CarePlanBuilder onSave={handleSave} onCancel={handleCancel} />;
}
