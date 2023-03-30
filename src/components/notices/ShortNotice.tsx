/* eslint-disable react/jsx-no-useless-fragment */
import { Link } from "react-router-dom";

import * as Icons from "components/iconsComponents";
import Stars from "components/ui/stars";
import { IVacancy, useDeleteVacancyMutation, useUpdateVacancyMutation } from "redux/VacancyQueries";

type VacancyProps = {
  shortVacancy: IVacancy;
};

export interface IColor {
  [key: string]: string;
}

export const colorVariants = {
  red: "bg-app-red",
  blue: "bg-app-blue",
  green: "bg-app-green",
  pink: "bg-app-pink",
  smoke: "bg-app-smoke",
  grey: "bg-app-grey",
  yellow: "bg-app-yellow",
  mustard: "bg-app-mustard",
  orange: "bg-app-orange",
} as IColor;

const ShortNote = ({ shortVacancy }: VacancyProps) => {
  const [updateVacancy] = useUpdateVacancyMutation();
  const [deleteVacancy] = useDeleteVacancyMutation();
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { _id, companyName, position, salary, status, cardColor, userRank, actions, companyURL, archived } =
    shortVacancy;
  const effect = `hover:scale-110 focus:scale-110`;
  const archival = `${archived ? `#5b5b69` : `#040c0c`}`;
  const archivalText = `${archived ? `text-txt-main` : `text-txt-black`}`;

  return (
    <div>
      <ul
        className={`relative flex flex-col gap-y-1 rounded-xl p-4 shadow-xl ${colorVariants[cardColor]} ${archivalText} hover:shadow-2xl focus:shadow-2xl max-w-[328px] sm:max-w-[400px] md:max-w-[460px] lg:max-w-[480px] mx-auto`}
      >
        <button className={`absolute top-4 right-[14px] ${effect}`}>
          <Link to={`${_id}/details`}>
            <Icons.Eye stroke={archival} />
          </Link>
        </button>
        <li className="flex gap-x-2 gap-y-1 font-bold">
          <Icons.CompanyName fill={archival} />
          {companyURL ? (
            <a href={companyURL} target="_blank" rel="noreferrer">
              {companyName}
            </a>
          ) : (
            <p>{companyName}</p>
          )}
        </li>
        <li className="flex gap-x-2 gap-y-1">
          <Icons.Position fill={archival} />
          <p>{position}</p>
        </li>
        <li className="flex gap-x-2 gap-y-1">
          <Icons.Action stroke={archival} />
          {actions ? (
            actions.map(({ name, deadline }) => <span key={deadline}>{name}, </span>)
          ) : (
            <p>You have no action</p>
          )}
        </li>
        <li className="flex gap-x-2 gap-y-1">
          <Icons.Stage stroke={archival} fill={archival} />
          <p>{status}</p>
        </li>
        <li className="flex gap-x-2 gap-y-1">
          <Icons.Salary stroke={archival} />
          <p>{salary}$</p>
        </li>
        <li className="absolute bottom-2 right-[14px]">
          {!archived ? (
            <Stars amount={5} active={userRank} />
          ) : (
            <div className="flex gap-1">
              <button
                type="button"
                onClick={() => {
                  deleteVacancy({ _id });
                }}
                className={`${effect}`}
              >
                <Icons.Trash stroke={archival} size="30" />
              </button>

              <button
                type="button"
                onClick={() => {
                  updateVacancy({ _id, archived: false });
                }}
                className={`${effect}`}
              >
                <Icons.Recover stroke={archival} />
              </button>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default ShortNote;
