import React from 'react';

import { FieldInput, FieldWrapper } from 'shared/components';
import { SigninFormFields } from './signin-form.config';
import { useSigninForm } from './use-signin-form.hook';

interface Props {
  id: string;
  fields: SigninFormFields;
  form: Partial<ReturnType<typeof useSigninForm>>;
}

export const SigninForm: React.FC<Props> = ({ id, fields, form }) => (
  <form id={id} onSubmit={form.handleSubmit} data-test-id="signin-form-component:form">
    {fields.map(({ name, type, label, placeholder }) => (
      <FieldWrapper
        key={label}
        value={!!form?.values?.[name]}
        touched={form?.touched?.[name]}
        error={form?.errors?.[name]}
        label={label}
        data-test-id={`signin-form-component:${name}-field-wrapper`}
      >
        <FieldInput
          data-test-id={`signin-form-component:${name}-input`}
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
