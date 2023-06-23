/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable prettier/prettier */
import { Link, useLocation } from "react-router-dom";
import NavHeader from "components/navHeader";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import * as Icons from "components/iconsComponents";
import SubHeader from "components/subHeader";
import Button from "components/ui/button";
import { setShowNotification, setMessage, setType } from "redux/notificationsSlice";
import { updateProfile } from "redux/userOperations";

// import AddBtn from "components/addBtn";

const ProfilePage = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { email, profile } = useAppSelector(state => state.user);

  const elements = [
    { icon: Icons.Envelope, name: email },
    { icon: Icons.Phone16, name: profile.phoneNumber },
    { icon: Icons.LinkedIn, name: profile.linkedIn },
    { icon: Icons.Telegram, name: profile.telegram },
    { icon: Icons.Instagram, name: profile.instagram },
    { icon: Icons.Facebook, name: profile.facebook },
  ];

  const customElements: { name: string; value: string; }[] = [];
  if (Object.keys(profile).length > 9) {
    const customData = Object.keys(profile).slice(9);
    customData.forEach(field => customElements.push({ name: field, value: profile[field] }));
    // console.log("custom elements", customElements);
  }

  const copyToClipboard = (name: string) => {
    // console.log("copyToClipboard function", name);
    window.navigator.clipboard.writeText(name);
    dispatch(setMessage(`'${name}' copied to clipboard`));
    dispatch(setType("info"));
    dispatch(setShowNotification(true));
  }
  const handleDeleteCustomField = (name: string) => {
    const newProfile = { ...profile };
    delete newProfile[name];
    // console.log("profile:", newProfile);
    dispatch(updateProfile({ ...newProfile }));
  }
  // const handleKeyDown = () => null;

  return (
    <div className="mb-28 select-none">
      <NavHeader bg="bg-bg-grey" prevAddress={location?.state?.from.pathname ?? "/"} text="Profile" textWhite />
      <SubHeader fill="text-txt-darkgrey" />

      <div className="mx-auto w-60 pt-4 pb-7">
        <Link to="/addUserData" state={{ from: location }}>
          <Button btnType="button" variant="black">
            Add-Edit Profile data
          </Button>
        </Link>
      </div>

      <ul className="container mx-auto px-4">
        <p className="text-center txt-main text-xl bg-bg-blue">click the line below to copy</p>
        <hr />
        {elements.map(el => el.name && (
          <li
            key={el.name}
            className="flex flex-row items-center ml-2 py-3 cursor-pointer"
          >
            <div className="w-10 h-10 bg-app-grey rounded-full p-1">
              <el.icon size={32} />
            </div>
            <p className="pl-4 font-semibold">{el.name}</p>
          </li>
        ))}
        {customElements.map(el => el.value && (
          <li
            key={el.name}
            className="flex flex-col items-left ml-2 py-3 cursor-pointer"
          >
            <div className="pl-4 font-semibold border-l-2 flex">
              <p>{el.name}</p>
              <button
                className="bg-app-orange px-1 ml-auto rounded-md"
                onClick={() => handleDeleteCustomField(el.name)}
              >
                Delete
              </button>
            </div>
            <hr />
            <p
              className="pl-4 font-semibold border-l-2 text-txt-main"
              onClick={() => copyToClipboard(el.value)}
            >
              {el.value}
            </p>
          </li>
        ))}
      </ul>
    </div >
  );
};
export default ProfilePage;
