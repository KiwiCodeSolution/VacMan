/* eslint-disable consistent-return */
import { useNavigate, useParams } from "react-router-dom";
import { Formik, FormikProps } from "formik";
import { format } from "date-fns";

import CustomInput from "components/forms/CustomInput";
import Button from "components/ui/button";
import useHandleVacancy from "hooks/handleVacancy";
import { useGetVacanciesQuery } from "redux/VacancyQueries";
import addEditActionShema from "validationSchemas/addEditActionSchema";

const formFields = [
  { name: "name", label: "action name", type: "text" },
  { name: "deadline", label: "deadline date", type: "date" },
  { name: "time", label: "deadline time", type: "time" },
];

const AddActionForm = () => {
  const navigate = useNavigate();
  const { editVacancy } = useHandleVacancy();
  const { data: response, isLoading } = useGetVacanciesQuery();
  const { _id } = useParams();
  const vacancy = response?.data?.find(el => el._id === _id);

  if (!_id) return <h2>No such id</h2>;

  const actionToEdit = vacancy?.actions.find(action => !action.fulfilled);

  const initialValues = {
    name: actionToEdit?.name || "",
    deadline: "",
    time: "",
  };

  type Values = typeof initialValues;

  if (actionToEdit) {
    initialValues.name = actionToEdit.name;
    initialValues.deadline = format(actionToEdit.deadline, "yyyy-MM-dd");
    initialValues.time = format(actionToEdit.deadline, "HH:mm");
  }

  const handelFormSubmit = ({ name, deadline, time }: Values): void => {
    // const date = new Date(deadline).toLocaleDateString();
    // console.log("values: ", { name, deadline });
    const date = new Date(`${deadline} ${time}`);
    const newAction = {
      name,
      deadline: date.getTime(),
      date: actionToEdit ? actionToEdit.date : Date.now(),
      fulfilled: false,
    };
    // console.log("new action date:", newAction);

    if (!vacancy) return;
    const { actions } = vacancy;

    const updatedActions = actionToEdit ? [...actions].slice(0, -1).concat(newAction) : [...actions, newAction];

    editVacancy({ _id, data: { actions: updatedActions } });
    navigate(-1);
  };

  if (isLoading) return <p>Loading...</p>;
  if (!vacancy) return <p>No vacancy found</p>;

  return (
    <Formik initialValues={initialValues} validationSchema={addEditActionShema} onSubmit={handelFormSubmit}>
      {({ handleSubmit }: FormikProps<Values>) => (
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-6 grow mt-4 pb-6" noValidate>
          <ul className="flex flex-col gap-y-6">
            {formFields.map(({ name, label, type }) => (
              <li key={name}>
                <CustomInput name={name} label={label} id={name} type={type} />
              </li>
            ))}
          </ul>
          <div className="mt-auto mb-24">
            <Button btnType="submit" variant="black">
              SAVE
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default AddActionForm;
