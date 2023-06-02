import CalendarComponent from "components/calendar";
import NavHeader from "components/navHeader";
import { useLocation } from "react-router-dom";

const Calendar = () => {
  const location = useLocation();

  return (
    <>
      <NavHeader prevAddress={location?.state?.from.pathname ?? "/"} bg="bg-bg-light" text="Calendar" underlined />
      <CalendarComponent />
    </>
  );
};
export default Calendar;
