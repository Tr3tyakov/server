export enum userType {
  AUTH = 'AUTH',
  FAVORITE = 'FAVORITE',
}
export interface IUser {
  isAuth: boolean;
  mainInfo: IMainInfo;
}

export interface IMainInfo {
  name: string;
  secondName: string;
  avatar: string;
  bithday: string;
  gender: string;
  phone: string;
  city: string;
  country: string;
  email: string;
  isActiveEmail?: boolean;
}

//actions
interface authAction {
  type: userType.AUTH;
  payload: { value: boolean; mainInfo?: IMainInfo };
}
export type userActions = authAction;
