export interface IVacancy {
  info: IInfoVacancy;
  _id: string;
}
export interface IFullVacancy {
  email: string;
  phone: string;
  info: IInfoVacancy;
  address: string;
  subtitleSalary: string;
  description: string;
  skills: string[];
  typeDriverLicense: string[];
  workExperiences: string[];
  schedule: string[];
  typeEmployment: string[];
}

export interface IInfoVacancy {
  userName: string;
  city: string;
  currency: string;
  date: string;
  endSalary: number;
  specializations: string[];
  startSalary: string;
  title: string;
}
