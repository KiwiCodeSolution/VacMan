import AddActionForm from "components/forms/AddActionForm";
import NavHeader from "components/navHeader";
import { useLocation } from "react-router-dom";

/* eslint-disable prettier/prettier */
const AddAction = () => {
  const location = useLocation();
  return (
    <>
      <NavHeader bg="bg-bg-light" prevAddress={location?.state?.from.pathname ?? "/"} text="Add action" underlined />
      <div className="px-4 pt-3">
        <AddActionForm />
      </div>
    </>
  )
};
export default AddAction;