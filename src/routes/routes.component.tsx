import React from 'react';
import { Router, Redirect } from '@reach/router';

import { RouteType } from './routes.enum';
import { RouteConfigOptions } from './routes.interface';
import { PrivateRoute } from './private.route.component';

interface Props {
  authenticated: boolean;
  routes: RouteConfigOptions[];
}

export const Routes: React.FC<Props> = ({ routes, authenticated }) => (
  <Router>
    {routes.map(({ type, path, component: Component }) => {
      if (type === RouteType.PRIVATE) {
        if (!authenticated) return <Redirect key={path} from="/" to="/login" noThrow />;
        return (
          <PrivateRoute
            key={path}
            path={path}
            component={Component}
            data-test-id="route-component"
          />
        );
      }

      return <Component key={path} path={path} data-test-id="route-component" />;
    })}
  </Router>
);
