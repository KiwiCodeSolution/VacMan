import { IAction } from "redux/VacancyQueries";

type DateTimeProps = {
  date: IAction["date"];
};

const convertDate = (date?: number) => {
  if (!date) return "";
  const dateFormat = new Date(date);
  const month = dateFormat.getMonth() + 1;
  return `${dateFormat.getDate()}.${month < 10 ? "0" : ""}${month}.${dateFormat.getFullYear()}`;
};

const convertTime = (date?: number) => {
  if (!date) return "";
  const dateFormat = new Date(date);
  const hour = dateFormat.getHours();
  const min = dateFormat.getMinutes();
  return `${hour}:${min}`;
};

const DateTimeItem = ({ date }: DateTimeProps) => {
  const formattedDate = convertDate(date);
  const formattedTime = convertTime(date);

  return (
    <ul className="flex justify-between">
      <li className="py-1 px-[10px]">{formattedDate}</li>
      <li>{formattedTime}</li>
    </ul>
  );
};

export default DateTimeItem;
