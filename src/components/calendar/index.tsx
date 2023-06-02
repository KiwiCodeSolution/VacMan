/* eslint-disable @typescript-eslint/no-explicit-any */
import Calendar from "react-calendar";
import { format } from "date-fns";
import { useGetVacanciesQuery } from "redux/VacancyQueries";
import { useState } from "react";
import ReminderItem from "components/reminder/ReminderItem";
import "./calendar.css";
import { colorVariants } from "components/notices/ShortNotice";

const CalendarComponent = () => {
  const [currentDay, setCurrentDay] = useState(new Date());
  const { data: response } = useGetVacanciesQuery();

  const todo = response?.data?.filter(
    vacancy =>
      vacancy.archived === false &&
      vacancy.actions[vacancy.actions.length - 1].fulfilled === false &&
      format(vacancy.actions[vacancy.actions.length - 1].deadline, "dd-MM-yyyy") === format(currentDay, "dd-MM-yyyy")
  );

  const events = response?.data?.filter(
    vacancy => vacancy.archived === false && vacancy.actions[vacancy.actions.length - 1].fulfilled === false
  );

  const onChange = (value: any) => {
    setCurrentDay(value);
  };

  return (
    <ul className="lg:flex justify-between py-4 align-baseline">
      <li className="w-[350px] mx-auto mb-8 lg:mb-0">
        <Calendar
          onChange={onChange}
          value={currentDay}
          locale="en-EN"
          className="text-center flex flex-col gap-y-3"
          tileClassName={({ date }) => {
            const realDay = format(date, "dd-MM-yyyy");
            const typeClass = `w-6 h-8 hover:bg-app-smoke hover:text-txt-black  focus:border focus:border-app-red focus:bg-app-smoke text-center`;
            if (
              events &&
              events.find(ev => format(ev.actions[ev.actions.length - 1].deadline, "dd-MM-yyyy") === realDay)
            ) {
              const color = events.find(
                ev => format(ev.actions[ev.actions.length - 1].deadline, "dd-MM-yyyy") === realDay
              )?.cardColor as string;
              console.log("color-------------------", color);
              return `${colorVariants[color]} ${typeClass} rounded-full`;
            }
            if (format(date, "dd-MM-yyyy") === format(new Date(), "dd-MM-yyyy")) {
              return `bg-app-smoke text-txt-red ${typeClass} border border-1 border-bg-grey`;
            }
            return `${typeClass} rounded-full`;

          }}
        />
      </li>

      <li className="w-[350px] mx-auto">
        <h3 className="text-center font-bold mb-2">To-do list, {format(currentDay, "dd-MM-yyyy")} </h3>
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
