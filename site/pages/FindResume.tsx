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
import { Box } from '@material-ui/core';
import Link from 'next/link';
import Resume from '../Components/resume/Resume';
import { IResume } from '../Components/Interfaces/IResume';

interface IHomeProps {
  AllResume: IResume[];
  countResume: number;
}

const FindResume: React.FC<IHomeProps> = ({ AllResume, countResume }) => {
  const [filter, setFilter] = React.useState<string>('');
  const [page, setPage] = React.useState<number>(2);
  const [fetching, setFetching] = React.useState<boolean>(false);
  const [resume, setResume] = React.useState<IResume[]>(AllResume);
  const [count, setCount] = React.useState<number>(countResume);
  const classes = useStyles();

  const filterResume = React.useMemo(() => {
    return resume.filter((element: any) =>
      element.desiredPosition.toLowerCase().includes(filter.toLowerCase()),
    );
  }, [filter, resume]);

  React.useEffect(() => {
    if (fetching) {
      const fetchingResume = async () => {
        const resumeData = await axios.get(`${URL}/resume?page=${page}`);
        setFetching(false);
        setPage((page) => page + 1);
        setResume([...resume, ...resumeData.data.resumeData]);
      };
      fetchingResume();
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
    if (scrollHeight - innerHeight - scrollTop < 100 && resume.length < count) {
      setFetching(true);
    }
  };
  return (
    <MainLayouts>
      <div>
        <div className={classes.flex}>
          <FilterVacancies classes={classes} setFilter={setFilter} title={'Должность'} />
        </div>
        <Box display="flex">
          <Box margin="0 10px 0 0">
            <Link href="/FindVacancies">
              <a className={classes.textDecoration}>
                <Typography variant="h6" gutterBottom color="textSecondary">
                  Вакансии
                </Typography>
              </a>
            </Link>
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              Резюме
            </Typography>
          </Box>
        </Box>

        {filterResume.map((element) => (
          <Resume id={element._id} resume={element} key={element._id} />
        ))}
      </div>
    </MainLayouts>
  );
};

export default FindResume;

export const getServerSideProps = async (ctx: any) => {
  const resumeData = await axios.get(`${URL}/resume`);
  return {
    props: {
      AllResume: resumeData.data.resumeData,
      countResume: resumeData.data.count,
    },
  };
};
