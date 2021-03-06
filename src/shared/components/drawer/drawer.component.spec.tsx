import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { MockComponent, findByTestId } from 'tests';

import { Drawer } from './drawer.component';

type Props = React.ComponentProps<typeof Drawer>;

const mockedProps: Props = {
  open: true,
  onClick: jest.fn(),
  onKeyDown: jest.fn(),
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

    it('should render its children props', () => {
      expect(wrapper.contains(<MockComponent />)).toBe(true);
    });
  });

  describe('Props', () => {
    it('should render when open props is true', () => {
      const wrapper = setup({ open: true });
      const component = findByTestId(wrapper, 'drawer-component');
      expect(component.exists()).toBe(true);
    });

    it('should not render when open props is false', () => {
      const wrapper = setup({ open: false });
      const component = findByTestId(wrapper, 'drawer-component');
      expect(component.exists()).toBe(false);
    });
  });

  describe('Interactions', () => {
    it('should call onKeyDown props when esc key is pressed', () => {
      const component = findByTestId(wrapper, 'drawer-component');
      component.simulate('keyDown', { key: 'Esc' });
      expect(mockedProps.onKeyDown).toHaveBeenCalledTimes(1);
    });

    it('should call onClick props when backdrop is clicked', () => {
      const component = findByTestId(wrapper, 'drawer-component:backdrop');
      component.simulate('click');
      expect(mockedProps.onClick).toHaveBeenCalledTimes(1);
    });
  });
});
