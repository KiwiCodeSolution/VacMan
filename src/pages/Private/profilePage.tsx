import NavHeader from "components/navHeader";
import { useAppSelector } from "hooks/reduxHooks";
import { useLocation } from "react-router-dom";
import * as Icons from "components/iconsComponents";

const ProfilePage = () => {
  const location = useLocation();
  const { email, profile } = useAppSelector(state => state.user);
  const elements = [
    { icon: Icons.Envelope, name: email, btn: Icons.ArrowForward, btnSize: 24 },
    { icon: Icons.Phone16, name: profile.phoneNumber, btn: Icons.ArrowForward },
    { icon: Icons.LinkedIn, name: profile.linkedIn, btn: Icons.ArrowForward },
    { icon: Icons.Telegram, name: profile.telegram, btn: Icons.ArrowForward },
    { icon: Icons.Instagram, name: profile.instagram, btn: Icons.ArrowForward },
    { icon: Icons.Facebook, name: profile.facebook, btn: Icons.ArrowForward },
  ];
  return (
    <>
      <NavHeader bg="bg-grey" prevAddress={location?.state?.from.pathname ?? "/"} text="Profile" textWhite />
      <div className="sticky w-full h-[136px] ">
        <Icons.Rectangle className="w-full h-full text-txt-darkgrey" />
        <div className="absolute w-[120px] h-[120px] bottom-0 left-1/2 -translate-x-1/2 rounded-full">
          <div className="w-full h-full flex justify-center items-center rounded-full bg-gradient-to-b from-[#C4C4D4] to-[#141415]">
            <Icons.Avatar className="w-[95%] h-[95%] text-txt-main" />
          </div>
          <button className="absolute w-8 h-8 bottom-0 right-0  flex justify-center items-center rounded-full bg-txt-black">
            <Icons.Camera size="100%" className="" />
          </button>
        </div>
      </div>
      <p className="text-xl text-center">{profile.name}</p>
      <p className="text-center">position: {profile.position}</p>
      <ul className="container mx-auto px-4">
        {elements.map(el => (
          <li key={el.name} className="flex flex-row items-center ml-2 py-3">
            {el.name && (
              <>
                <div className="w-10 h-10 bg-app-grey rounded-full p-1">
                  <el.icon size={32} />
                </div>
                <p className="pl-4 font-semibold">{el.name}</p>
                <div className="w-8 h-8 ml-auto hover:scale-110 focus:scale-110">
                  <el.btn size={24} />
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
export default ProfilePage;
