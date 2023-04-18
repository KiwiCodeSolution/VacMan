import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { passCodeVerify } from "redux/userOperations";
import { setIsAuth } from "redux/userSlice";
import Button from "components/ui/button";

const PassCodeVerifyPage = () => {
  const [searchParams] = useSearchParams();
  const verificationCode = searchParams.get("PassRestoreCode");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { passCodeVerified } = useAppSelector(state => state.user);

  const goToHomePage = () => {
    dispatch(setIsAuth(true));
    navigate("/");
  };

  useEffect(() => {
    if (!verificationCode) return;
    dispatch(passCodeVerify({ verificationCode }));
  }, [dispatch, verificationCode]);

  return (
    <>
      <h2>Pass code verify page</h2>
      {passCodeVerified ? <p>Congratulations password restoration succesful</p> : <p>Password restoration false ...</p>}
      <Button variant="black" clickFn={goToHomePage}>
        START
      </Button>
    </>
  );
};
export default PassCodeVerifyPage;
