import { FC, ReactElement } from "react";

import { Formik, FormikHelpers, FormikProps } from "formik";

import Button from "components/ui/button";
import StarRadioBtnsGroup from "components/forms/StarRadioBtnsGroup";

type Values = {
  companyName: string;
  companyLink: string;
  source: string;
  position: string;
  salary: string;
  stage: string;
  action: string;
  color: string;
  userReview: string;
  notebook: string;
};

const initialValues: Values = {
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

const RATING_VALUES = ["1", "2", "3", "4", "5"];

const AddVacancyForm: FC = (): ReactElement => {
  const handleFormSubmit = (values: Values, { resetForm }: FormikHelpers<Values>): void => {
    console.log("Form was submitted");
    console.log("values: ", values);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
      {({ handleSubmit }: FormikProps<Values>) => (
        <form onSubmit={handleSubmit}>
          <div className="p-10">
            <StarRadioBtnsGroup name="userReview" values={RATING_VALUES} />
          </div>
          <Button btnType="submit" variant="black">
            Create
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default AddVacancyForm;
