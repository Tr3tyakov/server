import axios from 'axios';
import { IMainInfo } from '../../Interfaces/IUser';
import { URL } from '../http/utils';

export class ResumeService {
  static async createResume(newResume: any, mainInfo: IMainInfo) {
    return await axios.post(`${URL}/resume`, { newResume, mainInfo }, { withCredentials: true });
  }
}
