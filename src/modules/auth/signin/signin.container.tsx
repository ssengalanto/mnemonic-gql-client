import React from 'react';
import { useNavigate } from '@reach/router';

import { Signin } from './signin.component';

export const SigninContainer: React.FC = () => {
  const navigate = useNavigate();
  return <Signin navigate={navigate} />;
};
