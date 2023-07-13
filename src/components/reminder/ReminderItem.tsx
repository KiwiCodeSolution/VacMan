/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable consistent-return */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-shadow */
import { IVacancy } from "redux/VacancyQueries";
import { format } from "date-fns";
import * as Icons from "components/iconsComponents";
import { Link, useLocation } from "react-router-dom";
import useHandleVacancy from "hooks/handleVacancy";
import { colorVariants, effectButton, effectIcon, effectItem } from "utils/stylesHelpers";

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
  const newActions = structuredClone(actions);

  const actionItem = actions.at(-1)!;
  const deadlineItem = actionItem.deadline!;
  const fulfilledItem = actionItem.fulfilled!;

  function fulfilled() {
    newActions.at(-1)!.fulfilled = true;
    editVacancy({ _id, data: { actions: newActions }, goBack: false });
  }
  function undoFulfilled() {
    newActions.at(-1)!.fulfilled = false;
    editVacancy({ _id, data: { actions: newActions }, goBack: false });
  }

  // styles

  const isFulfilledBg = actionItem.fulfilled && "bg-txt-grey";
  const disabledButtonStyle = !actionItem.fulfilled && `${effectButton}`;

  const deadlineStyles = (fulfilledItem: IReminderVacancy["fulfilled"], deadlineItem: IReminderVacancy["deadline"]) => {
    if (fulfilledItem) {
      return;
    }
    if (Date.now() - deadlineItem > 0) {
      return "fill-red-600 stroke-red-600 animate-bell";
    }
    if (Date.now() - deadlineItem > -86400000) {
      return "fill-orange-400 stroke-orange-400";
    }
  };

  //

  return (
    <ul
      className={`flex flex-col gap-y-2 rounded-2xl focus:shadow-2xl w-[310px] sm:max-w-[400px] md:max-w-[460px] lg:max-w-[480px] mx-auto border relative ${effectItem} ${isFulfilledBg}`}
    >
      <li className="flex justify-between px-3 mt-3">
        <div className="flex items-center gap-x-4 py-[2px] px-[10px] border border-bg-grey rounded-3xl">
          <div className="flex items-center gap-x-2">
            <Icons.Bell size={22} className={deadlineStyles(fulfilledItem, deadlineItem)} />{" "}
            {format(deadlineItem, "dd-MM-yyyy")}
          </div>
          <div className="flex items-center gap-x-2">
            <Icons.Clock /> {format(deadlineItem, "HH:mm")}
          </div>
        </div>
        <button className={`absolute top-3 right-3 ${effectIcon}`}>
          <Link to={`/${_id}/details`} state={{ from: location }}>
            <Icons.Eye size={32} />
          </Link>
        </button>
      </li>
      <p className="text-center font-bold text-lg">{actionItem.name}</p>
      <hr />
      <li className="px-5 flex flex-col gap-y-1">
        <div className="flex gap-x-2 gap-y-1 font-bold">
          <div className="w-[24px]">
            <Icons.CompanyName size={24} />{" "}
          </div>
          Company: <span className="font-normal">"{vacancy.companyName}"</span>
        </div>
        <div className="flex gap-x-2 gap-y-1 font-bold">
          <div className="w-[24px]">
            <Icons.Position size={24} />{" "}
          </div>
          Vacancy: <span className="font-normal">{vacancy.position || "___________"}</span>
        </div>
        {/* <div className="flex gap-x-2 gap-y-1 font-bold">
          <div className="w-[24px]">
            <Icons.Action size={24} />{" "}
          </div>
          Action: <span className="font-normal">{actionItem.name}</span>
        </div> */}
      </li>

      <li
        className={`flex justify-between align-baseline pt-2 gap-x-4 px-3 pb-2 ${colorVariants[cardColor]} border-b-0 rounded-xl`}
      >
        {actionItem.fulfilled ? (
          <button
            type="button"
            className={`flex justify-center items-center gap-x-3 py-[4px] px-[10px] border border-bg-grey bg-bg-light rounded-3xl w-full ${disabledButtonStyle}`}
            onClick={() => undoFulfilled()}
          >
            Undo Fulfilled
          </button>
        ) : (
          <>
            <Link
              to={`/${_id}/EditAction`}
              state={{ from: location }}
              className={`flex justify-center items-center gap-x-3 py-[4px] px-[10px] border border-bg-grey bg-bg-light rounded-3xl w-full ${disabledButtonStyle}`}
            >
              <Icons.Edit />
              Edit
            </Link>
            <button
              type="button"
              className={`flex justify-center items-center gap-x-3 py-[4px] px-[10px] border border-bg-grey bg-bg-light rounded-3xl w-full ${disabledButtonStyle}`}
              onClick={() => fulfilled()}
            >
              <Icons.Checked />
              Fulfilled
            </button>
          </>
        )}
      </li>
    </ul>
  );
};

export default ReminderItem;
