/* eslint-disable prettier/prettier */
import NavHeader from "components/navHeader";
import { useAppSelector } from "hooks/reduxHooks";
import { Link, useLocation } from "react-router-dom";
import * as Icons from "components/iconsComponents";
import SubHeader from "components/subHeader";
import Button from "components/ui/button";
// import AddBtn from "components/addBtn";

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
    <div className="mb-28">
      <NavHeader bg="bg-grey" prevAddress={location?.state?.from.pathname ?? "/"} text="Profile" textWhite />
      <SubHeader fill="text-txt-darkgrey" />

      <div className="mx-auto w-40 pt-4 pb-7">
        <Link to="/addUserData" state={{ from: location }}>
          <Button btnType="button" variant="black">
            Add Profile data
          </Button>
        </Link>
      </div>

      <ul className="container mx-auto px-4">
        {elements.map(el => el.name && (
          <li key={el.name} className="flex flex-row items-center ml-2 py-3">
            <div className="w-10 h-10 bg-app-grey rounded-full p-1">
              <el.icon size={32} />
            </div>
            <p className="pl-4 font-semibold">{el.name}</p>
            <div className="w-8 h-8 ml-auto hover:scale-110 focus:scale-110">
              <el.btn size={24} />
            </div>
            {/* <div className="flex justify-end mx-2 fixed bottom-32 right-8">
              <AddBtn />
            </div> */}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProfilePage;
