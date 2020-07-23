import { setContext } from '@apollo/client/link/context';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

import { getAccessToken } from 'shared/utils/access-token';

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_SERVER_URI,
});

const authLink = setContext((_, { headers }) => {
  const token = getAccessToken();

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});
