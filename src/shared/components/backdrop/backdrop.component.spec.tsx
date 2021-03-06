import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { MockComponent, findByTestId } from 'tests';

import { Backdrop } from './backdrop.component';

type Props = React.ComponentProps<typeof Backdrop>;

const mockedProps: Props = {
  open: true,
  onClick: jest.fn(),
};

const setup = (props: Partial<Props> = {}): ShallowWrapper => {
  const setupProps = { ...mockedProps, ...props };
  return shallow(
    <Backdrop {...setupProps}>
      <MockComponent />
    </Backdrop>,
  );
};

describe('<Backdrop /> Component', () => {
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
      const wrapper = setup();
      expect(wrapper.contains(<MockComponent />)).toBe(true);
    });
  });

  describe('Props', () => {
    it('should render when open props is true', () => {
      const wrapper = setup({ open: true });
      const component = findByTestId(wrapper, 'backdrop-component');
      expect(component.exists()).toBe(true);
    });

    it('should not render when open props is false', () => {
      const wrapper = setup({ open: false });
      const component = findByTestId(wrapper, 'backdrop-component');
      expect(component.exists()).toBe(false);
    });
  });

  describe('Interactions', () => {
    it('should call onClick props when backdrop is clicked', () => {
      const component = findByTestId(wrapper, 'backdrop-component:overlay');
      component.simulate('click');
      expect(mockedProps.onClick).toHaveBeenCalledTimes(1);
    });
  });
});
