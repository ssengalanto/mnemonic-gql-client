import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { DefaultTheme } from 'styled-components';

import { MockComponent, mockTheme } from 'tests';

import { Text } from './text.component';

type Props = { theme: DefaultTheme } & React.ComponentProps<typeof Text>;

const mockedProps: Props = {
  theme: mockTheme,
};

const setup = (props: Partial<Props> = {}): ShallowWrapper => {
  const setupProps = { ...mockedProps, ...props };
  return shallow(
    <Text {...setupProps}>
      <MockComponent />
    </Text>,
  );
};

describe('<Logo /> Component', () => {
  describe('Renders', () => {
    it('should render without crashing', () => {
      const wrapper = setup();
      expect(wrapper.exists()).toBe(true);
    });

    it('should render its children props', () => {
      const wrapper = setup();
      expect(wrapper.contains(<MockComponent />)).toBe(true);
    });
  });

  describe('Styled Props', () => {
    it('props: color = default', () => {
      const wrapper = setup({ color: 'default' });
      expect(wrapper).toHaveStyleRule('color', mockTheme.color.text.default);
    });

    it('props: color = reversed', () => {
      const wrapper = setup({ color: 'reverse' });
      expect(wrapper).toHaveStyleRule('color', mockTheme.color.text.reverse);
    });

    it('props: color = wash', () => {
      const wrapper = setup({ color: 'wash' });
      expect(wrapper).toHaveStyleRule('color', mockTheme.color.text.wash);
    });

    it('props: { color: primary }', () => {
      const wrapper = setup({ color: 'primary' });
      expect(wrapper).toHaveStyleRule('color', mockTheme.color.brand.primary);
    });

    it('props: { color: secondary }', () => {
      const wrapper = setup({ color: 'secondary' });
      expect(wrapper).toHaveStyleRule('color', mockTheme.color.brand.secondary);
    });

    it('props: { color: tertiary }', () => {
      const wrapper = setup({ color: 'tertiary' });
      expect(wrapper).toHaveStyleRule('color', mockTheme.color.brand.tertiary);
    });

    it('props: { color: success }', () => {
      const wrapper = setup({ color: 'success' });
      expect(wrapper).toHaveStyleRule('color', mockTheme.color.success.default);
    });

    it('props: { color: warn }', () => {
      const wrapper = setup({ color: 'warn' });
      expect(wrapper).toHaveStyleRule('color', mockTheme.color.warn.default);
    });

    it('props: { color: danger }', () => {
      const wrapper = setup({ color: 'danger' });
      expect(wrapper).toHaveStyleRule('color', mockTheme.color.danger.default);
    });

    it('props: { density: thin }', () => {
      const wrapper = setup({ density: 'thin' });
      expect(wrapper).toHaveStyleRule('font-weight', `${mockTheme.density.thin}`);
    });

    it('props: { density: extra-light }', () => {
      const wrapper = setup({ density: 'extra-light' });
      expect(wrapper).toHaveStyleRule('font-weight', `${mockTheme.density['extra-light']}`);
    });

    it('props: { density: light }', () => {
      const wrapper = setup({ density: 'light' });
      expect(wrapper).toHaveStyleRule('font-weight', `${mockTheme.density.light}`);
    });

    it('props: { density: regular }', () => {
      const wrapper = setup({ density: 'regular' });
      expect(wrapper).toHaveStyleRule('font-weight', `${mockTheme.density.regular}`);
    });

    it('props: { density: medium }', () => {
      const wrapper = setup({ density: 'medium' });
      expect(wrapper).toHaveStyleRule('font-weight', `${mockTheme.density.medium}`);
    });

    it('props: { density: semi-bold }', () => {
      const wrapper = setup({ density: 'semi-bold' });
      expect(wrapper).toHaveStyleRule('font-weight', `${mockTheme.density['semi-bold']}`);
    });

    it('props: { density: bold }', () => {
      const wrapper = setup({ density: 'bold' });
      expect(wrapper).toHaveStyleRule('font-weight', `${mockTheme.density.bold}`);
    });

    it('props: { density: extra-bold }', () => {
      const wrapper = setup({ density: 'extra-bold' });
      expect(wrapper).toHaveStyleRule('font-weight', `${mockTheme.density['extra-bold']}`);
    });

    it('props: { density: heavy }', () => {
      const wrapper = setup({ density: 'heavy' });
      expect(wrapper).toHaveStyleRule('font-weight', `${mockTheme.density.heavy}`);
    });

    it('props: { font: primary }', () => {
      const wrapper = setup({ font: 'primary' });
      expect(wrapper).toHaveStyleRule('font-family', mockTheme.font.primary);
    });

    it('props: { font: secondary }', () => {
      const wrapper = setup({ font: 'secondary' });
      expect(wrapper).toHaveStyleRule('font-family', mockTheme.font.secondary);
    });

    it('props: noWrap = true', () => {
      const wrapper = setup({ noWrap: true });
      expect(wrapper).toHaveStyleRule('white-space', 'nowrap');
    });

    it('props: gutterBottom = true', () => {
      const wrapper = setup({ gutterBottom: true });
      expect(wrapper).toHaveStyleRule('margin-bottom', '1rem');
    });

    it('props: align = provided value', () => {
      const wrapper = setup({ align: 'center' });
      expect(wrapper).toHaveStyleRule('text-align', 'center');
    });

    it('props: display = provided value', () => {
      const wrapper = setup({ display: 'block' });
      expect(wrapper).toHaveStyleRule('display', 'block');
    });
  });
});
