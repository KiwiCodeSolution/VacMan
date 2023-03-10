/* eslint-disable prettier/prettier */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { setIsAuth, setUser } from '../../redux/userSlice';
import getGoogleUserData from '../../utilities/googleUserData';
import './styles.css';

// const serverURL = 'http://kiwicode.tech:5000';
const serverURL = 'http://localhost:3030';

export default function LogInPage() {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector(state => state.user);
  const navigate = useNavigate();

  const googleRegister = useGoogleLogin({
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
  useEffect(() => {if (isAuth) navigate('/')},[isAuth, navigate]);

  return (
      <div className='container mx-auto px-4'>
        <h1 className='text-2xl'>Log In Page</h1>
        {/* <div className="flex"> */}
          <button className="flex mt-4" type='button' onClick={() => dispatch(setIsAuth(true))}>
            LOGIN
          </button>
          <button className="flex mt-4 bg-bg-light p-2 rounded-md" type="button" onClick={() => googleRegister()}>
          Google Login
          </button>
        {/* </div> */}
      </div>
  );
}
