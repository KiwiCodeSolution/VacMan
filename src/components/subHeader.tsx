import { useLocation, Link } from "react-router-dom";
import * as Icons from "components/iconsComponents";
import { useAppSelector } from "hooks/reduxHooks";

type propType = { fill: "text-txt-black" | "text-txt-darkgrey" | "text-txt-blue" };
const SubHeader = ({ fill }: propType) => {
  const location = useLocation();
  const { profile } = useAppSelector(state => state.user);

  return (
    <>
      <div className="sticky w-full h-[136px] ">
        <Icons.Rectangle className={`w-full h-full ${fill}`} />
        <div className="absolute w-[120px] h-[120px] bottom-0 left-1/2 -translate-x-1/2 rounded-full ">
          <div className="w-full h-full flex justify-center items-center rounded-full bg-gradient-to-b from-[#C4C4D4] to-[#141415]">
            {profile.avatar ? (
              <img src={profile.avatar} className="w-[112px] h-[112px] rounded-full" alt="avatar" />
            ) : (
              <Icons.Avatar className="w-[95%] h-[95%] text-txt-main" />
            )}
          </div>
          <button className="absolute w-8 h-8 bottom-0 right-0 flex justify-center items-center rounded-full bg-txt-black">
            <Link to="/addAvatar" state={{ from: location }}>
              <Icons.Camera size="100%" className="" />
            </Link>
          </button>
        </div>
      </div>

      <p className="pt-4 text-xl font-semibold text-center">{profile.name}</p>
      <p className="text-center">{profile.position}</p>
    </>
  );
};
export default SubHeader;
