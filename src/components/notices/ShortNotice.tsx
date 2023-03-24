/* eslint-disable react/jsx-no-useless-fragment */
import * as Icons from 'components/iconsComponents';
import Stars from 'components/ui/stars';

import { useAppDispatch } from 'hooks/reduxHooks';
import { setIsOpenFullNotice, setNoteId } from 'redux/noticeSlice';
import { IAction } from 'redux/VacancyQueries';

interface IShortVacancy {
  _id: string;
  companyName: string;
  position: string;
  salary: number;
  status: string;
  color: string;
  active: number;
  actions: IAction[];
  archived: boolean;
  companyURL?: string;
}

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

const ShortNote = ({
  _id,
  companyName,
  position,
  salary,
  status,
  color,
  active,
  actions,
  archived,
  companyURL,
}: IShortVacancy) => {
  const dispatch = useAppDispatch();

  function openFullNotice() {
    dispatch(setIsOpenFullNotice(true));
    dispatch(setNoteId(_id));
  }

  return (
    <div>
      {!archived ? (
        <ul
          className={`shadow-[0_5px_20px_-5px_rgba(0,0,0,0.3)] min-w-[328px] rounded-xl py-4 pr-4 pl-2 gap-y-1 flex flex-col relative mt-4 ${colorVariants[color]}`}
        >
          <button className="absolute top-2 right-[14px] hover:scale-110 focus:scale-110" onClick={openFullNotice}>
            <Icons.Eye />
          </button>
          <li className="flex gap-x-2 gap-y-1 font-bold">
            <Icons.CompanyName />
            {companyURL ? (
              <a href={companyURL} target="_blank" rel="noreferrer">
                {companyName}
              </a>
            ) : (
              <p>{companyName}</p>
            )}
          </li>
          <li className="flex gap-x-2 gap-y-1">
            <Icons.Position large />
            <p>{position}</p>
          </li>
          <li className="flex gap-x-2 gap-y-1">
            <Icons.Action />
            {actions ? (
              actions.map(({ name, deadline }) => <span key={deadline}>{name}, </span>)
            ) : (
              <p>You have no action</p>
            )}
          </li>
          <li className="flex gap-x-2 gap-y-1">
            <Icons.Stage />
            <p>{status}</p>
          </li>
          <li className="flex gap-x-2 gap-y-1">
            <Icons.Salary />
            <p>{salary}$</p>
          </li>
          <li className="absolute bottom-2 right-[14px]">
            <Stars amount={5} active={active} />
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default ShortNote;