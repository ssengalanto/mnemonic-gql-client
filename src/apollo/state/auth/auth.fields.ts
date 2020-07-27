import { accessToken, currentUser } from './auth.vars';

export const authFields = {
  user: {
    read() {
      return currentUser();
    },
  },
  authenticated: {
    read() {
      return !!accessToken();
    },
  },
};
