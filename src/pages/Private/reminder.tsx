import NavHeader from "components/navHeader";
import ReminderItem from "components/reminder/ReminderItem";

import { useLocation } from "react-router-dom";

const Reminder = () => {
  const location = useLocation();
  return (
    <>
      <NavHeader prevAddress={location?.state?.from.pathname ?? "/"} bg="bg-light" text="Reminder" underlined />
      <ReminderItem />
    </>
  );
};
export default Reminder;
