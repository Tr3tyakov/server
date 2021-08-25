import React from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

interface IMyTextFieldProps {
  value: string;
  label: string;
  setState: any;
}

const MyTextField: React.FC<IMyTextFieldProps> = ({ value, label, setState }) => {
  const changeFunction = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setState(value);
  };
  return (
    <Box mt={2}>
      <TextField
        variant="filled"
        value={value}
        label={label}
        type={label === 'Дата Рождения' ? 'date' : ''}
        fullWidth
        onChange={changeFunction}></TextField>
    </Box>
  );
};

export default MyTextField;
