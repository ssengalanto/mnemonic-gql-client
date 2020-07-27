import React from 'react';
import { Redirect } from '@reach/router';

import { useIsAuthenticatedQuery } from 'apollo/state';

import { RouteConfigOptions } from './routes.interface';

interface Props extends Pick<RouteConfigOptions, 'path' | 'component'> {}

export const PrivateRoute: React.FC<Props> = ({ path, component: Component }) => {
  const { data } = useIsAuthenticatedQuery();
  return !data?.authenticated ? <Redirect from={path} to="/" noThrow /> : <Component path={path} />;
};
