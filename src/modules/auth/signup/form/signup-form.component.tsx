import React from 'react';

import { FieldInput, FieldWrapper } from 'shared/components';

import { SignupFormFields } from './signup-form.config';
import { useSignupForm } from './use-signup-form.hook';

interface Props {
  id: string;
  fields: SignupFormFields;
  form: Partial<ReturnType<typeof useSignupForm>>;
}

export const SignupForm: React.FC<Props> = ({ id, form, fields }) => (
  <form id={id} onSubmit={form.handleSubmit} data-test-id="signup-form-component:form">
    {fields.map(({ name, type, label, placeholder }) => (
      <FieldWrapper
        key={label}
        value={!!form?.values?.[name]}
        touched={form?.touched?.[name]}
        error={form?.errors?.[name]}
        label={label}
      >
        <FieldInput
          data-test-id={`signup-form-component:${name}-input`}
          name={name}
          placeholder={placeholder}
          type={type}
          value={form?.values?.[name]}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
      </FieldWrapper>
    ))}
  </form>
);
