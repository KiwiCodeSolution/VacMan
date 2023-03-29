/* eslint-disable no-underscore-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable no-nested-ternary */
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import * as Icons from "components/iconsComponents";
import AddBtn from "components/addBtn";
import { setAuthHeader } from "redux/userOperations";
import { useGetVacanciesQuery, useAddVacancyMutation, IVacancy } from "redux/VacancyQueries";

import Loader from "components/ui/loader";
import ShortNote from "components/notices/ShortNotice";
import { setMessage } from "redux/userSlice";
import Button from "components/ui/button";
import { setOnArchive } from "redux/noticeSlice";

export default function Main() {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector(state => state.user);
  const { onArchive } = useAppSelector(state => state.notice);
  setAuthHeader(token);
  // console.log(onArchive);

  const { data: response, isLoading, isError } = useGetVacanciesQuery();
  console.log("Vacancies:", response?.data);

  const vacancies = response?.data?.filter(vacancy => vacancy.archived === onArchive) as IVacancy[];

  const [addVacancy] = useAddVacancyMutation();

  // Временное решение
  const colors = ["red", "blue", "green", "pink", "smoke", "grey", "yellow"];
  const generateVacancy = () => {
    const vacancy = {
      companyName: `company ${Math.floor(Math.random() * 98 + 1)}`,
      position: `FullStack ${Math.floor(Math.random() * 98 + 1)}`,
      salary: Math.floor(Math.random() * 10 + 5) * 100,
      userRank: Math.floor(Math.random() * 4 + 1),
      cardColor: `${colors[Math.floor(Math.random() * 6)]}`,
    };
    addVacancy(vacancy)
      .unwrap()
      .then(payload => dispatch(setMessage(payload.message)))
      .catch(error => dispatch(setMessage(error.data.message)));
  };

  return (
    <div className="container mx-auto">
      {isLoading ? (
        <Loader active />
      ) : isError ? (
        <h2>ERROR</h2>
      ) : !response ? (
        <div className="flex items-center justify-items-center">
          <Icons.Todos />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-28 mt-5 items-center gap-4">
            {vacancies.map(vacancy => (
              <ShortNote key={vacancy._id} shortVacancy={vacancy} />
            ))}
          </div>
          <div className="fixed bottom-32 left-8 w-24 ">
            <Button btnType="button" variant="black" clickFn={() => dispatch(setOnArchive(!onArchive))}>
              {onArchive ? "Active" : "Archive"}
            </Button>
          </div>

          <div className="flex justify-end mx-2 fixed bottom-32 right-8">
            <AddBtn clickFn={generateVacancy} />
          </div>
        </>
      )}
    </div>
  );
}
