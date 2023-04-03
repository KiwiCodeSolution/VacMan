import { Link, useLocation } from "react-router-dom";
import * as Icons from "./iconsComponents";

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex justify-evenly items-center fixed bottom-0 w-full bg-bg-black text-txt-main pt-6 pb-10 rounded-t-3xl">
      <Link to="/">
        <Icons.MenuHome className={`w-8 h-8 ${pathname === "/" && "text-txt-white"}`} />
      </Link>
      <Link to="reminder">
        <Icons.MenuTask className={`w-8 h-8 ${pathname === "/reminder" && "text-txt-white"}`} />
      </Link>
      <Link to="calendar">
        <Icons.MenuCalendar className={`w-8 h-8 ${pathname === "/calendar" && "text-txt-white"}`} />
      </Link>
      <Link to="settings">
        <Icons.MenuSettings className={`w-8 h-8 ${pathname === "/settings" && "text-txt-white"}`} />
      </Link>
    </div>
  );
};
export default Footer;
