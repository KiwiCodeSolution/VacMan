import { Link, Outlet } from 'react-router-dom';
import * as Icons from 'components/iconsComponents';

const Card = () => {
  return (
    <>
      {/* <button className="flex-none hover:scale-110 focus:scale-110">
        <Link to="/">
          <Icons.ArrowBack />
        </Link>
      </button> */}
      <Outlet />
    </>
  );
};
export default Card;
