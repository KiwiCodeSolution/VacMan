import ChangePassForm from "components/forms/changePassForm";
import NavHeader from "components/navHeader";
import * as Icons from "components/iconsComponents";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "hooks/reduxHooks";

export default function ConfirmPassPage() {
  const { profile } = useAppSelector(state => state.user);
  const location = useLocation();

  return (
    <div className="mb-28">
      <NavHeader bg="bg-grey" prevAddress={location?.state?.from.pathname ?? "/settings"} text="ChangePass" textWhite />
      <div className="sticky w-full h-[136px] ">
        <Icons.Rectangle className="w-full h-full text-txt-darkgrey" />
        <div className="absolute w-[120px] h-[120px] bottom-0 left-1/2 -translate-x-1/2 rounded-full">
          <div className="w-full h-full flex justify-center items-center rounded-full bg-gradient-to-b from-[#C4C4D4] to-[#141415]">
            <Icons.Avatar className="w-[95%] h-[95%] text-txt-main" />
          </div>
          <button className="absolute w-8 h-8 bottom-0 right-0  flex justify-center items-center rounded-full bg-txt-black">
            <Icons.Camera size="100%" className="" />
          </button>
        </div>
      </div>

      <p className="text-xl text-center">{profile.name}</p>
      <p className="text-center">position: {profile.position}</p>

      <div className="container mx-auto mt-20 px-4">
        <ChangePassForm />
      </div>
    </div>
  );
}
