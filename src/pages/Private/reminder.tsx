import NavHeader from "components/navHeader";
import { useLocation } from "react-router-dom";

const Reminder = () => {
  const location = useLocation();
  return <NavHeader prevAddress={location?.state?.from.pathname ?? "/"} text="Reminder" />;
};
export default Reminder;
