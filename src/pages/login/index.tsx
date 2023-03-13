/* eslint-disable prettier/prettier */
import './styles.css';

import LoginForm from 'components/forms/LoginForm';
import useGoogleAuth from 'hooks/googleAuth';

export default function LogInPage() {

  const googleAuth = useGoogleAuth();

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl">Log In Page</h1>
      <LoginForm />
      <button className="flex mt-4 bg-bg-light p-2 rounded-md" type="button" onClick={() => googleAuth()}>
        Google Login
      </button>
    </div>
  );
}
