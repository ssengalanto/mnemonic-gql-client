import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { DefaultTheme } from 'styled-components';

import { MockComponent, mockTheme } from 'tests';

import { Logo } from './logo.component';

type Props = { theme: DefaultTheme } & React.ComponentProps<typeof Logo>;

const mockedProps: Props = {
  theme: mockTheme,
};

const setup = (props: Partial<Props> = {}): ShallowWrapper => {
  const setupProps = { ...mockedProps, ...props };
  return shallow(
    <Logo {...setupProps}>
      <MockComponent />
    </Logo>,
  );
};

describe('<Logo /> Component', () => {
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
      expect(wrapper.contains(<MockComponent />)).toBe(true);
    });
  });

  describe('Styled Props', () => {
    it('props: variant = default', () => {
      const wrapper = setup({ variant: 'default' });
      expect(wrapper).toHaveStyleRule('color', mockTheme.color.brand.primary);
    });

    it('props: variant = reverse', () => {
      const wrapper = setup({ variant: 'reverse' });
      expect(wrapper).toHaveStyleRule('color', mockTheme.color.text.reverse);
    });
  });
});
