import * as Icons from "components/iconsComponents";
import { useAppSelector } from "hooks/reduxHooks";
import { Store } from "react-notifications-component";

interface IimageUrl {
  [key: number]: string;
}

const imageUrls: IimageUrl = {
  1: "bg-[url('./img/notification/error.png')]",
  2: "bg-[url('./img/notification/info.png')]",
  3: "bg-[url('./img/notification/warning.png')]",
  4: "bg-[url('./img/notification/success.png')]",
};

const ErrorNotification = () => {
  const { message } = useAppSelector(state => state.user);
  console.log(message);

  return (
    <div className="flex justify-between m-10 relative">
      <div
        className={`flex flex-col w-52 h-56 rounded-2xl p-2.5 ${imageUrls[1]} bg-no-repeat border-app-red border-2 bg-contain bg-bottom shadow-[0_35px_60px_-15px_rgba(242,139,130,0.5)]  bg-txt-white`}
      >
        <div className="mt-4 rounded-fdivl bg-contain mx-auto">
          <Icons.Alert />
        </div>
        <span className="mt-16 text-center font-medium text-base text-txt-white">{message}</span>
      </div>

      {/* <div
        className={`flex flex-col w-52 h-56 rounded-2xl p-2.5 ${imageUrls[2]} bg-no-repeat border-app-blue border-2 bg-contain bg-bottom shadow-[0_35px_60px_-15px_rgba(169,226,240,0.5)]  bg-txt-white`}
      >
        <div className="mt-4 ml-14 rounded-full bg-contain ">
          <Icons.InfoIcon />
        </div>
        <span className="mt-16 text-center font-medium text-base text-txt-white">This is an information message.</span>
      </div>

      <div
        className={`flex flex-col w-52 h-56 rounded-2xl p-2.5 ${imageUrls[3]} bg-no-repeat border-app-orange border-2 bg-contain bg-bottom shadow-[0_35px_60px_-15px_rgba(240,190,108,0.5)]  bg-txt-white`}
      >
        <div className="mt-4 ml-14 rounded-full bg-contain ">
          <Icons.WarningIcon />
        </div>
        <span className="mt-12 text-center font-medium text-base text-txt-white">
          Please note that something has happened.
        </span>
      </div>
      <div
        className={`flex flex-col w-52 h-56 rounded-2xl p-2.5 ${imageUrls[4]} bg-no-repeat border-app-green border-2 bg-contain bg-bottom shadow-[0_35px_60px_-15px_rgba(104,239,172,0.5)]  bg-txt-white`}
      >
        <div className="mt-4 ml-14 rounded-full bg-contain ">
          <Icons.SuccessIcon />
        </div>
        <span className="mt-16 text-center font-medium text-base text-txt-white">
          Congratulations! Everything is fine!
        </span>
      </div> */}
      {/* <button className="p-2" type="button" onClick={displayMsgCustom}>
        displayMsgCustom
      </button> */}
    </div>
  );
};

function MyNotify() {
  const { message } = useAppSelector(state => state.user);
  console.log(message);
  return (
    <div
      className={`flex flex-col w-52 h-56 rounded-2xl p-2.5 ${imageUrls[1]} bg-no-repeat border-app-red border-2 bg-contain bg-bottom shadow-[0_35px_60px_-15px_rgba(242,139,130,0.5)]  bg-txt-white`}
    >
      <div className="mt-4 rounded-fdivl bg-contain mx-auto">
        <Icons.Alert />
      </div>
      <span className="mt-16 text-center font-medium text-base text-txt-white">{message}</span>
    </div>
  );
}
// eslint-disable-next-line import/prefer-default-export
export default ErrorNotification;

export const displayMsgCustom = () => {
  console.log("displayMsgCustom");
  Store.addNotification({
    content: MyNotify,
    width: 190,
    container: "center",
    dismiss: {
      duration: 2000,
    },
  });
};
