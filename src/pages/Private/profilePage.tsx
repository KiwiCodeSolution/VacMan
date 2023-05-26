/* eslint-disable prettier/prettier */
import { Link, useLocation } from "react-router-dom";
import NavHeader from "components/navHeader";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import * as Icons from "components/iconsComponents";
import SubHeader from "components/subHeader";
import Button from "components/ui/button";
import { setShowNotification, setMessage, setType } from "redux/notificationsSlice";

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

  const copyToClipboard = (name: string) => {
    // console.log("copyToClipboard function", name);
    window.navigator.clipboard.writeText(name);
    dispatch(setMessage(`'${name}' copied to clipboard`));
    dispatch(setType("info"));
    dispatch(setShowNotification(true));
  }
  const handleKeyDown = () => null;

  return (
    <div className="mb-28 select-none">
      <NavHeader bg="bg-bg-grey" prevAddress={location?.state?.from.pathname ?? "/"} text="Profile" textWhite />
      <SubHeader fill="text-txt-darkgrey" />

      <div className="mx-auto w-40 pt-4 pb-7">
        <Link to="/addUserData" state={{ from: location }}>
          <Button btnType="button" variant="black">
            Add Profile data
          </Button>
        </Link>
      </div>

      <ul className="container mx-auto px-4">
        <p className="text-center txt-main text-xl">click the line to copy to clipboard</p>
        <hr />
        {elements.map(el => el.name && (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          <li
            key={el.name}
            className="flex flex-row items-center ml-2 py-3 cursor-pointer"
            onClick={() => copyToClipboard(el.name)}
            onKeyDown={handleKeyDown}
          >
            <div className="w-10 h-10 bg-app-grey rounded-full p-1">
              <el.icon size={32} />
            </div>
            <p className="pl-4 font-semibold">{el.name}</p>
            {/* <div className="w-8 h-8 ml-auto hover:scale-110 focus:scale-110">
              <el.btn size={24} />
            </div> */}
            {/* <div className="flex justify-end mx-2 fixed bottom-32 right-8">
              <AddBtn />
            </div> */}
          </li>
        ))}
      </ul>
    </div >
  );
};
export default ProfilePage;
