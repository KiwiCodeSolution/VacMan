// registerForm;
import { Formik, FormikHelpers, FormikProps } from "formik";
import { InferType } from "yup";

import registerSchema from "validationSchemas/registerShema";
import { useAppDispatch } from "hooks/reduxHooks";

import CustomInput from "components/forms/CustomInput";
import { registration } from "redux/userOperations";
import Button from "components/ui/button";

type Values = InferType<typeof registerSchema>;

const initialValues: Values = {
  email: "",
  password: "",
  confirmPassword: "",
};

const RegisterForm = () => {
  const dispatch = useAppDispatch();

  const handelFormSubmit = (values: Values, { resetForm }: FormikHelpers<Values>): void => {
    // console.log("Form was submitted.");
    // console.log("values: ", values);
    dispatch(registration(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handelFormSubmit}
      validationSchema={registerSchema}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {({ handleSubmit }: FormikProps<Values>) => (
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-6 grow mt-14 pb-6" noValidate>
          <ul className="flex flex-col gap-y-6">
            <li>
              <CustomInput name="email" label="Email" id="email" type="email" />
            </li>
            <li>
              <CustomInput name="password" label="Password" id="password" type="password" />
            </li>
            <li>
              <CustomInput name="confirmPassword" label="Confirm Password" id="confirmPassword" type="password" />
            </li>
          </ul>

          <div className="mt-auto">
            <Button btnType="submit" variant="black">
              REGISTER
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default RegisterForm;
