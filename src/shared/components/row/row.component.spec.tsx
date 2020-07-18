import React from 'react';
import { rem } from 'polished';
import { ShallowWrapper, shallow } from 'enzyme';

import { MockComponent } from 'tests';

import { Row } from './row.component';

type Props = React.ComponentProps<typeof Row>;

const mockedProps: Props = {};

const setup = (props: Partial<Props> = {}): ShallowWrapper => {
  const setupProps = { ...mockedProps, ...props };
  return shallow(
    <Row {...setupProps}>
      <MockComponent />
    </Row>,
  );
};

describe('<Row /> Component', () => {
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

    it('props: span = 0 - 24', () => {
      const wrapper = setup({ span: 24 });
      expect(wrapper).toHaveStyleRule('width', '100%');
    });

    it('props: gutter = number', () => {
      const gutter = 200;
      const wrapper = setup({ gutter });
      expect(wrapper).toHaveStyleRule('padding', rem(`${gutter}px`));
    });

    it('props: gutter = [number, number]', () => {
      const gutter = [100, 200] as [number, number];
      const wrapper = setup({ gutter });
      expect(wrapper).toHaveStyleRule(
        'padding',
        `${rem(`${gutter[0]}px`)} ${rem(`${gutter[1]}px`)}`,
      );
    });
  });
});
