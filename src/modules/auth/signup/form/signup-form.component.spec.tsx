import React from 'react';
import faker from 'faker';
import { ShallowWrapper, shallow } from 'enzyme';

import { findByTestId } from 'tests';

import { formFields } from './signup-form.config';
import { SignupForm } from './signup-form.component';

type Props = React.ComponentProps<typeof SignupForm>;

const mockedProps: Props = {
  id: 'test-form-id',
  fields: formFields,
  form: {
    handleBlur: jest.fn(),
    handleChange: jest.fn(),
    handleSubmit: jest.fn(),
  },
};

const setup = (props: Partial<Props> = {}): ShallowWrapper => {
  const setupProps = { ...mockedProps, ...props };
  return shallow(<SignupForm {...setupProps} />);
};

const values: typeof mockedProps.form.values = {
  email: faker.internet.email(),
  password: faker.random.word(),
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
};

describe('<SignupForm /> Component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('Renders', () => {
    it('should render without crashing', () => {
      expect(wrapper.exists()).toBe(true);
    });

    it('should have a form id', () => {
      const form = findByTestId(wrapper, 'signup-form-component:form');
      expect(form.prop('id')).toBe(mockedProps.id);
    });

    it('should render the correct value prop for all field inputs', () => {
      const wrapper = setup({
        form: { ...mockedProps.form, values },
      });

      const email = findByTestId(wrapper, 'signup-form-component:email-input');
      expect(email.prop('value')).toBe(values.email);

      const password = findByTestId(wrapper, 'signup-form-component:password-input');
      expect(password.prop('value')).toBe(values.password);

      const firstName = findByTestId(wrapper, 'signup-form-component:first_name-input');
      expect(firstName.prop('value')).toBe(values.first_name);

      const lastName = findByTestId(wrapper, 'signup-form-component:last_name-input');
      expect(lastName.prop('value')).toBe(values.last_name);
    });

    it('should correct props to <FieldWrapper /> component', () => {
      const touched: typeof mockedProps.form.touched = {
        email: true,
        password: false,
      };
      const errors: typeof mockedProps.form.errors = {
        email: 'Email is invalid',
        password: '',
      };

      const wrapper = setup({
        form: { ...mockedProps.form, values: { ...values, password: '' }, touched, errors },
      });

      const emailWrapper = findByTestId(wrapper, 'signup-form-component:email-field-wrapper');
      expect(emailWrapper.prop('value')).toBe(true);
      expect(emailWrapper.prop('touched')).toBe(true);
      expect(emailWrapper.prop('error')).toBe(errors.email);

      const passwordWrapper = findByTestId(wrapper, 'signup-form-component:password-field-wrapper');
      expect(passwordWrapper.prop('value')).toBe(false);
      expect(passwordWrapper.prop('touched')).toBe(false);
      expect(passwordWrapper.prop('error')).toBe(errors.password);
    });
  });

  describe('Interactions', () => {
    it('should call handleChange when performing onChange action on input', () => {
      const target = {
        target: {
          name: 'email',
          value: faker.internet.email(),
        },
      };
      const input = findByTestId(wrapper, 'signup-form-component:email-input');
      input.simulate('change', target);

      expect(mockedProps.form.handleChange).toHaveBeenCalledWith(target);
    });

    it('should call handleBlur when performing onBlur action on input', () => {
      const input = findByTestId(wrapper, 'signup-form-component:email-input');
      input.simulate('blur');

      expect(mockedProps.form.handleBlur).toHaveBeenCalledTimes(1);
    });

    it('should call handleSubmit when performing onSubmit action on form', () => {
      const form = findByTestId(wrapper, 'signup-form-component:form');
      form.simulate('submit');

      expect(mockedProps.form.handleSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
