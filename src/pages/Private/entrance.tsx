import Footer from "components/footer";
import Header from "components/Header";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "hooks/reduxHooks";
import OnBoarding from "./onBoarding";

const Entrance = () => {
  const { onBoarding } = useAppSelector(state => state.user);
  return onBoarding ? (
    <OnBoarding />
  ) : (
    <>
      <Header />
      <div className="px-4">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Entrance;
