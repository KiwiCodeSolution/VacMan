/* eslint-disable @typescript-eslint/no-shadow */
import { useGetVacanciesQuery } from 'redux/VacancyQueries';
import ShortNote from './ShortNotice';
import type { IVacancy } from 'redux/VacancyQueries';

// eslint-disable-next-line prettier/prettier
const ListNotes = () => {
  const { data: response } = useGetVacanciesQuery();
  const vacancies = response?.data;

  return (
    <div className="container mx-auto">
      {vacancies ? (
        <div>
          {vacancies.map(
            ({
              _id,
              companyName,
              position,
              salary,
              status,
              cardColor,
              actions,
              archived,
              userRank,
              companyURL,
            }: IVacancy) => (
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
                companyURL={companyURL}
              />
            )
          )}
        </div>
      ) : null}
    </div>
  );
};

export default ListNotes;
