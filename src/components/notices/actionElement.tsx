/* eslint-disable prettier/prettier */
import { IAction } from "redux/VacancyQueries";
import { format } from "date-fns";

// const convertDate = (date?: number) => {
//   if (!date) return "";
//   const dateFormat = new Date(date);
//   const month = dateFormat.getMonth() + 1;
//   const hour = dateFormat.getHours();
//   const min = dateFormat.getMinutes();
//   return `${dateFormat.getDate()}-${month < 10 ? "0" : ""}${month}-${dateFormat.getFullYear()} ${hour}.${
//     min > 10 ? min : `0${min}`
//   }`;
// };

const ActionElement = ({ action }: { action: IAction }) => {
  const { name, deadline, date, fulfilled } = action;
  const formattedDeadline = format(deadline, "dd-MM-yyyy HH:mm");
  const formattedDate = format(date, "dd-MM-yyyy HH:mm");

  return (
    <div className="ml-4">
      <ol className="border-l-2 border-bg-grey pb-3">
        <li>
          <div className="flex-start flex items-center">
            <div
              className={`-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full ${
                fulfilled ? "bg-app-grey" : "bg-app-orange"
              }`}
            />
            <p
              className={`-mt-2 text-base ${fulfilled ? "font-medium text-txt-main" : "font-semibold text-txt-black"}`}
            >
              {name}
            </p>
          </div>
          <div className="flex flex-raw ml-6 pb-6">
            <p className="font-medium text-txt-main">{formattedDate}</p>
            <p className="ml-auto font-medium text-txt-orange">{formattedDeadline}</p>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default ActionElement;
