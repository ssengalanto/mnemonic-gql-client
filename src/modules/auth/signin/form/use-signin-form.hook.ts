/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useSigninMutation } from '__gql-gen__';

export const useSigninForm = () => {
  const [signin] = useSigninMutation();
  const form = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required('Email field is required.'),
      password: Yup.string().min(5).required('Password field is required.'),
    }),
    onSubmit: async ({ email, password }, { setSubmitting }) => {
      await signin({
        variables: {
          email,
          password,
        },
      });
      setSubmitting(false);
    },
  });
  return form;
};
