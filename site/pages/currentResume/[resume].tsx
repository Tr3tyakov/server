import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useStyles } from '../../styles/work.style';
import Link from 'next/link';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MainLayouts from '../../Components/layouts/MainLayouts';
import axios from 'axios';
import { IFullVacancy } from '../../Components/Interfaces/IVacancy';
import { URL } from '../../Components/utils/http/utils';
import { IResume } from '../../Components/Interfaces/IResume';
import { IMainInfo } from '../../Components/Interfaces/IUser';

interface ICurrentResume {
  currentResume: {
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
}

const CurrentResume: React.FC<ICurrentResume> = ({ currentResume }) => {
  const classes = useStyles();
  const currentTime: any = new Date();
  const data: any = new Date(currentResume.mainInfo.bithday);
  const year = new Date(currentTime - data).getFullYear();
  const fullDate = new Date(currentTime - data).toLocaleDateString();
  const age = new Date(currentTime).getFullYear() - year;

  return (
    <MainLayouts>
      <span>{currentResume.mainInfo.gender === 'Мужской' ? 'Мужчина,' : 'Женщина,'}&nbsp;</span>
      <span>
        {age} года, родился {fullDate},&nbsp;
      </span>
      <span>{currentResume.mainInfo.city},&nbsp;</span>
      <span>{currentResume.mainInfo.country}&nbsp;</span>
      <Typography variant="h5" gutterBottom>
        {currentResume.desiredPosition}
      </Typography>
      <Typography gutterBottom>{currentResume.desiredPay} руб.</Typography>
      <Typography gutterBottom>{currentResume.education}</Typography>
      <Typography variant="h5" gutterBottom>
        Обо мне
      </Typography>
      <div>{currentResume.aboutMe}</div>
      <Typography variant="h5" className={classes.title}>
        Ключевые навыки
      </Typography>
      <div className={classes.skills}>
        {currentResume.skills.map((element, index) => (
          <div className={classes.skill} key={index}>
            {element}
          </div>
        ))}
      </div>
      <Typography variant="h5" className={classes.title}>
        Знание языков
      </Typography>
      {`${currentResume.languages[0].mainLanguage} — Родной язык`}
      <div>
        {currentResume.languages[0].additionLanguages.map((element, index) => (
          <span key={index}>
            {element.language} {element.knowledge}
          </span>
        ))}
      </div>
      <Typography variant="h5" className={classes.title}>
        Специализация
      </Typography>
      <div className={classes.skills}>
        {currentResume.specializations.map((element, index) => (
          <div className={classes.skill} key={index}>
            {element}
          </div>
        ))}
      </div>
      <div className={classes.marginTop}>
        <Typography className={classes.title}>
          Вакансия опубликована {new Date(currentResume.date).toLocaleString()}
        </Typography>
        <Divider />
        <Typography>{`${currentResume.mainInfo.name} ${currentResume.mainInfo.secondName}`}</Typography>
        <Typography>{currentResume.mainInfo.email}</Typography>
        <Typography>{currentResume.mainInfo.phone}</Typography>
      </div>
    </MainLayouts>
  );
};

export default CurrentResume;
export const getServerSideProps = async (ctx: any) => {
  const { resume } = ctx.query;
  const CurrentResume = await axios.get(`${URL}/resume/${resume}`);
  return {
    props: { currentResume: CurrentResume.data },
  };
};
