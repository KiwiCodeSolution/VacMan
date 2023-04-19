/* eslint-disable prettier/prettier */
/* eslint-disable no-nested-ternary */
import { useAppSelector } from "hooks/reduxHooks";
import * as Icons from "components/iconsComponents";
import AddBtn from "components/addBtn";
import { setAuthHeader } from "redux/userOperations";
import { useGetVacanciesQuery } from "redux/VacancyQueries";

import Loader from "components/ui/loader";
import ShortNote from "components/notices/ShortNotice";
import Header from "./Header";
import LanguageRadioBtnGroup from "./forms/LanguageRadioBtnGroup";

export default function Main() {
  const { token } = useAppSelector(state => state.user);
  setAuthHeader(token);

  const { data: response, isLoading, isError } = useGetVacanciesQuery();

  const vacancies = response?.data?.filter(vacancy => vacancy.archived === false);

  return (
    <div className="container mx-auto bg-bg-light">
      {isLoading ? (
        <div className="mt-48">
          <Loader active absolute />
        </div>
      ) : isError ? (
        <h2>ERROR</h2>
      ) : !vacancies || !vacancies.length ? (
        <>
          <Header />
          <div className="flex justify-center mt-24 px-4">
            <Icons.Todos />
          </div>
          <p className="text-center text-txt-main text-xl px-10 pt-8">You do not have any job vacancies created yet</p>
          <div className="flex justify-end mx-2 fixed bottom-32 right-8">
            <AddBtn />
          </div>
        </>
      ) : (
        <>
          <Header />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-28 mt-5 items-center gap-4 px-4">
            {/* <LanguageRadioBtnGroup /> */}
            {vacancies && vacancies.map(vacancy => <ShortNote key={vacancy._id} shortVacancy={vacancy} />)}
          </div>

          <div className="flex justify-end mx-2 fixed bottom-32 right-8">
            <AddBtn />
          </div>
        </>
      )}
    </div>
  );
}
