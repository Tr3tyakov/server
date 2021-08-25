import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../styles/index.style';
import Vacancy from '../Components/vacancies/Vacancy';
import MainLayouts from '../Components/layouts/MainLayouts';
import FilterVacancies from '../Components/index/FilterVacancies';
import axios from 'axios';
import { IVacancy } from '../Components/Interfaces/IVacancy';
import { URL } from '../Components/utils/http/utils';
import nookies from 'nookies';
import { changeFavoriteVacancies } from '../Components/utils/api/vacancyApi';
import { useSnackbar } from 'notistack';
import { Box } from '@material-ui/core';
import Link from 'next/link';

interface IHomeProps {
  vacancies: [IVacancy];
  favorite: [];
  isAuth: boolean;
  count: number;
}

const FindVacancies: React.FC<IHomeProps> = ({ isAuth, vacancies, favorite, count }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const [page, setPage] = React.useState<number>(2);
  const [fetching, setFetching] = React.useState<boolean>(false);
  const [data, setData] = React.useState<IVacancy[]>(vacancies);
  const [filter, setFilter] = React.useState<string>('');

  const filterVacancies = React.useMemo(() => {
    return data.filter((element) =>
      element.info.title.toLowerCase().includes(filter.toLowerCase()),
    );
  }, [filter, data]);

  const changeFavorite = async (id: string) => {
    const favoriteData = await changeFavoriteVacancies(id);
    if (favoriteData.status === 200) {
      const message = favoriteData.data.message;
      return enqueueSnackbar(message, { variant: 'success' });
    }
    enqueueSnackbar('Error', { variant: 'error' });
  };

  React.useEffect(() => {
    if (fetching) {
      const vacancies = async () => {
        const vacanciesData = await axios.get(`${URL}/vacancy?page=${page}`);
        setFetching(false);
        setPage((page) => page + 1);
        setData([...data, ...vacanciesData.data.vacancyData]);
      };
      vacancies();
    }
  }, [fetching]);

  React.useEffect(() => {
    document.addEventListener('scroll', handlerScroll);
    return function () {
      document.removeEventListener('scroll', handlerScroll);
    };
  });

  const handlerScroll = (e: any) => {
    const scrollHeight = e.target.documentElement.scrollHeight;
    const scrollTop = e.target.documentElement.scrollTop;
    const innerHeight = window.innerHeight;
    if (scrollHeight - innerHeight - scrollTop < 100 && data.length < count) {
      setFetching(true);
    }
  };

  return (
    <MainLayouts>
      <div>
        <div className={classes.flex}>
          <FilterVacancies classes={classes} setFilter={setFilter} title={'Вакансия'} />
        </div>
        <Box display="flex">
          <Box margin="0 10px 0 0">
            <Typography variant="h6" gutterBottom>
              Вакансии
            </Typography>
          </Box>
          <Box>
            <Link href="/FindResume">
              <a className={classes.textDecoration}>
                <Typography variant="h6" gutterBottom color="textSecondary">
                  Резюме
                </Typography>
              </a>
            </Link>
          </Box>
        </Box>
        <div className={classes.cardsWrapper}>
          {filterVacancies.map((element) => (
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
      </div>
    </MainLayouts>
  );
};

export default FindVacancies;

export const getServerSideProps = async (ctx: any) => {
  const { refreshToken } = nookies.get(ctx);
  const vacanciesData = await axios.get(`${URL}/vacancy`, {
    headers: { refreshToken: refreshToken ? refreshToken : '' },
    withCredentials: true,
  });

  return {
    props: {
      isAuth: vacanciesData.data.auth,
      vacancies: vacanciesData.data.vacancyData,
      favorite: vacanciesData.data.favorite === null ? [] : vacanciesData.data.favorite.list,
      count: vacanciesData.data.count,
    },
  };
};
