import { userActions } from '../../../Interfaces/IUser';
import { UserService } from '../../../utils/services/userService';
import { Dispatch } from 'react';
import { setAuth } from './userActions';
import Router from 'next/router';

export const setLogin = (email: string, password: string) => {
  return async (dispatch: Dispatch<userActions>) => {
    try {
      const userData = await UserService.login(email, password);
      localStorage.setItem('Token', userData.data.accessToken);
      dispatch(setAuth(true, userData.data));
      Router.push('/FindVacancies');
    } catch (e) {
      console.log(e.response.data);
      alert(e.response.data.message);
    }
  };
};

export const setLogout = () => {
  return async (dispatch: Dispatch<userActions>) => {
    try {
      await UserService.logout();
      localStorage.removeItem('Token');
      dispatch(setAuth(false));
      Router.push('/');
    } catch (e) {
      console.log(e);
    }
  };
};
export const checkAuth = () => {
  return async (dispatch: Dispatch<userActions>) => {
    try {
      const userData = await UserService.refresh();
      localStorage.setItem('Token', userData.data.accessToken);

      dispatch(setAuth(true, userData.data));
    } catch (e) {
      console.log(e, 'Пользователь не авторизован');
    }
  };
};
