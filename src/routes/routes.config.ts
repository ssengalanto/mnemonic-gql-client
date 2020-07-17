/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { RouteType } from './routes.enum';
import { RouteConfigOptions } from './routes.interface';

const MnemonicPage = React.lazy(() => import('pages/mnemonic.page'));

export const routeConfig: RouteConfigOptions[] = [
  {
    path: '/',
    label: 'home',
    component: MnemonicPage,
    type: RouteType.PRIVATE,
  },
];
