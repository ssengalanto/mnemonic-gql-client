/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { gql, QueryHookOptions, useQuery } from '@apollo/client';

import { CurrentUser } from './interfaces';

const IS_AUTHENTICATED = gql`
  query User {
    authenticated @client
  }
`;

interface IsAuthenticated {
  authenticated: boolean;
}

export const useIsAuthenticatedQuery = (baseOptions?: QueryHookOptions<IsAuthenticated>) =>
  useQuery<IsAuthenticated>(IS_AUTHENTICATED, baseOptions);

const GET_CURRENT_USER = gql`
  query GetCurrentUser {
    user @client
  }
`;

interface User {
  user: CurrentUser;
}

export const useUserQuery = (baseOptions?: QueryHookOptions<User>) =>
  useQuery<User>(GET_CURRENT_USER, baseOptions);
