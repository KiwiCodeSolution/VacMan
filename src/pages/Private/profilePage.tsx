import NavHeader from "components/navHeader";
import { useLocation } from "react-router-dom";

const ProfilePage = () => {
  const location = useLocation();
  return <NavHeader prevAddress={location?.state?.from.pathname ?? "/"} text="Profile" />;
};
export default ProfilePage;
