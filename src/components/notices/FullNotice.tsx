import * as Icons from 'components/iconsComponents';
import Button from 'components/ui/button';

import Stars from 'components/ui/stars';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { setIsOpenFullNotice, setNoteId } from 'redux/noticeSlice';
import { IVacancy, useGetVacanciesQuery, useUpdateVacancyMutation } from 'redux/VacancyQueries';
import Actions from './Actions';
import { colorVariants } from './ShortNotice';

const FullNote = () => {
  const dispatch = useAppDispatch();
  const [updateVacancy] = useUpdateVacancyMutation();

  const { data: response } = useGetVacanciesQuery();
  // eslint-disable-next-line prettier/prettier
  const { noteId } = useAppSelector((state) => state.notice);
  const vacancies = response?.data;

  // eslint-disable-next-line no-underscore-dangle, prettier/prettier
  const currentVacansy = vacancies?.find((vacansy) => vacansy._id === noteId) as IVacancy;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const {
    _id,
    companyName,
    position,
    salary,
    status,
    notes,
    userRank,
    actions,
    cardColor,
    source,
    sourceURL,
    // archived,
    // companyURL,
  } = currentVacansy;
  const onArchive = () => {
    updateVacancy({ _id, actions });
    dispatch(setIsOpenFullNotice(false));
  };

  const closeFullNotice = () => {
    dispatch(setIsOpenFullNotice(false));
    dispatch(setNoteId(''));
  };

  return (
    <div
      className={`container mx-auto mt-2 rounded-xl py-6 px-4 ${colorVariants[cardColor]} text-base shadow-[0_5px_20px_-5px_rgba(0,0,0,0.3)]`}
    >
      <div className="flex mb-10">
        <button className="flex-none hover:scale-110 focus:scale-110" onClick={closeFullNotice}>
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
