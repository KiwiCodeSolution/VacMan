/* eslint-disable prettier/prettier */
import { useAppSelector } from "hooks/reduxHooks";
import { useLocation } from "react-router-dom";
import { useGetVacanciesQuery } from "redux/VacancyQueries";
import AddVacancyForm from "components/forms/AddVacancyForm";
import NavHeader from "components/navHeader";
import Loader from "components/ui/loader";

const EditVacancy = () => {
  const { isLoading } = useAppSelector(state => state.user);
  const location = useLocation();
  const id = location.pathname.split("/")[1];
  const { data } = useGetVacanciesQuery();

  return (
    <>
      <NavHeader bg="bg-bg-light" prevAddress={`/${id}/details`} text="Edit vacancy" underlined />
      {isLoading ? <Loader active absolute /> : (
        <div className="px-4 pt-3">
          <AddVacancyForm initialVacancy={data && data.data.find(el => el._id === id)} />
        </div>
      )}
    </>
  );
};
export default EditVacancy;
