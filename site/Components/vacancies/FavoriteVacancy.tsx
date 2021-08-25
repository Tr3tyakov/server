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
import { changeFavoriteVacancies } from '../utils/api/vacancyApi';

interface IVacanciesProps {
  vacancy: IInfoVacancy;
  id: string;
  favorite: string[];
  setFavoriteState: Function;
}

const FavoriteVacancies: React.FC<IVacanciesProps> = ({ vacancy, id, setFavoriteState }) => {
  const changeFavoriteState = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setFavoriteState(id);
  };
  const classes = useStyles();

  return (
    <Paper className={classes.favoritePaper}>
      <Link href={`/currentWork/${id}`}>
        <a style={{ textDecoration: 'none' }}>
          <Card className={classes.favoriteCard}>
            <CardHeader
              title={
                <div className={classes.cardMainFavorite}>
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
            <div className={classes.favorite}>
              <IconButton onClick={changeFavoriteState}>
                <Image src={ActiveStar} width={20} height={20} alt="star"></Image>
              </IconButton>
            </div>
            <div className={classes.cardFooter}>
              <div className={classes.flex}>
                <div className={classes.date}>
                  <Typography color="textSecondary" gutterBottom>
                    Опубликовано:&nbsp;
                    {new Date(vacancy.date).toLocaleString()}
                  </Typography>
                </div>
                <Button className={classes.favoriteBtn} color="primary" variant="contained">
                  Откликнуться
                </Button>
              </div>
            </div>
          </Card>
        </a>
      </Link>
    </Paper>
  );
};

export default FavoriteVacancies;
