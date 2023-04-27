import { IAction } from "redux/VacancyQueries";

const convertDate = (date?: number) => {
  if (!date) return "";
  const dateFormat = new Date(date);
  const month = dateFormat.getMonth() + 1;
  const hour = dateFormat.getHours();
  const min = dateFormat.getMinutes();
  return `${dateFormat.getDate()}-${month < 10 ? "0" : ""}${month}-${dateFormat.getFullYear()} ${hour}.${min}`;
};
const ActionElement = ({ name, deadline, date }: IAction) => {
  const formattedDeadline = convertDate(deadline);
  const formattedDate = convertDate(date);
  return (
    <div className="ml-4">
      <ol className="border-l-2 border-bg-grey pb-3">
        <li>
          <div className="flex-start flex items-center">
            <div className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-app-green" />
            <p className="-mt-2 text-base font-medium">{name} </p>
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
