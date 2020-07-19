import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';

import { findByTestId } from 'tests';

import { Signup } from './signup.component';

type Props = React.ComponentProps<typeof Signup>;

const mockedProps: Props = {
  navigate: jest.fn(),
};

const setup = (props: Partial<Props> = {}): ShallowWrapper => {
  const setupProps = { ...mockedProps, ...props };
  return shallow(<Signup {...setupProps} />);
};

describe('<Signup /> Component', () => {
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
    it('should navigate to previous history when back-button is clicked', () => {
      const button = findByTestId(wrapper, 'signup-component:back-button');
      button.simulate('click');

      expect(mockedProps.navigate).toBeCalledTimes(1);
      expect(mockedProps.navigate).toHaveBeenCalledWith(-1);
    });

    it('should navigate to "/signup" when signup button is clicked', () => {
      const button = findByTestId(wrapper, 'signup-component:signin-button');
      button.simulate('click');

      expect(mockedProps.navigate).toBeCalledTimes(1);
      expect(mockedProps.navigate).toHaveBeenCalledWith('/signin');
    });
  });
});
