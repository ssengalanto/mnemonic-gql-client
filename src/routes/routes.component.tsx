import React from 'react';
import { Router } from '@reach/router';

import { RouteType } from './routes.enum';
import { RouteConfigOptions } from './routes.interface';
import { PrivateRoute } from './private-route.component';

interface Props {
  routes: RouteConfigOptions[];
}

export const Routes: React.FC<Props> = ({ routes }) => (
  <Router>
    {routes.map(({ type, path, component: Component }) => {
      if (type === RouteType.PRIVATE)
        return (
          <PrivateRoute
            key={path}
            path={path}
            component={Component}
            data-test-id="route-component:private"
          />
        );

      return <Component key={path} path={path} data-test-id="route-component:public" />;
    })}
  </Router>
);
