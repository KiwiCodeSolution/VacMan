/* eslint-disable prettier/prettier */
import { Link } from 'react-router-dom';
import useGoogleAuth from 'hooks/googleAuth';
import RegisterForm from 'components/forms/RegisterForm';
import Button from 'components/ui/button';
import GoogleLogo from 'img/images/image 259.png';
import './styles.css';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTI0N2VlYzgxOWNhMWJlZGZiNTAzOSIsImlhdCI6MTY3ODkxOTY2Mn0.6LQnsLQ04BuQZ3fs11EQc4-xnhZiKCugBpjvI-Oh50M';

export default function SignUpPage() {
  const googleAuth = useGoogleAuth();

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl">Sign Up Page</h1>
      <RegisterForm />
      {/* <Button variant="black">Register</Button>  */}
      <Button variant="white" clickFn={() => googleAuth()}>
        <div className="flex flex-row items-center">
          <img className="mr-4" src={GoogleLogo} alt="" />
          Use Google
        </div>
      </Button>
      <div className="text-center text-txt-main">
        Already have an account?
        <Link to="/login">
          <span className="text-base font-bold"> LOGIN</span>
        </Link>
      </div>
      <h2 className="mt-20">Имитация письма с сылкой подтверждения..</h2>
      <a className="border p-1" href={`http://localhost:5173/confirmEmail?token=${token}`}>
        Подтвердить email
      </a>
    </div>
  );
}
