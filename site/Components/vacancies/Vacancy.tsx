import React from 'react';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { useStyles } from '../../styles/create/vacancy/vacancy.style';
import { IInfoVacancy } from '../Interfaces/IVacancy';
import Image from 'next/image';
import ActiveStar from '../../public/img/activeStar.svg';
import Star from '../../public/img/star.svg';

interface IVacanciesProps {
  vacancy: IInfoVacancy;
  id: string;
  favorite?: string[];
  isAuth?: boolean;
  changeFavoriteOnServer: Function;
}

const Vacancy: React.FC<IVacanciesProps> = ({
  isAuth,
  vacancy,
  id,
  favorite,
  changeFavoriteOnServer,
}) => {
  const [favoriteList, setFavoriteList] = React.useState<string[]>(favorite || []);
  const changeFavorite = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (favoriteList.includes(id)) {
      changeFavoriteOnServer(id);
      return setFavoriteList(favoriteList.filter((element) => element !== id));
    }
    setFavoriteList([...favoriteList, id]);
    changeFavoriteOnServer(id);
  };
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Link href={`/currentWork/${id}`}>
        <a style={{ textDecoration: 'none' }}>
          <Card className={classes.card}>
            <CardHeader
              title={
                <div className={classes.cardMainInfo}>
                  <Typography className={classes.work} variant="h6" gutterBottom>
                    {vacancy.title}
                  </Typography>
                  <Typography gutterBottom>
                    {}
                    {vacancy.startSalary === null && vacancy.endSalary === null
                      ? 'З/п не указана'
                      : `От ${vacancy.startSalary} ${vacancy.currency} на руки`}
                  </Typography>
                  <Typography>{vacancy.city}</Typography>
                  <Typography>{vacancy.userName}</Typography>
                </div>
              }
              subheader={
                <div className={classes.cardTags}>
                  {vacancy.specializations.map((element, index) => (
                    <span className={classes.cardTag} key={index}>
                      {element}
                    </span>
                  ))}
                </div>
              }></CardHeader>
            {isAuth ? (
              <div className={classes.favorite}>
                <IconButton onClick={changeFavorite}>
                  {favoriteList.includes(id) ? (
                    <Image src={ActiveStar} width={20} height={20} alt="Image"></Image>
                  ) : (
                    <Image src={Star} width={22} height={22} alt="Image"></Image>
                  )}
                </IconButton>
              </div>
            ) : (
              ''
            )}

            <div className={classes.cardFooter}>
              <div className={classes.date}>
                <Typography color="textSecondary" gutterBottom>
                  Опубликовано: <br />
                  {new Date(vacancy.date).toLocaleString()}
                </Typography>
              </div>
              <div className={classes.btns}>
                <Button className={classes.btn} color="primary" variant="contained">
                  Подробнее
                </Button>
              </div>
            </div>
          </Card>
        </a>
      </Link>
    </Paper>
  );
};

export default Vacancy;
