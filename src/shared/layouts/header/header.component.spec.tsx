import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { findByTestId } from 'tests';

import { Header } from './header.component';

type Props = React.ComponentProps<typeof Header>;

const mockedProps: Props = {
  open: false,
  handleClose: jest.fn(),
  handleEscKey: jest.fn(),
  handleToggle: jest.fn(),
};

const setup = (props = {}): ShallowWrapper => {
  const setupProps = { ...mockedProps, ...props };
  return shallow(<Header {...setupProps} />);
};

describe('<Header /> Component', () => {
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
    it('should call onClick props when menu-icon button is clicked', () => {
      const wrapper = setup();
      const button = findByTestId(wrapper, 'header-component:button');
      button.simulate('click');
      expect(mockedProps.handleToggle).toHaveBeenCalledTimes(1);
    });
  });
});
