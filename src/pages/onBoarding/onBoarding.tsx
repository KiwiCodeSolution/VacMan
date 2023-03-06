import { useState } from 'react';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { setOnBoarding } from '../../redux/userSlice';
import * as Icons from '../../img/iconsComponents';
import Dots from '../../components/ui/dots';

const text = [
  'We can help you organize your job search',
  'We will complete all the necessary tasks on time',
  'We will track your progress on the way to meeting your goals',
  'Stop reading it, Do it !',
];

const OnBoarding = () => {
  const [onBoardingPage, setOnBoardingPage] = useState<number>(1);
  const dispatch = useAppDispatch();

  const goBack = () => {
    if (onBoardingPage > 1) setOnBoardingPage(onBoardingPage - 1);
  };
  const goNext = () => {
    if (onBoardingPage < 4) setOnBoardingPage(onBoardingPage + 1);
  };

  return (
    <div className="container mx-auto px-4">
      <button type="button" onClick={goBack}>
        <Icons.ArrowBack />
        {/* [ Go back ] */}
      </button>
      <button type="button" onClick={() => dispatch(setOnBoarding(false))}>
        [ Skip ]
        <Icons.ArrowForward white />
      </button>
      <h2>onBoarding page</h2>
      <p>{text[onBoardingPage - 1]}</p>
      <Dots amount={4} activeIndex={onBoardingPage - 1} />
      {/* position bar */}
      {onBoardingPage < 4 ? (
        <button type="button" onClick={goNext}>
          [ Next ]<Icons.ArrowForward />
        </button>
      ) : (
        <button type="button" onClick={() => dispatch(setOnBoarding(false))}>
          [ Lets Start ]
        </button>
      )}
    </div>
  );
};

export default OnBoarding;
