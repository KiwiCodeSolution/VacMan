import { Link } from 'react-router-dom';
import './styles.css';

const token = '1677595510238';
export default function SignUpPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl">Sign Up Page</h1>
      <h2 className="mt-20">Имитация письма с сылкой подтверждения..</h2>
      {/* <a className="bg-space-200" href={`https://vacman.netlify.app/confirm_email/${token}`}> */}
      <Link to={`/confirm_email/${token}`} replace>
        Подтвердить email
      </Link>
      {/* Подтвердить email
      </a> */}
    </div>
  );
}
