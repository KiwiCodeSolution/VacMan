import { IAction } from 'redux/VacancyQueries';

const Actions = ({ name, deadline }: IAction) => {
  const deadlineFormat = new Date(deadline);
  const month = deadlineFormat.getMonth() + 1;
  const newdate = `${deadlineFormat.getDate()}-${month < 10 ? '0' : ''}${month}-${deadlineFormat.getFullYear()}`;

  return (
    <div className="flex justify-between text-txt-main">
      <div>
        <p>{name} </p>
      </div>
      <div>
        <p className="mb-2">{newdate}</p>
      </div>
    </div>
  );
};

export default Actions;
