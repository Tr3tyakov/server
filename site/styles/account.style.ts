import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
  user: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px 0 20px 0',
  },
  userIcon: {
    margin: '0 20px',
    height: '150px',
    width: '150px',
  },
  flex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  paper: {
    padding: '20px',
    margin: '5px',
    flex: 1,
  },
  btns: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  btn: {
    padding: '5px 10px',
    margin: '10px 10px 0 0',
  },
  gutterBottom: {
    margin: '0 0 1em 0',
  },
  flexBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textDecoration: 'none',

    padding: '5px 0',
  },
  textDecoration: {
    textDecoration: 'none',
    color: 'black',
  },
  phone: {
    margin: 'auto',
    display: 'flex',
  },
  avatar: {
    borderRadius: '50%',
  },
});
