/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { navigate } from '@reach/router';

import { useSigninMutation } from '__gql-gen__';
import { setAuthState } from 'apollo/state';

export const useSigninForm = () => {
  const [signin] = useSigninMutation();

  const form = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Email is invalid.').required('Email field is required.'),
      password: Yup.string()
        .min(5, 'Password must contains more than 5 characters.')
        .required('Password field is required.'),
    }),

    onSubmit: async ({ email, password }, { setSubmitting, resetForm }) => {
      const { data } = await signin({
        variables: {
          email,
          password,
        },
      });

      if (data) {
        setAuthState(data.signin);
        navigate('/home');
      }

      setSubmitting(false);
      resetForm();
    },
  });

  return form;
};
