/* eslint-disable prettier/prettier */
import AddVacancyForm from "components/forms/AddVacancyForm";
import NavHeader from "components/navHeader";
import { useAppSelector } from "hooks/reduxHooks";
import Loader from "components/ui/loader";

const AddVacancy = () => {
  const { isLoading } = useAppSelector(state => state.user);
  return (
    <>
      <NavHeader prevAddress="/" text="Add Vacancy" bg="bg-bg-light" underlined />
      {isLoading ? <Loader active absolute /> : (
        <div className="px-4 pt-3">
          <AddVacancyForm />
        </div>
      )}
    </>
  );
};
export default AddVacancy;
