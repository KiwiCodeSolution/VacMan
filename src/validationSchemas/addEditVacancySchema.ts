import * as yup from "yup";

const addEditVacancySchema = yup.object({
  companyName: yup.string().min(3).max(30).required(),
  companyURL: yup.string(), // validate for URL ?
  source: yup.string().max(20),
  sourceURL: yup.string(),
  position: yup.string().max(30),
  salary: yup.number().min(0).max(999999),
  cardColor: yup.string(),
  userRank: yup.number().min(1).max(5),
  notes: yup.string().max(500),
});

export default addEditVacancySchema;
