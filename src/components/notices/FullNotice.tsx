import * as Icons from 'components/iconsComponents';
import Button from 'components/ui/button';

import Stars from 'components/ui/stars';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { setIsOpenFullNotice } from 'redux/noticeSlice';
import { useGetVacanciesQuery, useDeleteVacancyMutation } from 'redux/VacancyQueries';
import Actions from './Actions';
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
  companyURL: string;
  source: string;
  sourceURL?: string;
  position?: string;
  salary?: number;
  currency?: string;
  notes?: INote[];
  actions: IAction[];
  status?: string;
  userRank: number;
  archived?: boolean;
  cardColor: string;
}

const FullNote = () => {
  const dispatch = useAppDispatch();
  const [deleteVacancy] = useDeleteVacancyMutation();

  const { data: response } = useGetVacanciesQuery();
  // eslint-disable-next-line prettier/prettier
  const { noteId } = useAppSelector((state) => state.notice);
  const vacancies = response?.data;

  // eslint-disable-next-line no-underscore-dangle, prettier/prettier
  const currentVacansy = vacancies?.find((vacansy) => vacansy._id === noteId) as IVacancy;
  console.log(currentVacansy);

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { _id, companyName, position, salary, status, notes, userRank, actions, cardColor, source, sourceURL } =
    currentVacansy;

  const onArchive = () => {
    deleteVacancy(_id);
    dispatch(setIsOpenFullNotice(false));
  };

  return (
    <div
      className={`container mx-auto mt-2 rounded-xl py-6 px-4 ${colorVariants[cardColor]} text-base shadow-[0_5px_20px_-5px_rgba(0,0,0,0.3)]`}
    >
      <div className="flex mb-10">
        <button
          className="flex-none hover:scale-110 focus:scale-110"
          onClick={() => dispatch(setIsOpenFullNotice(false))}
        >
          <Icons.ArrowBack />
        </button>
        <span className="grow text-center font-bold text-2xl">{position}</span>
        <button className="flex-none hover:scale-110 focus:scale-110">
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
            <div>
              <div className="flex gap-x-2 gap-y-1 mb-2 font-medium">
                <Icons.Action />
                <p>Action</p>
              </div>
            </div>
            <div>
              <p className="font-medium mb-2">Deadline</p>
            </div>
          </div>
          {actions.map(({ name, deadline }) => (
            <Actions key={deadline} name={name} deadline={deadline} />
          ))}
        </li>
        <li className="flex gap-x-2 gap-y-1 mb-2 items-center text-txt-link text-base font-semibold">
          <Icons.Link blue />
          <a href={source} target="_blank" rel="noreferrer">
            {source}
          </a>
        </li>
        <li className="flex gap-x-2 gap-y-1 mb-6  items-center text-txt-link text-base font-semibold">
          <Icons.Link blue />
          <a href={sourceURL} target="_blank" rel="noreferrer">
            {sourceURL}
          </a>
        </li>
        <li className="flex gap-x-2 gap-y-1 mb-2 font-medium text-xl">
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
      <Button variant="black" clickFn={onArchive}>
        Archive
      </Button>
    </div>
  );
};

export default FullNote;
