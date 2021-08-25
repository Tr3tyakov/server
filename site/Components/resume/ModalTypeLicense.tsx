import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import { useStyles } from './modal.style';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';
import { typeCategory } from '../../pages/CreateVacancy';
import Divider from '@material-ui/core/Divider';

interface AccountProps {
  modal: boolean;
  closeModal: any;
  setTypeLicense: any;
}
const ModalTypeLicense: React.FC<AccountProps> = React.memo(
  ({ modal, closeModal, setTypeLicense }) => {
    const classes = useStyles();
    const [car, setCar] = React.useState<boolean>(false);
    const [category, setCategory] = React.useState<string[]>([]);

    const changeCar = () => {
      setCar(!car);
    };
    const addCategory = (currentCategory: string) => {
      if (category.includes(currentCategory)) {
        return setCategory(category.filter((element) => element !== currentCategory));
      }
      setCategory([...category, currentCategory]);
    };

    const saveLicense = () => {
      setTypeLicense({ haveCar: car, typeCategory: category });
      closeModal();
    };

    return (
      <Modal open={modal} onClose={closeModal} className={classes.modal}>
        <Fade in={modal}>
          <Paper className={classes.paperSkill}>
            <Typography color="primary" variant="h5" gutterBottom>
              Опыт вождения
            </Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography>Есть личный автомобиль</Typography>
              <Switch
                checked={car}
                onChange={changeCar}
                color="primary"
                name="checkedB"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            </Box>
            <div>
              {typeCategory.map((element) => (
                <MenuItem
                  className={classes.input}
                  key={element}
                  onClick={() => addCategory(element)}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    width="100%">
                    {element}
                    <Checkbox
                      checked={category.includes(element)}
                      color="primary"
                      inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                  </Box>
                  <Divider />
                </MenuItem>
              ))}
            </div>
            <Box marginTop="10px">
              <Button
                className={classes.btn}
                fullWidth
                variant="contained"
                color="primary"
                onClick={saveLicense}>
                Сохранить
              </Button>
            </Box>
          </Paper>
        </Fade>
      </Modal>
    );
  },
);

export default ModalTypeLicense;
