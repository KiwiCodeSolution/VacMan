/* eslint-disable prettier/prettier */
// addVacancyForm;
import { Formik, FormikProps } from "formik";

import * as icons from "components/iconsComponents";
import Button from "components/ui/button";
import CustomInput from "components/forms/CustomInput";
import StarRadioBtnsGroup from "components/forms/StarRadioBtnsGroup";
import ColorRadioBtnsGroup from "components/forms/ColorRadioBtnsGroup";
import { IVacancy } from "redux/VacancyQueries";
import { useAppDispatch } from "hooks/reduxHooks";
import { setIsLoading } from "redux/userSlice";
import useHandleVacancy from "hooks/handleVacancy";
import addEditVacancySchema from "validationSchemas/addEditVacancySchema";

// const STAGES = [
//   "Waiting for answer",
//   "Doing a test",
//   "Got rejected",
//   "Prepearing for interview",
//   "Prepearing for English",
//   "Prepearing for tech. interview",
//   "Got offer",
//   "Another",
// ];

// const ACTIONS = [
//   "Send resume",
//   "Politely decline",
//   "An interview with an eichar",
//   "Ask a question to eichar",
//   "English interview",
//   "Make a test",
//   "Wait for a reply",
//   "Second act",
// ];

const RATING_VALUES = ["1", "2", "3", "4", "5"];

const COLORS = ["grey", "blue", "green", "yellow", "orange", "pink", "smoke", "red", "mustard"];

const AddVacancyForm = ({ initialVacancy }: { initialVacancy?: IVacancy }) => {
  const dispatch = useAppDispatch();
  const { addNewVacancy, editVacancy } = useHandleVacancy();

  const initialValues = {
    companyName: initialVacancy?.companyName || "",
    companyURL: initialVacancy?.companyURL || "",
    source: initialVacancy?.source || "",
    sourceURL: initialVacancy?.sourceURL || "",
    position: initialVacancy?.position || "",
    salary: initialVacancy?.salary || "",
    cardColor: initialVacancy?.cardColor || "",
    userRank: `${initialVacancy?.userRank || "1"}`,
    notes: initialVacancy?.notes || "",
  };
  type Values = typeof initialValues;

  const handleFormSubmit = (data: Values): void => {
    dispatch(setIsLoading(true));
    // console.log(data);
    const preparedData = {
      ...data,
      userRank: Number(data.userRank),
    };
    if (!initialVacancy) {
      addNewVacancy(preparedData);
    } else {
      editVacancy({ data: preparedData, _id: initialVacancy._id, goBack: true });
    }
    // console.log(preparedData);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={addEditVacancySchema} onSubmit={handleFormSubmit}>
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
              <CustomInput name="sourceURL" id="sourceURL" type="text" label="Source Link" LabelIcon={icons.Link} />
            </li>
            <li>
              <CustomInput name="position" id="position" type="text" label="Position" LabelIcon={icons.Position} />
            </li>
            <li>
              <CustomInput name="salary" id="salary" type="text" label="Salary" />
            </li>
          </ul>

          <ul className="mt-3">
            <li className="py-4 border-t border-txt-main">
              <ColorRadioBtnsGroup name="cardColor" values={COLORS} label="Color" LabelIcon={icons.Color} />
            </li>
            <li className="py-4 border-y border-txt-main">
              <StarRadioBtnsGroup name="userRank" values={RATING_VALUES} label="User Review" LabelIcon={icons.Review} />
            </li>
          </ul>

          <div className="mt-4">
            <CustomInput name="notes" id="notes" type="text" label="Notebook" LabelIcon={icons.Notebook} />
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
