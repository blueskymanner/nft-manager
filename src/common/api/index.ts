import { authService } from 'modules/Auth';

export const apiMapping = {
  authService
};
export { authService };

export type APIMapping = typeof apiMapping;
