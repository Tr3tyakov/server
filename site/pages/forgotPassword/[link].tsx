import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import TextField from '@material-ui/core/TextField';
import { useActions } from '../../Components/Hooks/useAction';
import { useStyles } from '../../Components/header/header.style';
import MainLayouts from '../../Components/layouts/MainLayouts';
import { changePassword, setRegistration } from '../../Components/utils/api/userApi';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';
import Router from 'next/router';
const Authorization: React.FC = () => {
  const classes = useStyles();
  const router = useRouter();

  const { enqueueSnackbar } = useSnackbar();
  console.log(router.query.link);

  const [passwordOne, setPasswordOne] = React.useState<string>('');
  const [passwordTwo, setPasswordTwo] = React.useState<string>('');
  const [error, setError] = React.useState<boolean>(false);

  //inputs
  const changePasswordOne = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPasswordOne(value);
  };

  const changePasswordTwo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPasswordTwo(value);
  };
  const send = async () => {
    if (passwordOne !== passwordTwo) {
      setError(true);
      return enqueueSnackbar('Пароли не совпадают', { variant: 'error' });
    }
    if (passwordOne.length < 6) {
      return enqueueSnackbar('Пароль должен быть длиннее 5 символов', { variant: 'error' });
    }
    const link = router.query.link;
    const userData = await changePassword(link, passwordOne);
    if (userData.status === 400) {
      return enqueueSnackbar(userData.data.message, { variant: 'error' });
    }
    setError(false);
    enqueueSnackbar(userData.data, { variant: 'success' });
    Router.push('/Authorization');
  };

  return (
    <MainLayouts>
      <div className={classes.wrapper}>
        <div>
          <Typography align="center" color="primary" variant="h5" gutterBottom>
            Восстановление пароля
          </Typography>

          <TextField
            margin="dense"
            variant="standard"
            label="Новый пароль"
            type="password"
            fullWidth
            error={error}
            helperText={error ? 'Пароль должен быть длиннее 5 символов' : ''}
            value={passwordOne}
            onChange={changePasswordOne}></TextField>
          <TextField
            margin="dense"
            variant="standard"
            label="Новый пароль"
            type="password"
            error={error}
            helperText={error ? 'Пароль должен быть длиннее 5 символов' : ''}
            fullWidth
            value={passwordTwo}
            onChange={changePasswordTwo}></TextField>
        </div>
        <div className={classes.btns}>
          <Button
            className={classes.outlineBtn}
            onClick={send}
            variant="contained"
            color="primary"
            fullWidth>
            Войти
          </Button>
        </div>
      </div>
    </MainLayouts>
  );
};

export default Authorization;
