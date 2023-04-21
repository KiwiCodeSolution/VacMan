import { Link } from "react-router-dom";
import * as Icons from "components/iconsComponents";

interface IProps {
  prevAddress?: string;
  text?: string;
  textWhite?: boolean;
  link?: string;
  nextAddress?: string;
  editAddress?: string;
  skip?: string;
  bg?: "bg-light" | "bg-grey" | "bg-black";
  underlined?: boolean;
}
const NavHeader = ({ bg, prevAddress, text, textWhite, link, nextAddress, editAddress, skip, underlined }: IProps) => {
  const bgColor = bg ? `bg-${bg}` : "bg-transparent";
  const textColor = textWhite ? "text-txt-white" : undefined;
  const border = underlined ? "border-b border-txt-grey" : null;
  return (
    <div className={`flex sticky top-0 z-10 px-4 pt-6 pb-4 items-center ${bgColor} ${border}`}>
      <div className="w-16">
        {prevAddress ? (
          <button className="hover:scale-110 focus:scale-110">
            <Link to={prevAddress}>
              <Icons.ArrowBack size={32} className={textColor} />
            </Link>
          </button>
        ) : null}
      </div>

      {link ? (
        <a
          href={link}
          className="text-txt-link text-2xl font-semibold grow text-center"
          target="_blank"
          rel="noreferrer"
        >
          {text}
        </a>
      ) : (
        <p className={`text-center text-2xl font-semibold ${textColor} grow`}>{text}</p>
      )}

      <div className="w-16 flex justify-end">
        {nextAddress ? (
          <Link to={nextAddress}>
            <button type="button" className="flex gap-px items-center hover:scale-110 focus:scale-110">
              <span className="font-semibold text-base text-txt-main mx-3">Skip </span>
              <Icons.ArrowForward size={32} className="fill-txt-main stroke-txt-main" />
            </button>
          </Link>
        ) : null}

        {editAddress ? (
          <button type="button" className="hover:scale-110 focus:scale-110">
            <Link to={editAddress}>
              <Icons.Edit size={24} className="fill-txt-black stroke-txt-black" />
            </Link>
          </button>
        ) : null}

        {skip ? (
          <button type="button" className="hover:scale-110 focus:scale-110">
            <Link to={skip}>
              <span className="flex flex-raw">
                Skip
                <Icons.ArrowForward size={24} className="fill-txt-black stroke-txt-black" />
              </span>
            </Link>
          </button>
        ) : null}
      </div>
    </div>
  );
};
export default NavHeader;
