/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useSignupMutation } from '__gql-gen__';

export const useSignupForm = () => {
  const [signup] = useSignupMutation();

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
    onSubmit: async ({ email, password, first_name, last_name }, { setSubmitting }) => {
      await signup({
        variables: {
          email,
          password,
          first_name,
          last_name,
        },
      });
      setSubmitting(false);
    },
  });
  return form;
};
