/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { ReactWrapper } from 'enzyme';
import { MockedProviderProps } from '@apollo/client/utilities/testing/mocking/MockedProvider';

import { wait, findByTestId, renderApollo, apolloErrorQuery } from 'tests';
import { RemindersDocument, RemindersQuery } from '__gql-gen__';

import { Apollo } from './apollo.component';
import { SampleRemindersMockData } from './__mocks__';

const mocks = [
  {
    request: {
      query: RemindersDocument,
    },
    result: (): { data: RemindersQuery } => ({
      data: {
        reminders: SampleRemindersMockData,
      },
    }),
  },
];

const setup = (props: MockedProviderProps = { mocks }): ReactWrapper =>
  renderApollo({
    children: <Apollo data-test-id="apollo-component" />,
    ...props,
  });

describe('<Apollo /> Component', () => {
  describe('Renders', () => {
    it('should render without crashing', async () => {
      const wrapper = setup();
      const component = findByTestId(wrapper, 'apollo-component');
      expect(component.exists()).toBe(true);
    });

    it('should render loading state', async () => {
      const wrapper = setup();
      const component = findByTestId(wrapper, 'apollo-component');
      expect(component.contains(<p>Loading...</p>)).toBe(true);
    });

    it('should render final state', async () => {
      const wrapper = setup();
      await wait(wrapper);
      const component = findByTestId(wrapper, 'apollo-component');
      expect(component.find('ul').length).toBe(3);
    });

    it('should render error state', async () => {
      const wrapper = setup({ mocks: apolloErrorQuery(RemindersDocument) });
      await wait(wrapper);
      const component = findByTestId(wrapper, 'apollo-component');
      expect(component.contains(<p>Error :(</p>)).toBe(true);
    });
  });
});
