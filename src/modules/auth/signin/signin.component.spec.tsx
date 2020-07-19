import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';

import { findByTestId } from 'tests';

import { Signin } from './signin.component';

type Props = React.ComponentProps<typeof Signin>;

const mockedProps: Props = {
  navigate: jest.fn(),
};

const setup = (props: Partial<Props> = {}): ShallowWrapper => {
  const setupProps = { ...mockedProps, ...props };
  return shallow(<Signin {...setupProps} />);
};

describe('<Signin /> Component', () => {
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
  });

  describe('Interactions', () => {
    it('should navigate to "/signup" when signup button is clicked', () => {
      const button = findByTestId(wrapper, 'signin-component:signup-button');
      button.simulate('click');

      expect(mockedProps.navigate).toBeCalledTimes(1);
      expect(mockedProps.navigate).toHaveBeenCalledWith('/signup');
    });
  });
});
