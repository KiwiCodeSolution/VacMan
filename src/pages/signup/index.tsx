import useGoogleAuth from 'hooks/googleAuth';
import RegisterForm from 'components/forms/RegisterForm';
import './styles.css';

const token = '1677595510238';

export default function SignUpPage() {
  const googleAuth = useGoogleAuth();

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl">Sign Up Page</h1>
      <RegisterForm />
      <button className="mt-20 bg-bg-light p-2 rounded-md" type="button" onClick={() => googleAuth()}>
        Google Register
      </button>
      <h2 className="mt-20">Имитация письма с сылкой подтверждения..</h2>
      <a className="bg-bg-grey" href={`http://localhost:5173/confirmEmail?token=${token}`}>
        Подтвердить email
      </a>
    </div>
  );
}
