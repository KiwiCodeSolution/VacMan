/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable prettier/prettier */
import { Link, useLocation } from "react-router-dom";
import NavHeader from "components/navHeader";
import * as Icons from "components/iconsComponents";
import SubHeader from "components/subHeader";
import Button from "components/ui/button";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { setShowNotification, setMessage, setType } from "redux/notificationsSlice";
import { updateProfile } from "redux/userOperations";

const ProfilePage = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const {
    email,
    profile: { name, position, avatar, ...profile },
  } = useAppSelector(state => state.user);

  const defaultProfileRecords = [
    { icon: Icons.Envelope, name: "email", value: email },
    { icon: Icons.Phone16, name: "phoneNumber", value: profile.phoneNumber },
    { icon: Icons.Location, name: "location", value: profile.location },
    { icon: Icons.LinkedIn, name: "linkedin", value: profile.linkedin },
    { icon: Icons.Telegram, name: "telegram", value: profile.telegram },
    { icon: Icons.Instagram, name: "instagram", value: profile.instagram },
    { icon: Icons.Facebook, name: "facebook", value: profile.facebook },
  ];

  const customProfileRecords: Array<{ name: string; value: string }> = [];
  const profileFieldNames = Object.keys(profile);

  profileFieldNames.forEach((profileFieldName: string) => {
    if (!defaultProfileRecords.find(defaultRecord => profileFieldName === defaultRecord.name)) {
      customProfileRecords.push({ name: profileFieldName, value: profile[profileFieldName] });
    }
  });

  // if (Object.keys(profile).length > 9) {
  //   const customData = Object.keys(profile).slice(9);
  //   customData.forEach(field => customElements.push({ name: field, value: profile[field] }));
  //   // console.log("custom elements", customElements);
  // }

  const copyToClipboard = (profileRecordName: string) => {
    window.navigator.clipboard.writeText(profileRecordName);
    dispatch(setMessage(`'${profileRecordName}' copied to clipboard`));
    dispatch(setType("info"));
    dispatch(setShowNotification(true));
  };
  const deleteCustomField = (profileRecordName: string) => {
    const newProfile = { ...profile };
    delete newProfile[profileRecordName];
    dispatch(updateProfile({ ...newProfile, name, position, avatar }));
  };

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
        {defaultProfileRecords.map(
          rec =>
            rec.value && (
              <li
                key={rec.value}
                className="flex flex-row items-center ml-2 py-3 cursor-pointer"
                onClick={() => copyToClipboard(rec.value)}
              >
                <div className="w-10 h-10 bg-app-grey rounded-full p-1">
                  <rec.icon size={32} />
                </div>
                <p className="pl-4 font-semibold">{rec.value}</p>
              </li>
            )
        )}
        {customProfileRecords.map(
          rec =>
            rec.value && (
              <li key={rec.name} className="flex flex-col items-left ml-2 py-3">
                <div className="pl-4 font-semibold border-l-2 flex">
                  <p>{rec.name}</p>
                  <button className="bg-app-orange px-1 ml-auto rounded-md" onClick={() => deleteCustomField(rec.name)}>
                    Delete
                  </button>
                </div>
                <hr />
                <p
                  className="pl-4 font-semibold border-l-2 text-txt-main cursor-pointer"
                  onClick={() => copyToClipboard(rec.value)}
                >
                  {rec.value}
                </p>
              </li>
            )
        )}
      </ul>
    </div>
  );
};
export default ProfilePage;
