import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';

import { findByTestId } from 'tests';

import { MenuIcon } from './menu-icon.component';

type Props = React.ComponentProps<typeof MenuIcon>;

const mockedProps: Props = {
  isOpen: false,
};

const setup = (props: Partial<Props> = {}): ShallowWrapper => {
  const setupProps = { ...mockedProps, ...props };
  return shallow(<MenuIcon {...setupProps} />);
};

describe('<MenuIcon /> Component', () => {
  describe('Renders', () => {
    it('should render without crashing', () => {
      const wrapper = setup();
      expect(wrapper.exists()).toBe(true);
    });
  });

  describe('Styled Props', () => {
    it('props: isOpen = true', () => {
      const wrapper = setup({ isOpen: true });
      const component = findByTestId(wrapper, 'burger-component');
      expect(component.hasClass('open')).toBe(true);
    });

    it('props: isOpen = false', () => {
      const wrapper = setup({ isOpen: false });
      const component = findByTestId(wrapper, 'burger-component');
      expect(component.hasClass('open')).toBe(false);
    });
  });
});
