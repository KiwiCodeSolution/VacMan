import NavHeader from "components/navHeader";
import Button from "components/ui/button";
import { logOut } from "redux/userOperations";

const SettingsPage = () => {
  return (
    <>
      <NavHeader prevAddress="/" text="Settings" />
      <Button variant="black" clickFn={() => logOut()}>
        Log Out
      </Button>
    </>
  );
};
export default SettingsPage;
