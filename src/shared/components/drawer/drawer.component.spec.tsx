import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { MockComponent, findByTestId } from 'tests';

import { Drawer } from './drawer.component';

type Props = React.ComponentProps<typeof Drawer>;

const mockedProps: Props = {
  open: true,
  onClick: jest.fn(),
};

const setup = (props: Partial<Props> = {}): ShallowWrapper => {
  const setupProps = { ...mockedProps, ...props };
  return shallow(
    <Drawer {...setupProps}>
      <MockComponent />
    </Drawer>,
  );
};

describe('<Drawer /> Component', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('Renders', () => {
    it('should render without crashing', () => {
      const wrapper = setup();
      expect(wrapper.exists()).toBe(true);
    });

    it('should render its children props', () => {
      const wrapper = setup();
      expect(wrapper.contains(<MockComponent />)).toBe(true);
    });
  });

  describe('Props', () => {
    it('should render when open props is true', () => {
      const open = true;
      const wrapper = setup({ open });
      const component = findByTestId(wrapper, 'drawer-component');
      expect(component.exists()).toBe(true);
    });

    it('should not render when open props is false', () => {
      const open = false;
      const wrapper = setup({ open });
      const component = findByTestId(wrapper, 'drawer-component');
      expect(component.exists()).toBe(false);
    });
  });

  describe('Interactions', () => {
    it('should call onClick props when backdrop is clicked', () => {
      const wrapper = setup();
      const component = findByTestId(wrapper, 'drawer-component:backdrop');
      component.simulate('click');
      expect(mockedProps.onClick).toHaveBeenCalledTimes(1);
    });
  });
});