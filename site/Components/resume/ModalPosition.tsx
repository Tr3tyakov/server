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
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';
export const specializations = [
  'Бухгалтерия',
  'Закупки',
  'Другое',
  'Рабочий персонал',
  'Добыча сырья',
  'Информационный технологии, Интернет',
  'Искусство, Развлечение, Масс-медиа',
  'Маркетинг, реклама, PR',
  'Медицина, Фармацевтика',
  'Наука, Образование',
  'Производство, Технологии',
  'Страхование',
  'Строительство, Архитектура',
  'Транспорт, Логистика',
  'Туризм, Гостиницы, Рестораны',
  'Управление персоналом',
  'Финансы, Банки, Инвестиции',
  'Юристы',
  'Административный персонал',
  'Продажи',
  'Автомобильный бизнес',
  'Консултирование',
];

interface PositionProps {
  modal: boolean;
  closeModalPosition: any;
  sphereActivity: string[];
  desiredSalary: string;
  desiredPosition: string;
  setSphere: any;
  setDesiredSalary: any;
  setDesiredPosition: any;
}
const ModalPosition: React.FC<PositionProps> = React.memo(
  ({
    modal,
    closeModalPosition,
    desiredSalary,
    desiredPosition,
    sphereActivity,
    setSphere,
    setDesiredSalary,
    setDesiredPosition,
  }) => {
    const [positionInput, setPositionInput] = React.useState<string>(desiredPosition);
    const [salary, setSalary] = React.useState<string>(desiredSalary);
    const [error, setError] = React.useState<boolean>(false);

    const [specializationInput, setSpecializationInput] = React.useState<string>('');
    const [currentTarget, setCurrentTarget] = React.useState<string[]>(sphereActivity);
    const media = useMediaQuery('(max-width:600px)');
    const classes = useStyles();

    //inputs
    const changePositionInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setError(false);
      setPositionInput(value);
    };

    const changeSalary = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setSalary(value);
    };

    //specialization
    const findSpecialization = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setSpecializationInput(value);
    };

    const addSpecialization = (title: string) => {
      if (currentTarget.includes(title)) {
        return setCurrentTarget(currentTarget.filter((element) => element !== title));
      }
      if (currentTarget.length === 3) {
        return;
      }
      setCurrentTarget([...currentTarget, title]);
    };

    const filterSpecialization = React.useMemo(() => {
      return specializations.filter((element) =>
        element.toLowerCase().includes(specializationInput.toLowerCase()),
      );
    }, [specializationInput]);

    //global
    const clearAll = () => {
      setPositionInput('');
      setSalary('');
      setCurrentTarget([]);
    };

    const saveAll = () => {
      if (positionInput === '') {
        return setError(true);
      }
      setSphere(currentTarget);
      setDesiredSalary(salary);
      setDesiredPosition(positionInput);
      updateDesiredPosition(positionInput, salary, currentTarget);
      closeModalPosition();
    };

    return (
      <Modal open={modal} onClose={closeModalPosition} className={classes.modal}>
        <Fade in={modal}>
          <Paper
            className={clsx({ [classes.paperModal]: !media, [classes.mediaPaperModal]: media })}>
            <div>
              <div className={classes.title}>
                <Typography color="primary" variant="h5" gutterBottom>
                  Желаемая должность
                </Typography>
                <Button
                  className={classes.btn}
                  variant="outlined"
                  color="primary"
                  onClick={clearAll}>
                  очистить
                </Button>
              </div>
              <TextField
                margin="dense"
                variant="standard"
                label="Должность"
                fullWidth
                error={error}
                helperText={error && 'Данная графа не может быть пустой'}
                value={positionInput}
                onChange={changePositionInput}></TextField>
              <TextField
                margin="dense"
                variant="standard"
                label="Уровень дохода"
                type="number"
                fullWidth
                value={salary}
                onChange={changeSalary}></TextField>
            </div>
            <div>
              <Typography color="primary" variant="h5">
                Специализация
              </Typography>
              <div className={classes.skills}>
                {currentTarget.map((element, index) => (
                  <div className={classes.skill} key={index}>
                    {element}
                  </div>
                ))}
              </div>
              <TextField
                margin="dense"
                variant="standard"
                label="Сфера деятельности"
                fullWidth
                value={specializationInput}
                onChange={findSpecialization}></TextField>
              <div className={classes.specializationWrapper}>
                {filterSpecialization.map((element, index) => {
                  return (
                    <div className={classes.specialization} key={index}>
                      <Checkbox
                        checked={currentTarget.includes(element)}
                        color="primary"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                        onClick={() => addSpecialization(element)}
                      />
                      {element}
                    </div>
                  );
                })}
              </div>
            </div>
            <Button
              fullWidth
              className={classes.outlineBtn}
              variant="contained"
              color="primary"
              onClick={saveAll}>
              Сохранить <br />
              Выбрано {currentTarget.length} из 3
            </Button>
          </Paper>
        </Fade>
      </Modal>
    );
  },
);

export default ModalPosition;
