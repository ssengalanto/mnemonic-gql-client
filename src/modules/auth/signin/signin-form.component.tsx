import React from 'react';

import { FieldInput, FieldWrapper } from 'shared/components';

import { formFields } from './signin-form.config';
import { useSigninForm } from './use-signin-form.hook';

export const SigninForm: React.FC<{ id: string }> = ({ id }) => {
  const form = useSigninForm();

  return (
    <form id={id} onSubmit={form.handleSubmit}>
      {formFields.map(({ name, type, label, placeholder }) => (
        <FieldWrapper
          key={label}
          value={!!form.values[name]}
          touched={form.touched[name]}
          error={form.errors[name]}
          label={label}
        >

          <FieldInput
            name={name}
            placeholder={placeholder}
            type={type}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </FieldWrapper>
      ))}
    </form>
  );
};
