import { setContext } from '@apollo/client/link/context';
import { ApolloClient, HttpLink } from '@apollo/client';

import { accessToken } from 'apollo/state';

import { cache } from './cache';

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
  cache,
  link: authLink.concat(httpLink),
});
