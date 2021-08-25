import { INewVacancy } from '../../../pages/CreateVacancy';
import { VacancyService } from './../services/vacancyService';

export const changeFavoriteVacancies = async (id: string) => {
  const favoriteData = await VacancyService.changeFavoriteVacancies(id);
  return favoriteData;
};
export const setNewVacancy = async (newVacancy: INewVacancy) => {
  const favoriteData = await VacancyService.createVacancy(newVacancy);
  return favoriteData;
};
export const moreCurrentVacancies = async (title: string, page: number) => {
  const vacancyData = await VacancyService.moreCurrentVacancies(title, page);
  return vacancyData;
};
