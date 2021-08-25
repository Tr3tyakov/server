import { userActions, userType, IUser } from '../../Interfaces/IUser';

const initialState: IUser = {
  isAuth: false,
  mainInfo: {
    name: '',
    secondName: '',
    avatar: '',
    bithday: '',
    gender: '',
    phone: '',
    city: '',
    country: '',
    email: '',
    isActiveEmail: false,
  },
};

export const userReducer = (state = initialState, action: userActions): IUser => {
  switch (action.type) {
    case userType.AUTH: {
      const mainInfo = action.payload.mainInfo;
      if (mainInfo) {
        return { ...state, isAuth: action.payload.value, mainInfo };
      }
      return { ...state, isAuth: action.payload.value };
    }

    default:
      return state;
  }
};
