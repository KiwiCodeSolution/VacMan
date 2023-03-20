/* eslint-disable prettier/prettier */
/* eslint-disable no-nested-ternary */
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import * as Icons from 'components/iconsComponents';
import AddBtn from 'components/addBtn';
import { logOut, setAuthHeader } from 'redux/userOperations';
import { useGetVacanciesQuery, useAddVacancyMutation } from 'redux/VacancyQueries';
import Header from 'components/Header';
import Loader from 'components/ui/loader';
import ListNotes from 'components/notes/ListNotes';
import FullNote from 'components/notes/FullNote';

export default function Main() {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.user);
  setAuthHeader(token);

  const { data: response, isLoading, isError } = useGetVacanciesQuery();
  console.log('Vacancies:', response?.data);
  const [addVacancy] = useAddVacancyMutation();

  // Временное решение
  const colors = ['red', 'blue', 'green', 'pink', 'smoke', 'grey', 'yello'];
  const generateVacancy = () => {
    const vacancy = {
      companyName: `company ${Math.floor(Math.random() * 98 + 1)}`,
      position: `FullStack ${Math.floor(Math.random() * 98 + 1)}`,
      salary: Math.floor(Math.random() * 10 + 5) * 100,
      userRank: Math.floor(Math.random() * 4 + 1),
      cardColor: `app-${colors[Math.floor(Math.random() * 6 + 1)]}`,
    };
    addVacancy(vacancy);
  };

  return (
    <>
      <div className="container mx-auto px-4">
        <Header />
        <hr />
        <button className="p-2" type="button" onClick={() => dispatch(logOut(false))}>
          LogOUT
        </button>
        <hr />
        {isLoading ? (
          <Loader active />
        ) : isError ? (
          <h2>ERROR</h2>
        ) : response ? (
          response.data.map((vacancy) => (
            <>
              <p>{vacancy.companyName}</p>
              <br />
            </>
          ))
        ) : (
          <div className="flex items-center justify-items-center">
            <Icons.Todos />
          </div>
        )}
        <div className="flex mx-4 justify-end">
          <AddBtn clickFn={generateVacancy} />
        </div>
      </div>
      <ListNotes />
      <FullNote />
    </>
  );
}
