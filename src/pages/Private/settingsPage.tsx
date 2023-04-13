import NavHeader from "components/navHeader";
import Button from "components/ui/button";
import * as Icons from "components/iconsComponents";
import { useAppDispatch } from "hooks/reduxHooks";
import { useLocation } from "react-router-dom";
import { logOut } from "redux/userOperations";

const SettingsPage = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  return (
    <>
      <NavHeader prevAddress={location?.state?.from.pathname ?? "/"} bg="bg-black" text="Settings" textWhite />
      <div className=" flex sticky top-0 z-5">
        <div className="relative w-full h-[120px]">
          <Icons.Triangle className="w-full h-full text-txt-black" />
          <div className="absolute w-[120px] h-[120px] top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-full ">
            <div className="w-full h-full flex justify-center items-center rounded-full bg-gradient-to-b from-[#C4C4D4] to-[#141415]">
              <Icons.Avatar className="w-[95%] h-[95%] text-txt-main " />
            </div>
            <button className="absolute w-8 h-8 bottom-0 right-0  flex justify-center items-center rounded-full bg-txt-black ">
              <Icons.Camera size="100%" className="" />
            </button>
          </div>
        </div>
      </div>

      <Button variant="black" clickFn={() => dispatch(logOut())}>
        Log Out
      </Button>
    </>
  );
};
export default SettingsPage;
