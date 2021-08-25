import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useStyles } from '../styles/account.style';
import Paper from '@material-ui/core/Paper';
import MainLayouts from '../Components/layouts/MainLayouts';
import Link from 'next/link';
import Image from 'next/image';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import nookies from 'nookies';
import { URL } from '../Components/utils/http/utils';
import { IMainInfo } from '../Components/Interfaces/IUser';
import { setConfirmEmail } from '../Components/utils/api/userApi';
import { useSnackbar } from 'notistack';
import { MenuItem } from '@material-ui/core';

interface IAccountProps {
  mainInfo: IMainInfo;
}

const Account: React.FC<IAccountProps> = ({ mainInfo }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const confirmEmail = async () => {
    const data = await setConfirmEmail(mainInfo.email);
    if (data?.status === 200) {
      return enqueueSnackbar(data.data.message, { variant: 'success' });
    }
    enqueueSnackbar('Error', { variant: 'error' });
  };

  return (
    <MainLayouts>
      <div className={classes.user}>
        <Button>
          <ShareIcon />
        </Button>
        {mainInfo.avatar ? (
          <Box m={2}>
            <Image
              className={classes.avatar}
              src={`https://next-tailwind-project.herokuapp.com/${mainInfo.avatar}`}
              layout="intrinsic"
              width={200}
              height={200}
              alt="Image"
            />
          </Box>
        ) : (
          <Avatar className={classes.userIcon} />
        )}
        <Button>
          <MoreVertIcon />
        </Button>
      </div>
      <div className={classes.flex}>
        <Typography variant="subtitle1">
          {mainInfo.name && mainInfo.secondName
            ? `${mainInfo.name} ${mainInfo.secondName}`
            : 'User'}
        </Typography>
      </div>
      {mainInfo.isActiveEmail ? (
        ''
      ) : (
        <Paper className={classes.paper}>
          <Typography className={classes.gutterBottom} variant="h5">
            Подтвердите почту
          </Typography>
          <Typography variant="subtitle2">
            Работодатели чаще доверяют проверенным пользователям
          </Typography>
          <div className={classes.phone}>
            <Button
              className={classes.btn}
              variant="contained"
              color="primary"
              onClick={confirmEmail}>
              Подтвердить почту
            </Button>
          </div>
        </Paper>
      )}
      <Paper className={classes.paper}>
        <Link href="/MainInfo">
          <a className={classes.textDecoration}>
            <MenuItem className={classes.flexBetween}>
              <Typography variant="h5">Информация</Typography>
              <Button color="primary">
                <ArrowForwardIosIcon />
              </Button>
            </MenuItem>
          </a>
        </Link>
        {mainInfo.name ? (
          <div>
            <p>{`${mainInfo.name} ${mainInfo.secondName}`}</p>
            <p>{mainInfo.city}</p>
            <p>{mainInfo.email}</p>
            <p>{mainInfo.country}</p>
            <p>{mainInfo.phone}</p>
          </div>
        ) : (
          <Typography variant="subtitle2" className={classes.gutterBottom}>
            Добавьте информацию о себе
          </Typography>
        )}
      </Paper>
    </MainLayouts>
  );
};

export default Account;

export const getServerSideProps = async (ctx: any) => {
  const { refreshToken } = nookies.get(ctx);
  const userData = await axios.get(`${URL}/user/mainInfo`, {
    headers: { refreshToken },
    withCredentials: true,
  });

  return {
    props: {
      mainInfo: userData.data,
    },
  };
};
