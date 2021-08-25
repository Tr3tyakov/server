import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { IuseStylesCreateOffer } from '../../styles/create/vacancy/createVacancy.style';

interface ITextFieldProps {
  classes: IuseStylesCreateOffer;
  label: string;
  title: string;
  value: string | string[];
  change: any;
  error: boolean;
}

const TextFieldVacancy: React.FC<ITextFieldProps> = React.memo(
  ({ classes, title, label, value, change, error }) => {
    React.useEffect(() => {
      setTextFieldError(error);
    }, [error]);
    const [textFieldError, setTextFieldError] = React.useState<boolean>(error);

    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;
      if (textFieldError) {
        setTextFieldError(false);
      }
      change(inputValue);
    };

    return (
      <div className={classes.flex}>
        <Typography variant="subtitle1" gutterBottom>
          {title}
        </Typography>
        <TextField
          className={classes.maxWidth}
          variant="filled"
          color="primary"
          label={label}
          error={textFieldError && value === '' ? true : false}
          helperText={textFieldError && value === '' ? 'Данное поле обязательно к заполнению' : ''}
          value={value}
          size="small"
          onChange={changeValue}></TextField>
      </div>
    );
  },
);

export default TextFieldVacancy;
