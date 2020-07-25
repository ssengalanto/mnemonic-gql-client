import React from 'react';
import { Redirect } from '@reach/router';

import { accessToken } from 'shared/reactive-variables';

import { RouteConfigOptions } from './routes.interface';

interface Props extends Pick<RouteConfigOptions, 'path' | 'component'> {}

export const PrivateRoute: React.FC<Props> = ({ path, component: Component }) =>
  !accessToken() ? <Redirect from={path} to="/" noThrow /> : <Component path={path} />;
