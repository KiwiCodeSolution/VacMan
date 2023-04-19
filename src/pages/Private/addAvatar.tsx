import NavHeader from "components/navHeader";
import { useLocation } from "react-router-dom";

/* eslint-disable prettier/prettier */
const AddAvatar = () => {
  const location = useLocation();
  return (
    <>
      <NavHeader bg="bg-grey" prevAddress={location?.state?.from.pathname ?? "/"} text="Add avatar" textWhite />
      <h2>Add avatar page</h2>
    </>
  )
};
export default AddAvatar;