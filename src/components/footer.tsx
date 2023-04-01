import { Link, useLocation } from "react-router-dom";
import * as Icons from "./iconsComponents";

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex justify-evenly items-center fixed bottom-0 w-full bg-bg-black pt-6 pb-10 rounded-t-3xl">
      <Link to="/">
        <Icons.MenuHome active={pathname === "/"} />
      </Link>
      <Link to="reminder">
        <Icons.MenuTask active={pathname === "/reminder"} />
      </Link>
      <Link to="calendar">
        <Icons.MenuCalendar active={pathname === "/calendar"} />
      </Link>
      <Link to="settings">
        <Icons.MenuSettings active={pathname === "/settings"} />
      </Link>
    </div>
  );
};
export default Footer;
