import React from 'react';
import faker from 'faker';
import { ShallowWrapper, shallow } from 'enzyme';

import { findByTestId } from 'tests';

import { formFields } from './signin-form.config';
import { SigninForm } from './signin-form.component';

type Props = React.ComponentProps<typeof SigninForm>;

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
  return shallow(<SigninForm {...setupProps} />);
};

describe('<SigninForm /> Component', () => {
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
      const form = findByTestId(wrapper, 'signin-form-component:form');
      expect(form.prop('id')).toBe(mockedProps.id);
    });

    it('should have the correct value prop of email/password input', () => {
      const values: typeof mockedProps.form.initialValues = {
        email: faker.internet.email(),
        password: faker.random.word(),
      };

      const wrapper = setup({
        form: { ...mockedProps.form, values },
      });

      const email = findByTestId(wrapper, 'signin-form-component:email-input');
      expect(email.prop('value')).toBe(values.email);

      const password = findByTestId(wrapper, 'signin-form-component:password-input');
      expect(password.prop('value')).toBe(values.password);
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
      const input = findByTestId(wrapper, 'signin-form-component:email-input');
      input.simulate('change', target);

      expect(mockedProps.form.handleChange).toHaveBeenCalledWith(target);
    });

    it('should call handleBlur when performing onBlur action on input', () => {
      const input = findByTestId(wrapper, 'signin-form-component:email-input');
      input.simulate('blur');

      expect(mockedProps.form.handleBlur).toHaveBeenCalledTimes(1);
    });

    it('should call handleSubmit when performing onSubmit action on form', () => {
      const form = findByTestId(wrapper, 'signin-form-component:form');
      form.simulate('submit');

      expect(mockedProps.form.handleSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
