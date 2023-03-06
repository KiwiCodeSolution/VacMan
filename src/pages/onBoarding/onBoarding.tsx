import { useState } from 'react';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { setOnBoarding } from '../../redux/userSlice';
import * as Icons from '../../img/iconsComponents';
import Dots from '../../components/ui/dots';
import './styles.css';

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
    <div className="onboarding__container">
      <div className="onboarding__wrapper py-5 px-4">
        <button type="button" onClick={goBack}>
          <Icons.ArrowBack white />
        </button>
        <button type="button" className="onboarding__button_wrapper" onClick={() => dispatch(setOnBoarding(false))}>
          <span>Skip</span> <Icons.ArrowForward white />
        </button>
      </div>
      <div className="onboarding__content">
        <h2 className="onboarding__content_title">onBoarding page</h2>
        <p className="onboarding__content_wrapper">{text[onBoardingPage - 1]}</p>

        {/* position bar */}
        {onBoardingPage < 4 ? (
          <div className="onboarding__wrapper mt-20">
            <Dots amount={text.length} activeIndex={onBoardingPage - 1} />
            <button type="button" className="onboarding__button_wrapper" onClick={goNext}>
              <span>Next</span>
              <Icons.ArrowForward />
            </button>
          </div>
        ) : (
          <button type="button" onClick={() => dispatch(setOnBoarding(false))}>
            [ Lets Start ]
          </button>
        )}
      </div>
    </div>
  );
};

export default OnBoarding;
