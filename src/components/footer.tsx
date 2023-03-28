import { Link } from 'react-router-dom';
import * as Icons from './iconsComponents';

const Footer = () => {
  return (
    <div>
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
