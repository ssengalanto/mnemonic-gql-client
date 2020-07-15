import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { MockComponent } from 'tests';

import { Main } from './main.component';

const setup = (): ShallowWrapper =>
  shallow(
    <Main>
      <MockComponent />
    </Main>,
  );

describe('<Main /> Component', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = setup();
  });

  describe('Renders', () => {
    it('should render without crashing', () => {
      expect(component.exists()).toBe(true);
    });

    it('should render its children props', () => {
      expect(component.contains(<MockComponent />)).toBe(true);
    });
  });
});
