import NavHeader from "components/navHeader";
import Button from "components/ui/button";
import { useDispatch } from "react-redux";
import { setIsAuth } from "redux/userSlice";

const SettingsPage = () => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(setIsAuth(false));
  };

  return (
    <>
      <NavHeader prevAddress="/" text="Settings" />;
      <Button variant="black" clickFn={logOut}>Log Out</Button>;
    </>
  );
};
export default SettingsPage;
