import axios from 'axios';
import { INewVacancy } from '../../../pages/CreateVacancy';
import { URL } from '../http/utils';

export class VacancyService {
  static async createVacancy(newVacancy: INewVacancy) {
    return await axios.post(`${URL}/vacancy`, { newVacancy }, { withCredentials: true });
  }
  static async changeFavoriteVacancies(id: string) {
    return await axios.post(`${URL}/vacancy/favorite`, { id }, { withCredentials: true });
  }
  static async moreCurrentVacancies(title: string, page: number) {
    return await axios.post(
      `${URL}/currentVacancy?page=${page}`,
      { title },
      { withCredentials: true },
    );
  }
}
