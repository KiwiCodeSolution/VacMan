// addVacancyForm;
import { Formik, FormikHelpers, FormikProps } from "formik";

import * as icons from "components/iconsComponents";
import Button from "components/ui/button";
import CustomInput from "components/forms/customInput";
import CurrencyRadioBtnsGroup from "components/forms/currencyRadioBtnsGroup";
import StarRadioBtnsGroup from "components/forms/starRadioBtnsGroup";
import FilterRadioBtnsGroup from "components/forms/filterRadioBtnsGroup";
import ColorRadioBtnsGroup from "components/forms/colorRadioBtnsGroup";

const defaultInitialValues = {
  companyName: "",
  companyLink: "",
  source: "",
  position: "",
  salary: "",
  currency: "Hryvnia",
  stage: "",
  action: "",
  color: "",
  userReview: "",
  notebook: "",
};

type Values = typeof defaultInitialValues;

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
  { name: "US Dollar", sign: "$" },
  { name: "Euro", sign: "€" },
  { name: "Hryvnia", sign: "₴" },
];

const RATING_VALUES = ["1", "2", "3", "4", "5"];

const COLORS = ["grey", "blue", "green", "yellow", "orange", "pink", "smoke", "red", "mustard"];

const AddVacancyForm = ({ initialValues }: { initialValues?: Values }) => {
  const handleFormSubmit = (values: Values, { resetForm }: FormikHelpers<Values>): void => {
    console.log("Form was submitted");
    console.log("values: ", values);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues || defaultInitialValues} onSubmit={handleFormSubmit}>
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
              <CustomInput
                name="companyLink"
                id="companyLink"
                type="text"
                label="Company Link"
                LabelIcon={icons.Link}
              />
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

          <div className="mt-24">
            <Button btnType="submit" variant="black">
              Create
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default AddVacancyForm;
