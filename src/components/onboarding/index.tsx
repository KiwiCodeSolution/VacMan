import { useState } from 'react';
import { useAppDispatch } from 'hooks/reduxHooks';
import { setOnBoarding } from 'redux/userSlice';
import * as Icons from '../iconsComponents';
import Dots from '../ui/dots';
import './styles.css';

const text = [
  'We can help you organize your job search',
  'We will complete all the necessary tasks on time',
  'We will track your progress on the way to meeting your goals',
  'Stop reading it, Do it !',
];

const Onboarding = () => {
  const [onBoardingPage, setOnBoardingPage] = useState<number>(1);
  const dispatch = useAppDispatch();

  const goBack = () => {
    if (onBoardingPage > 1) setOnBoardingPage(onBoardingPage - 1);
  };
  const goNext = () => {
    if (onBoardingPage < 4) setOnBoardingPage(onBoardingPage + 1);
  };

  const currentBackground =
    onBoardingPage - 1 === 0 || onBoardingPage - 1 === 2
      ? 'onboarding__content_firstbg'
      : 'onboarding__content_secondbg';

  const currentImage = `../../img/images/onboarding_step_${onBoardingPage}.png`;

  // switch (onBoardingPage) {
  //   case 2:
  //     currentImage = `onboarding__container_second-step`;
  //     break;
  //   case 3:
  //     currentImage = `onboarding__container_third-step`;
  //     break;
  //   case 4:
  //     currentImage = `onboarding__container_fourth-step`;
  //     break;
  //   default:
  //     currentImage = `onboarding__container_first-step`;
  // }

  return (
    <div className={`onboarding__container bg-[url(${currentImage})]`}>
      <div className="onboarding__wrapper py-5 px-4">
        <button type="button" onClick={goBack}>
          <Icons.ArrowBack white />
        </button>
        <button type="button" className="onboarding__button_wrapper" onClick={() => dispatch(setOnBoarding(false))}>
          <span className="onboarding__button_wrapper-text">Skip</span> <Icons.ArrowForward white />
        </button>
      </div>
      <div className={`onboarding__content  ${currentBackground}`}>
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
          <div className="onboarding__wrapper mt-20 justify-end">
            <button type="button" className="onboarding__button_start" onClick={() => dispatch(setOnBoarding(false))}>
              <p>Lets Start</p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Onboarding;
