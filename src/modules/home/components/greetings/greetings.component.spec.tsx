import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { findByTestId } from 'tests';

import { Greetings } from './greetings.component';

type Props = React.ComponentProps<typeof Greetings>;

const mockedProps: Props = {
  count: 20,
};

const setup = (props: Partial<Props> = {}): ShallowWrapper => {
  const setupProps = { ...mockedProps, ...props };
  return shallow(<Greetings {...setupProps} />);
};

describe('<Greetings /> Component', () => {
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
  });
});
