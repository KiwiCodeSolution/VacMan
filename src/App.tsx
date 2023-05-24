import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks/reduxHooks";

import { setShowStartingPage } from "./redux/userSlice";

// pages & components
import StartingPage from "./pages/starting";
import ConfirmEmailPage from "./pages/Pub/confirmEmailPage";
import Entrance from "./pages/Private/entrance";
import LogInPage from "./pages/Pub/login";
import SignUpPage from "./pages/Pub/signup";
import RestorePassPage from "./pages/Pub/restorePass";
import ChangePassPage from "./pages/Private/changePassPage";
import PassCodeVerifyPage from "pages/Pub/passCodeVerify";
import Home from "./components/main";
import Reminder from "pages/Private/reminder";
import Calendar from "pages/Private/calendar";
import ProfilePage from "pages/Private/profilePage";
import SettingsPage from "pages/Private/settingsPage";
import Archived from "pages/Private/archived";
import Card from "pages/Private/vacancyCard";
import AddVacancy from "pages/Private/addVacancy";
import EditVacancy from "pages/Private/editVacancy";
import NotFound from "./pages/notFound";
import { PrivateRoute, RedirectRoute } from "./hocs/PrivateRoute";
import { currentUser } from "redux/userOperations";
import FullNote from "components/notices/FullNotice";
import AddUserData from "pages/Private/addUserData";
import { setShowNotification } from "redux/notificationsSlice";
import Notification from "components/notifications";
import AddAvatar from "pages/Private/addAvatar";
import PrivacyPolicy from "pages/Private/privacyPolici";
import AddAction from "pages/Private/addAction";
import EditAction from "pages/Private/editAction";

const App = () => {
  const dispatch = useAppDispatch();
  const { token, showStartingPage } = useAppSelector(state => state.user);
  const { showNotification, message } = useAppSelector(state => state.notification);

  useEffect(() => {
    dispatch(currentUser());
    setTimeout(() => dispatch(setShowStartingPage(false)), 3000); // App Logo
  }, [dispatch, token]);

  useEffect(() => {
    if (message === "user not authorized ") dispatch(currentUser())
  }, [message]);

  // notification
  useEffect(() => {
    const time = setTimeout(() => {
      dispatch(setShowNotification(false));
    }, 3000);
    return () => clearTimeout(time);
  }, [dispatch, showNotification]);


  return showStartingPage ? (
    <StartingPage />
  ) : (
    <>
      {showNotification && <Notification />}
      <Routes>
        {/* Private Routes */}
        <Route path="/" element={<PrivateRoute><Entrance /></PrivateRoute>}>
          {/* with Header & Menu */}
          <Route index element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="addUserData" element={<PrivateRoute><AddUserData /></PrivateRoute>} />
          <Route path="reminder" element={<PrivateRoute><Reminder /></PrivateRoute>} />
          <Route path="calendar" element={<PrivateRoute><Calendar /></PrivateRoute>} />
          <Route path="settings" element={<PrivateRoute><SettingsPage /></PrivateRoute>} />
          <Route path="profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
          <Route path="changePass" element={<PrivateRoute><ChangePassPage /></PrivateRoute>} />
          <Route path="archived" element={<PrivateRoute><Archived /></PrivateRoute>} />
          <Route path="addAvatar" element={<PrivateRoute><AddAvatar /></PrivateRoute>} />
          <Route path="privacyPolicy" element={<PrivateRoute><PrivacyPolicy /></PrivateRoute>} />
        </Route>

        <Route path=":_id" element={<PrivateRoute><Card /></PrivateRoute>}>
          {/* with NavHeader */}
          <Route path="details" element={<PrivateRoute><FullNote /></PrivateRoute>} />
          <Route path="add" element={<PrivateRoute><AddVacancy /></PrivateRoute>} />
          <Route path="edit" element={<PrivateRoute><EditVacancy /></PrivateRoute>} />
          <Route path="addAction" element={<PrivateRoute><AddAction /></PrivateRoute>} />
          <Route path="editAction" element={<PrivateRoute><EditAction /></PrivateRoute>} />
        </Route>

        {/* Public Routes */}
        <Route path="login" element={<RedirectRoute><LogInPage /></RedirectRoute>} />
        <Route path="signup" element={<RedirectRoute><SignUpPage /></RedirectRoute>} />
        <Route path="restorePass" element={<RedirectRoute><RestorePassPage /></RedirectRoute>} />
        <Route path="restorePass" element={<RedirectRoute><RestorePassPage /></RedirectRoute>} />
        <Route path="passCodeVerify" element={<RedirectRoute><PassCodeVerifyPage /></RedirectRoute>} />
        <Route path="confirmEmail" element={<RedirectRoute><ConfirmEmailPage /></RedirectRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes></>
  );
};

export default App;
