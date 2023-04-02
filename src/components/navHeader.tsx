import { Link } from "react-router-dom";
import * as Icons from "components/iconsComponents";

interface IProps {
  prevAddress?: string;
  text: string;
  link?: string;
  nextAddress?: string;
  bg?: "bg-light";
}
const NavHeader = ({ bg, prevAddress, text, link, nextAddress }: IProps) => {
  const bgColor = bg ? `bg-${bg}` : "bg-transparent";
  return (
    <div
      className={`flex sticky top-0 z-10 pt-6 pb-4 justify-between bg-[bgColor] items-center ${bgColor} border-b border-txt-grey`}
    >
      {prevAddress ? (
        <button className="flex-none hover:scale-110 focus:scale-110">
          <Link to={prevAddress}>
            <Icons.ArrowBack />
          </Link>
        </button>
      ) : (
        <p> </p>
      )}

      {link ? (
        // eslint-disable-next-line prettier/prettier
        <a href={link} className="text-txt-link text-2xl font-medium">{text}</a>
      ) : (
        <p className="text-center text-2xl font-medium">{text}</p>
      )}

      {nextAddress ? (
        <Link to={nextAddress}>
          <button type="button" className="flex gap-px justify-between items-center hover:scale-110 focus:scale-110">
            <span className="font-semibold text-base text-txt-main mx-3">Skip </span>
            <Icons.ArrowForward className="fill-txt-main stroke-txt-main" />
          </button>
        </Link>
      ) : (
        <p> </p>
      )}
    </div>
  );
};
export default NavHeader;
