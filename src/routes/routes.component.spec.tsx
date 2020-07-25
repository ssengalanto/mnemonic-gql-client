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
    it('should render without crashing', async () => {
      expect(wrapper.exists()).toBe(true);
    });

    it('should render route types correctly', () => {
      const publicRoute = findByTestId(wrapper, 'route-component:public');
      expect(publicRoute).toHaveLength(1);

      const privateRoute = findByTestId(wrapper, 'route-component:private');
      expect(privateRoute).toHaveLength(2);
    });
  });
});
