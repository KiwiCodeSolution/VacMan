import { Formik, FormikHelpers, FormikProps } from "formik";
import { InferType } from "yup";

import { useAppDispatch } from "hooks/reduxHooks";
import loginSchema from "validationSchemas/loginSchema";

import CustomInput from "components/forms/CustomInput";
import { logIn } from "redux/userOperations";
import Button from "components/ui/button";

type Values = InferType<typeof loginSchema>;

const initialValues: Values = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useAppDispatch();

  const handelFormSubmit = (values: Values, { resetForm }: FormikHelpers<Values>): void => {
    console.log("Form was submitted.");
    console.log("values: ", values);

    dispatch(logIn(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handelFormSubmit}
      validationSchema={loginSchema}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {({ handleSubmit }: FormikProps<Values>) => (
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-6 grow mt-14 pb-6" noValidate>
          <ul className="flex flex-col gap-y-6">
            <li>
              <CustomInput name="email" label="Email" placeholder="Type email" id="email" type="email" />
            </li>
            <li>
              <CustomInput name="password" label="Password" placeholder="Type password" id="password" type="password" />
            </li>
          </ul>

          <div className="mt-auto">
            <Button variant="black" btnType="submit">
              LOGIN
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
