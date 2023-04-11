import AddVacancyForm from "components/forms/AddVacancyForm";
import NavHeader from "components/navHeader";
import { useLocation } from "react-router-dom";
import { useGetVacanciesQuery } from "redux/VacancyQueries";

const EditVacancy = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[1];
  const { data } = useGetVacanciesQuery();

  return (
    <>
      <NavHeader bg="bg-light" prevAddress={`/${id}/details`} text="Edit vacancy" underlined />
      <AddVacancyForm initialVacancy={data && data.data.find(el => el._id === id)} />
    </>
  );
};
export default EditVacancy;
