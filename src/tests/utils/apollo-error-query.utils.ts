/* eslint-disable @typescript-eslint/no-explicit-any */
import { DocumentNode } from 'graphql';
import { MockedResponse } from '@apollo/client/testing';

import { DataObject } from 'shared/types';

export const apolloErrorQuery = (
  query: DocumentNode,
  variables: DataObject = {},
): MockedResponse<Record<string, any>>[] | undefined => [
  {
    request: {
      query,
      variables,
    },
    error: new Error('Something went wrong.'),
  },
];
