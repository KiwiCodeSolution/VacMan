/* eslint-disable prettier/prettier */
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks';
import { setShowStartingPage } from './redux/userSlice';

// pages & components
import StartingPage from './pages/starting';
import ConfirmEmailPage from './pages/confirmEmailPage';
import Entrance from './pages/entrance';
import LogInPage from './pages/login';
import SignUpPage from './pages/signup';
import RestorePassPage from './pages/restorePass';
import ConfirmPassPage from './pages/confirmPass';
import Reminder from 'pages/reminder';
import Calendar from 'pages/calendar';
import ProfilePage from 'pages/profilePage';
import SettingsPage from 'pages/settingsPage';
import NotFound from './pages/notfound';
import { PrivateRoute, RedirectRoute } from './hocs/PrivateRoute';
import { currentUser } from 'redux/userOperations';
import FullNote from 'components/notices/FullNotice';

const App = () => {
  const dispatch = useAppDispatch();
  const { token, showStartingPage } = useAppSelector(state => state.user);

  useEffect(() => {
    dispatch(currentUser());
    setTimeout(() => dispatch(setShowStartingPage(false)), 3000); // App Logo
  }, [dispatch, token])

  return (
    showStartingPage ? <StartingPage /> :
    <Routes>
      <Route path="/" element={<PrivateRoute><Entrance /></PrivateRoute>} />
        <Route path=":id" element={<PrivateRoute><FullNote /></PrivateRoute>} />
        <Route path="reminder" element={<PrivateRoute><Reminder /></PrivateRoute>} />
        <Route path="calendar" element={<PrivateRoute><Calendar /></PrivateRoute>} />
        <Route path="settings" element={<PrivateRoute><SettingsPage /></PrivateRoute>} />
        <Route path="profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
        <Route path="login" element={<RedirectRoute ><LogInPage /></RedirectRoute>} />
        <Route path="signup" element={<RedirectRoute><SignUpPage /></RedirectRoute>} />
        <Route path="restorePass" element={<RedirectRoute><RestorePassPage /></RedirectRoute>} />
        <Route path="confirmPass" element={<RedirectRoute><ConfirmPassPage /></RedirectRoute>} />
        <Route path="confirmEmail" element={<RedirectRoute><ConfirmEmailPage /></RedirectRoute>} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
