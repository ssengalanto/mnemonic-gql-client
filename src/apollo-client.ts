import { setContext } from '@apollo/client/link/context';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

import { accessToken } from 'shared/reactive-variables';

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_SERVER_URI,
});

const authLink = setContext((_, { headers }) => {
  const token = accessToken();

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
