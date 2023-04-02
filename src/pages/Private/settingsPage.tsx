import NavHeader from "components/navHeader";
import Button from "components/ui/button";
import { useAppDispatch } from "hooks/reduxHooks";
import { useLocation } from "react-router-dom";
import { logOut } from "redux/userOperations";

const SettingsPage = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  return (
    <>
      <NavHeader prevAddress={location?.state?.from.pathname ?? "/"} text="Settings" />
      <Button variant="black" clickFn={() => dispatch(logOut())}>
        Log Out
      </Button>
    </>
  );
};
export default SettingsPage;
