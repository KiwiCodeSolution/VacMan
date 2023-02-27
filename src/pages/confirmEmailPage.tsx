import { useState } from 'react';
import { useParams } from 'react-router';

const ConfirmEmailPage = () => {
  const { code } = useParams();
  const [confirmed, setConfirmed] = useState<boolean>(false);
  // send request on server with code
  // if response "ok" -> dispatch(setUser(data)), setConfirmed(true)
  return (
    <>
      <h2>Email confirmation</h2>
      {/* icon ok */}
      {confirmed ? <p>Congratulations registration succesful</p> : <p>Email confirmation false ...</p>}
    </>
  );
};
export default ConfirmEmailPage;
