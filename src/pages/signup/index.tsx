/* eslint-disable prettier/prettier */
import { Link } from 'react-router-dom';
import useGoogleAuth from 'hooks/googleAuth';
import RegisterForm from 'components/forms/RegisterForm';
import Button from 'components/ui/button';
import GoogleLogo from 'img/images/image 259.png';
import './styles.css';

const token = '1677595510238';

export default function SignUpPage() {
  const googleAuth = useGoogleAuth();

  return (
    <div className="container flex flex-col mx-auto px-4 h-screen">
      <h1 className="text-2xl text-center">Sign Up Page</h1>
      <RegisterForm />
      <div className="mt-auto pb-5">
        <Button variant="white" clickFn={() => googleAuth()}>
          <div className="flex flex-row items-center">
            <img className="mr-4" src={GoogleLogo} alt="" />
            Use Google
          </div>
        </Button>
        <div className="mt-6 text-center text-txt-main">
          Already have an account?
          <Link to="/login">
            <span className="text-base font-bold">LOGIN</span>
          </Link>
        </div>
      </div>
      {/* <h2 className="mt-20">Имитация письма с сылкой подтверждения..</h2>
      <a className="border p-1" href={`http://localhost:5173/confirmEmail?token=${token}`}>
        Подтвердить email
      </a> */}
    </div>
  );
}
