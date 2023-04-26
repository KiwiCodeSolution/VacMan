import ChangePassForm from "components/forms/changePassForm";
import NavHeader from "components/navHeader";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "hooks/reduxHooks";
import SubHeader from "components/subHeader";

export default function ConfirmPassPage() {
  const { currProfile } = useAppSelector(state => state.user);
  const location = useLocation();

  return (
    <div className="mb-28">
      <NavHeader bg="bg-grey" prevAddress={location?.state?.from.pathname ?? "/settings"} text="ChangePass" textWhite />
      <SubHeader fill="text-txt-darkgrey" />

      {currProfile !== "google" ? (
        <div className="container mx-auto mt-20 px-4">
          <ChangePassForm />
        </div>
      ) : (
        <div className="py-10 bg-red-400 container mx-auto mt-20 px-4 text-center text-2xl">
          <p>You can not change password !</p>
          <p>You entered through</p>
          <p className="font-bold underline">{`${currProfile} account`}</p>
        </div>
      )}
    </div>
  );
}
