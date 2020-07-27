import { InMemoryCache } from '@apollo/client';

import { authFields } from 'apollo/state';

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        ...authFields,
      },
    },
  },
});
