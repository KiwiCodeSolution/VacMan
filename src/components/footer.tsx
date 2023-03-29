import { Link, useLocation } from "react-router-dom";
import * as Icons from "./iconsComponents";

const Footer = () => {
  const location = useLocation();
  console.log("params:", location);

  return (
    <div className="flex justify-evenly items-center fixed bottom-0 w-full bg-bg-black pt-6 pb-10 px-4 rounded-t-3xl">
      <Link to="/">
        <Icons.MenuHome active={location.pathname === "/"} />
      </Link>
      <Link to="reminder">
        <Icons.MenuTask active={location.pathname === "/reminder"} />
      </Link>
      <Link to="calendar">
        <Icons.MenuCalendar active={location.pathname === "/calendar"} />
      </Link>
      <Link to="settings">
        <Icons.MenuSettings active={location.pathname === "/settings"} />
      </Link>
    </div>
  );
};
export default Footer;
