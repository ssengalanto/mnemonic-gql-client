import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { MockComponent } from 'tests';

import { Container } from './container.component';

const setup = (): ShallowWrapper =>
  shallow(
    <Container>
      <MockComponent />
    </Container>,
  );

describe('<Container /> Component', () => {
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
