import AddVacancyForm from "components/forms/AddVacancyForm";
import NavHeader from "components/navHeader";
import { useLocation } from "react-router-dom";

const EditVacancy = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[1];
  console.log("card id:", id);

  return (
    <>
      <NavHeader text="Edit vacancy" prevAddress={`/${id}/details`} />
      <AddVacancyForm />
    </>
  );
};
export default EditVacancy;
