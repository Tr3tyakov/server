import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles/';

export const useStyles = makeStyles((theme) => ({
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  displayMenu: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1200,
    top: '55px',
    left: '-100%',
    backgroundColor: 'rgba(0,0,0,0.9)',
    transition: '.3s linear',
  },
  burgerMenu: {
    display: 'flex',
    margin: '40px 40px',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  displayMenuActive: {
    left: '0',
    transition: '.3s linear',
  },
  navigationMenu: {
    margin: '10px 0',
    fontSize: '18px',
  },
  padding: {
    padding: '0',
  },
  navigation: {
    color: 'white',
  },
  textDecortation: {
    margin: '0 0 0 5px',
    textDecoration: 'none',
    color: 'black',
  },
  avatar: {
    borderRadius: '50%',
  },
  white: {
    color: 'white!important',
  },
  passwordText: {
    cursor: 'pointer',
  },
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paperModal: {
    padding: '20px',
    minWidth: '200px',
    maxWidth: '500px',
    maxHeight: '350px',
  },
  btns: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  outlineBtn: {
    flex: 1,
    padding: '5px 10px',
    margin: '0 10px 0 0',
  },
  btn: {
    padding: '5px 10px',
  },
  img: {
    color: 'black',
  },
  forgotPassword: {
    margin: '35px 0 0 0',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    margin: '180px auto',
    maxWidth: '400px',
  },

  display: {
    display: 'flex',
    justifyContent: 'space-between',
    textDecoration: 'none',
  },
}));

export type IuseStyles = ReturnType<typeof useStyles>;
