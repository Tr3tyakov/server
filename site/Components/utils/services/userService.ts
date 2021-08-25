import axios from 'axios';
import { IMainInfo } from '../../Interfaces/IUser';
import { api, URL } from '../http/utils';

export class UserService {
  static async registration(email: string, password: string) {
    return await api.post('/registration', { email, password });
  }
  static async login(email: string, password: string) {
    return await api.post('/login', { email, password });
  }
  static async logout() {
    return await api.get('/logout');
  }
  static async refresh() {
    return await axios.get(`${URL}/refresh`, { withCredentials: true });
  }
  static async getUser() {
    return await axios.get(`${URL}/user`, { withCredentials: true });
  }
  static async updateSkills(skills: string[]) {
    return await axios.put(`${URL}/update/skills`, { skills }, { withCredentials: true });
  }

  static async updateMainInfo(mainInfo: any) {
    const formData = new FormData();
    formData.append('avatar', mainInfo.avatar);
    formData.append('name', mainInfo.name);
    formData.append('secondName', mainInfo.secondName);
    formData.append('date', mainInfo.bithday);
    formData.append('phone', mainInfo.phone);
    formData.append('city', mainInfo.city);
    formData.append('gender', mainInfo.gender);
    formData.append('country', mainInfo.country);

    return await axios.put(`${URL}/update/mainInfo`, formData, {
      headers: {
        'Content-type': 'multipart/form-data',
      },
      withCredentials: true,
    });
  }

  static async updatePosition(position: string, salary: string, specializations: string[]) {
    return await axios.put(
      `${URL}/update/position`,
      { position, salary, specializations },
      { withCredentials: true },
    );
  }
  static async changePassword(link: string, newPassword: string) {
    const data = await axios.post(`${URL}/changePassword`, { link, newPassword });
    return data;
  }
  static async forgotPassword(email: string) {
    const data = await axios.post(`${URL}/forgotPassword`, { email });
    return data;
  }
  static async confirmEmail(email: string) {
    const data = await axios.post(`${URL}/confirmEmail`, { email });
    return data;
  }
}
