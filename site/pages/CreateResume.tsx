import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../styles/create/resume/createResume.style';

import MainLayouts from '../Components/layouts/MainLayouts';
import { useSnackbar } from 'notistack';
import { IMainInfo } from '../Components/Interfaces/IUser';
import axios from 'axios';
import nookies from 'nookies';
import Paper from '@material-ui/core/Paper';
import Link from 'next/link';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { URL } from '../Components/utils/http/utils';
import ModalSkills from '../Components/resume/ModalSkills';
import AddIcon from '@material-ui/icons/Add';
import ModalPosition from '../Components/resume/ModalPosition';
import ModalEducation from '../Components/resume/ModalEducation';
import { Box, MenuItem, TextareaAutosize } from '@material-ui/core';
import ModalForeignLanguage from '../Components/resume/ModalForeignLanguage';
import { typeCategory } from './CreateVacancy';
import ModalTypeLicense from '../Components/resume/ModalTypeLicense';
import { setNewResume } from '../Components/utils/api/resumeApi';
import clsx from 'clsx';

export interface INewResume {
  mainInfo: IMainInfo;
  userEmail: string;
}
export interface ILanguages {
  mainLanguage: string;
  additionLanguages:
    | [
        {
          language: string;
          knowledge: string;
        },
      ]
    | [];
}
export interface ITypeLicense {
  haveCar: boolean | string;
  typeCategory: string[] | [];
}

const CreateOffer: React.FC<INewResume> = ({ mainInfo, userEmail }) => {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const [desiredSalary, setDesiredSalary] = React.useState<string>('');
  const [desiredPosition, setDesiredPosition] = React.useState<string>('');
  const [education, setEducation] = React.useState<string>('');
  const [aboutMe, setAboutMe] = React.useState<string>('');
  const [skills, setSkills] = React.useState<string[]>([]);
  const [sphereActivity, setSphereActivity] = React.useState<string[]>([]);
  const [typeLicense, setTypeLicense] = React.useState<ITypeLicense>({
    haveCar: '',
    typeCategory: [],
  });
  const [languages, setLanguages] = React.useState<ILanguages>({
    mainLanguage: '',
    additionLanguages: [],
  });
  const [modalSkills, setModalSkills] = React.useState<boolean>(false);
  const [modalLicense, setModalLicense] = React.useState<boolean>(false);
  const [modalPosition, setModalPosition] = React.useState<boolean>(false);
  const [modalEducation, setModalEducation] = React.useState<boolean>(false);
  const [modalLanguage, setModalLanguage] = React.useState<boolean>(false);

  //skillstModal
  const openModalSkills = () => {
    setModalSkills(true);
  };
  const closeModalSkills = React.useCallback(() => {
    setModalSkills(false);
  }, []);

  //positionModal
  const openModalPosition = () => {
    setModalPosition(true);
  };
  const closeModalPosition = React.useCallback(() => {
    setModalPosition(false);
  }, []);
  //educationModal
  const openModalEducation = () => {
    setModalEducation(true);
  };
  const closeModalEducation = React.useCallback(() => {
    setModalEducation(false);
  }, []);

  //languageModal
  const openModalLanguage = () => {
    setModalLanguage(true);
  };
  const closeModalLanguage = React.useCallback(() => {
    setModalLanguage(false);
  }, []);

  //modalLicense
  const openModalLicense = () => {
    setModalLicense(true);
  };
  const closeModalLicense = React.useCallback(() => {
    setModalLicense(false);
  }, []);

  const createResume = async () => {
    if (aboutMe === '' || education === '' || desiredPosition === '' || desiredSalary === '') {
      return enqueueSnackbar('Поля должны быть заполнены', { variant: 'warning' });
    }
    const newResume = {
      languages,
      skills,
      aboutMe,
      typeLicense,
      specializations: sphereActivity,
      desiredPosition,
      desiredPay: desiredSalary,
      education,
    };
    const resumeData = await setNewResume(newResume, mainInfo);
    if (resumeData.status === 200) {
      return enqueueSnackbar('Резюме успешно создано', { variant: 'success' });
    }
    enqueueSnackbar('Error', { variant: 'error' });
  };

  return (
    <MainLayouts>
      <Typography variant="h4" gutterBottom>
        Новое резюме
      </Typography>
      <div>
        <Paper className={classes.paper}>
          <MenuItem className={classes.flexBetween}>
            <Typography variant="h5">Информация</Typography>
            <Link href="/MainInfo">
              <a>
                <Button color="primary">
                  <ArrowForwardIosIcon />
                </Button>
              </a>
            </Link>
          </MenuItem>
          {mainInfo.name && mainInfo.secondName ? (
            <div className={classes.salary}>
              <p>{`${mainInfo.name} ${mainInfo.secondName}`}</p>
              <p>{mainInfo.city}</p>
              <p>{userEmail}</p>
              <p>{mainInfo.country}</p>
              <p>{mainInfo.phone}</p>
            </div>
          ) : (
            ''
          )}
        </Paper>
        <Paper className={classes.paper}>
          <Typography className={classes.salary} variant="h5">
            Ключевые навыки
          </Typography>
          <MenuItem className={classes.flexBetween} onClick={openModalLanguage}>
            <Typography variant="subtitle1">Знание языков</Typography>
            <Button color="primary">
              <ArrowForwardIosIcon />
            </Button>
          </MenuItem>
          <ModalForeignLanguage
            modal={modalLanguage}
            closeModal={closeModalLanguage}
            setLanguages={setLanguages}
          />
          {languages.mainLanguage || languages.additionLanguages.length ? (
            <div className={classes.spheres}>
              {languages.mainLanguage ? (
                <Box className={classes.skill}>{languages.mainLanguage}</Box>
              ) : (
                ''
              )}
              {languages?.additionLanguages?.map((element, index) => (
                <Box className={classes.skill} key={index}>
                  {element.language}
                </Box>
              ))}
            </div>
          ) : (
            ''
          )}
          <MenuItem className={classes.flexBetween} onClick={openModalSkills}>
            <Typography variant="subtitle1">Навыки</Typography>
            <Button color="primary">
              <ArrowForwardIosIcon />
            </Button>
          </MenuItem>
          <ModalSkills
            modal={modalSkills}
            closeModalSkills={closeModalSkills}
            skills={skills}
            setSkills={setSkills}
          />
          <div className={classes.spheres}>
            {skills.map((element, index) => (
              <div className={clsx({ [classes.skill]: true, [classes.salary]: true })} key={index}>
                {element}
              </div>
            ))}
          </div>
          <MenuItem className={classes.flexBetween}>
            <Typography variant="subtitle1">Категория прав</Typography>
            <Button color="primary" onClick={openModalLicense}>
              <ArrowForwardIosIcon />
            </Button>
          </MenuItem>

          <ModalTypeLicense
            modal={modalLicense}
            closeModal={closeModalLicense}
            setTypeLicense={setTypeLicense}
          />

          {typeLicense.haveCar && <Box>Есть личный автомобиль</Box>}
          {typeLicense.typeCategory.length ? (
            <Box className={classes.spheres} alignItems="center">
              <Box>Права категории —&nbsp;</Box>
              {typeLicense.typeCategory.map((element) => (
                <div
                  className={clsx({ [classes.skill]: true, [classes.salary]: true })}
                  key={element}>
                  {element}
                </div>
              ))}
            </Box>
          ) : (
            ''
          )}
        </Paper>
        <Paper className={classes.paper}>
          <MenuItem className={classes.flexBetween} onClick={openModalPosition}>
            <Typography variant="h5">Желаемая должность</Typography>
            <Button color="primary">
              <ArrowForwardIosIcon />
            </Button>
          </MenuItem>
          <div className={classes.flexBetween}>
            <div className={classes.lineHeight}>
              <Typography variant="subtitle1" className={classes.salary}>
                {desiredPosition}
              </Typography>
              <p className={classes.salary}>
                {desiredSalary ? desiredSalary + ' ₽' : 'Уровень дохода не указан'}
              </p>
            </div>
            <ModalPosition
              modal={modalPosition}
              closeModalPosition={closeModalPosition}
              desiredSalary={desiredSalary}
              desiredPosition={desiredPosition}
              sphereActivity={sphereActivity}
              setSphere={setSphereActivity}
              setDesiredSalary={setDesiredSalary}
              setDesiredPosition={setDesiredPosition}
            />
          </div>
          <div className={clsx({ [classes.spheres]: true, [classes.salary]: true })}>
            {sphereActivity.map((element, index) => (
              <div className={clsx({ [classes.skill]: true, [classes.salary]: true })} key={index}>
                {element}
              </div>
            ))}
          </div>
        </Paper>

        <Paper className={classes.paper}>
          <MenuItem className={classes.flexBetween} onClick={openModalEducation}>
            <Typography variant="h5">Уровень образования</Typography>
            <Button color="primary" onClick={openModalEducation}>
              <ArrowForwardIosIcon />
            </Button>
          </MenuItem>
          <div className={classes.flexBetween}>
            <div className={classes.lineHeight}>
              {education ? (
                <div className={classes.spheres}>
                  <div className={clsx({ [classes.skill]: true, [classes.salary]: true })}>
                    {education}
                  </div>
                </div>
              ) : (
                <p className={classes.salary}>{education ? education : 'Образование не указано'}</p>
              )}
            </div>
            <ModalEducation
              modal={modalEducation}
              closeModalEducation={closeModalEducation}
              setEducation={setEducation}
            />
          </div>
        </Paper>
        <div>
          <Typography variant="h5" gutterBottom>
            Обо мне
          </Typography>
          <TextareaAutosize
            className={classes.textArea}
            value={aboutMe}
            onChange={(e) => setAboutMe(e.target.value)}
          />
        </div>
        <div>
          <Button
            className={classes.btn}
            color="primary"
            variant="contained"
            onClick={createResume}>
            Сохранить резюме
          </Button>
        </div>
      </div>
    </MainLayouts>
  );
};

export default CreateOffer;

export const getServerSideProps = async (ctx: any) => {
  const { refreshToken } = nookies.get(ctx);
  const userData = await axios.get(`${URL}/user/mainInfo`, {
    headers: { refreshToken },
    withCredentials: true,
  });
  return {
    props: { mainInfo: userData.data },
  };
};
