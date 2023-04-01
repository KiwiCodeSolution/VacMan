import { Outlet } from "react-router-dom";
import { useAppSelector } from "hooks/reduxHooks";
import OnBoarding from "./onBoarding";
import Footer from "components/footer";

const Entrance = () => {
  const { onBoarding } = useAppSelector(state => state.user);
  return onBoarding ? (
    <OnBoarding />
  ) : (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default Entrance;
