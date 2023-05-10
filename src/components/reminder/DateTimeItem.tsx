interface IDateTime {
  date: number;
}

const convertDate = (date?: number) => {
  if (!date) return "";
  const dateFormat = new Date(date);
  const month = dateFormat.getMonth() + 1;
  const hour = dateFormat.getHours();
  const min = dateFormat.getMinutes();
  return `${dateFormat.getDate()}-${month < 10 ? "0" : ""}${month}-${dateFormat.getFullYear()} ${hour}.${min}`;
};

const DateTimeItem = ({ date }: IDateTime) => {
  const formattedDate = convertDate(date);

  return (
    <ul>
      <li>{formattedDate}</li>
      <li>{formattedDate}</li>
    </ul>
  );
};

export default DateTimeItem;
