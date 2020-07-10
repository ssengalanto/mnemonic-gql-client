import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { DefaultTheme } from 'styled-components';

import { MockComponent, mockTheme } from 'tests';

import { Button } from './button.component';

type Props = { theme: DefaultTheme } & React.ComponentProps<typeof Button>;

const mockedProps: Props = {
  theme: mockTheme,
};

const setup = (props: Partial<Props> = {}): ShallowWrapper => {
  const setupProps = { ...mockedProps, ...props };
  return shallow(
    <Button {...setupProps}>
      <MockComponent />
    </Button>,
  );
};

describe('<Button /> Component', () => {
  describe('Renders', () => {
    it('should render without crashing', () => {
      const component = setup();
      expect(component.exists()).toBe(true);
    });

    it('should render children props', () => {
      const component = setup();
      expect(component.contains(<MockComponent />)).toBe(true);
    });
  });

  describe('<Button /> attributes', () => {
    it('should adopt a default type button', () => {
      const wrapper = setup();
      expect(wrapper.prop('type')).toBe('button');
    });

    it('should adopt a type submit', () => {
      const wrapper = setup({ type: 'submit' });
      expect(wrapper.prop('type')).toBe('submit');
    });
  });

  describe('Styled Props', () => {
    it('props: { color: primary }', () => {
      const wrapper = setup({ color: 'primary' });
      expect(wrapper).toHaveStyleRule('background-color', mockTheme.color.brand.primary);
    });

    it('props: { color: secondary }', () => {
      const wrapper = setup({ color: 'secondary' });
      expect(wrapper).toHaveStyleRule('background-color', mockTheme.color.brand.secondary);
    });

    it('props: { color: tertiary }', () => {
      const wrapper = setup({ color: 'tertiary' });
      expect(wrapper).toHaveStyleRule('background-color', mockTheme.color.brand.tertiary);
    });

    it('props: { color: success }', () => {
      const wrapper = setup({ color: 'success' });
      expect(wrapper).toHaveStyleRule('background-color', mockTheme.color.success.default);
    });

    it('props: { color: warn }', () => {
      const wrapper = setup({ color: 'warn' });
      expect(wrapper).toHaveStyleRule('background-color', mockTheme.color.warn.default);
    });

    it('props: { color: danger }', () => {
      const wrapper = setup({ color: 'danger' });
      expect(wrapper).toHaveStyleRule('background-color', mockTheme.color.danger.default);
    });
  });
});