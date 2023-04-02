import { Link } from "react-router-dom";
import { useAppSelector } from "hooks/reduxHooks";
import LoginForm from "components/forms/LoginForm";
import useGoogleAuth from "hooks/googleAuth";
import Button from "components/ui/button";
import GoogleLogo from "img/images/image 259.png";
import Logo from "components/ui/loader";

export default function LogInPage() {
  const googleAuth = useGoogleAuth();
  const { isLoading } = useAppSelector(state => state.user);

  return (
    <div className="container flex flex-col mx-auto px-4 py-5 h-screen">
      <div className="flex flex-col gap-y-6 items-center">
        <Logo active={isLoading} />
        <h1 className="text-2xl">Login</h1>
      </div>
      <LoginForm />
      <div className="mt-auto">
        <Button variant="white" clickFn={googleAuth}>
          <div className="flex flex-row items-center">
            <img className="mr-4" src={GoogleLogo} alt="google-logo" />
            Use Google
          </div>
        </Button>
        <div className="mt-6 text-center text-txt-main">
          Haven’t an account?
          <Link to="/signup">
            <span className="text-base font-bold"> Registration</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
