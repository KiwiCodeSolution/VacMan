/* eslint-disable prettier/prettier */
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks';
// pages & components
import { setIsLoading } from './redux/userSlice';
import StartingPage from './pages/starting';
import ConfirmEmailPage from './pages/confirmEmailPage';
import Entrance from './pages/entrance';
import LogInPage from './pages/login';
import Welcome from './pages/welcome';
import SignUpPage from './pages/signup';
import RestorePassPage from './pages/restorePass';
import ConfirmPassPage from './pages/confirmPass';
import NotFound from './pages/notfound';
import PrivateRout from './hocs/PrivateRoute';

const App = () => {
  const dispatch = useAppDispatch();
  const { isAuth, onBoarding, isLoading, token } = useAppSelector(state => state.user);

  useEffect(() => {
    console.log("isAuth", isAuth);
    // if (token && !isAuth) dispatch(auth.getCurrentUser());
  }, [dispatch, isAuth])

  setTimeout(() => dispatch(setIsLoading(false)), 3000); // App Logo

  return (
    isLoading ? <StartingPage /> :
    <Routes>
      <Route path="/" element={<PrivateRout isAuth={isAuth}><Entrance /></PrivateRout>} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/restorePass" element={<RestorePassPage />} />
      <Route path="/confirmPass" element={<ConfirmPassPage />} />
      <Route path="/confirmEmail/:code" element={<ConfirmEmailPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
