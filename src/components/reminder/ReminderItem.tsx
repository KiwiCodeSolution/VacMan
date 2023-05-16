/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-shadow */
// import { useGetVacanciesQuery } from "redux/VacancyQueries";
import { IVacancy } from "redux/VacancyQueries";
import * as Icons from "components/iconsComponents";
import { colorVariants, effectIcon, effectItem } from "components/notices/ShortNotice";
import { Link, useLocation } from "react-router-dom";
import { effectButton } from "components/ui/button";
import useHandleVacancy from "hooks/handleVacancy";

export interface IReminderVacancy {
  date: number;
  name: string;
  deadline: number;
  fulfilled: boolean;
}

type ReminderProps = {
  vacancy: IVacancy;
};

const ReminderItem = ({ vacancy }: ReminderProps) => {
  const location = useLocation();
  const { editVacancy } = useHandleVacancy();
  const { actions, cardColor, _id } = vacancy;

  const actionItem = actions[actions.length - 1];
  const deadlineItem = actionItem.deadline as IReminderVacancy["deadline"];

  const convertDate = (deadlineDate: number) => {
    const dateFormat = new Date(deadlineDate);
    const month = dateFormat.getMonth() + 1;
    return `${dateFormat.getDate()}.${month < 10 ? "0" : ""}${month}.${dateFormat.getFullYear()}`;
  };

  const convertTime = (deadlineDate: number) => {
    const dateFormat = new Date(deadlineDate);
    const hour = dateFormat.getHours();
    const min = dateFormat.getMinutes();
    return `${hour}:${min > 10 ? min : `0${min}`}`;
  };

  const updateAction = { actions };

  function fulfilled() {
    editVacancy({ _id, data: updateAction });
  }

  return (
    <ul
      className={`flex flex-col gap-y-2 rounded-2xl focus:shadow-2xl w-[328px] sm:max-w-[400px] md:max-w-[460px] lg:max-w-[480px] mx-auto border relative ${effectItem}`}
    >
      <li className="flex justify-between px-3 mt-3">
        <div className="flex items-center gap-x-4 py-[2px] px-[10px] border border-bg-grey rounded-3xl">
          <div className="flex items-center gap-x-2">
            <Icons.Bell /> {convertDate(deadlineItem)}
          </div>
          <div className="flex items-center gap-x-2">
            <Icons.Clock /> {convertTime(deadlineItem)}
          </div>
        </div>
        <button className={`absolute top-3 right-3 ${effectIcon}`}>
          <Link to={`/${_id}/details`} state={{ from: location }}>
            <Icons.Eye size={32} />
          </Link>
        </button>
      </li>
      <li className="px-5 flex flex-col gap-y-1">
        <p className="flex gap-x-2 gap-y-1 font-bold">
          <Icons.CompanyName size={24} />
          Company: "{vacancy.companyName}"
        </p>
        <p className="flex gap-x-2 gap-y-1">
          <Icons.Position size={24} /> Vacancy: {vacancy.position}
        </p>
        <p className="flex gap-x-2 gap-y-1">
          <Icons.Action size={24} /> Action: {actionItem.name}
        </p>
      </li>

      <li
        className={`flex justify-between align-baseline pt-2 gap-x-4 px-3 pb-2 ${colorVariants[cardColor]} border-b-0 rounded-xl`}
      >
        <button
          type="button"
          className={`flex justify-center items-center gap-x-3 py-[4px] px-[10px] border border-bg-grey rounded-3xl w-full ${effectButton}`}
        >
          <Icons.Edit />
          Edit
        </button>
        <button
          type="button"
          className={`flex justify-center items-center gap-x-3 py-[4px] px-[10px] border border-bg-grey rounded-3xl w-full ${effectButton}`}
          onClick={() => {
            fulfilled();
          }}
        >
          <Icons.Checked />
          Fulfilled
        </button>
      </li>
    </ul>
  );
};

export default ReminderItem;
