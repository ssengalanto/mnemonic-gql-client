import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { MockComponent, findByTestId } from 'tests';

import { FieldWrapper } from './field-wrapper.component';

type Props = React.ComponentProps<typeof FieldWrapper>;

const mockedProps: Props = {
  error: '',
  touched: false,
  label: '',
  value: false,
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

    it('should render label when label and value is truthy', () => {
      const wrapper = setup({ label: 'test-label', value: true });
      const component = findByTestId(wrapper, 'field-wrapper:label');

      expect(component.exists()).toBe(true);
    });

    it('should not render label when label or value is falsy', () => {
      const wrapper = setup({ label: 'test-label', value: false });
      const component = findByTestId(wrapper, 'field-wrapper:label');

      expect(component.exists()).toBe(false);
    });

    it('should render error message when error and touched is truthy', () => {
      const wrapper = setup({ touched: true, error: 'test-error' });
      const component = findByTestId(wrapper, 'field-wrapper:error');

      expect(component.exists()).toBe(true);
    });

    it('should render not error message when error or touched is falsy', () => {
      const wrapper = setup({ touched: true, error: '' });
      const component = findByTestId(wrapper, 'field-wrapper:error');

      expect(component.exists()).toBe(false);
    });
  });
});
