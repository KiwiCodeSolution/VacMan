import NavHeader from "components/navHeader";
import SubHeader from "components/subHeader";
import Button from "components/ui/button";
import { useLocation } from "react-router-dom";

/* eslint-disable prettier/prettier */
const AddAvatar = () => {
  const location = useLocation();
  return (
    <>
      <NavHeader bg="bg-grey" prevAddress={location?.state?.from.pathname ?? "/"} text="Add avatar" textWhite />
      <SubHeader fill="text-txt-blue" />

      <div className="mx-auto w-40 pt-4 pb-7">
        <Button variant="black">
          upload avatar
        </Button>
      </div>
    </>
  )
};
export default AddAvatar;