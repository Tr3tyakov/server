import React from 'react';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import { IuseStylesCreateOffer } from '../../styles/create/vacancy/createVacancy.style';

interface ICheckBoxProps {
  classes: IuseStylesCreateOffer;
  title: string;
  array: string[];
  setChange: any;
  state: string[];
}

const CheckBoxVacancy: React.FC<ICheckBoxProps> = React.memo(
  ({ classes, title, array, setChange, state }) => {
    const addElement = (element: string) => {
      if (state.includes(element)) {
        return setChange(state.filter((e) => e !== element));
      }
      setChange([...state, element]);
    };

    return (
      <>
        <div className={classes.graph}>
          <Typography>{title}</Typography>
          <div>
            {array.map((element) => (
              <div className={classes.checkbox} key={element}>
                <Checkbox
                  checked={state.includes(element)}
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                  onClick={() => addElement(element)}></Checkbox>
                <Typography>{element}</Typography>
              </div>
            ))}
          </div>
        </div>
        <Divider />
      </>
    );
  },
);

export default CheckBoxVacancy;
