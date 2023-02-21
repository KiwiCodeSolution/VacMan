import circle from '../../../assets/icons/circle.svg';
import triangle from '../../../assets/icons/triangle.svg';

export default function Loader() {
  return (
    <div className="relative">
      <img src={circle} className="absolute top-0 left-0 z-0 animate-spin 0.8s linear infinite" alt="spinner circle" />
      <img src={triangle} className="absolute top-0 left-0 z-2" alt="logo" />
    </div>
  );
}
