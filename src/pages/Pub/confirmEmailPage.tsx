import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { emailVerify } from "redux/userOperations";
import { useAppSelector, useAppDispatch } from "hooks/reduxHooks";
import { setIsAuth } from "redux/userSlice";
import * as Icons from "components/iconsComponents";
import Button from "components/ui/button";

const ConfirmEmailPage = () => {
  const [searchParams] = useSearchParams();
  const verificationCode = searchParams.get("verificationCode");
  const { emailConfirmed } = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const goToHomePage = () => {
    dispatch(setIsAuth(true));
    navigate("/");
  };

  // send request on server with code
  useEffect(() => {
    if (!verificationCode) return;
    dispatch(emailVerify({ verificationCode }));
  }, [dispatch, verificationCode]);

  return (
    <div className="container px-4 mt-[152px] mb-[90px]">
      {emailConfirmed ? (
        <>
          <Icons.OkInCircle />
          <p className="mt-[50px]">Congratulations registration succesful</p>
          <Button variant="black" clickFn={goToHomePage}>
            START
          </Button>
        </>
      ) : (
        <>
          <Icons.FalseInCircle className="text-txt-orange" />
          <p className="mt-[50px]">Some troubles with</p>
          <p>email confirmation.</p>
          <p className="mt-4 mb-[132px]">Try to find another email with link or try to register again after 1 hour</p>
          <Button variant="black" clickFn={() => navigate("/register")}>
            Go to Registration Page
          </Button>
        </>
      )}
    </div>
  );
};
export default ConfirmEmailPage;
