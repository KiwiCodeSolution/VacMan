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
  const { _id, companyName, position, salary, currency, status, cardColor, userRank, actions, companyURL, archived } =
    shortVacancy;
  const effect = `hover:scale-110 focus:scale-110 transition-transform duration-300`;
  const archivalText = `${archived ? `text-txt-main` : `text-txt-black`}`;

  return (
    <div>
      <ul
        className={`relative flex flex-col gap-y-1 rounded-xl p-4 shadow-xl ${colorVariants[cardColor]} ${archivalText} hover:shadow-2xl focus:shadow-2xl max-w-[328px] sm:max-w-[400px] md:max-w-[460px] lg:max-w-[480px] mx-auto`}
      >
        <button className={`absolute top-4 right-[14px] ${effect}`}>
          <Link to={`${_id}/details`}>
            <Icons.Eye size={32} />
          </Link>
        </button>
        <li className="flex gap-x-2 gap-y-1 font-bold">
          <Icons.CompanyName size={24} />
          {companyURL ? (
            <a href={companyURL} target="_blank" rel="noreferrer">
              {companyName}
            </a>
          ) : (
            <p>{companyName}</p>
          )}
        </li>
        <li className="flex gap-x-2 gap-y-1">
          <Icons.Position size={24} />
          <p>{position}</p>
        </li>
        <li className="flex gap-x-2 gap-y-1">
          <Icons.Action size={24} />
          {actions ? (
            actions.map(({ name, deadline }) => <span key={deadline}>{name}, </span>)
          ) : (
            <p>You have no action</p>
          )}
        </li>
        <li className="flex gap-x-2 gap-y-1">
          <Icons.Stage size={24} />
          <p>{status}</p>
        </li>
        <li className="flex gap-x-2 gap-y-1">
          <Icons.Salary size={24} />
          <p>
            {salary}
            {currency}
          </p>
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
                <Icons.Trash size="30" />
              </button>

              <button
                type="button"
                onClick={() => {
                  updateVacancy({ _id, archived: false });
                }}
                className={`${effect}`}
              >
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
