import link from 'next/link';
import { IMainInfo } from '../../Interfaces/IUser';
import { UserService } from '../services/userService';

export const setRegistration = async (email: string, password: string) => {
  try {
    return await UserService.registration(email, password);
  } catch (e) {
    return e.response;
  }
};
export const updateMainInfo = async (mainInfo: IMainInfo) => {
  try {
    return await UserService.updateMainInfo(mainInfo);
  } catch (e) {
    console.log(e);
  }
};
export const updateSkills = async (skills: string[]) => {
  try {
    const userData = await UserService.updateSkills(skills);
  } catch (e) {
    console.log(e);
  }
};

export const updateDesiredPosition = async (
  position: string,
  salary: string,
  specializations: string[],
) => {
  try {
    const userData = await UserService.updatePosition(position, salary, specializations);
    return userData;
  } catch (e) {
    console.log(e);
  }
};
export const changePassword = async (link: any, newPassword: string) => {
  try {
    const userData = await UserService.changePassword(link, newPassword);
    return userData;
  } catch (e) {
    return e.response;
  }
};
export const forgotPassword = async (email: string) => {
  try {
    const userData = await UserService.forgotPassword(email);
    return userData;
  } catch (e) {
    console.log(e);
  }
};
export const setConfirmEmail = async (email: string) => {
  try {
    const userData = await UserService.confirmEmail(email);
    return userData;
  } catch (e) {
    console.log(e);
  }
};
