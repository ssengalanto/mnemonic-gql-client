import React from 'react';

import { RouteConfigOptions } from './routes.interface';

type Props = Pick<RouteConfigOptions, 'path' | 'component'>;

export const PrivateRoute: React.FC<Props> = ({ component: Component, path }) => (
  <Component path={path} />
);
