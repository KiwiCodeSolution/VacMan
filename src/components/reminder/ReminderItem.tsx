/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-shadow */
// import { useGetVacanciesQuery } from "redux/VacancyQueries";
import { IVacancy } from "redux/VacancyQueries";
import * as Icons from "components/iconsComponents";
import { colorVariants } from "components/notices/ShortNotice";

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
  const { actions, cardColor } = vacancy;

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

  return (
    <ul className="flex flex-col gap-y-1 rounded-2xl shadow-xl hover:shadow-2xl focus:shadow-2xl w-[328px] sm:max-w-[400px] md:max-w-[460px] lg:max-w-[480px] mx-auto border">
      <li className="flex justify-between px-3 mt-3">
        <div className="flex items-center gap-x-2 py-[2px] px-[10px] border border-bg-grey rounded-3xl">
          <Icons.Bell /> {convertDate(deadlineItem)}
        </div>
        <div className="flex items-center gap-x-2 py-[2px] px-[10px] border border-bg-grey rounded-3xl">
          <Icons.Clock />
          {convertTime(deadlineItem)}
        </div>
      </li>

      <li className="px-5">
        {/* Deadline for */}
        <p>
          <span className="font-semibold">Company:</span> "{vacancy.companyName}"
        </p>
        <p>
          <span className="font-semibold">Vacancy:</span> {vacancy.position}
        </p>
        <p>
          <span className="font-semibold">Action:</span> {actionItem.name}
        </p>
      </li>

      <li
        className={`flex justify-between align-baseline pt-2 gap-x-4 px-3 pb-2 ${colorVariants[cardColor]} border-b-0 rounded-xl`}
      >
        <button
          type="button"
          className="flex justify-center items-center gap-x-5 py-[4px] px-[10px] border border-bg-grey rounded-3xl w-full hover:shadow-[0_5px_20px_-5px_rgba(0,0,0,0.3)] focus:shadow-[0_5px_20px_-5px_rgba(0,0,0,0.3)]"
        >
          Edit <Icons.Edit />
        </button>
        <button
          type="button"
          className="flex justify-center items-center gap-x-5 py-[4px] px-[10px] border border-bg-grey rounded-3xl w-full hover:shadow-[0_5px_20px_-5px_rgba(0,0,0,0.3)] focus:shadow-[0_5px_20px_-5px_rgba(0,0,0,0.3)]"
        >
          Fulfilled <Icons.Checked />
        </button>
      </li>
    </ul>
  );
};

export default ReminderItem;
