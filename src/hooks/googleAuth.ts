import { useAppDispatch } from './reduxHooks';
import { setIsAuth, setUser } from '../redux/userSlice';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

// const serverURL = 'http://kiwicode.tech:5000';
const serverURL = 'https://vacmanserver-production.up.railway.app';
// const serverURL = 'http://localhost:3030';

const getGoogleUserData = async (accessToken: string) => {
  try {
    const { data } = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
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
      console.log(userData);
      const { data } = await axios.post(`${serverURL}/auth/googleAuth`, { userData });
      console.log('data from server:', data);
      dispatch(setUser(data));
      dispatch(setIsAuth(true));
    },
    onError: err => console.log('error:', err),
  });
};

export default useGoogleAuth;
