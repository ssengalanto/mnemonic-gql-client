/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { RouteType } from './routes.enum';
import { RouteConfigOptions } from './routes.interface';

const LoginPage = React.lazy(() => import('pages/login.page'));
const MnemonicPage = React.lazy(() => import('pages/mnemonic.page'));

export const routes: RouteConfigOptions[] = [
  {
    path: '/',
    label: 'home',
    component: MnemonicPage,
    type: RouteType.PRIVATE,
  },
];

export const initialRoutes: RouteConfigOptions[] = [
  {
    path: '/mnemonic',
    label: 'home',
    component: MnemonicPage,
    type: RouteType.PUBLIC,
  },
  {
    path: '/login',
    label: 'login',
    component: LoginPage,
    type: RouteType.PUBLIC,
  },
];
