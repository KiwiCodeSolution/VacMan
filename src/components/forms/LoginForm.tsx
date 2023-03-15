import { FC, ReactElement } from 'react';
import { Formik, FormikHelpers, FormikProps } from 'formik';
import { InferType } from 'yup';

import { useAppDispatch } from '../../hooks/reduxHooks';
import { setIsAuth } from '../../redux/userSlice';
import loginSchema from '../../validationSchemas/loginSchema';

import CustomInput from './CustomInput';
import { logIn } from '../../redux/userOperations';
import Button from '../ui/button';

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
        <form onSubmit={handleSubmit} className="mt-14" noValidate>
          <ul>
            <li>
              <CustomInput name="email" label="Email" placeholder="Type email" id="email" type="email" />
            </li>
            <li className="mt-4">
              <CustomInput name="password" label="Password" placeholder="Type password" id="password" type="password" />
            </li>
          </ul>

          <Button variant="black" btnType="submit">
            LOGIN
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
