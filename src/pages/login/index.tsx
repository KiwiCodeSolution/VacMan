/* eslint-disable prettier/prettier */

import { Link } from 'react-router-dom';
import LoginForm from 'components/forms/LoginForm';
import useGoogleAuth from 'hooks/googleAuth';
import './styles.css';

export default function LogInPage() {

  const googleAuth = useGoogleAuth();

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl">Log In Page</h1>
      <LoginForm />
      <button className="flex mt-4 bg-bg-light p-2 rounded-md" type="button" onClick={() => googleAuth()}>
        Google Login
      </button>
      <div className="text-center text-txt-main">Haven’t an account? 
        <Link to="/signup"><span className="text-base font-bold">Registration</span></Link>
      </div>
    </div>
  );
}
