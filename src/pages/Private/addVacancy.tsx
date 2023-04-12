import AddVacancyForm from "components/forms/AddVacancyForm";
import NavHeader from "components/navHeader";
import { useAppSelector } from "hooks/reduxHooks";
import Loader from "components/ui/loader";

const AddVacancy = () => {
  const { isLoading } = useAppSelector(state => state.user);
  return (
    <>
      <NavHeader prevAddress="/" text="Add Vacancy" bg="bg-light" />
      {isLoading ? <Loader active absolute /> : <AddVacancyForm />}
    </>
  );
};
export default AddVacancy;
