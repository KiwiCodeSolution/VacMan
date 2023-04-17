import { Link } from "react-router-dom";
import useGoogleAuth from "hooks/googleAuth";
import RegisterForm from "components/forms/RegisterForm";
import Button from "components/ui/button";
import GoogleLogo from "img/images/image 259.png";
import Logo from "components/ui/loader";
import { useAppSelector } from "hooks/reduxHooks";
import NavHeader from "components/navHeader";

export default function SignUpPage() {
  const googleAuth = useGoogleAuth();
  const { isLoading } = useAppSelector(state => state.user);

  return (
    <>
      <NavHeader prevAddress="/login" />
      <div className="container flex flex-col mx-auto px-4 pt-3 h-screen">
        <div className="flex flex-col gap-y-6 items-center">
          <Logo active={isLoading} />
          <h1 className="text-2xl">Registration</h1>
        </div>
        <RegisterForm />
        <div className="mt-auto">
          <Button variant="white" clickFn={() => googleAuth()}>
            <div className="flex flex-row items-center">
              <img className="mr-4" src={GoogleLogo} alt="google logo" />
              Use Google
            </div>
          </Button>
          <div className="mt-6 text-center text-txt-main">
            Already have an account?
            <Link to="/login">
              <span className="text-base font-bold"> LOGIN</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
