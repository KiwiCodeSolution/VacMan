/* eslint-disable prettier/prettier */
import circle from "assets/icons/circle.svg";
import triangle from "assets/icons/triangle.svg";

export default function Loader({ active, absolute }: { active?: boolean; absolute?: boolean }) {
  // console.log("Spinner active:", active);
  const position = absolute && "absolute m-auto left-0 right-0";
  return (
    <div className="relative">
      <div className={`w-36 h-36 my-20 ${position}`}>
        <img
          src={circle}
          className={
            active === true
              ? `absolute h-full top-0 left-0 z-0 animate-spin 0.8s linear infinite`
              : `absolute h-full top-0 left-0 z-0`
          }
          alt="spinner circle"
        />
        <img src={triangle} className="absolute h-full top-0 left-0 z-2" alt="logo" />
      </div>
    </div>
  );
}
