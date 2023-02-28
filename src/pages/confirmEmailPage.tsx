import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/reduxHooks';
import { setIsAuth } from '../redux/userSlice';

const URL = 'http://localhost:3030/auth/emailVerify';

const ConfirmEmailPage = () => {
  const { token } = useParams();
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
        console.log(data);
        setConfirmed(true);
      });
    // .catch((error: { message: any; }) => console.log('error:', error.message))
  }, [dispatch, token]);

  // if response "ok" -> dispatch(setUser(data)), setConfirmed(true)
  return (
    <>
      <h2>Email confirmation</h2>
      <div className="mt-20">{/* icon ok */}</div>
      {confirmed ? <p>Congratulations registration succesful</p> : <p>Email confirmation false ...</p>}
      <button className="mt-20" onClick={goToHomePage}>
        [ START ]
      </button>
    </>
  );
};
export default ConfirmEmailPage;
