import { useAppSelector } from '../hooks/reduxHooks';
import Main from './main';
import OnBoarding from './onBoarding';

const Entrance = () => {
  const { onBoarding } = useAppSelector(state => state.user);
  return onBoarding ? <OnBoarding /> : <Main />;
};

export default Entrance;
