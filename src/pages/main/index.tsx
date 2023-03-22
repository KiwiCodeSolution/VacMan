/* eslint-disable prettier/prettier */
/* eslint-disable no-nested-ternary */
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import * as Icons from 'components/iconsComponents';
import AddBtn from 'components/addBtn';
import { logOut, setAuthHeader } from 'redux/userOperations';
import { useGetVacanciesQuery, useAddVacancyMutation } from 'redux/VacancyQueries';
import Header from 'components/Header';
import Loader from 'components/ui/loader';
import ListNotes from 'components/notices/ListNotices';
import FullNote from 'components/notices/FullNotice';

export default function Main() {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.user);
  const { isOpenFullNote } = useAppSelector((state) => state.notice);
  setAuthHeader(token);

  const { data: response, isLoading, isError } = useGetVacanciesQuery();
  // console.log('Vacancies:', response?.data);
  const [addVacancy] = useAddVacancyMutation();

  // Временное решение
  const colors = ['red', 'blue', 'green', 'pink', 'smoke', 'grey', 'yellow'];
  const generateVacancy = () => {
    const vacancy = {
      companyName: `company ${Math.floor(Math.random() * 98 + 1)}`,
      position: `FullStack ${Math.floor(Math.random() * 98 + 1)}`,
      salary: Math.floor(Math.random() * 10 + 5) * 100,
      userRank: Math.floor(Math.random() * 4 + 1),
      cardColor: `${colors[Math.floor(Math.random() * 6 + 1)]}`,
    };
    addVacancy(vacancy);
  };

  return (
    <div className="container mx-auto px-4">
      {!isOpenFullNote && (
        <>
          <Header /> <hr />
          <button className="p-2" type="button" onClick={() => dispatch(logOut(false))}>
            LogOUT
          </button>
          <hr />
        </>
      )}
      {isLoading ? (
        <Loader active />
      ) : isError ? (
        <h2>ERROR</h2>
      ) : !response ? (
        <div className="flex items-center justify-items-center">
          <Icons.Todos />
        </div>
      ) : response && !isOpenFullNote ? (
        <>
          <ListNotes />
          <div className="flex mx-4 justify-end sticky bottom-2 right-2">
            <AddBtn clickFn={generateVacancy} />
          </div>
        </>
      ) : (
        <FullNote />
      )}
    </div>
  );
}

// {
//   response.data.map((vacancy) => (
//     <>
//       <p>{vacancy.companyName}</p>
//       <br />
//     </>
//   ));
// }
