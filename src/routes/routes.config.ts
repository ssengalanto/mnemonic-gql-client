/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { RouteType } from './routes.enum';
import { RouteConfigOptions } from './routes.interface';

const MainPage = React.lazy(() => import('pages/main.page'));

export const routeConfig: RouteConfigOptions[] = [
  {
    path: '/',
    label: 'home',
    component: MainPage,
    type: RouteType.PRIVATE,
  },
];
