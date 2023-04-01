import NavHeader from "components/navHeader";
import Button from "components/ui/button";
import { useAppDispatch } from "hooks/reduxHooks";
import { logOut } from "redux/userOperations";

const SettingsPage = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <NavHeader prevAddress="/" text="Settings" />
      <Button variant="black" clickFn={() => dispatch(logOut())}>
        Log Out
      </Button>
    </>
  );
};
export default SettingsPage;
