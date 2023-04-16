/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-nested-ternary */
import NavHeader from "components/navHeader";
import Loader from "components/ui/loader";
import { useGetVacanciesQuery } from "redux/VacancyQueries";
import ShortNote from "components/notices/ShortNotice";

const Archived = () => {
  const { data: response, isLoading } = useGetVacanciesQuery();
  if (!response) return <h2 className="text-2xl text-txt-main text-center">ERROR</h2>;
  const archivedVacancies = response?.data?.filter(vacancy => vacancy.archived === true);

  return (
    <>
      {isLoading ? (
        <div className="mt-48">
          <Loader active absolute />
        </div>
      ) : !archivedVacancies.length ? (
        <>
          <NavHeader prevAddress="/settings" text="Archive" underlined />
          <div className="mt-20 text-2xl text-txt-main text-center">No archived vacancy</div>
        </>
      ) : (
        <>
          <NavHeader prevAddress="/settings" text="Archive" underlined />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-28 mt-5 items-center gap-4 px-4">
            {archivedVacancies &&
              archivedVacancies.map(vacancy => <ShortNote key={vacancy._id} shortVacancy={vacancy} />)}
          </div>
        </>
      )}
    </>
  );
};
export default Archived;
