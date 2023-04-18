import NavHeader from "components/navHeader";
import { useLocation } from "react-router-dom";

const Calendar = () => {
  const location = useLocation();
  return <NavHeader prevAddress={location?.state?.from.pathname ?? "/"} text="Calendar" underlined />;
};
export default Calendar;
