/* eslint-disable prettier/prettier */
import { useParams } from "react-router-dom";
import * as Icons from "components/iconsComponents";
import Button from "components/ui/button";
import NavHeader from "components/navHeader";
import currencyList from "assets/currencyList";
import Stars from "components/ui/stars";
import { useGetVacanciesQuery } from "redux/VacancyQueries";
import Actions from "./Actions";
import { colorVariants } from "./ShortNotice";
import useHandleVacancy from "hooks/handleVacancy";
import { useAppSelector } from "hooks/reduxHooks";

const FullNote = () => {
  const { settings } = useAppSelector(state => state.user)
  const { _id } = useParams();
  const { data: response } = useGetVacanciesQuery();
  const { handleArchive } = useHandleVacancy();

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
    salaryMin,
    salaryMax,
    currency,
    actions,
    notes,
    userRank,
    cardColor,
    archived,
  } = currentVacancy;

  return (
    <div className="container mx-auto">
      <NavHeader prevAddress="/" text={companyName} link={companyURL} editAddress={`/${_id}/edit`} bg="bg-light" underlined />
      <div
        className={`container mx-auto rounded-xl py-6 px-4 ${colorVariants[cardColor]} text-base shadow-xl`}
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
              <p className="text-end text-[32px]">
                {salaryMin}
                {currency === "local" ? currencyList[settings.localCurrency] : currencyList[currency]}
              </p>
              {salaryMax !== 0 &&
                <p className="text-end text-[32px]">
                  {salaryMax}
                  {currency === "local" ? currencyList[settings.localCurrency] : currencyList[currency]}
                </p>
              }
            </div>
          </li>

          <li className="mb-4">
            <div className="flex justify-between">
              <div className="flex gap-x-2 gap-y-1 mb-2 font-semibold">
                <Icons.Action size={24} />
                <p>Action</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Deadline</p>
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
              {notes || <p className="text-txt-main text-base">You do not have any posts for this vacancy yet</p>}
            </div>
          </li>
        </ul>

        <Button variant="black" clickFn={() => handleArchive(_id, true)}>Archive</Button>
      </div>
    </div>
  );
};

export default FullNote;
