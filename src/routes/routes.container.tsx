import React from 'react';

import { Routes } from './routes.component';
import { routeConfig } from './routes.config';

export const RoutesContainer: React.FC = () => <Routes routes={routeConfig} authenticated />;
