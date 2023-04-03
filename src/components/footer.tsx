import { Link, useLocation } from "react-router-dom";
import * as Icons from "./iconsComponents";

const Footer = () => {
  const { pathname } = useLocation();
  const location = useLocation();

  return (
    <div className="flex justify-evenly items-center fixed bottom-0 w-full bg-bg-black text-txt-main pt-6 pb-10 rounded-t-3xl">
      <Link to="/" state={{ from: location }}>
        <Icons.MenuHome className={`w-8 h-8 ${pathname === "/" && "text-txt-white"}`} />
      </Link>
      <Link to="reminder" state={{ from: location }}>
        <Icons.MenuTask className={`w-8 h-8 ${pathname === "/reminder" && "text-txt-white"}`} />
      </Link>
      <Link to="calendar" state={{ from: location }}>
        <Icons.MenuCalendar className={`w-8 h-8 ${pathname === "/calendar" && "text-txt-white"}`} />
      </Link>
      <Link to="settings" state={{ from: location }}>
        <Icons.MenuSettings className={`w-8 h-8 ${pathname === "/settings" && "text-txt-white"}`} />
      </Link>
    </div>
  );
};
export default Footer;
