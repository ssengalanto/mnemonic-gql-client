import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { MockComponent } from 'tests';

import { FieldWrapper } from './field-wrapper.component';

type Props = React.ComponentProps<typeof FieldWrapper>;

const mockedProps: Props = {
  error: '',
  touched: false,
  label: '',
};

const setup = (props: Partial<Props> = {}): ShallowWrapper => {
  const setupProps = { ...mockedProps, ...props };
  return shallow(
    <FieldWrapper {...setupProps}>
      <MockComponent />
    </FieldWrapper>,
  );
};

describe('<FieldWrapper /> Component', () => {
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
});
