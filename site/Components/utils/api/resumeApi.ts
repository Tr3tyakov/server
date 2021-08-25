import { IMainInfo } from '../../Interfaces/IUser';
import { ResumeService } from './../services/resumeService';

export const setNewResume = async (newResume: any, mainInfo: IMainInfo) => {
  return await ResumeService.createResume(newResume, mainInfo);
};
