import { appService } from 'common/services';
import { loginUrl, registerUrl } from '../constants';

class AuthService {
  login(data: any) {
    return true;
    // return appService.post(loginUrl, {
    //   data: data
    // });
  }
  register(data: any) {
    return appService.post(registerUrl, {
      data: data
    });
  }
}

export const authService = new AuthService();
