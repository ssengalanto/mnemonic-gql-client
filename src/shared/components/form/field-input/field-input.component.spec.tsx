import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { FieldInput } from './field-input.component';

type Props = React.ComponentProps<typeof FieldInput>;

const mockedProps: Props = {};

const setup = (props: Partial<Props> = {}): ShallowWrapper => {
  const setupProps = { ...mockedProps, ...props };
  return shallow(<FieldInput {...setupProps} />);
};

describe('<FieldInput /> Component', () => {
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
