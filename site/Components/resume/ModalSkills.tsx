import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import { useStyles } from './modal.style';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import { updateSkills } from '../utils/api/userApi';
import { Box } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
interface AccountProps {
  modal: boolean;
  closeModalSkills: any;
  skills: string[];
  setSkills: any;
}

const ModalSkills: React.FC<AccountProps> = React.memo(
  ({ modal, skills, closeModalSkills, setSkills }) => {
    const [ability, setAbility] = React.useState<string[]>(skills);
    const [input, setInput] = React.useState<string>('');
    const [error, setError] = React.useState<boolean>(false);
    const classes = useStyles();

    //input
    const changeInputValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      const check = RegExp(/\d/gi).test(value);
      setInput(value);
      setError(false);
      if (check) {
        setError(true);
      }
    };

    //skills
    const addSkillForm = (event: React.KeyboardEvent) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        setAbility([...ability, input]);
        return setInput('');
      }
    };
    const addSkill = (event: React.SyntheticEvent) => {
      setAbility([...ability, input]);
      setInput('');
    };

    const saveSkills = () => {
      updateSkills(ability);
      setSkills(ability);
      closeModalSkills();
    };

    const deleteSkill = (title: string) => {
      setAbility(ability.filter((element) => element !== title));
    };

    const clearSkills = () => {
      setAbility([]);
      setInput('');
    };
    return (
      <Modal open={modal} onClose={closeModalSkills} className={classes.modal}>
        <Fade in={modal}>
          <Paper className={classes.paperSkill}>
            <div>
              <div className={classes.title}>
                <Typography align="center" color="primary" variant="h5" gutterBottom>
                  Ключевые навыки
                </Typography>
                <Button
                  className={classes.btn}
                  variant="outlined"
                  color="primary"
                  size="small"
                  onClick={clearSkills}>
                  Очистить
                </Button>
              </div>

              <form onKeyPress={addSkillForm}>
                <Box margin={'20px 0 0 0'} display="flex" alignItems="center">
                  <TextField
                    className={classes.input}
                    margin="dense"
                    variant="standard"
                    label="Добавить навык"
                    error={error}
                    helperText={error && 'Навыки не должны содержать цифры'}
                    value={input}
                    onChange={changeInputValidation}></TextField>
                  {input ? (
                    <Button
                      className={classes.btn}
                      variant="outlined"
                      color="primary"
                      size="small"
                      onClick={addSkill}>
                      <AddIcon />
                    </Button>
                  ) : (
                    ''
                  )}
                </Box>
              </form>
            </div>
            <div className={classes.skills}>
              {ability.map((element, index) => {
                return (
                  <div className={classes.skill} key={index}>
                    {element}

                    <CloseIcon
                      cursor="pointer"
                      fontSize="small"
                      onClick={() => deleteSkill(element)}
                    />
                  </div>
                );
              })}
            </div>
            <Button
              className={classes.outlineBtn}
              variant="contained"
              disabled={error}
              fullWidth
              color="primary"
              onClick={saveSkills}>
              Сохранить навыки
            </Button>
          </Paper>
        </Fade>
      </Modal>
    );
  },
);

export default ModalSkills;
