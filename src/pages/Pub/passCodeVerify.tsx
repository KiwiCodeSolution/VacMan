import { useEffect } from "react";
import { useSearchParams, Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { passCodeVerify } from "redux/userOperations";

const PassCodeVerifyPage = () => {
  const [searchParams] = useSearchParams();
  const verificationCode = searchParams.get("PassRestoreCode");
  const dispatch = useAppDispatch();
  const { passCodeVerifyed } = useAppSelector(state => state.user);

  useEffect(() => {
    if (!verificationCode) return;
    dispatch(passCodeVerify({ verificationCode }));
  }, [dispatch, verificationCode]);

  return (
    <>
      <h2>Pass code verify page</h2>
      {passCodeVerifyed && <Navigate to="/profile" replace />}
    </>
  );
};
export default PassCodeVerifyPage;
