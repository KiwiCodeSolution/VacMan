/* eslint-disable prettier/prettier */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { setIsAuth } from '../../redux/userSlice';
import './styles.css';

export default function LogInPage() {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector(store => store.user);
  const navigate = useNavigate();
  
  useEffect(() => {if (isAuth) navigate('/')},[isAuth, navigate]);

  return (
      <div className='container mx-auto px-4'>
        <h1 className='text-2xl'>Log In Page</h1>
        <button type='button' onClick={() => dispatch(setIsAuth(true))}>
          LOGIN
        </button>
      </div>
  );
}
