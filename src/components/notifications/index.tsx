/* eslint-disable jsx-a11y/no-static-element-interactions */
import { createPortal } from "react-dom";
import * as Icons from "components/iconsComponents";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { setShowNotification } from "redux/notificationsSlice";
import "animate.css";

interface ICurrenClass {
  [key: string]: string;
}

interface INotificationIcon {
  [key: string]: JSX.Element;
}

const currentNotificationClass: ICurrenClass = {
  error:
    "flex flex-col w-52 h-56 pt-4 rounded-2xl p-2.5 bg-no-repeat border-2 bg-contain bg-bottom bg-txt-white bg-[url('./img/notification/error.png')] shadow-[0_35px_60px_-15px_rgba(242,139,130,0.5)] border-app-red",
  info: "flex flex-col w-52 h-56 pt-4 rounded-2xl p-2.5 bg-no-repeat border-2 bg-contain bg-bottom bg-txt-white bg-[url('./img/notification/info.png')] shadow-[0_35px_60px_-15px_rgba(169,226,240,0.5)] border-app-blue",
  warning:
    "flex flex-col w-52 h-56 pt-4 rounded-2xl p-2.5 bg-no-repeat border-2 bg-contain bg-bottom bg-txt-white bg-[url('./img/notification/warning.png')] shadow-[0_35px_60px_-15px_rgba(240,190,108,0.5)] border-app-orange",
  success:
    "flex flex-col w-52 h-56 pt-4 rounded-2xl p-2.5 bg-no-repeat border-2 bg-contain bg-bottom bg-txt-white bg-[url('./img/notification/success.png')] shadow-[0_35px_60px_-15px_rgba(104,239,172,0.5)] border-app-green",
};

const currentNotificationIcon: INotificationIcon = {
  error: <Icons.Error />,
  info: <Icons.Info />,
  warning: <Icons.Alert />,
  success: <Icons.Success />,
};

const modalRoot = document.querySelector("#modal-root") as HTMLElement;

const Notification = () => {
  const dispatch = useAppDispatch();
  const { message, type } = useAppSelector(state => state.notification);

  function handleClick(): void {
    dispatch(setShowNotification(false));
  }

  return createPortal(
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className="absolute h-full w-full z-30 rounded-lg top-0" onClick={handleClick}>
      <div className="flex justify-between absolute top-1/2 left-2/4 -translate-x-1/2 -translate-y-1/2 z-30 animate-show">
        <div className={currentNotificationClass[type]}>
          <div className="pt-3 bg-contain mx-auto">{currentNotificationIcon[type]}</div>
          <span className="mt-12 text-center font-medium text-base text-txt-white">{message || "..."}</span>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

// eslint-disable-next-line import/prefer-default-export
export default Notification;
