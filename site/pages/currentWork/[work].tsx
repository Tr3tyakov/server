import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useStyles } from '../../styles/work.style';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MainLayouts from '../../Components/layouts/MainLayouts';
import axios from 'axios';
import { IFullVacancy, IVacancy } from '../../Components/Interfaces/IVacancy';
import { URL } from '../../Components/utils/http/utils';
import {
  changeFavoriteVacancies,
  moreCurrentVacancies,
} from '../../Components/utils/api/vacancyApi';
import Vacancy from '../../Components/vacancies/Vacancy';
import { useSnackbar } from 'notistack';

interface IWorkProps {
  currentVacancy: IFullVacancy;
}

const Work: React.FC<IWorkProps> = ({ currentVacancy }) => {
  const classes = useStyles();

  const { enqueueSnackbar } = useSnackbar();
  const [isAuth, setIsAuth] = React.useState<boolean>(false);
  const [page, setPage] = React.useState<number>(1);
  const [favorite, setFavorite] = React.useState<any>([]);
  const [vacancies, setVacancies] = React.useState<IVacancy[]>([]);
  const [visible, setVisible] = React.useState<boolean>(false);

  const getMoreVacancies = async () => {
    const vacanciesData = await moreCurrentVacancies(currentVacancy.info.title, page);
    if (vacanciesData.status === 200) {
      console.log();
      setVacancies([...vacancies, ...vacanciesData.data.vacancyData]);
      setIsAuth(vacanciesData.data.auth);
      setFavorite(vacanciesData.data.favorite?.list);
      setPage(page + 1);
      return setVisible(true);
    }
  };
  const changeFavorite = async (id: string) => {
    const favoriteData = await changeFavoriteVacancies(id);
    if (favoriteData.status === 200) {
      const message = favoriteData.data.message;
      return enqueueSnackbar(message, { variant: 'success' });
    }
    enqueueSnackbar('Error', { variant: 'error' });
  };
  return (
    <>
      <div className={classes.backGround}>
        <MainLayouts>
          <div>
            <Typography gutterBottom>{currentVacancy.info?.city}</Typography>
          </div>
          <div>
            <Typography variant="h5" gutterBottom>
              {currentVacancy.info?.title}
            </Typography>
            <Typography variant="h6" gutterBottom>
              {currentVacancy.info?.startSalary === null
                ? 'Зарплата не указана'
                : `От ${currentVacancy.info?.startSalary} ${currentVacancy.info?.currency} на руки`}
            </Typography>
          </div>
          <div>
            <p>
              Требуемый опыт:&nbsp;
              {currentVacancy.workExperiences?.map((element) => element)}
            </p>
            <p>{currentVacancy.typeEmployment?.map((element) => element)}</p>
          </div>
        </MainLayouts>
      </div>
      <Container maxWidth="md">
        <div className={classes.companyInfo}>
          <div>
            <Typography>{currentVacancy.description}</Typography>
          </div>
          <div className={classes.marginTop}>
            <Typography variant="h6">Ключевые навыки</Typography>
            <div className={classes.skills}>
              {currentVacancy.skills?.map((element, index) => (
                <div className={classes.skill} key={index}>
                  {element}
                </div>
              ))}
            </div>
          </div>
          <div className={classes.marginTop}>
            <Typography gutterBottom>
              Вакансия опубликована {new Date(currentVacancy.info?.date).toLocaleString()}
            </Typography>
            <Divider />
          </div>
          <div className={classes.marginTop}>
            <Typography variant="h6" gutterBottom>
              {currentVacancy.info?.userName}
            </Typography>
            <Typography variant="h6" gutterBottom>
              +{currentVacancy.phone}
            </Typography>
            <Typography variant="h6" gutterBottom>
              {currentVacancy.email}
            </Typography>
            <Divider />
            <Typography variant="h6">Похожие вакансии</Typography>
            {visible ? (
              <div className={classes.cardsWrapper}>
                {vacancies.map((element) => (
                  <Vacancy
                    vacancy={element.info}
                    id={element._id}
                    key={element._id}
                    favorite={favorite}
                    changeFavoriteOnServer={changeFavorite}
                    isAuth={isAuth}
                  />
                ))}
              </div>
            ) : (
              ''
            )}
            <div className={classes.btnVacancies}>
              <Button
                variant="outlined"
                color="primary"
                endIcon={<ArrowForwardIosIcon />}
                onClick={getMoreVacancies}>
                {page === 1 ? 'Показать похожие вакансии' : 'Показать еще'}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Work;

export const getServerSideProps = async (ctx: any) => {
  const { work } = ctx.query;
  const currentVacancy = await axios.get(`${URL}/vacancy/${work}`);
  return {
    props: { currentVacancy: currentVacancy.data },
  };
};
