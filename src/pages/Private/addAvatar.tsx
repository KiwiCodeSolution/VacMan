import NavHeader from "components/navHeader";
import { useLocation } from "react-router";

/* eslint-disable prettier/prettier */
const AddAvatar = () => {
  const location = useLocation();
  return (
    <>
      <NavHeader bg="bg-grey" prevAddress={location?.state?.from.pathname ?? "/"} text="Profile" textWhite />
      <h2>Add avatar page</h2>
    </>
  )
};
export default AddAvatar;