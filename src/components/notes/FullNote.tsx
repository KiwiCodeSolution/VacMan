import * as Icons from 'components/iconsComponents';
import Button from 'components/ui/button';

import Stars from 'components/ui/stars';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { setIsOpenFullNote } from 'redux/userSlice';
import { IVacancy, useGetVacanciesQuery } from 'redux/VacancyQueries';

const FullNote = () => {
  const dispatch = useAppDispatch();
  const { data: response } = useGetVacanciesQuery();
  // eslint-disable-next-line prettier/prettier
  const { noteId } = useAppSelector((state) => state.user);
  const vacansies = response?.data;

  // eslint-disable-next-line no-underscore-dangle, prettier/prettier
  const currentVacansy = vacansies?.filter((vacansy) => vacansy._id === noteId) as IVacancy[];

  const { companyName, position, salary, status, actions, notes } = currentVacansy[0];

  return (
    <div className="container mx-auto px-4">
      <p>FullNote</p>
      <div className="flex">
        <button className="flex-none" onClick={() => dispatch(setIsOpenFullNote(false))}>
          back
        </button>
        <span className="grow text-center">{position}</span>
        <button className="flex-none">change</button>
      </div>
      <ul>
        <li className="flex justify-between">
          <div>
            <p>{companyName}</p>
            <Stars amount={5} active={3} />
          </div>
          <div>
            <p>Salary</p>
            <p>{salary}$</p>
          </div>
        </li>
        <li className="flex gap-x-2 gap-y-1">
          <Icons.Stage />
          <p>Stage</p>
        </li>
        <li>{status}</li>
        <li className="flex gap-x-2 gap-y-1">
          <Icons.Action />
          <p>Action</p>
        </li>
        <li>{actions !== undefined && actions?.length > 0 ? actions?.join(', ') : <p>...</p>}</li>
        <li>link 1 - Company Link:</li>
        <li>link 2 - Sourse:</li>
        <li className="flex gap-x-2 gap-y-1">
          <Icons.Notebook large />
          <p>Notebook</p>
        </li>
        <li>{notes !== undefined && notes?.length > 0 ? notes?.join(', ') : <p>...</p>}</li>
      </ul>
      <Button variant="black" /* clickFn={dispatch(useDeleteVacancyMutation({ _id }))} */>Archive</Button>
    </div>
  );
};

export default FullNote;
