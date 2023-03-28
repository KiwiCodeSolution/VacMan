import Footer from 'components/footer';
import Header from 'components/Header';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks/reduxHooks';
// import Main from './main';
import OnBoarding from './onBoarding/onBoarding';

const Entrance = () => {
  const { onBoarding } = useAppSelector(state => state.user);
  return onBoarding ? (
    <OnBoarding />
  ) : (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Entrance;
