import jwtDecode from 'jwt-decode';
import { makeVar } from '@apollo/client';

import { JwtPayload, CurrentUser } from './interfaces';

export const accessToken = makeVar('');
export const currentUser = makeVar<CurrentUser>({
  id: '',
  email: '',
  firstName: '',
  lastName: '',
});

export const setAuthState = (token: string): void => {
  accessToken(token);

  const user = jwtDecode<JwtPayload>(token);

  currentUser({
    id: user.sub,
    email: user.email,
    firstName: user.first_name,
    lastName: user.last_name,
  });
};
