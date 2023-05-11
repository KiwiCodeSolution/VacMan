/* eslint-disable prettier/prettier */
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { logOut, updateSettings } from "redux/userOperations";
import NavHeader from "components/navHeader";
import Button from "components/ui/button";
import * as Icons from "components/iconsComponents";
import LanguageBtnGroup from "components/language/LanguageBtnGroup";
import SubHeader from "components/subHeader";

const SettingsPage = () => {
  const dispatch = useAppDispatch();
  const { settings } = useAppSelector(state => state.user);
  const [newSettings, setNewSettings] = useState({ ...settings });
  const location = useLocation();
  const navigate = useNavigate();

  location.state.newSettings = newSettings;
  // console.log("new settings:", newSettings);
  useEffect(() => {
    return () => {
      // console.log("saving new settings:", newSettings);
      // console.log("location:", location);
      dispatch(updateSettings(location.state.newSettings));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const changeLanguage = () => {
  //   setNewSettings({ ...newSettings, lang: newSettings.lang === "eng" ? "ru" : "eng" });
  // };
  const toggleNotification = () => {
    setNewSettings({ ...newSettings, notification: !newSettings.notification });
  };
  const toggleTheme = () => {
    setNewSettings({ ...newSettings, theme: newSettings.theme === "light" ? "dark" : "light" });
  };

  const elements = [
    {
      icon: Icons.SettingsLang,
      name: "Language", // value: settings.lang,
      btn: Icons.ArrowForward,
      // onClickFn: changeLanguage,
      extension: <LanguageBtnGroup newSettings={newSettings} setNewSettings={setNewSettings} />,
    },
    {
      icon: Icons.SettingsNotification,
      name: "Notification",
      value: newSettings.notification ? "on" : "off",
      btn: Icons.ArrowForward,
      onClickFn: toggleNotification,
    },
    {
      icon: Icons.SettingsTheme,
      name: "Theme",
      value: newSettings.theme,
      btn: Icons.ArrowForward,
      onClickFn: toggleTheme,
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
    <div className="mb-28 select-none">
      <NavHeader prevAddress={location?.state?.from.pathname ?? "/"} bg="bg-black" text="Settings" textWhite />
      <SubHeader fill="text-txt-black" />

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
            {el.onClickFn && (
              <button className="w-8 h-8 ml-auto hover:scale-110 focus:scale-110" onClick={el.onClickFn}>
                <el.btn size={24} />
              </button>)
            }
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
