// addVacancyForm;
import { Formik, FormikHelpers, FormikProps } from "formik";

import * as icons from "components/iconsComponents";
import Button from "components/ui/button";
import CustomInput from "components/forms/CustomInput";
import CurrencyRadioBtnsGroup from "components/forms/currencyRadioBtnsGroup";
import StarRadioBtnsGroup from "components/forms/StarRadioBtnsGroup";
import FilterRadioBtnsGroup from "components/forms/FilterRadioBtnsGroup";
import ColorRadioBtnsGroup from "components/forms/ColorRadioBtnsGroup";
import { IVacancy } from "redux/VacancyQueries";
import { useAppDispatch } from "hooks/reduxHooks";
import { setIsLoading } from "redux/userSlice";
import useHandleVacancy from "hooks/handleVacancy";

const STAGES = [
  "Waiting for answer",
  "Doing a test",
  "Got rejected",
  "Prepearing for interview",
  "Prepearing for English",
  "Prepearing for tech. interview",
  "Got offer",
  "Another",
];

const ACTIONS = [
  "Send resume",
  "Politely decline",
  "An interview with an eichar",
  "Ask a question to eichar",
  "English interview",
  "Make a test",
  "Wait for a reply",
  "Second act",
];

const CURRENCY = [
  { name: "USD", sign: "$" },
  { name: "Euro", sign: "€" },
  { name: "local", sign: "₴" },
];

const RATING_VALUES = ["1", "2", "3", "4", "5"];

const COLORS = ["grey", "blue", "green", "yellow", "orange", "pink", "smoke", "red", "mustard"];

const AddVacancyForm = ({ initialVacancy }: { initialVacancy?: IVacancy }) => {
  const dispatch = useAppDispatch();
  const { addNewVacancy, editVacancy } = useHandleVacancy();

  const initialValues = {
    companyName: initialVacancy?.companyName || "",
    companyURL: initialVacancy?.companyURL || "",
    source: initialVacancy?.source || "",
    position: initialVacancy?.position || "",
    salary: `${initialVacancy?.salary || 100}`,
    currency: initialVacancy?.currency || "USD",
    stage: initialVacancy?.stage || "new",
    action: initialVacancy?.actions[0]?.name || "",
    color: initialVacancy?.cardColor || "",
    userReview: `${initialVacancy?.userRank || "1"}`,
    notebook: initialVacancy?.notes[0]?.text || "",
  };
  type Values = typeof initialValues;

  const handleFormSubmit = (
    { companyName, companyURL, source, position, salary, currency, stage, action, color, userReview, notebook }: Values,
    { resetForm }: FormikHelpers<Values>
  ): void => {
    dispatch(setIsLoading(true));
    const actions = action ? [{ date: Date.now(), name: action }] : [];
    const notes = notebook ? [{ date: Date.now(), text: notebook }] : [];
    const data = {
      companyName,
      companyURL,
      source,
      position,
      salary: +salary,
      currency,
      stage,
      actions,
      cardColor: color,
      userRank: +userReview,
      notes,
    };
    console.log("Handle submit data: ", data);

    if (!initialVacancy) {
      addNewVacancy(data);
    } else {
      editVacancy({ data, _id: initialVacancy._id });
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
      {({ handleSubmit }: FormikProps<Values>) => (
        <form onSubmit={handleSubmit}>
          <ul className="flex flex-col gap-y-3">
            <li>
              <CustomInput
                name="companyName"
                id="companyName"
                type="text"
                label="Company Name"
                LabelIcon={icons.CompanyName}
              />
            </li>
            <li>
              <CustomInput name="companyURL" id="companyURL" type="text" label="Company Link" LabelIcon={icons.Link} />
            </li>
            <li>
              <CustomInput name="source" id="source" type="text" label="Source" LabelIcon={icons.Link} />
            </li>
            <li>
              <CustomInput name="position" id="position" type="text" label="Position" LabelIcon={icons.Position} />
            </li>
            <li className="flex gap-2 items-end">
              <CustomInput name="salary" id="salary" type="text" label="Salary" LabelIcon={icons.Salary} />
              <CurrencyRadioBtnsGroup name="currency" values={CURRENCY} />
            </li>
          </ul>

          <ul className="mt-3">
            <li className="py-4 border-t border-txt-main">
              <FilterRadioBtnsGroup name="stage" values={STAGES} label="Stage" LabelIcon={icons.Stage} />
            </li>
            <li className="py-4 border-t border-txt-main">
              <FilterRadioBtnsGroup name="action" values={ACTIONS} label="Action" LabelIcon={icons.Action} />
            </li>
            <li className="py-4 border-t border-txt-main">
              <ColorRadioBtnsGroup name="color" values={COLORS} label="Color" LabelIcon={icons.Color} />
            </li>
            <li className="py-4 border-y border-txt-main">
              <StarRadioBtnsGroup
                name="userReview"
                values={RATING_VALUES}
                label="User Review"
                LabelIcon={icons.Review}
              />
            </li>
          </ul>

          <div className="mt-4">
            <CustomInput name="notebook" id="notebook" type="text" label="Notebook" LabelIcon={icons.Notebook} />
          </div>

          <div className="mt-24 mb-4">
            <Button btnType="submit" variant="black">
              {initialVacancy ? "save vacancy" : "create"}
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default AddVacancyForm;
