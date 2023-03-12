import { FC, ReactElement } from 'react';
import { Formik, FormikHelpers, FormikProps } from 'formik';
import { InferType } from 'yup';

import { useAppDispatch } from '../../hooks/reduxHooks';
import { setIsAuth } from '../../redux/userSlice';
import loginSchema from '../../validationSchemas/loginSchema';

import CustomInput from './CustomInput';

type Values = InferType<typeof loginSchema>;

const initialValues: Values = {
  email: '',
  password: '',
};

const LoginForm: FC = (): ReactElement => {
  const dispatch = useAppDispatch();

  const handelFormSubmit = (values: Values, { resetForm }: FormikHelpers<Values>): void => {
    console.log('Form was submitted.');
    console.log('values: ', values);
    dispatch(setIsAuth(true));
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handelFormSubmit} validationSchema={loginSchema}>
      {({ handleSubmit }: FormikProps<Values>) => (
        <form onSubmit={handleSubmit}>
          <CustomInput name="email" label="Email" placeholder="Type email" id="email" type="email" />
          <CustomInput name="password" label="Password" placeholder="Type password" id="password" type="password" />

          <button type="submit" style={{ border: '1px solid black', marginTop: '16px' }}>
            LOGIN
          </button>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
