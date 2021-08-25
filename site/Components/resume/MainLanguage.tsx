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

interface IMainLanguagesProps {
  foreignLanguage: string[];
  setMainLanguage: any;
  mainLanguage: string;
}
const MainLanguage: React.FC<IMainLanguagesProps> = React.memo(
  ({ foreignLanguage, setMainLanguage, mainLanguage }) => {
    const classes = useStyles();
    const [input, setInput] = React.useState<string>(mainLanguage);
    const [modal, setModal] = React.useState<boolean>(false);

    const filterLanguages = React.useMemo(() => {
      return foreignLanguage.filter((element) =>
        element.toLowerCase().includes(input.toLowerCase()),
      );
    }, [input, foreignLanguage]);
    const addLanguage = (element: string) => {
      setMainLanguage(element);
      setInput(element);
      setModal(false);
    };

    const changeLanguage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setModal(true);
      setInput(event.target.value);
    };
    return (
      <>
        <TextField
          margin="dense"
          variant="standard"
          label="Родной язык"
          value={input}
          onChange={changeLanguage}
          fullWidth></TextField>
        {modal ? (
          <div className={classes.mainLanguageWrapper}>
            {filterLanguages.map((element, index) => {
              return (
                <div key={index}>
                  <div className={classes.specialization} key={index}>
                    <MenuItem className={classes.knowledge} onClick={() => addLanguage(element)}>
                      {element}
                    </MenuItem>
                  </div>
                  <Divider />
                </div>
              );
            })}
          </div>
        ) : (
          ''
        )}
      </>
    );
  },
);
export default MainLanguage;
