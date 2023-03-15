/* eslint-disable prettier/prettier */
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks';
// pages & components
import { setShowStartingPage } from './redux/userSlice';
import StartingPage from './pages/starting';
import ConfirmEmailPage from './pages/confirmEmailPage';
import Entrance from './pages/entrance';
import LogInPage from './pages/login';
import SignUpPage from './pages/signup';
import RestorePassPage from './pages/restorePass';
import ConfirmPassPage from './pages/confirmPass';
import NotFound from './pages/notfound';
import { PrivateRoute, RedirectRoute } from './hocs/PrivateRoute';

const App = () => {
  const dispatch = useAppDispatch();
  const { isAuth, showStartingPage } = useAppSelector(state => state.user);

  useEffect(() => {

    // if (token && !isAuth) dispatch(auth.getCurrentUser());
    setTimeout(() => dispatch(setShowStartingPage(false)), 3000); // App Logo
  }, [dispatch, isAuth])

  return (
    showStartingPage ? <StartingPage /> :
    <Routes>
      <Route path="/" element={<PrivateRoute><Entrance /></PrivateRoute>} />
      <Route path="/login" element={<RedirectRoute ><LogInPage /></RedirectRoute>} />
      <Route path="/signup" element={<RedirectRoute><SignUpPage /></RedirectRoute>} />
      <Route path="/restorePass" element={<RedirectRoute><RestorePassPage /></RedirectRoute>} />
      <Route path="/confirmPass" element={<RedirectRoute><ConfirmPassPage /></RedirectRoute>} />
      <Route path="/confirmEmail" element={<RedirectRoute><ConfirmEmailPage /></RedirectRoute>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
