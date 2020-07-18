import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';

import { findByTestId } from 'tests';

import { Mnemonic } from './mnemonic.component';

type Props = React.ComponentProps<typeof Mnemonic>;

const mockedProps: Props = {
  navigate: jest.fn(),
};

const setup = (props: Partial<Props> = {}): ShallowWrapper => {
  const setupProps = { ...mockedProps, ...props };
  return shallow(<Mnemonic {...setupProps} />);
};

describe('<Mnemonic /> Component', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('Renders', () => {
    it('should render without crashing', () => {
      const wrapper = setup();
      expect(wrapper.exists()).toBe(true);
    });
  });

  describe('Interactions', () => {
    it('should navigate to "/signin" when signin button is clicked', () => {
      const wrapper = setup();
      const button = findByTestId(wrapper, 'mnemonic-component:signin-button');
      button.simulate('click');

      expect(mockedProps.navigate).toBeCalledTimes(1);
      expect(mockedProps.navigate).toHaveBeenCalledWith('/signin');
    });

    it('should navigate to "/signup" when signup button is clicked', () => {
      const wrapper = setup();
      const button = findByTestId(wrapper, 'mnemonic-component:signup-button');
      button.simulate('click');
      
      expect(mockedProps.navigate).toBeCalledTimes(1);
      expect(mockedProps.navigate).toHaveBeenCalledWith('/signup');
    });
  });
});
