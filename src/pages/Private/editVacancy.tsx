import AddVacancyForm from "components/forms/AddVacancyForm";
import NavHeader from "components/navHeader";
import { useLocation } from "react-router-dom";
import { useGetVacanciesQuery } from "redux/VacancyQueries";

const EditVacancy = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[1];
  console.log("Edit card id:", id);
  const { data } = useGetVacanciesQuery();
  let vacancy;
  // eslint-disable-next-line no-underscore-dangle
  if (data) vacancy = data.data.find(el => el._id === id);

  return (
    <>
      <NavHeader bg="bg-light" text="Edit vacancy" prevAddress={`/${id}/details`} />
      <AddVacancyForm initialVacancy={vacancy} />
    </>
  );
};
export default EditVacancy;
