import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import { useStyles } from './modal.style';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { updateDesiredPosition } from '../utils/api/userApi';
export const arrayEducation = [
  'Среднее',
  'Cреднее специальное',
  'Неоконченное высшее',
  'Высшее',
  'Бакалавр',
  'Магистр',
  'Кандидат наук',
  'Доктор наук',
];

interface PositionProps {
  modal: boolean;
  closeModalEducation: any;
  setEducation: Function;
}
const ModalEducation: React.FC<PositionProps> = React.memo(
  ({ modal, closeModalEducation, setEducation }) => {
    const [educationLvl, setEducationLvl] = React.useState<string>('');
    const classes = useStyles();

    const addEducation = (element: string) => {
      setEducationLvl(element);
    };

    const save = () => {
      setEducation(educationLvl);
      closeModalEducation();
    };
    return (
      <Modal open={modal} onClose={closeModalEducation} className={classes.modal}>
        <Fade in={modal}>
          <Paper className={classes.educationModal}>
            <Typography align="center" color="primary" variant="h5" gutterBottom>
              Уровень образования
            </Typography>
            <div className={classes.specializationWrapper}>
              {arrayEducation.map((element, index) => {
                return (
                  <div className={classes.specialization} key={index}>
                    <Checkbox
                      checked={educationLvl === element}
                      color="primary"
                      inputProps={{ 'aria-label': 'secondary checkbox' }}
                      onClick={() => addEducation(element)}
                    />
                    {element}
                  </div>
                );
              })}
            </div>
            <Button
              fullWidth
              className={classes.outlineBtn}
              variant="contained"
              color="primary"
              onClick={save}>
              Сохранить
            </Button>
          </Paper>
        </Fade>
      </Modal>
    );
  },
);

export default ModalEducation;
