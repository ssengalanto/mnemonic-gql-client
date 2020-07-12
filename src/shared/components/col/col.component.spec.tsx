import React from 'react';
import { rem } from 'polished';
import { ShallowWrapper, shallow } from 'enzyme';

import { MockComponent } from 'tests';

import { Col } from './col.component';

type Props = React.ComponentProps<typeof Col>;

const mockedProps: Props = {};

const setup = (props: Partial<Props> = {}): ShallowWrapper => {
  const setupProps = { ...mockedProps, ...props };
  return shallow(
    <Col {...setupProps}>
      <MockComponent />
    </Col>,
  );
};

describe('<Col /> Component', () => {
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
    it('props: flex = true', () => {
      const wrapper = setup({ flex: true });
      expect(wrapper).toHaveStyleRule('display', 'flex');
    });

    it('props: order = number', () => {
      const wrapper = setup({ order: 1 });
      expect(wrapper).toHaveStyleRule('order', '1');
    });

    it('props: alignSelf = provided value', () => {
      const wrapper = setup({ alignSelf: 'flex-end' });
      expect(wrapper).toHaveStyleRule('align-self', 'flex-end');
    });

    it('props: span = 0 - 24', () => {
      const wrapper = setup({ span: 24 });
      expect(wrapper).toHaveStyleRule('flex-basis', '100%');
    });

    it('props: direction = provided value', () => {
      const wrapper = setup({ direction: 'row' });
      expect(wrapper).toHaveStyleRule('flex-direction', 'row');
    });

    it('props: alignItems = provided value', () => {
      const wrapper = setup({ alignItems: 'flex-start' });
      expect(wrapper).toHaveStyleRule('align-items', 'flex-start');
    });

    it('props: justify = provided value', () => {
      const wrapper = setup({ justify: 'center' });
      expect(wrapper).toHaveStyleRule('justify-content', 'center');
    });

    it('props: alignContent = provided value', () => {
      const wrapper = setup({ alignContent: 'flex-end' });
      expect(wrapper).toHaveStyleRule('align-content', 'flex-end');
    });

    it('props: wrap = provided value', () => {
      const wrapper = setup({ wrap: 'wrap-reverse' });
      expect(wrapper).toHaveStyleRule('flex-wrap', 'wrap-reverse');
    });

    it('props: flexGrow = number', () => {
      const wrapper = setup({ flexGrow: 0 });
      expect(wrapper).toHaveStyleRule('flex-grow', '0');
    });

    it('props: flexShrink = number', () => {
      const wrapper = setup({ flexShrink: 0 });
      expect(wrapper).toHaveStyleRule('flex-shrink', '0');
    });

    it('props: gutter = number', () => {
      const gutter = 200;
      const wrapper = setup({ gutter });
      expect(wrapper).toHaveStyleRule('margin', rem(`${gutter}px`));
    });

    it('props: gutter = [number, number]', () => {
      const gutter = [100, 200] as [number, number];
      const wrapper = setup({ gutter });
      expect(wrapper).toHaveStyleRule(
        'margin',
        `${rem(`${gutter[0]}px`)} ${rem(`${gutter[1]}px`)}`,
      );
    });
  });
});
