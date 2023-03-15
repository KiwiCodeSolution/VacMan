import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { emailVerify } from '../redux/userOperations';
import { useAppDispatch } from '../hooks/reduxHooks';
import { setIsAuth } from '../redux/userSlice';

const ConfirmEmailPage = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const goToHomePage = () => {
    dispatch(setIsAuth(true));
    navigate('/');
  };

  // send request on server with code
  useEffect(() => {
    if (!token) return;
    dispatch(emailVerify({ token }));
    setConfirmed(true);
  }, [dispatch, token]);

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
