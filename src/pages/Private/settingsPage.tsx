import NavHeader from "components/navHeader";
import Button from "components/ui/button";
import * as Icons from "components/iconsComponents";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logOut } from "redux/userOperations";

const SettingsPage = () => {
  const dispatch = useAppDispatch();
  const { profile, settings } = useAppSelector(state => state.user);
  const location = useLocation();
  const navigate = useNavigate();

  const elements = [
    { icon: Icons.SettingsLang, name: "Language", value: settings.lang, btn: Icons.ArrowForward, btnSize: 24 },
    { icon: Icons.SettingsNotification, name: "Notification", value: settings.notification, btn: Icons.ArrowForward },
    { icon: Icons.SettingsHelp, name: "Theme", value: settings.theme, btn: Icons.ArrowForward },
    { icon: Icons.Salary, name: "Local currency", value: settings.localCurrency, btn: Icons.ArrowForward },
    { icon: Icons.SettingsArchive, name: "Archive", btn: Icons.ArrowForward },
    { icon: Icons.SettingsPolicy, name: "Policy", btn: Icons.ArrowForward },
  ];

  return (
    <>
      <NavHeader prevAddress={location?.state?.from.pathname ?? "/"} bg="bg-black" text="Settings" textWhite />
      <div className="sticky w-full h-[136px] ">
        <Icons.Rectangle className="w-full h-full text-txt-black" />
        <div className="absolute w-[120px] h-[120px] bottom-0  left-1/2 -translate-x-1/2   rounded-full ">
          <div className="w-full h-full flex justify-center items-center rounded-full bg-gradient-to-b from-[#C4C4D4] to-[#141415]">
            <Icons.Avatar className="w-[95%] h-[95%] text-txt-main " />
          </div>
          <button className="absolute w-8 h-8 bottom-0 right-0  flex justify-center items-center rounded-full bg-txt-black ">
            <Icons.Camera size="100%" className="" />
          </button>
        </div>
      </div>
      <p className="text-xl text-center">{profile.name}</p>
      <p className="text-center">position: {profile.position}</p>
      <div className="mx-auto w-24 pt-4 pb-7">
        <Link to="/profile" state={{ from: location }}>
          <Button btnType="button" variant="black">
            Profile
          </Button>
        </Link>
      </div>
      <ul className="container mx-auto px-4">
        {elements.map(el => (
          <li key={el.name} className="flex flex-row items-center ml-2 py-3">
            <div className="w-10 h-10 bg-app-grey rounded-full p-2">
              <el.icon size={24} />
            </div>
            <p className="pl-4 font-semibold">{el.name}</p>
            <p className="text-txt-main ml-auto">{el.value}</p>
            <div className="w-8 h-8 ml-auto hover:scale-110 focus:scale-110">
              <el.btn size={24} />
            </div>
          </li>
        ))}
      </ul>
      <Button variant="black" clickFn={() => dispatch(logOut())}>
        Log Out
      </Button>
    </>
  );
};
export default SettingsPage;
