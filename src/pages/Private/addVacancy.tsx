import AddVacancyForm from "components/forms/AddVacancyForm";
import NavHeader from "components/navHeader";

const AddVacancy = () => {
  return (
    <>
      <NavHeader prevAddress="/" text="Add Vacancy" bg="bg-light" />
      <AddVacancyForm />
    </>
  );
};
export default AddVacancy;
