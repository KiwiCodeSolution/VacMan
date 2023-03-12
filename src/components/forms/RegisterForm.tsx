import { FC, ReactElement } from 'react';
import { Formik, FormikHelpers, FormikProps } from 'formik';
import { InferType } from 'yup';

import registerSchema from '../../validationSchemas/registerShema';

import CustomInput from './CustomInput';

type Values = InferType<typeof registerSchema>;

const initialValues: Values = {
  email: '',
  password: '',
  confirmPassword: '',
};

const RegisterForm: FC = (): ReactElement => {
  const handelFormSubmit = (values: Values, { resetForm }: FormikHelpers<Values>): void => {
    console.log('Form was submitted.');
    console.log('values: ', values);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handelFormSubmit} validationSchema={registerSchema}>
      {({ handleSubmit }: FormikProps<Values>) => (
        <form onSubmit={handleSubmit}>
          <CustomInput name="email" label="Email" placeholder="Type email" id="email" type="email" />
          <CustomInput name="password" label="Password" placeholder="Type password" id="password" type="password" />
          <CustomInput
            name="confirmPassword"
            label="Confirm Password"
            placeholder="type password"
            id="confirmPassword"
            type="password"
          />

          <button type="submit" style={{ border: '1px solid black', marginTop: '16px' }}>
            REGISTER
          </button>
        </form>
      )}
    </Formik>
  );
};

export default RegisterForm;
