import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
  user: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px 0 20px 0',
  },
  inputFile: {
    display: 'none',
  },
  marginBottom: {
    margin: '10px 0',
  },
  userIcon: {
    margin: '0 20px',
    height: '200px',
    width: '200px',
  },
  avatar: {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '50%',
  },
  flex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  changePhoto: {
    cursor: 'pointer',
  },
  mainInfo: {
    display: 'flex',
    flexDirection: 'column',
    margin: '20px 0 0 0',
  },
  name: {
    display: 'flex',
    flex: 1,
    margin: '0 10px',
    flexDirection: 'column',
  },
  secondInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  textField: {
    margin: '10px 0 0 0 ',
  },
  btns: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  btn: {
    padding: '5px 10px',
    margin: '10px 5px ',
  },
  saveData: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  link: {
    textDecoration: 'none',
    color: 'lightgrey',
  },
  currentLink: {
    textDecoration: 'none',
    color: 'white',
  },
});
