import { useAppDispatch } from './reduxHooks';
import { setIsAuth, setUser } from '../redux/userSlice';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { setAuthHeader } from 'redux/userOperations';

// const serverURL = 'http://localhost:3030';
// const serverURL = 'http://kiwicode.tech:5000';
const serverURL = 'https://vacmanserver-production.up.railway.app';

const getGoogleUserData = async (accessToken: string) => {
  try {
    setAuthHeader(accessToken);
    const { data } = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo');
    return data;
  } catch (error) {
    return null;
  }
};
const useGoogleAuth = () => {
  const dispatch = useAppDispatch();

  return useGoogleLogin({
    onSuccess: async resp => {
      const userData = await getGoogleUserData(resp.access_token);
      const { data } = await axios.post(`${serverURL}/auth/googleAuth`, { userData });
      setAuthHeader(data.token);
      data.currProfile = 'google';
      dispatch(setUser(data));
      dispatch(setIsAuth(true));
    },
    onError: err => console.log('error:', err),
  });
};

export default useGoogleAuth;
