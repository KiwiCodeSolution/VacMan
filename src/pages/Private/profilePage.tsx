import NavHeader from "components/navHeader";
import { useLocation } from "react-router-dom";

const ProfilePage = () => {
  const location = useLocation();
  return <NavHeader bg="bg-black" prevAddress={location?.state?.from.pathname ?? "/"} text="Profile" textWhite />;
};
export default ProfilePage;
