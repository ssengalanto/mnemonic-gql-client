import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Router, Redirect } from '@reach/router';

import { RouteType } from './routes.enum';
import { RouteConfigOptions } from './routes.interface';

interface Props {
  routes: RouteConfigOptions[];
}

export const GET_ACCESS_TOKEN = gql`
  query GetAccessToken {
    accessToken @client
  }
`;

export const Routes: React.FC<Props> = ({ routes }) => {
  const { data } = useQuery<{ accessToken: string }>(GET_ACCESS_TOKEN);

  return (
    <Router>
      {routes.map(({ type, path, component: Component }) => {
        if (type === RouteType.PRIVATE && !data?.accessToken)
          return <Redirect key={path} from="/home" to="/" noThrow />;

        return <Component key={path} path={path} data-test-id="route-component" />;
      })}
    </Router>
  );
};
