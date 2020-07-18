import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { findByTestId, MockComponent } from 'tests';

import { PageWrapper } from './page-wrapper.component';

type Props = React.ComponentProps<typeof PageWrapper>;

const mockedProps: Props = {
  title: '',
  description: '',
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
    return wrapper;
  });

  describe('Renders', () => {
    it('should render without crashing', () => {
      expect(wrapper.length).toBe(1);
    });

    it('should render its children props', () => {
      expect(wrapper.contains(<MockComponent />)).toBe(true);
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
