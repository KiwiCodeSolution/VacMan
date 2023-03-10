import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { setUser, setIsAuth } from '../../redux/userSlice';
import { useAppDispatch } from '../../hooks/reduxHooks';
import getGoogleUserData from '../../utilities/googleUserData';
import RegisterForm from '../../components/forms/RegisterForm';
import './styles.css';

// const serverURL = 'http://kiwicode.tech:5000';
const serverURL = 'https://vacmanserver-production.up.railway.app';
// const serverURL = 'http://localhost:3030';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTA4NTI5ZjFiNjk5YjQyYTdiZTY2NyIsImlhdCI6MTY3NjU1MTAwOX0.e-quTDPC3_tAlXj56KhZ173OraK6M18fYZD8LSfd32c';
export default function SignUpPage() {
  const dispatch = useAppDispatch();

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

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl">Sign Up Page</h1>
      <RegisterForm />
      <button className="mt-20 bg-bg-light p-2 rounded-md" type="button" onClick={() => googleRegister()}>
        Google Register
      </button>
      <h2 className="mt-20">Имитация письма с сылкой подтверждения..</h2>
      <a className="bg-bg-grey" href={`http://localhost:5173/confirmEmail?token=${token}`}>
        Подтвердить email
      </a>
    </div>
  );
}
