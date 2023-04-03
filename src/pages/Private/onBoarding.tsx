import { useState } from "react";
import { useAppDispatch } from "hooks/reduxHooks";
import { setOnBoarding } from "redux/userSlice";
import * as Icons from "components/iconsComponents";
import Dots from "components/ui/dots";
import { Link } from "react-router-dom";

interface IimageUrl {
  [key: number]: string;
}

const imageUrls: IimageUrl = {
  1: "bg-[url('./img/images/onboarding_step_1.png')]",
  2: "bg-[url('./img/images/onboarding_step_2.png')]",
  3: "bg-[url('./img/images/onboarding_step_3.png')]",
  4: "bg-[url('./img/images/onboarding_step_4.png')]",
};

const text = [
  "We can help you organize your job search",
  "We will complete all the necessary tasks on time",
  "We will track your progress on the way to meeting your goals",
  "Stop reading it, Do it !",
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

  const currentBackground =
    onBoardingPage - 1 === 0 || onBoardingPage - 1 === 2
      ? "bg-[url('./img/images/onboarding_1_white.png')]"
      : "bg-[url('./img/images/onboarding_2_white.png')]";

  return (
    <div
      className={`flex mx-auto w-[22.5rem] h-[45rem] flex-col justify-between ${imageUrls[onBoardingPage]} bg-no-repeat bg-contain`}
    >
      <div className="flex justify-between py-5 px-4">
        <button type="button" onClick={goBack}>
          {/* <Icons.ArrowBack white /> */}
          <Icons.ArrowBack size="32" className="fill-txt-white stroke-txt-black" />
        </button>
        {onBoardingPage < 4 ? (
          <Link to="addUserData">
            <button
              type="button"
              className="flex gap-px justify-between items-center"
              onClick={() => dispatch(setOnBoarding(false))}
            >
              <span className="font-semibold text-base text-txt-white ">Skip</span>
              <Icons.ArrowForward size="32" className="fill-txt-white stroke-txt-black" />
            </button>
          </Link>
        ) : null}
      </div>
      <div className={`px-4 w-[100%] h-[22rem] pt-16 pb-[72px] bottom-0 ${currentBackground}`}>
        <h2 className="font-medium text-4xl text-txt-black">onBoarding page</h2>
        <p className="mt-4 text-xl text-txt-main">{text[onBoardingPage - 1]}</p>
        {onBoardingPage < 4 ? (
          <div className="flex justify-between mt-20">
            <Dots amount={text.length} activeIndex={onBoardingPage - 1} />
            <button type="button" className="flex gap-px justify-between items-center" onClick={goNext}>
              <span>Next</span>
              <Icons.ArrowForward />
            </button>
          </div>
        ) : (
          <div className="flex mt-20 justify-end">
            <button
              type="button"
              className="w-36 h-12 bg-btn-black rounded-xl"
              onClick={() => dispatch(setOnBoarding(false))}
            >
              <p className="font-medium text-base text-txt-white">Lets Start</p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OnBoarding;
