/* eslint-disable prettier/prettier */
import NavHeader from "components/navHeader";
import Button from "components/ui/button";
import * as Icons from "components/iconsComponents";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logOut, updateSettings } from "redux/userOperations";
import LanguageBtnGroup from "components/language/LanguageBtnGroup";

const SettingsPage = () => {
  const dispatch = useAppDispatch();
  const { profile, settings } = useAppSelector(state => state.user);
  const location = useLocation();
  const navigate = useNavigate();

  const changeLanguage = () => {
    // pop-up return {lang}
    dispatch(updateSettings({ ...settings, lang: "eng" }));
  };
  const toggleNotification = () => {
    dispatch(updateSettings({ ...settings, notification: !settings.notification }));
  };
  const toggleTheme = () => {
    dispatch(updateSettings({ ...settings, theme: settings.theme === "light" ? "dark" : "light" }));
  };
  const changeLocalCurrency = () => {
    const localCurrency = "Hrn";
    // pop-up return {localCurrency}
    dispatch(updateSettings({ ...settings, localCurrency }));
  };
  const elements = [
    {
      icon: Icons.SettingsLang,
      name: "Language", // value: settings.lang,
      btn: Icons.ArrowForward,
      onClickFn: changeLanguage,
      extension: <LanguageBtnGroup />,
    },
    {
      icon: Icons.SettingsNotification,
      name: "Notification",
      value: settings.notification ? "on" : "off",
      btn: Icons.ArrowForward,
      onClickFn: toggleNotification,
    },
    {
      icon: Icons.SettingsTheme,
      name: "Theme",
      value: settings.theme,
      btn: Icons.ArrowForward,
      onClickFn: toggleTheme,
    },
    {
      icon: Icons.Salary,
      name: "Local currency",
      value: settings.localCurrency,
      btn: Icons.ArrowForward,
      onClickFn: changeLocalCurrency,
    },
    { icon: Icons.SettingsArchive, name: "Archive", btn: Icons.ArrowForward, onClickFn: () => navigate("/archived") },
    {
      icon: Icons.SettingsPolicy,
      name: "Policy",
      btn: Icons.ArrowForward,
      onClickFn: () => navigate("/privacyPolicy"),
    },
  ];

  return (
    <div className="mb-28">
      <NavHeader prevAddress={location?.state?.from.pathname ?? "/"} bg="bg-black" text="Settings" textWhite />
      <div className="sticky w-full h-[136px] ">
        <Icons.Rectangle className="w-full h-full text-txt-black" />
        <div className="absolute w-[120px] h-[120px] bottom-0 left-1/2 -translate-x-1/2 rounded-full ">
          <div className="w-full h-full flex justify-center items-center rounded-full bg-gradient-to-b from-[#C4C4D4] to-[#141415]">
            <Icons.Avatar className="w-[95%] h-[95%] text-txt-main" />
          </div>
          <button className="absolute w-8 h-8 bottom-0 right-0 flex justify-center items-center rounded-full bg-txt-black">
            <Link to="/addAvatar" state={{ from: location }}>
              <Icons.Camera size="100%" className="" />
            </Link>
          </button>
        </div>
      </div>

      <p className="pt-4 text-xl font-semibold text-center">{profile.name}</p>
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
            {el.extension || null}
            <button className="w-8 h-8 ml-auto hover:scale-110 focus:scale-110" onClick={el.onClickFn}>
              <el.btn size={24} />
            </button>
          </li>
        ))}
      </ul>
      <div className="my-6">
        <Button variant="white" clickFn={() => navigate("/changePass")}>
          Change password
        </Button>
      </div>
      <Button variant="black" clickFn={() => dispatch(logOut())}>
        Log Out
      </Button>
    </div>
  );
};
export default SettingsPage;
