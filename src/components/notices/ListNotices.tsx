/* eslint-disable @typescript-eslint/no-shadow */
import { useGetVacanciesQuery } from "redux/VacancyQueries";
import ShortNote from "./ShortNotice";

const ListNotes = () => {
  const { data: response } = useGetVacanciesQuery();
  const vacancies = response?.data;

  return (
    <div className="container mx-auto">
      {vacancies ? (
        <div>
          {vacancies.map(vacancy => (
            // eslint-disable-next-line no-underscore-dangle
            <ShortNote key={vacancy._id} shortVacancy={vacancy} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ListNotes;
