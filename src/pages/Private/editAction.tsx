import AddActionForm from "components/forms/AddActionForm";
import NavHeader from "components/navHeader";
import { useLocation } from "react-router-dom";

const EditAction = () => {
  const location = useLocation();

  return (
    <>
      <NavHeader bg="bg-light" prevAddress={location?.state?.from.pathname ?? "/"} text="Edit action" underlined />
      <div className="px-4 pt-3">
        <AddActionForm />
      </div>
    </>
  );
};
export default EditAction;
