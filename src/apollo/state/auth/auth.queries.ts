/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { gql, QueryHookOptions, useQuery } from '@apollo/client';

import { CurrentUser } from './interfaces';

interface IsAuthenticated {
  authenticated: boolean;
}

const IS_AUTHENTICATED = gql`
  query User {
    authenticated @client
  }
`;

export const useIsAuthenticatedQuery = (baseOptions?: QueryHookOptions<IsAuthenticated>) =>
  useQuery<IsAuthenticated>(IS_AUTHENTICATED, baseOptions);

interface User {
  user: CurrentUser;
}

const GET_CURRENT_USER = gql`
  query GetCurrentUser {
    user @client
  }
`;

export const useUserQuery = (baseOptions?: QueryHookOptions<User>) =>
  useQuery<User>(GET_CURRENT_USER, baseOptions);
