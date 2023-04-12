import { Formik, FormikHelpers, FormikProps } from "formik";
// import { useAppDispatch } from "hooks/reduxHooks";
import CustomInput from "components/forms/CustomInput";
import Button from "components/ui/button";

const restorePassForm = () => {
  // const dispatch = useAppDispatch();
  const initialValues = { email: "" };
  type Values = typeof initialValues;
  const handelFormSubmit = (values: Values, { resetForm }: FormikHelpers<Values>): void => {
    console.log("values: ", values);

    // dispatch(logIn(values));
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handelFormSubmit}>
      {({ handleSubmit }: FormikProps<Values>) => (
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-6 pb-6 min-w-[328px]" noValidate>
          <ul className="flex flex-col">
            <li>
              <CustomInput name="email" label="Email" placeholder="Type email" id="email" type="email" />
            </li>
          </ul>
          <div className="mt-auto">
            <Button variant="black" btnType="submit">
              Send Email
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};
export default restorePassForm;
