/* eslint-disable prettier/prettier */
import circle from 'assets/icons/circle.svg';
import triangle from 'assets/icons/triangle.svg';

export default function Loader({ active }: { active?: boolean }) {
  console.log('Spinner active:', active);
  return (
    <div className="w-36 h-36 relative">
      <img
        src={circle}
        className={ active === true ? `absolute h-full top-0 left-0 z-0 animate-spin 0.8s linear infinite` :
        `absolute h-full top-0 left-0 z-0` }
        alt="spinner circle"
      />
      <img src={triangle} className="absolute h-full top-0 left-0 z-2" alt="logo" />
    </div>
  );
}
