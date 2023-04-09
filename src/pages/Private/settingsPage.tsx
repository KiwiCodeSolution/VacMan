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
      <div className="flex sticky top-0 z-5">
        <Icons.Rectangle />
      </div>
      <Button variant="black" clickFn={() => dispatch(logOut())}>
        Log Out
      </Button>
    </>
  );
};
export default SettingsPage;
