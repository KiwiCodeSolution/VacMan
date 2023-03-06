import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/reduxHooks';
import { setIsAuth, setUser } from '../redux/userSlice';

const URL = 'http://localhost:3030/auth/emailVerify';
// const URL = 'http://kiwicode.tech:5000/auth/emailVerify';
// const URL = 'https://vacmanserver-production.up.railway.app/auth/emailVerify';

const ConfirmEmailPage = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  console.log('params:', token);
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const goToHomePage = () => {
    dispatch(setIsAuth(true));
    navigate('/');
  };

  // send request on server with code
  useEffect(() => {
    fetch(`${URL}?token=${token}`, { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        console.log(data.user);
        dispatch(setUser(data.user));
        setConfirmed(true);
      })
      .catch((error: { message: unknown }) => console.log('error:', error.message));
  }, [dispatch, token]);

  // if response "ok" -> dispatch(setUser(data)), setConfirmed(true)
  return (
    <>
      <h2>Email confirmation</h2>
      <div className="mt-20">{/* icon ok */}</div>
      {confirmed ? <p>Congratulations registration succesful</p> : <p>Email confirmation false ...</p>}
      <button className="mt-20 bg-bg-grey" onClick={goToHomePage}>
        [ START ]
      </button>
    </>
  );
};
export default ConfirmEmailPage;
