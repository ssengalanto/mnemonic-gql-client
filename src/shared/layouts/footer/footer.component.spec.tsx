import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Footer } from './footer.component';

const setup = (): ShallowWrapper => shallow(<Footer />);

describe('<Footer /> Component', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = setup();
  });

  describe('Renders', () => {
    it('should render without crashing', () => {
      expect(component.exists()).toBe(true);
    });
  });
});
