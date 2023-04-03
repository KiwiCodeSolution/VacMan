/* eslint-disable prettier/prettier */
import circle from "assets/icons/circle.svg";
import triangle from "assets/icons/triangle.svg";

export default function Loader({ active }: { active?: boolean }) {
  console.log("Spinner active:", active);
  return (
    <div className="relativel">
      <div className="w-36 h-36 absolute top-2/4  left-2/4 -translate-x-1/2 -translate-y-1/2">
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
