/* eslint-disable react/jsx-no-useless-fragment */
import { Link } from 'react-router-dom';

import * as Icons from 'components/iconsComponents';
import Stars from 'components/ui/stars';
import { IVacancy, useDeleteVacancyMutation, useUpdateVacancyMutation } from 'redux/VacancyQueries';

type VacancyProps = {
  shortVacancy: IVacancy;
};

export interface IColor {
  [key: string]: string;
}

export const colorVariants = {
  red: 'bg-app-red',
  blue: 'bg-app-blue',
  green: 'bg-app-green',
  pink: 'bg-app-pink',
  smoke: 'bg-app-smoke',
  grey: 'bg-app-grey',
  yellow: 'bg-app-yellow',
  mustard: 'bg-app-mustard',
  orange: 'bg-app-orange',
} as IColor;

const ShortNote = ({ shortVacancy }: VacancyProps) => {
  const [updateVacancy] = useUpdateVacancyMutation();
  const [deleteVacancy] = useDeleteVacancyMutation();
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { _id, companyName, position, salary, status, cardColor, userRank, actions, companyURL, archived } =
    shortVacancy;

  return (
    <div>
      <ul
        className={`relative flex flex-col gap-y-1 min-w-[328px] rounded-xl p-4 shadow-[0_5px_20px_-5px_rgba(0,0,0,0.3)] ${
          colorVariants[cardColor]
        } ${archived ? `text-txt-main` : `text-txt-black`} hover:scale-105 focus:scale-105`}
      >
        <button className="absolute top-4 right-[14px] hover:scale-110 focus:scale-110">
          <Link to={`${_id}/details`}>{archived ? <Icons.Eye stroke /> : <Icons.Eye />}</Link>
        </button>
        <li className="flex gap-x-2 gap-y-1 font-bold">
          {archived ? <Icons.CompanyName archived /> : <Icons.CompanyName />}
          {companyURL ? (
            <a href={companyURL} target="_blank" rel="noreferrer">
              {companyName}
            </a>
          ) : (
            <p>{companyName}</p>
          )}
        </li>
        <li className="flex gap-x-2 gap-y-1">
          {archived ? <Icons.Position large archived /> : <Icons.Position large />}
          <p>{position}</p>
        </li>
        <li className="flex gap-x-2 gap-y-1">
          {archived ? <Icons.Action archived /> : <Icons.Action />}
          {actions ? (
            actions.map(({ name, deadline }) => <span key={deadline}>{name}, </span>)
          ) : (
            <p>You have no action</p>
          )}
        </li>
        <li className="flex gap-x-2 gap-y-1">
          {archived ? <Icons.Stage archived /> : <Icons.Stage />}
          <p>{status}</p>
        </li>
        <li className="flex gap-x-2 gap-y-1">
          {archived ? <Icons.Salary archived /> : <Icons.Salary />}
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
              >
                <Icons.Trash />
              </button>

              <button
                type="button"
                onClick={() => {
                  updateVacancy({ _id, archived: false });
                }}
              >
                <Icons.Recover />
              </button>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default ShortNote;
