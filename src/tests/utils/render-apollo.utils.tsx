import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { MockedProvider } from '@apollo/client/testing';
import { MockedProviderProps } from '@apollo/client/utilities/testing/mocking/MockedProvider';

export const renderApollo = ({
  children,
  addTypename = false,
  ...props
}: MockedProviderProps): ReactWrapper =>
  mount(
    <MockedProvider addTypename={addTypename} {...props}>
      {children}
    </MockedProvider>,
  );
