import { IAction } from "redux/VacancyQueries";
import { format } from "date-fns";

// const convertDate = (date?: number) => {
//   if (!date) return "";
//   const dateFormat = new Date(date);
//   const month = dateFormat.getMonth() + 1;
//   const hour = dateFormat.getHours();
//   const min = dateFormat.getMinutes();
//   return `${dateFormat.getDate()}-${month < 10 ? "0" : ""}${month}-${dateFormat.getFullYear()} ${hour}:${
//     min > 10 ? min : `0${min}`
//   }`;
// };

const ActionShortElement = ({ name, deadline }: IAction) => {
  const formattedDeadline = format(deadline, "dd-MM-yyyy hh:mm");
  // const formattedDate = format(date, "dd-MM-yyyy hh:mm");
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
