import * as yup from "yup";
import { format, parse, isFuture } from "date-fns";

const DATE_PATTERN = "yyyy-MM-dd";
const TIME_PATTERN = "HH:mm";

const addEditActionShema = yup.object({
  name: yup.string().min(2).max(40).required(),

  deadline: yup
    .string()
    .test("VALIDATE_DEADLINE_DATE", "Date of deadline must be more than current date or equal it.", date => {
      if (!date) return true;
      const dateWithoutTime = format(new Date(), DATE_PATTERN);
      return new Date(date).getTime() >= new Date(dateWithoutTime).getTime();
    })
    .required(),

  time: yup
    .string()
    .test("VALIDATE_DEADLINE_TIME", "Time of deadline must be more than current time of equal it", (time, { from }) => {
      if (!time || !from) return true;
      const deadlineDate = from[0].value.deadline;

      if (deadlineDate !== format(new Date(), DATE_PATTERN)) return true;

      return isFuture(parse(time || "", TIME_PATTERN, new Date()));
    })
    .required(),
});

export default addEditActionShema;
