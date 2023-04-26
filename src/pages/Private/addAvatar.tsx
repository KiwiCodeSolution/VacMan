import NavHeader from "components/navHeader";
import SubHeader from "components/subHeader";
import { useLocation } from "react-router-dom";

/* eslint-disable prettier/prettier */
const AddAvatar = () => {
  const location = useLocation();
  return (
    <>
      <NavHeader bg="bg-grey" prevAddress={location?.state?.from.pathname ?? "/"} text="Add avatar" textWhite />
      <SubHeader fill="text-txt-blue" />
    </>
  )
};
export default AddAvatar;