/* eslint-disable @typescript-eslint/no-shadow */
import { useGetVacanciesQuery } from 'redux/VacancyQueries';
import ShortNote from './ShortNote';

// eslint-disable-next-line prettier/prettier
const ListNotes = () => {
  const { data: response } = useGetVacanciesQuery();
  const vacansies = response?.data;

  return (
    <div className="container mx-auto px-4">
      {vacansies ? (
        <div>
          {vacansies.map(({ id, companyName, position, salary, status, cardColor, actions, archived }) => (
            <ShortNote
              key={id}
              companyName={companyName}
              position={position}
              salary={salary}
              color={cardColor}
              active={3}
              status={status}
              actions={actions}
              archived={archived}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ListNotes;
