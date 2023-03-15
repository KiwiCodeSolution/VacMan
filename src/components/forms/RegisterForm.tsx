import { FC, ReactElement } from 'react';
import { Formik, FormikHelpers, FormikProps } from 'formik';
import { InferType } from 'yup';

import registerSchema from '../../validationSchemas/registerShema';
import { useAppDispatch } from '../../hooks/reduxHooks';

import CustomInput from './CustomInput';
import { registration } from '../../redux/userOperations';
import Button from '../ui/button';

type Values = InferType<typeof registerSchema>;

const initialValues: Values = {
  email: '',
  password: '',
  confirmPassword: '',
};

const RegisterForm: FC = (): ReactElement => {
  const dispatch = useAppDispatch();

  const handelFormSubmit = (values: Values, { resetForm }: FormikHelpers<Values>): void => {
    console.log('Form was submitted.');
    console.log('values: ', values);
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
        <form onSubmit={handleSubmit} className="mt-14" noValidate>
          <ul>
            <li>
              <CustomInput name="email" label="Email" id="email" type="email" />
            </li>
            <li className="mt-4">
              <CustomInput name="password" label="Password" id="password" type="password" />
            </li>
            <li className="mt-4">
              <CustomInput name="confirmPassword" label="Confirm Password" id="confirmPassword" type="password" />
            </li>
          </ul>

          <Button btnType="submit" variant="black">
            REGISTER
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default RegisterForm;
