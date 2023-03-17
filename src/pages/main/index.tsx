import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import * as Icons from 'components/iconsComponents';
import AddBtn from 'components/addBtn';
import { logOut, setAuthHeader } from 'redux/userOperations';
import { useGetVacanciesQuery } from 'redux/VacancyQueries';

export default function Main() {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector(state => state.user);
  setAuthHeader(token);

  const { data } = useGetVacanciesQuery();
  console.log('Vacancies:', data);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl mb-4">User Main Page</h1>
      <ul className="flex ml-10">
        <li className="flex odd:bg-gray-200 even:bg-orange-200 last:ml-20">
          <h2 className="p-2">Hello user!</h2>
        </li>
        <li className="flex odd:bg-gray-200 even:bg-orange-200 last:ml-20">
          <button className="p-2" type="button" onClick={() => dispatch(logOut(false))}>
            LogOUT
          </button>
        </li>
      </ul>
      <p className="mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem corporis quas incidunt eaque laboriosam
        vitae corrupti esse assumenda sunt, labore culpa enim non tempore nulla quam distinctio praesentium doloremque!
        Harum!
      </p>
      <div className="flex bg-gray-200">
        <Icons.Todos />
        <Icons.Funnel />
        <Icons.Bell />
        <Icons.ArrowBack />
        <Icons.ArrowBack white />
        <Icons.ArrowForward />
        <Icons.ArrowForward white />
        <Icons.Star fill />
        <Icons.Star />
        <Icons.Question />
        <Icons.Clock />
        <Icons.MenuHome />
        <Icons.MenuHome active />
        <Icons.MenuTask />
        <Icons.MenuTask active />
        <Icons.MenuCalendar />
        <Icons.MenuCalendar active />
        <Icons.MenuSettings />
        <Icons.MenuSettings active />
      </div>
      <br />
      <div className="flex">
        <Icons.FalseInCircle />
        <Icons.OkInCircle />
        <Icons.Phone />
        <Icons.Position />
        <Icons.Location />
        <Icons.LinkedIn />
        <Icons.Telegram />
        <Icons.Facebook />
        <Icons.Instagram />
        <Icons.CompanyName />
        <Icons.CompanyName archived />
        <Icons.Position large />
        <Icons.Position large archived />
        <Icons.Stage />
        <Icons.Stage archived />
        <Icons.Salary />
        <Icons.Salary archived />
        <Icons.Star large />
        <Icons.Star large fill />
        <Icons.Color />
        <Icons.Review />
        <Icons.Notebook />
        <Icons.Link />
        <Icons.Link blue />
      </div>
      <AddBtn />
    </div>
  );
}
