import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import * as Icons from 'components/iconsComponents';
import AddBtn from 'components/addBtn';
import { logOut, setAuthHeader } from 'redux/userOperations';
import { useGetVacanciesQuery } from 'redux/VacancyQueries';
import Header from 'components/Header';

export default function Main() {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector(state => state.user);
  setAuthHeader(token);

  const { data, isLoading, isError } = useGetVacanciesQuery();
  console.log('Vacancies:', data);

  return (
    <div className="container mx-auto px-4">
      <Header />
      <hr />
      <button className="p-2" type="button" onClick={() => dispatch(logOut(false))}>
        LogOUT
      </button>
      <div className="flex bg-gray-200">
        <Icons.Todos />
        <br />
      </div>
      <AddBtn />
    </div>
  );
}
