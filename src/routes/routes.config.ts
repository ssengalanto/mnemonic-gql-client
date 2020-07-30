import React from 'react';

import { RouteType } from './routes.enum';
import { RouteConfigOptions } from './routes.interface';

const HomePage = React.lazy(() => import('pages/home.page'));
const SigninPage = React.lazy(() => import('pages/signin.page'));
const SignupPage = React.lazy(() => import('pages/signup.page'));
const MnemonicPage = React.lazy(() => import('pages/mnemonic.page'));

export const routes: RouteConfigOptions[] = [
  {
    path: '/',
    label: 'mnemonic',
    component: MnemonicPage,
    type: RouteType.PUBLIC,
  },
  {
    path: '/signin',
    label: 'signin',
    component: SigninPage,
    type: RouteType.PUBLIC,
  },
  {
    path: '/signup',
    label: 'signup',
    component: SignupPage,
    type: RouteType.PUBLIC,
  },
  {
    path: '/home',
    label: 'home',
    component: HomePage,
    type: RouteType.PUBLIC,
  },
];
