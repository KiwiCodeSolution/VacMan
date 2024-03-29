/* eslint-disable prettier/prettier */
import { Link, useLocation } from "react-router-dom";
import * as Icons from "components/iconsComponents";
import Stars from "components/ui/stars";
import { IVacancy } from "redux/VacancyQueries";
import useHandleVacancy from "hooks/handleVacancy";
import { colorVariants, effectIcon, effectItem } from "utils/stylesHelpers";

type VacancyProps = {
  shortVacancy: IVacancy;
};

export interface IColor {
  [key: string]: string;
}

const ShortNote = ({ shortVacancy }: VacancyProps) => {
  const { handleArchive, removeVacancy } = useHandleVacancy();
  const location = useLocation();

  const { _id, companyName, position, salary, cardColor, userRank, actions, archived } = shortVacancy;
  const archivalText = `${archived ? `text-txt-main` : `text-txt-black`}`;

  return (
    <div>
      <ul
        className={`relative flex flex-col gap-y-1 rounded-xl p-4 shadow-xl ${colorVariants[cardColor]} ${archivalText} ${effectItem} max-w-[328px] sm:max-w-[400px] md:max-w-[460px] lg:max-w-[480px] mx-auto`}
      >
        <button className={`absolute top-4 right-[14px] ${effectIcon}`}>
          <Link to={`/${_id}/details`} state={{ from: location }}>
            <Icons.Eye size={32} />
          </Link>
        </button>
        <li className="flex gap-x-2 gap-y-1 font-bold">
          <Icons.CompanyName size={24} />
          <p>{companyName}</p>
        </li>
        <li className="flex gap-x-2 gap-y-1">
          <Icons.Position size={24} />
          <p>{position}</p>
        </li>
        <li className="flex gap-x-2 gap-y-1">
          <Icons.Action size={24} />
          {actions.length ? actions[actions.length - 1].name : <p>You have no action</p>}
        </li>
        <li className="flex gap-x-2 gap-y-1">
          <Icons.Salary size={24} />
          <p>{salary}</p>
        </li>
        <li className="absolute bottom-2 right-[14px]">
          {!archived ? (
            <Stars amount={5} active={userRank} />
          ) : (
            <div className="flex gap-1">
              <button type="button" onClick={() => removeVacancy(_id)} className={`${effectIcon}`}>
                <Icons.Trash size="30" />
              </button>

              <button type="button" onClick={() => handleArchive(_id, false)} className={`${effectIcon}`}>
                <Icons.Recover size="32" />
              </button>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default ShortNote;
