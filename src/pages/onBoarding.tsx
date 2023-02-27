import { useState } from 'react';
import { useAppDispatch } from '../hooks/reduxHooks';

import { setFirstTime } from '../redux/userSlice';

const text = [
  'We can help you organize your job search',
  'We will complete all the necessary tasks on time',
  'We will track your progress on the way to meeting your goals',
];

const OnBoarding = () => {
  const [onBoardingPage, setOnBoardingPage] = useState<number>(1);
  const dispatch = useAppDispatch();

  const goBack = () => {
    if (onBoardingPage > 1) setOnBoardingPage(onBoardingPage - 1);
  };
  const goNext = () => {
    if (onBoardingPage < 3) setOnBoardingPage(onBoardingPage + 1);
  };

  return (
    <>
      <button type="button" onClick={goBack}>
        [ Go back ]
      </button>
      <button type="button" onClick={() => dispatch(setFirstTime(false))}>
        [ Skip ]
      </button>
      <h2>onBoarding page</h2>
      <p>{text[onBoardingPage - 1]}</p>
      {/* position bar */}
      {onBoardingPage < 3 ? (
        <button type="button" onClick={goNext}>
          [ Next ]
        </button>
      ) : (
        <button type="button" onClick={() => dispatch(setFirstTime(false))}>
          [ Lets Start ]
        </button>
      )}
    </>
  );
};

export default OnBoarding;
