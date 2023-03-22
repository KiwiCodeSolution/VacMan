import * as Icons from 'components/iconsComponents';
import Button from 'components/ui/button';

import Stars from 'components/ui/stars';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { setIsOpenFullNotice } from 'redux/noticeSlice';
import { useGetVacanciesQuery } from 'redux/VacancyQueries';
// import Actions from './Actions';
import { colorVariants } from './ShortNotice';

interface INote {
  data: number;
  text: string;
}
interface IAction {
  name: string;
  deadline: number;
}
interface IVacancy {
  _id: string;
  companyName: string;
  companyURL?: string;
  source?: string;
  sourceURL?: string;
  position?: string;
  salary?: number;
  currency?: string;
  notes?: INote[];
  actions?: IAction[];
  status?: string;
  userRank: number;
  archived?: boolean;
  cardColor: string;
  // | 'app-red'
  // | 'app-blue'
  // | 'app-green'
  // | 'app-pink'
  // | 'app-smoke'
  // | 'app-grey'
  // | 'app-yellow'
  // | 'app-mustard'
  // | 'app-orange';
}

const FullNote = () => {
  const dispatch = useAppDispatch();
  const { data: response } = useGetVacanciesQuery();
  // eslint-disable-next-line prettier/prettier
  const { noteId } = useAppSelector((state) => state.notice);
  const vacansies = response?.data;

  // eslint-disable-next-line no-underscore-dangle, prettier/prettier
  const currentVacansy = vacansies?.filter((vacansy) => vacansy._id === noteId) as IVacancy[];

  const { companyName, position, salary, status, actions, notes, userRank, cardColor, source, sourceURL } =
    currentVacansy[0];

  const caudata = Date.now();

  console.log(`Date`, caudata.toString());

  return (
    <div className={`container mx-auto rounded-xl py-6 px-4 ${colorVariants[cardColor]} text-base`}>
      <div className="flex mb-10">
        <button className="flex-none" onClick={() => dispatch(setIsOpenFullNotice(false))}>
          <Icons.ArrowBack />
        </button>
        <span className="grow text-center font-bold text-2xl">{position}</span>
        <button className="flex-none">
          <Icons.Edit />
        </button>
      </div>
      <ul>
        <li className="flex justify-between mb-[35px]">
          <div>
            <p className="mb-2 font-bold text-xl">{companyName}</p>
            <Stars amount={5} active={userRank} />
          </div>
          <div>
            <span className="flex gap-x-2 gap-y-1 mb-2 font-medium">
              <Icons.Salary /> <p className="text-base">Salary</p>
            </span>
            <p className="text-[32px]">{salary}$</p>
          </div>
        </li>
        <li className="flex gap-x-2 gap-y-1 mb-2 font-medium">
          <Icons.Stage />
          <p>Stage</p>
        </li>
        <li className="mb-4 text-txt-main">{status}</li>
        <li className="mb-4">
          <div className="flex justify-between">
            <div className="flex-1">
              <div className="flex gap-x-2 gap-y-1 mb-2 font-medium">
                <Icons.Action />
                <p>Action</p>
              </div>
            </div>
            <div className="flex-none">
              <p className="font-medium mb-2">Deadline</p>
            </div>
          </div>
          {/* {actions !== undefined && actions?.length > 0 ? (
            actions.map(({ name, deadline }) => <Actions key={deadline} name={name} deadline={deadline} />)
          ) : (
            <p className="text-txt-main">Call to company</p>
          )} */}
        </li>
        <li className="flex gap-x-2 gap-y-1 mb-2 items-center">
          <Icons.Link blue /> {source} link 1 - Company Link:
        </li>
        <li className="flex gap-x-2 gap-y-1 mb-6  items-center">
          <Icons.Link blue /> {sourceURL} link 2 - Sourse:
        </li>
        <li className="flex gap-x-2 gap-y-1 mb-2">
          <Icons.Notebook large stroke />
          <p>Notebook</p>
        </li>
        <li className="mb-[35px]">
          <div className="border-solid border-2 w-full rounded-xl h-[156px] border-bg-grey p-2">
            {notes !== undefined && notes?.length > 0 ? (
              notes?.join(', ')
            ) : (
              <p className="text-txt-main text-base">You do not have any posts for this vacancy yet</p>
            )}
          </div>
        </li>
      </ul>
      <Button variant="black" /* clickFn={dispatch(useDeleteVacancyMutation({ _id }))} */>Archive</Button>
    </div>
  );
};

export default FullNote;
