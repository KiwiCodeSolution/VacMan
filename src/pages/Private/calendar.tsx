import NavHeader from "components/navHeader";
import { useLocation } from "react-router-dom";

const Calendar = () => {
  const location = useLocation();
  return <NavHeader prevAddress={location?.state?.from.pathname ?? "/"} bg="bg-light" text="Calendar" underlined />;
};
export default Calendar;
