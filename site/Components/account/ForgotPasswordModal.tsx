import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import { useStyles } from '../resume/modal.style';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { forgotPassword } from '../utils/api/userApi';
import { useSnackbar } from 'notistack';

interface IForgotPassword {
  modal: boolean;
  closeModal: any;
}
const ForgotPasswordModal: React.FC<IForgotPassword> = React.memo(({ modal, closeModal }) => {
  const [input, setInput] = React.useState<string>('');
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const sendEmail = async () => {
    const userData = await forgotPassword(input);
    if (userData?.status === 200) {
      closeModal();
      return enqueueSnackbar(userData.data, { variant: 'success' });
    }
    enqueueSnackbar('Error', { variant: 'error' });
  };
  return (
    <Modal open={modal} onClose={closeModal} className={classes.modal}>
      <Fade in={modal}>
        <Paper className={classes.paperSkill}>
          <Typography color="primary" variant="h5" gutterBottom>
            Восстановление пароля
          </Typography>
          <Typography color="textSecondary" variant="subtitle2" gutterBottom>
            Введите email, указанный вами при регистрации и мы вышлем ссылку для восстановления
            пароля
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            label="Email"
            value={input}
            onChange={(e) => setInput(e.target.value)}>
            Email
          </TextField>
          <Button
            fullWidth
            className={classes.outlineBtn}
            variant="contained"
            color="primary"
            onClick={sendEmail}>
            Отправить
          </Button>
        </Paper>
      </Fade>
    </Modal>
  );
});

export default ForgotPasswordModal;
