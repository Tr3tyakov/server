import { IMainInfo } from './IUser';

export interface IResume {
  resume: {
    languages: [
      { mainLanguage: string; additionLanguages: [{ language: string; knowledge: string }] },
    ];
    skills: string[];
    typeLicense: {
      haveCar: boolean;
      typeCategory: string[];
    };
    education: string;
    specializations: string[];
    desiredPosition: string;
    desiredPay: number;
    aboutMe: string;
    date: Date;
    mainInfo: IMainInfo;
  };
  _id: string;
}
