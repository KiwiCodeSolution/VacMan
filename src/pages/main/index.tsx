/* eslint-disable no-underscore-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable no-nested-ternary */
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import * as Icons from 'components/iconsComponents';
import AddBtn from 'components/addBtn';
import { setAuthHeader } from 'redux/userOperations';
import { useGetVacanciesQuery, useAddVacancyMutation } from 'redux/VacancyQueries';
import Loader from 'components/ui/loader';
import ListNotes from 'components/notices/ListNotices';
import FullNote from 'components/notices/FullNotice';
import { setMessage } from 'redux/userSlice';
import AddVacancyForm from 'components/forms/AddVacancyForm';

export default function Main() {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.user);
  const { isOpenFullNote } = useAppSelector((state) => state.notice);
  setAuthHeader(token);

  const { data: response, isLoading, isError } = useGetVacanciesQuery();
  console.log('Vacancies:', response?.data);
  const [addVacancy] = useAddVacancyMutation();

  // Временное решение
  const colors = ['red', 'blue', 'green', 'pink', 'smoke', 'grey', 'yellow'];
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
      .then((payload) => dispatch(setMessage(payload.message)))
      .catch((error) => dispatch(setMessage(error.data.message)));
  };

  return (
    <div className="container h-[screen-60px-96px] mx-auto px-4">
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
          <div className="flex justify-end mx-2 sticky bottom-32">
            <AddBtn clickFn={generateVacancy} />
          </div>
        </>
      ) : (
        <FullNote />
      )}
      <AddVacancyForm />
    </div>
  );
}
