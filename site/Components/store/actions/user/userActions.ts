import { IMainInfo, userActions } from '../../../Interfaces/IUser';
import { userType } from '../../../Interfaces/IUser';

export const setAuth = (value: boolean, mainInfo?: IMainInfo): userActions => ({
  type: userType.AUTH,
  payload: { value, mainInfo },
});
