/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link, useParams, useNavigate } from 'react-router-dom';
import * as Icons from 'components/iconsComponents';
import Button from 'components/ui/button';

import Stars from 'components/ui/stars';
import {
  IVacancy,
  useDeleteVacancyMutation,
  useGetVacanciesQuery,
  useUpdateVacancyMutation,
} from 'redux/VacancyQueries';
import Actions from './Actions';
import { colorVariants } from './ShortNotice';
import { useAppSelector } from 'hooks/reduxHooks';

const FullNote = () => {
  const navigate = useNavigate();
  const { _id } = useParams();
  const [updateVacancy] = useUpdateVacancyMutation();
  const [deleteVacancy] = useDeleteVacancyMutation();
  const { data: response } = useGetVacanciesQuery();
  const { onArchive } = useAppSelector(state => state.notice);
  const vacancies = response?.data;

  const currentVacancy = vacancies?.find(vacancy => vacancy._id === _id) as IVacancy;

  const {
    companyName,
    companyURL,
    source,
    sourceURL,
    position,
    salary,
    status,
    actions,
    notes,
    userRank,
    cardColor,
    archived,
  } = currentVacancy;

  function handleArchive(): void {
    updateVacancy({ _id, archived: !onArchive });
    navigate('/', { replace: true });
  }

  // function removeVacancy(): void {
  //   deleteVacancy({ _id });
  //   navigate('/', { replace: true });
  // }

  return (
    <div className="container mx-auto px-4">
      <div
        className={`container mx-auto mt-2 rounded-xl py-6 px-4 ${colorVariants[cardColor]} text-base ${
          archived ? `text-txt-main` : `text-txt-black`
        } shadow-[0_5px_20px_-5px_rgba(0,0,0,0.3)]`}
      >
        <div className="flex mb-10">
          <button className="flex-none hover:scale-110 focus:scale-110">
            <Link to="/">
              <Icons.ArrowBack />
            </Link>
          </button>
          <span className="grow text-center font-bold text-2xl">{position}</span>
          <button className="flex-none hover:scale-110 focus:scale-110">
            <Link to={`/${_id}/edit`}>
              <Icons.Edit />
            </Link>
          </button>
        </div>
        <ul>
          <li className="flex justify-between mb-[35px]">
            <div>
              {companyURL ? (
                <a href={companyURL} className="mb-2 font-bold text-xl" target="_blank" rel="noreferrer">
                  {companyName}
                </a>
              ) : (
                <p className="mb-2 font-bold text-xl">{companyName}</p>
              )}
              <Stars amount={5} active={userRank} />
            </div>
            <div>
              <span className="flex gap-x-2 gap-y-1 mb-2 font-medium">
                {archived ? <Icons.Salary archived /> : <Icons.Salary />} <p className="text-base">Salary</p>
              </span>
              <p className="text-[32px]">{salary}$</p>
            </div>
          </li>
          <li className="flex gap-x-2 gap-y-1 mb-2 font-medium">
            {archived ? <Icons.Stage archived /> : <Icons.Stage />}
            <p>Stage</p>
          </li>
          <li className="mb-4 text-txt-main">{status}</li>
          <li className="mb-4">
            <div className="flex justify-between">
              <div>
                <div className="flex gap-x-2 gap-y-1 mb-2 font-medium">
                  {archived ? <Icons.Action archived /> : <Icons.Action />}
                  <p>Action</p>
                </div>
              </div>
              <div>
                <p className="font-medium mb-2">Deadline</p>
              </div>
            </div>
            {actions ? (
              actions.map(({ name, deadline }) => <Actions key={deadline} name={name} deadline={deadline} />)
            ) : (
              <p>You have no action</p>
            )}
          </li>
          <li className="flex gap-x-2 gap-y-1 mb-2 items-center text-txt-link text-base font-semibold">
            <Icons.Link linked />
            <a href={source} target="_blank" rel="noreferrer">
              {source}
            </a>
          </li>
          <li className="flex gap-x-2 gap-y-1 mb-6  items-center text-txt-link text-base font-semibold">
            <Icons.Link linked />
            <a href={sourceURL} target="_blank" rel="noreferrer">
              {sourceURL}
            </a>
          </li>
          <li className="flex gap-x-2 gap-y-1 mb-2 font-medium text-xl">
            <Icons.Notebook size="24" />
            <p>Notebook</p>
          </li>
          <li className="mb-[35px]">
            <div className="border-solid border-2 w-full rounded-xl h-[156px] border-bg-grey p-2">
              {notes.length > 0 ? (
                notes.map(({ data, text }) => <span key={data}>{text}</span>)
              ) : (
                <p className="text-txt-main text-base">You do not have any posts for this vacancy yet</p>
              )}
            </div>
          </li>
        </ul>
        {/* {!archived ? (
          <Button variant="black" clickFn={() => handleArchive()}>
            Archive
          </Button>
        ) : (
          <div>
            <Button variant="black" clickFn={() => handleArchive()}>
              Active
            </Button>
            <Button variant="black" clickFn={() => removeVacancy()}>
              Remove
            </Button>
          </div>
        )} */}
        <Button variant="black" clickFn={() => handleArchive()}>
          Archive
        </Button>
      </div>
    </div>
  );
};

export default FullNote;
