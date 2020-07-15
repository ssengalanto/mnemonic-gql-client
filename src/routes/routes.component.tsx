import React from 'react';
import { Router } from '@reach/router';

import { MainPage, LoginPage } from 'pages';

export const Routes: React.FC = () => (
  <Router>
    <MainPage path="/" />
    <LoginPage path="login" />
  </Router>
);
