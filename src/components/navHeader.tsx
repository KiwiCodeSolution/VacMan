import { Link } from "react-router-dom";
import * as Icons from "components/iconsComponents";

interface IProps {
  prevAddress?: string;
  text: string;
  ref?: string;
  nextAddress?: string;
}
const NavHeader = ({ prevAddress, text, ref, nextAddress }: IProps) => {
  return (
    <div className="flex justify-between">
      {prevAddress && (
        <button className="flex-none hover:scale-110 focus:scale-110">
          <Link to={prevAddress}>
            <Icons.ArrowBack />
          </Link>
        </button>
      )}

      {ref ? <a href={ref}>{text}</a> : <p className="text-center text-2xl">{text}</p>}

      {nextAddress && (
        <button type="button" className="flex gap-px justify-between items-center">
          <span className="font-semibold text-base text-txt-main mx-3">Skip </span>
          <Icons.ArrowForward className="fill-txt-main stroke-txt-main" />
        </button>
      )}
    </div>
  );
};
export default NavHeader;
