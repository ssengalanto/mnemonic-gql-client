import React from 'react';

import { formFields } from './signup-form.config';
import { SignupForm } from './signup-form.component';
import { useSignupForm } from './use-signup-form.hook';

interface Props {
  id: string;
}

export const SignupFormContainer: React.FC<Props> = ({ id }) => {
  const form = useSignupForm();
  return <SignupForm id={id} form={form} fields={formFields} />;
};
