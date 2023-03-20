/* eslint-disable react/jsx-no-useless-fragment */
import * as Icons from 'components/iconsComponents';
import Stars from 'components/ui/stars';

interface IAction {
  name: string;
  deadline: number;
}

interface IVacancy {
  companyName: string | undefined;
  position: string | undefined;
  salary: number | undefined;
  status: string | undefined;
  color: string | undefined;
  active: number | undefined;
  actions: IAction[] | undefined;
  archived: boolean | undefined;
}

const ShortNote = ({ companyName, position, salary, status, color, active = 5, actions, archived }: IVacancy) => {
  return (
    <>
      {!archived ? (
        <ul
          className={`border-solid border-2 w-[328px] rounded-xl py-4 pr-4 pl-2 gap-y-1 flex flex-col relative mt-4 bg-${color}`}
        >
          <button className="absolute top-2 right-[14px]">
            {/* {!archived ? <Icons.Eye /> : <Icons.Eye cross />} */}
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
    </>
  );
};

export default ShortNote;
