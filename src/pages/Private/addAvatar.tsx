import InputFileForm from "components/inputFile";
import NavHeader from "components/navHeader";
import SubHeader from "components/subHeader";
import Button from "components/ui/button";
import { useAppSelector } from "hooks/reduxHooks";
import { useLocation } from "react-router-dom";

/* eslint-disable prettier/prettier */
const AddAvatar = () => {
  const location = useLocation();
  const { currProfile } = useAppSelector(state => state.user);

  return (
    <>
      <NavHeader bg="bg-grey" prevAddress={location?.state?.from.pathname ?? "/"} text="Add avatar" textWhite />
      <SubHeader fill="text-txt-blue" />

      {currProfile !== "google" ? (
        <div className="container mx-auto mt-20 px-4">
          <InputFileForm />
        </div>
      ) : (
        <div className="py-10 bg-red-400 container mx-auto mt-20 px-4 text-center text-2xl">
          <p>You can not change avatar !</p>
          <p>You entered through</p>
          <p className="font-bold underline">{`${currProfile} account`}</p>
        </div>
      )}
    </>
  )
};
export default AddAvatar;