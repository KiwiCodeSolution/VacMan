import { Link } from "react-router-dom";
import * as Icons from "./iconsComponents";

const Footer = () => {
  return (
    <div className="flex justify-evenly items-center fixed bottom-0 w-full bg-bg-black pt-6 pb-10 px-4 rounded-t-3xl">
      <Link to="/">
        <Icons.MenuHome />
      </Link>
      <Link to="reminder">
        <Icons.MenuTask />
      </Link>
      <Link to="calendar">
        <Icons.MenuCalendar />
      </Link>
      <Link to="settings">
        <Icons.MenuSettings />
      </Link>
    </div>
  );
};
export default Footer;
