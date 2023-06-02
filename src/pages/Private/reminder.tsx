/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable prettier/prettier */
/* eslint-disable no-nested-ternary */
import NavHeader from "components/navHeader";
import ReminderItem from "components/reminder/ReminderItem";
import * as Icons from "components/iconsComponents";

import { useLocation } from "react-router-dom";
import { useGetVacanciesQuery } from "redux/VacancyQueries";
import Loader from "components/ui/loader";
// import { useAppSelector } from "hooks/reduxHooks";
// import { setAuthHeader } from "redux/userOperations";

const Reminder = () => {
  // const { token } = useAppSelector(state => state.user);
  // setAuthHeader(token);
  const location = useLocation();
  const { data: response, isLoading, isError } = useGetVacanciesQuery();

  if (!response) return <h2 className="text-center">Waiting for data ..</h2>;

  const vacanciesActiveActions = response.data
    ?.filter(
      vacancy =>
        vacancy.archived === false &&
        vacancy.actions.length > 1 &&
        vacancy.actions[vacancy.actions.length - 1].fulfilled === false
    )
    .sort(
      (firstVacancy, secondVacancy) =>
        firstVacancy?.actions[firstVacancy.actions.length - 1].deadline -
        secondVacancy?.actions[secondVacancy.actions.length - 1].deadline
    );

  const vacanciesFulfilledActions = response.data
    ?.filter(
      vacancy =>
        vacancy.archived === false &&
        vacancy.actions.length > 1 &&
        vacancy.actions[vacancy.actions.length - 1].fulfilled === true
    )
    .sort(
      (firstVacancy, secondVacancy) =>
        firstVacancy?.actions[firstVacancy.actions.length - 1].deadline -
        secondVacancy?.actions[secondVacancy.actions.length - 1].deadline
    );

  return (
    <>
      <NavHeader prevAddress={location?.state?.from.pathname ?? "/"} bg="bg-bg-light" text="Reminder" underlined />
      <div className="container mx-auto bg-bg-light ">
        {isLoading ? (
          <div className="mt-48">
            <Loader active absolute />
          </div>
        ) : isError ? (
          <h2>ERROR</h2>
        ) : !(vacanciesActiveActions.length || vacanciesFulfilledActions.length) ? (
          <>
            <div className="flex justify-center mt-24 px-4">
              <Icons.Todos />
            </div>
            <p className="text-center text-txt-main text-xl px-10 pt-8">You do not have any reminders yet</p>
          </>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-28 mt-5 items-center gap-4 px-4">
            {vacanciesActiveActions.map(vacancy => (
              <ReminderItem key={vacancy._id} vacancy={vacancy} />
            ))}
            {vacanciesFulfilledActions.map(vacancy => (
              <ReminderItem key={vacancy._id} vacancy={vacancy} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default Reminder;
