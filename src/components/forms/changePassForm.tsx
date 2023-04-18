import { Formik, FormikHelpers, FormikProps } from "formik";
import { useAppDispatch } from "hooks/reduxHooks";
import CustomInput from "components/forms/CustomInput";
import Button from "components/ui/button";
import { changePass } from "redux/userOperations";

const ChangePassForm = () => {
  const dispatch = useAppDispatch();
  const initialValues = { password: "", confirmPassword: "" };
  type Values = typeof initialValues;

  const handelFormSubmit = (values: Values, { resetForm }: FormikHelpers<Values>): void => {
    // console.log("values: ", values);
    dispatch(changePass(values.password));
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handelFormSubmit}>
      {({ handleSubmit }: FormikProps<Values>) => (
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-6 pb-6 min-w-[328px]" noValidate>
          <ul className="flex flex-col">
            <li>
              <CustomInput name="password" label="Password" id="password" type="password" />
            </li>
            <li>
              <CustomInput name="confirmPassword" label="Confirm Password" id="confirmPassword" type="password" />
            </li>
          </ul>
          <div className="mt-auto mb-24">
            <Button variant="black" btnType="submit">
              Save new password
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};
export default ChangePassForm;
