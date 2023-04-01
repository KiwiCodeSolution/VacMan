import { Formik, FormikHelpers, FormikProps } from "formik";

import * as icons from "components/iconsComponents";
import Button from "components/ui/button";
import CustomInput from "components/forms/CustomInput";
import StarRadioBtnsGroup from "components/forms/StarRadioBtnsGroup";
import FilterRadioBtnsGroup from "components/forms/FilterRadioBtnsGroup";
import ColorRadioBtnsGroup from "components/forms/ColorRadioBtnsGroup";

const initialValues = {
  companyName: "",
  companyLink: "",
  source: "",
  position: "",
  salary: "",
  stage: "",
  action: "",
  color: "",
  userReview: "",
  notebook: "",
};

type Values = typeof initialValues;

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

const RATING_VALUES = ["1", "2", "3", "4", "5"];

const COLORS = ["grey", "blue", "green", "yellow", "orange", "pink", "smoke", "red", "mustard"];

const AddVacancyForm = () => {
  const handleFormSubmit = (values: Values, { resetForm }: FormikHelpers<Values>): void => {
    console.log("Form was submitted");
    console.log("values: ", values);
    resetForm();
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
            <li>
              <CustomInput name="salary" id="salary" type="text" label="Salary" LabelIcon={icons.Salary} />
            </li>
            <li>
              <FilterRadioBtnsGroup name="stage" values={STAGES} label="Stage" LabelIcon={icons.Stage} />
            </li>
            <li>
              <FilterRadioBtnsGroup name="action" values={ACTIONS} label="Action" LabelIcon={icons.Action} />
            </li>
            <li>
              <ColorRadioBtnsGroup name="color" values={COLORS} label="Color" LabelIcon={icons.Color} />
            </li>
            <li>
              <StarRadioBtnsGroup
                name="userReview"
                values={RATING_VALUES}
                label="User Review"
                LabelIcon={icons.Review}
              />
            </li>
            <li>
              <CustomInput name="notebook" id="notebook" type="text" label="Notebook" LabelIcon={icons.Notebook} />
            </li>
          </ul>

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
