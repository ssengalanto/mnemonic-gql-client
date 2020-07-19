import React from 'react';
import { useNavigate } from '@reach/router';

import { Signup } from './signup.component';

export const SignupContainer: React.FC = () => {
  const navigate = useNavigate();
  return <Signup navigate={navigate} />;
};
