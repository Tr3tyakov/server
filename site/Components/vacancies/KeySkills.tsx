import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import { IuseStylesCreateOffer } from '../../styles/create/vacancy/createVacancy.style';

interface ISkillsProps {
  classes: IuseStylesCreateOffer;
  stateSkills: string[];
  setSkills: any;
}
const KeySkills: React.FC<ISkillsProps> = ({ classes, stateSkills, setSkills }) => {
  const [input, setInput] = React.useState<string>('');

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInput(value);
  };

  const deleteSkill = (element: string) => {
    setSkills(stateSkills.filter((skill) => skill !== element));
  };
  const addSkill = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setSkills([...stateSkills, input]);
      setInput('');
    }
  };
  return (
    <div className={classes.flex}>
      <Typography variant="subtitle1" gutterBottom>
        Ключевые навыки
      </Typography>
      <div className={classes.column}>
        <div className={classes.skills}>
          {stateSkills.map((element, index) => {
            return (
              <div className={classes.skill} key={index}>
                {element}
                <CloseIcon cursor="pointer" fontSize="small" onClick={() => deleteSkill(element)} />
              </div>
            );
          })}
        </div>
        <form onKeyPress={addSkill}>
          <TextField
            className={classes.maxWidth}
            variant="filled"
            color="primary"
            label="Навыки"
            value={input}
            size="small"
            onChange={changeInput}></TextField>
        </form>
      </div>
    </div>
  );
};

export default KeySkills;
