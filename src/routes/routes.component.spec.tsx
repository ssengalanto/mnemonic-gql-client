import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { findByTestId, MockComponent } from 'tests';

import { Routes } from './routes.component';
import { RouteType } from './routes.enum';
import { RouteConfigOptions } from './routes.interface';

const routes: RouteConfigOptions[] = [
  {
    path: '/',
    label: 'home',
    component: MockComponent,
    type: RouteType.PUBLIC,
  },
  {
    path: '/about',
    label: 'about',
    component: MockComponent,
    type: RouteType.PRIVATE,
  },
  {
    path: '/contacts',
    label: 'contacts',
    component: MockComponent,
    type: RouteType.PRIVATE,
  },
];

type Props = React.ComponentProps<typeof Routes>;

const mockedProps: Props = {
  routes,
  authenticated: false,
};

const setup = (props: Partial<Props> = {}): ShallowWrapper => {
  const setupProps = { ...mockedProps, ...props };
  return shallow(<Routes {...setupProps} />);
};

describe('<Routes /> Component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  describe('Renders', () => {
    it('should render without crashing', () => {
      expect(wrapper.exists()).toBe(true);
    });

    it('should render all public and private routes when user is authenticated', () => {
      const wrapper = setup({ authenticated: true });
      const component = findByTestId(wrapper, 'route-component');
      expect(component).toHaveLength(routes.length);
    });

    it('should only render all public routes when user is not authenticated', () => {
      const wrapper = setup({ authenticated: false });
      const component = findByTestId(wrapper, 'route-component');
      expect(component).toHaveLength(1);
    });
  });
});
