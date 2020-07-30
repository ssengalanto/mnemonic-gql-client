/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from '@reach/router';

import { useSignupMutation } from '__gql-gen__';
import { setAuthState } from 'apollo/state';

export const useSignupForm = () => {
  const [signup] = useSignupMutation();
  const navigate = useNavigate();

  const form = useFormik({
    initialValues: {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required('Firstname field is required.'),
      last_name: Yup.string().required('Lastname field is required.'),
      email: Yup.string().email('Email is invalid.').required('Email field is required.'),
      password: Yup.string()
        .min(5, 'Password must contains more than 5 characters.')
        .required('Password field is required.'),
    }),

    onSubmit: async ({ email, password, first_name, last_name }, { setSubmitting, resetForm }) => {
      const { data } = await signup({
        variables: {
          email,
          password,
          first_name,
          last_name,
        },
      });

      if (data) {
        setAuthState(data.signup);
        navigate('/home');
      }

      setSubmitting(false);
      resetForm();
    },
  });

  return form;
};
