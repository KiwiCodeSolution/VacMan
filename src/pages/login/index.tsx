/* eslint-disable prettier/prettier */

import { Link } from 'react-router-dom';
import LoginForm from 'components/forms/LoginForm';
import useGoogleAuth from 'hooks/googleAuth';
import Button from 'components/ui/button';
import GoogleLogo from 'img/images/image 259.png';
import './styles.css';

export default function LogInPage() {
  const googleAuth = useGoogleAuth();

  return (
    <div className="container flex flex-col mx-auto px-4 h-screen">
      <h1 className="text-2xl text-center">Log In Page</h1>
      <LoginForm />
      <div className="mt-auto pb-5">
        <Button variant="white" clickFn={() => googleAuth()}>
          <div className="flex flex-row items-center">
            <img className="mr-4" src={GoogleLogo} alt="" />
            Use Google
          </div>
        </Button>
        <div className="mt-6 text-center text-txt-main">
          Haven’t an account?
          <Link to="/signup">
            <span className="text-base font-bold">Registration</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
