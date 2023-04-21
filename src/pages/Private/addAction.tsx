import NavHeader from "components/navHeader";
import { useLocation } from "react-router-dom";

/* eslint-disable prettier/prettier */
const AddAction = () => {
  const location = useLocation();
  return (
    <>
      <NavHeader bg="bg-light" prevAddress={location?.state?.from.pathname ?? "/"} text="Add action" underlined />
      <h2>Add action</h2>
    </>
  )
};
export default AddAction;