import { useAppSelector } from "hooks/reduxHooks";
import { Link } from "react-router-dom";
import * as Icons from "./iconsComponents";

const Header = () => {
  const { profile } = useAppSelector(state => state.user);
  return (
    <div className="flex sticky top-0 items-center px-4 pb-2 z-10 bg-bg-light border-b border-txt-grey">
      <Link to="/profile">
        {profile.avatar ? (
          <img src={profile.avatar} className="w-14 h-14 rounded-full" alt="avatar" />
        ) : (
          <Icons.Avatar />
        )}
      </Link>
      <p className="ml-4 w-[178px] font-bold text-xl text-txt-black">
        Hello, {profile.name.split(" ")[0] || "unonymous"}
        <br />
        <span className="font-normal text-txt-main">Have a nice day</span>
      </p>
      <div className="ml-auto w-[34px] h-[34px]">
        <Icons.Bell />
      </div>
    </div>
  );
};
export default Header;
