import { IVacancy } from "redux/VacancyQueries";

const prepareVacancyData = (data: IVacancy) => {
  const {
    companyName,
    companyURL,
    source,
    sourceURL,
    position,
    salaryMin,
    salaryMax,
    currency,
    cardColor,
    userRank,
    notes,
    // color,
    // userReview,
    // notebook,
  } = data;
  // const actions = action ? [{ date: Date.now(), name: action }] : [];
  // const notes = notebook ? [{ date: Date.now(), text: notebook }] : [];
  return {
    companyName,
    companyURL,
    source,
    sourceURL,
    position,
    salaryMin: +salaryMin,
    salaryMax: +salaryMax,
    currency,
    cardColor,
    userRank: +userRank,
    notes,
  };
};
export default prepareVacancyData;
