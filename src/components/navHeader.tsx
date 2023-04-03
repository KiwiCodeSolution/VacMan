import { Link } from "react-router-dom";
import * as Icons from "components/iconsComponents";

interface IProps {
  prevAddress?: string;
  text: string;
  textWhite?: boolean;
  link?: string;
  nextAddress?: string;
  editAddress?: string;
  bg?: "bg-light" | "bg-grey" | "bg-black";
}
const NavHeader = ({ bg, prevAddress, text, textWhite, link, nextAddress, editAddress }: IProps) => {
  const bgColor = bg ? `bg-${bg}` : "bg-transparent";
  const textColor = textWhite ? "text-txt-white" : null;
  return (
    <div
      className={`flex sticky top-0 z-10 pt-6 pb-4 justify-between bg-[bgColor] items-center ${bgColor} border-b border-txt-grey`}
    >
      {prevAddress ? (
        <button className="flex-none hover:scale-110 focus:scale-110">
          <Link to={prevAddress}>
            <Icons.ArrowBack size={32} />
          </Link>
        </button>
      ) : (
        <p> </p>
      )}

      {link ? (
        // eslint-disable-next-line prettier/prettier
        <a href={link} className="text-txt-link text-2xl font-medium grow text-center">
          {text}
        </a>
      ) : (
        <p className={`text-center text-2xl font-medium ${textColor} grow`}>{text}</p>
      )}

      {nextAddress ? (
        <Link to={nextAddress}>
          <button type="button" className="flex gap-px justify-between items-center hover:scale-110 focus:scale-110">
            <span className="font-semibold text-base text-txt-main mx-3">Skip </span>
            <Icons.ArrowForward size={32} className="fill-txt-main stroke-txt-main" />
          </button>
        </Link>
      ) : (
        <p> </p>
      )}

      {editAddress ? (
        <button type="button" className="flex-none hover:scale-110 focus:scale-110">
          <Link to={editAddress}>
            <Icons.Edit size={24} className="fill-txt-black stroke-txt-black" />
          </Link>
        </button>
      ) : (
        <p> </p>
      )}
    </div>
  );
};
export default NavHeader;
