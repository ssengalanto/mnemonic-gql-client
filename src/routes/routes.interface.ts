import { RouteComponentProps } from '@reach/router';

import { RouteType } from './routes.enum';

export interface RouteConfigOptions {
  path: string;
  label: string;
  component: React.FC<RouteComponentProps>;
  type: RouteType;
}
