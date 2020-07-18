/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { RouteType } from './routes.enum';
import { RouteConfigOptions } from './routes.interface';

const HomePage = React.lazy(() => import('pages/home.page'));
const LoginPage = React.lazy(() => import('pages/signin.page'));
const MnemonicPage = React.lazy(() => import('pages/mnemonic.page'));

export const routes: RouteConfigOptions[] = [
  {
    path: '/home',
    label: 'home',
    component: HomePage,
    type: RouteType.PRIVATE,
  },
];

export const initialRoutes: RouteConfigOptions[] = [
  {
    path: '/',
    label: 'mnemonic',
    component: MnemonicPage,
    type: RouteType.PUBLIC,
  },
  {
    path: '/signin',
    label: 'signin',
    component: LoginPage,
    type: RouteType.PUBLIC,
  },
];
