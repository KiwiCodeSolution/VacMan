/* eslint-disable @typescript-eslint/no-shadow */
import { useGetVacanciesQuery } from 'redux/VacancyQueries';
import ShortNote from './ShortNotice';

// eslint-disable-next-line prettier/prettier
const ListNotes = () => {
  const { data: response } = useGetVacanciesQuery();
  const vacansies = response?.data;

  return (
    <div className="container mx-auto">
      {vacansies ? (
        <div>
          {vacansies.map(({ _id, companyName, position, salary, status, cardColor, actions, archived, userRank }) => (
            <ShortNote
              key={_id}
              _id={_id}
              companyName={companyName}
              position={position}
              salary={salary}
              color={cardColor}
              active={userRank}
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
