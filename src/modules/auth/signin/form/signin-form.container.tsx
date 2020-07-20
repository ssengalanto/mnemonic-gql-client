import React from 'react';

import { formFields } from './signin-form.config';
import { SigninForm } from './signin-form.component';
import { useSigninForm } from './use-signin-form.hook';

interface Props {
  id: string;
}

export const SigninFormContainer: React.FC<Props> = ({ id }) => {
  const form = useSigninForm();

  return <SigninForm id={id} form={form} fields={formFields} />;
};
