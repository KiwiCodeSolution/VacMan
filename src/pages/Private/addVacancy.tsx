import AddVacancyForm from "components/forms/AddVacancyForm";
import NavHeader from "components/navHeader";

const AddVacancy = () => {
  return (
    <>
      <NavHeader prevAddress="/" text="Add Vacancy" />
      <AddVacancyForm />
    </>
  );
};
export default AddVacancy;
