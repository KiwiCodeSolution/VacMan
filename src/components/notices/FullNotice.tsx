/* eslint-disable prettier/prettier */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link, useParams, useNavigate } from "react-router-dom";
import * as Icons from "components/iconsComponents";
import Button from "components/ui/button";

import Stars from "components/ui/stars";
import { useDeleteVacancyMutation, useGetVacanciesQuery, useUpdateVacancyMutation } from "redux/VacancyQueries";
import Actions from "./Actions";
import { colorVariants } from "./ShortNotice";
import { useAppSelector } from "hooks/reduxHooks";
import NavHeader from "components/navHeader";

const FullNote = () => {
  const navigate = useNavigate();
  const { _id } = useParams();
  const [updateVacancy] = useUpdateVacancyMutation();
  const [deleteVacancy] = useDeleteVacancyMutation();
  const { data: response } = useGetVacanciesQuery();
  const { onArchive } = useAppSelector(state => state.notice);
  const vacancies = response?.data;
  if (!vacancies) return <h2>Vacancies data have been lost</h2>;

  const currentVacancy = vacancies.find(vacancy => vacancy._id === _id);
  if (!currentVacancy) return <h2>No Vacancy data with id:{_id}</h2>;
  const {
    companyName,
    companyURL,
    source,
    sourceURL,
    position,
    salary,
    currency,
    stage,
    actions,
    notes,
    userRank,
    cardColor,
    archived,
  } = currentVacancy;

  const archivalText = `${archived ? `text-txt-main` : `text-txt-black`}`;

  function handleArchive(): void {
    updateVacancy({ _id, archived: !onArchive });
    navigate("/", { replace: true });
  }

  function removeVacancy(): void {
    if (_id) {
      deleteVacancy({ _id });
      navigate("/", { replace: true });
    }
  }

  return (
    <div className="container mx-auto">
      <NavHeader prevAddress="/" text={companyName} link={companyURL} editAddress={`/${_id}/edit`} bg="bg-light" />
      <div
        className={`container mx-auto mt-2 rounded-xl py-6 px-4 ${colorVariants[cardColor]} text-base ${archivalText} shadow-xl`}
      >
        <ul>
          <li className="flex justify-between">
            <div className="flex flex-col justify-between">
              <Stars amount={5} active={userRank} archived={archived} />
              {source ? (
                <a href={sourceURL} className="font-bold text-xl mt-2" target="_blank" rel="noreferrer">
                  {source}
                </a>
              ) : (
                <p className="py-3" />
              )}
              <div className="flex gap-x-2 gap-y-1 mt-2 mb-4 font-medium">
                <Icons.Position size={24} />
                <span className="font-bold">{position}</span>
              </div>
            </div>

            <div>
              <span className="flex gap-x-2 gap-y-1 mb-2 font-medium">
                <Icons.Salary size={24} /> <p className="text-base">Salary</p>
              </span>
              <p className="text-[32px]">{salary} {currency}</p>
            </div>
          </li>

          <li className="mb-4">
            <div className="flex gap-x-2 gap-y-1 mb-2 font-semibold">
              <Icons.Stage size={24} />
              <span>Stage</span>
            </div>
            <p className="text-txt-main">{stage}</p>
          </li>

          <li className="mb-4">
            <div className="flex justify-between">
              <div className="flex gap-x-2 gap-y-1 mb-2 font-medium">
                <Icons.Action size={24} />
                <p>Action</p>
              </div>
              <div>
                <p className="font-medium mb-2">Deadline</p>
              </div>
            </div>
            {actions.length ? (
              actions.map(({ name, deadline }) => (
                <Actions key={deadline} name={name} deadline={deadline} date={Date.now()} />
              ))
            ) : (
              <p className="text-txt-main">You have no action</p>
            )}
          </li>
          <li className="flex gap-x-2 gap-y-1 mb-2 font-medium text-xl">
            <Icons.Notebook size="24" />
            <p>Notebook</p>
          </li>
          <li className="mb-[35px]">
            <div className="border-solid border-2 w-full rounded-xl h-[156px] bg-bg-light border-bg-grey p-2">
              {notes.length > 0 ? (
                notes.map(({ date, text }) => <span key={date}>{text}</span>)
              ) : (
                <p className="text-txt-main text-base">You do not have any posts for this vacancy yet</p>
              )}
            </div>
          </li>
        </ul>
        {!archived ? (
          <Button variant="black" clickFn={() => handleArchive()}>
            Archive
          </Button>
        ) : (
          <div className="flex gap-2">
            <Button variant="black" clickFn={() => handleArchive()}>
              Active
            </Button>
            <Button variant="black" clickFn={() => removeVacancy()}>
              Remove
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FullNote;
