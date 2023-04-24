import { IAction } from "redux/VacancyQueries";

const convertDate = (date?: number) => {
  if (!date) return "";
  const dateFormat = new Date(date);
  const month = dateFormat.getMonth() + 1;
  const hour = dateFormat.getHours();
  const min = dateFormat.getMinutes();
  return `${dateFormat.getDate()}-${month < 10 ? "0" : ""}${month}-${dateFormat.getFullYear()} ${hour}.${min}`;
};
const ActionShortElement = ({ name, deadline, date }: IAction) => {
  const formattedDeadline = convertDate(deadline);
  const formattedDate = convertDate(date);
  return (
    <div className="flex justify-between text-txt-main">
      <div>
        <p>{name} </p>
      </div>
      <div>
        <p className="mb-2">{formattedDeadline}</p>
      </div>
    </div>
  );
};

export default ActionShortElement;
