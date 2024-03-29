/* eslint-disable no-nested-ternary */
/* eslint-disable prettier/prettier */
import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import * as Icons from "components/iconsComponents";
import Button from "components/ui/button";
import NavHeader from "components/navHeader";
import Stars from "components/ui/stars";
import { useGetVacanciesQuery } from "redux/VacancyQueries";
import ActionList from "./actionList";
import useHandleVacancy from "hooks/handleVacancy";
import ActionShortElement from "./actionShortElement";
import { colorVariants } from "utils/stylesHelpers";

const FullNote = () => {
  const { _id } = useParams();
  const location = useLocation();
  const { data: response } = useGetVacanciesQuery();
  const [showActions, setShowActions] = useState(false);
  const { handleArchive, removeVacancy } = useHandleVacancy();

  if (!_id) return <h2>Error, id is required</h2>;
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
    actions,
    notes,
    userRank,
    cardColor,
    archived,
  } = currentVacancy;

  return (
    <div className="container mx-auto">
      <NavHeader
        prevAddress={location?.state?.from.pathname ?? "/"}
        text={companyName}
        link={companyURL}
        editAddress={`/${_id}/edit`}
        bg="bg-bg-light"
        underlined
      />
      <div className={`container mx-auto rounded-xl py-6 px-4 ${colorVariants[cardColor]} text-base shadow-xl`}>
        <ul>
          <li className="flex justify-between">
            <div className="flex flex-col justify-between">
              <Stars amount={5} active={userRank} archived={archived} />

              {source ? (
                sourceURL ? (
                  <a href={sourceURL} className="font-bold text-txt-link text-xl mt-2" target="_blank" rel="noreferrer">
                    {source}
                  </a>
                ) : (
                  <p className="font-bold text-xl mt-2">{source}</p>
                )
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
              <p className="pb-1 text-end text-[30px]">{salary}</p>
            </div>
          </li>

          <li className="mb-4 border-solid border-2 w-full rounded-xl bg-bg-light p-2">
            <button
              className="flex w-full justify-between mb-2 border-b-2"
              onClick={() => setShowActions(!showActions)}
            >
              <div className="flex gap-x-2 gap-y-1 mb-2 font-semibold">
                <Icons.Action size={24} />
                {showActions ? <p>Action time-line</p> : <p>Action</p>}
              </div>
              <div>
                <p className="font-semibold mb-2">Deadline</p>
              </div>
            </button>
            {showActions ? (
              <ActionList actions={actions} isArchived={archived} />
            ) : (
              actions.length !== 0 && (
                <ActionShortElement
                  name={actions[actions.length - 1].name}
                  deadline={actions[actions.length - 1].deadline}
                  date={actions[actions.length - 1].date}
                />
              )
            )}
          </li>

          <li className="flex gap-x-2 gap-y-1 mb-2 font-medium text-xl">
            <Icons.Notebook size="24" />
            <p>Notebook</p>
          </li>
          <li className="mb-[35px]">
            <div className="border-solid border-2 w-full rounded-xl h-[156px] bg-bg-light border-bg-grey p-2">
              {notes || <p className="text-txt-main text-base">You do not have any posts for this vacancy yet</p>}
            </div>
          </li>
        </ul>
        {archived ? (
          <div className="flex gap-x-3">
            <Button
              variant="black"
              clickFn={() => removeVacancy(_id)}
              icon={<Icons.Trash size="30" className="mr-3" />}
            >
              Remove
            </Button>
            <Button
              variant="black"
              clickFn={() => handleArchive(_id, false)}
              icon={<Icons.Recover size="32" className="mr-3" />}
            >
              Restore
            </Button>
          </div>
        ) : (
          <Button variant="black" clickFn={() => handleArchive(_id, true)}>
            Archive
          </Button>
        )}
      </div>
    </div>
  );
};

export default FullNote;
