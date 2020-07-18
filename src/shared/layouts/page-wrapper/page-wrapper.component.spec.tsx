import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { findByTestId, MockComponent } from 'tests';

import { PageWrapper } from './page-wrapper.component';

type Props = React.ComponentProps<typeof PageWrapper>;

const mockedProps: Props = {
  title: '',
  description: '',
  full: false,
};

const setup = (props: Partial<Props> = {}): ShallowWrapper => {
  const setupProps = { ...mockedProps, ...props };
  return shallow(
    <PageWrapper {...setupProps}>
      <MockComponent />
    </PageWrapper>,
  );
};

describe('<PageWrapper /> Component', () => {
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

    it('should render header and footer when full props is true', () => {
      const wrapper = setup({ full: true });
      const header = findByTestId(wrapper, 'page-wrapper:header');
      const footer = findByTestId(wrapper, 'page-wrapper:footer');

      expect(header.exists()).toBe(true);
      expect(footer.exists()).toBe(true);
    });

    it('should not render header and footer when full props is false', () => {
      const wrapper = setup({ full: false });
      const header = findByTestId(wrapper, 'page-wrapper:header');
      const footer = findByTestId(wrapper, 'page-wrapper:footer');

      expect(header.exists()).toBe(false);
      expect(footer.exists()).toBe(false);
    });
  });

  describe('Headers', () => {
    const title = 'test-title';
    const description = 'test-description';

    const wrapper = setup({ title, description });
    const component = findByTestId(wrapper, 'page-helmet');

    it('<meta> and <title> should have the proper content', () => {
      expect(component.find('title').text()).toBe(`${title} – Mnemonic`);
      expect(component.find('meta[name="description"]').props().content).toBe(description);
    });
  });
});
