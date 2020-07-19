import { useSigninForm } from './use-signin-form.hook';

interface SigninFormConfigOptions {
  name: keyof ReturnType<typeof useSigninForm>['initialValues'];
  label?: string;
  type: string;
  placeholder?: string;
}

export type SigninFormFields = SigninFormConfigOptions[];

export const formFields: SigninFormConfigOptions[] = [
  {
    name: 'email',
    label: 'Username',
    type: 'text',
    placeholder: 'Enter your username...',
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password...',
  },
];
