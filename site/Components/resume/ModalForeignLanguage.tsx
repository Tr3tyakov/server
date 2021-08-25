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
import { Box, Divider, MenuItem } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MainLanguage from './MainLanguage';
import { useMediaQuery } from '@material-ui/core';
import clsx from 'clsx';
const foreignLanguages = [
  'Английский',
  'Упрощенный китайский',
  'Испанский язык',
  'Японский',
  'Немецкий',
  'Французский язык',
  'Португальский',
  'Русский',
  'Арабский',
  'Корейский',
  'Итальянский',
  'Голландский',
  'Китайский традиционный',
  'Турецкий',
  'Хинди',
  'Польский',
  'Фарси',
  'Малайский',
  'Шведский',
  'Тайский',
  'Индонезийский',
  'Греческий',
  'Норвежский',
  'Тагальский',
  'Чешский',
  'Иврит',
  'Датский',
  'Финский',
  'Румынский',
  'Украинец',
  'Венгерский',
  'Вьетнамский',
  'Словацкий',
  'Пенджаби',
  'Сербский',
  'Болгарский',
  'Хорватский',
  'Литовский',
  'Словенский',
  'Азербайджанский',
  'Люксембуржуа',
  'Узбекский',
  'Латышский',
  'Эстонский',
  'Сингальский',
  'Боснийский',
  'Албанский',
  'Македонский',
  'Грузинский',
  'Исландский',
  'Мальтийский',
  'Киргизский',
  'Тсвана',
  'Баджан',
  'Каталонский',
  'Бемба',
  'Африкаанс',
  'Таджикский',
  'Монгольский',
  'Лаосский',
  'Чаморро',
  'Фарерские острова',
  'Непальский',
  'Суахили',
  'Армянский',
  'Инуктитут',
  'Бенгальский',
  'Сеселва',
  'Шона',
  'Ньянджа',
  'Руанда',
  'Туркменский',
  'Папиаменту',
  'Кабувердиану',
  'Мальдивский',
  'Винсентианец',
  'Амхарский',
  'Малагасийский',
  'Ток Писин',
  'Дзонгка',
  'Гренадский',
  'Тигринья',
  'Кхмерский',
  'Бирманский',
  'Сомалийский',
  'Сото',
  'Хауса',
  'Бислама',
  'Тонга',
  'Самоанский',
  'Коморский',
  'Палау',
];

const lvlKnowledge = [
  'A1 — Начальный',
  'A2 — Элементарный',
  'B1 — Средний',
  'B2 — Средне-продвинутый',
  'C1 — Продвинутый',
  'C2 — В совершенстве',
];

interface PositionProps {
  modal: boolean;
  closeModal: any;
  setLanguages: any;
}
interface IForeignState {
  language: string;
  knowledge: string;
}
const ModalForeignLanguage: React.FC<PositionProps> = React.memo(
  ({ modal, closeModal, setLanguages }) => {
    const classes = useStyles();
    const [findLanguage, setFindLanguage] = React.useState<string>('');
    const media = useMediaQuery('(max-width: 800px)');
    //
    const [mainLanguage, setMainLanguage] = React.useState<string>('');
    const [foreignModal, setForeignModal] = React.useState<boolean>(false);
    const [additionLanguages, setAdditionLanguages] = React.useState<IForeignState[]>([]);
    const [currentLanguage, setCurrentLanguage] = React.useState<string>('');

    const closeForeignModal = () => {
      setForeignModal(false);
      setFindLanguage('');
    };

    const addLanguage = (language: string) => {
      setCurrentLanguage(language);
      setForeignModal(true);
    };
    const filterLanguages = React.useMemo(() => {
      return foreignLanguages.filter((element) =>
        element.toLowerCase().includes(findLanguage.toLowerCase()),
      );
    }, [findLanguage]);

    const changeFindLanguage = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setFindLanguage(value);
    };
    const addAdditionLanguages = (lvl: string) => {
      if (additionLanguages.find((element) => element.language === currentLanguage)) {
        setAdditionLanguages(
          additionLanguages.map((element) =>
            element.language === currentLanguage ? { ...element, knowledge: lvl } : element,
          ),
        );
        return setForeignModal(false);
      }
      setAdditionLanguages([...additionLanguages, { language: currentLanguage, knowledge: lvl }]);
      setFindLanguage('');
      setForeignModal(false);
    };
    const deleteLanguage = (language: string) => {
      setAdditionLanguages(additionLanguages.filter((element) => element.language !== language));
    };
    const saveAll = () => {
      setLanguages({ mainLanguage, additionLanguages });
      closeModal();
    };

    return (
      <Modal open={modal} onClose={closeModal} className={classes.modal}>
        <Fade in={modal}>
          <Paper
            className={clsx({ [classes.foreignPaper]: !media, [classes.mediaPaperModal]: media })}>
            <div>
              <Typography color="primary" variant="h5" gutterBottom>
                Знание иностранных языков
              </Typography>
              <MainLanguage
                foreignLanguage={foreignLanguages}
                setMainLanguage={setMainLanguage}
                mainLanguage={mainLanguage}
              />
            </div>
            <div>
              <Typography color="primary" variant="h5">
                Иностранные языки
              </Typography>
              <div className={classes.skills}>
                {additionLanguages.map((element, index) => (
                  <div className={classes.languageWrapper} key={index}>
                    <Box display="flex" flexDirection="column" padding="5px">
                      <Box className={classes.language} component="p">
                        {element.language}
                      </Box>
                      <Box className={classes.language} component="p">
                        {element.knowledge}
                      </Box>
                    </Box>
                    <MenuItem onClick={() => deleteLanguage(element.language)}>
                      <DeleteIcon fontSize="small" />
                    </MenuItem>
                  </div>
                ))}
              </div>
              <TextField
                margin="dense"
                variant="standard"
                label="Иностранный язык"
                fullWidth
                value={findLanguage}
                onChange={changeFindLanguage}></TextField>
              <div className={classes.specializationWrapper}>
                {filterLanguages.map((element, index) => {
                  return (
                    <div key={index}>
                      <div className={classes.specialization} key={index}>
                        <MenuItem
                          className={classes.knowledge}
                          onClick={() => addLanguage(element)}>
                          {element}
                        </MenuItem>
                      </div>
                      <Divider />
                    </div>
                  );
                })}
              </div>
              <Modal open={foreignModal} onClose={closeForeignModal} className={classes.modal}>
                <Fade in={foreignModal}>
                  <Paper className={classes.paperModal}>
                    <Typography color="primary" variant="h5" gutterBottom>
                      Уровень знания
                    </Typography>
                    <div className={classes.specializationWrapper}>
                      {lvlKnowledge.map((element, index) => {
                        return (
                          <div className={classes.specialization} key={index}>
                            <MenuItem
                              className={classes.knowledge}
                              onClick={() => addAdditionLanguages(element)}>
                              {element}
                            </MenuItem>
                          </div>
                        );
                      })}
                    </div>
                  </Paper>
                </Fade>
              </Modal>
            </div>
            <Button
              fullWidth
              className={classes.outlineBtn}
              variant="contained"
              color="primary"
              onClick={saveAll}>
              Сохранить
            </Button>
          </Paper>
        </Fade>
      </Modal>
    );
  },
);

export default ModalForeignLanguage;
