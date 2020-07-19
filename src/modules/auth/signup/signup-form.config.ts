import { useSignupForm } from './use-signup-form.hook';

interface SignupFormConfigOptions {
  name: keyof ReturnType<typeof useSignupForm>['initialValues'];
  label?: string;
  type: string;
  placeholder?: string;
}

export type SignupFormFields = SignupFormConfigOptions[];

export const formFields: SignupFormConfigOptions[] = [
  {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    placeholder: 'Enter your email address...',
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password...',
  },
  {
    name: 'first_name',
    label: 'Firstname',
    type: 'text',
    placeholder: 'Enter your firstname...',
  },
  {
    name: 'last_name',
    label: 'Lastname',
    type: 'text',
    placeholder: 'Enter your lastname...',
  },
];
