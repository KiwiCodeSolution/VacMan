import DateTimeItem from "./DateTimeItem";
import * as Icons from "components/iconsComponents";

// interface IReminder {}

const ReminderItem = () => {
  return (
    <ul className="relative flex flex-col gap-y-1 rounded-xl p-3 shadow-xl hover:shadow-2xl focus:shadow-2xl max-w-[328px] sm:max-w-[400px] md:max-w-[460px] lg:max-w-[480px] mx-auto">
      <li>
        <DateTimeItem date={1682194696591} />
      </li>
      <li>Text</li>
      <li className="flex justify-between align-baseline pt-4 pl-1">
        Mark as done <Icons.Checked />
      </li>
    </ul>
  );
};

export default ReminderItem;
