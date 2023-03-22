/* eslint-disable react/jsx-no-useless-fragment */
import * as Icons from 'components/iconsComponents';
import Stars from 'components/ui/stars';

import { useAppDispatch } from 'hooks/reduxHooks';
import { setIsOpenFullNotice, setNoteId } from 'redux/noticeSlice';

export interface IAction {
  name: string;
  deadline: string;
}

interface IVacancy {
  _id: string;
  companyName: string | undefined;
  position: string | undefined;
  salary: number | undefined;
  status: string | undefined;
  color: string;
  active: number;
  actions: IAction[] | undefined;
  archived: boolean | undefined;
}

export interface IColor {
  [key: string]: string | undefined;
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

const ShortNote = ({ _id, companyName, position, salary, status, color, active, actions, archived }: IVacancy) => {
  const dispatch = useAppDispatch();

  function openFullNotice() {
    dispatch(setIsOpenFullNotice(true));
    dispatch(setNoteId(_id));
  }

  return (
    <div>
      {!archived ? (
        <ul
          className={`border-solid border-2 min-w-[328px] rounded-xl py-4 pr-4 pl-2 gap-y-1 flex flex-col relative mt-4 ${colorVariants[color]}`}
        >
          <button className="absolute top-2 right-[14px]" onClick={openFullNotice}>
            <Icons.Eye />
          </button>
          <li className="flex gap-x-2 gap-y-1 font-bold">
            <Icons.CompanyName />
            <p>{companyName}</p>
          </li>
          <li className="flex gap-x-2 gap-y-1">
            <Icons.Position large />
            <p>{position}</p>
          </li>
          <li className="flex gap-x-2 gap-y-1">
            <Icons.Action />
            {actions?.join(', ')}
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
