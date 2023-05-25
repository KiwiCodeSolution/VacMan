/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-shadow */
import Calendar from "react-calendar";
import { format } from "date-fns";
import { useGetVacanciesQuery } from "redux/VacancyQueries";
import { useState } from "react";
import ReminderItem from "components/reminder/ReminderItem";

const CalendarComponent = () => {
  const [today, setToday] = useState(new Date());
  const { data: response } = useGetVacanciesQuery();

  const todo = response?.data?.filter(
    vacancy =>
      vacancy.archived === false &&
      vacancy.actions[vacancy.actions.length - 1].fulfilled === false &&
      format(vacancy.actions[vacancy.actions.length - 1].deadline, "dd-MM-yyyy") === format(today, "dd-MM-yyyy")
  );

  const events = response?.data?.filter(
    vacancy => vacancy.archived === false && vacancy.actions[vacancy.actions.length - 1].fulfilled === false
  );

  const onChange = today => {
    setToday(today);
  };

  return (
    <ul className="lg:flex justify-between">
      <li className="w-[350px] mx-auto mb-8 lg:mb-0">
        <Calendar
          onChange={onChange}
          value={today}
          className=""
          tileClassName={({ date }) => {
            const realDay = format(date, "dd-MM-yyyy");
            const typeClass = `rounded-full w-6 h-8 hover:bg-app-smoke hover:text-txt-black  focus:border focus:border-app-red focus:bg-app-smoke  text-center`;
            if (
              events &&
              events.find(ev => format(ev.actions[ev.actions.length - 1].deadline, "dd-MM-yyyy") === realDay)
            ) {
              const color = events.find(
                ev => format(ev.actions[ev.actions.length - 1].deadline, "dd-MM-yyyy") === realDay
              )?.cardColor;
              return `bg-app-${color} ${typeClass}`;
            }
            if (format(date, "dd-MM-yyyy") === format(new Date(), "dd-MM-yyyy")) {
              return `bg-app-smoke text-txt-red ${typeClass}`;
            }
            return typeClass;
          }}
        />
      </li>

      <li className="w-[350px] mx-auto">
        <h3 className="text-center">To-do list</h3>
        {todo?.length ? (
          <div>
            {todo?.map(vacancy => (
              <ReminderItem key={vacancy._id} vacancy={vacancy} />
            ))}
          </div>
        ) : (
          <p>You do not have anything on your to-do list</p>
        )}
      </li>
    </ul>
  );
};

export default CalendarComponent;
