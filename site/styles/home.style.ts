import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  title: {
    margin: '70px 0 20px',
    fontStyle: 'Bold',
    fontSize: '64px',
    fontWeight: '500' as any,
    lineHeight: '75px',
    textAlign: 'center',
    color: 'white',
  },

  titleMedia: {
    fontSize: '34px',
    lineHeight: '38px',
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    maxWidth: '700px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  subTitle: {
    textAlign: 'center',
    fontStyle: 'Regular',
    fontSize: '28px',
    lineHeight: '28px',
    color: 'white',
  },

  subTitleMedia: {
    fontSize: '18px',
    lineHeight: '22px',
  },
  btn: {
    width: '250px',
    height: '50px',
    margin: '22px auto 0 auto!important',
    borderRadius: '20px!important',
  },

  btnMedia: {
    width: '250px',
    height: '50px',
    borderRadius: '20px!important',
    margin: '10px auto 0 auto!important',
  },
  black: {
    padding: '20px 15px 150px 15px',
    width: '100%',
    backgroundColor: '#1E1B1B',
  },
  blackMedia: {
    padding: '0 15px',
  },
  inputWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: '10px 0 5px 0',
  },
  input: {
    outline: 'none',
    border: '1px solid white',
    width: '100%',
    height: '60px',
    padding: '10px 20px',
    fontSize: '20px',
    fontWeight: '500' as any,
    backgroundColor: '#C4C4C4',
    borderRadius: '4px',
  },
  gray: {
    padding: '0 15px 60px 15px',

    width: '100%',
    backgroundColor: '#5C5C5C',
  },
  inputSub: {
    color: 'white',
  },
  white: {
    color: 'white',
  },
  inputTarget: {
    cursor: 'pointer',
    color: 'white',
    textDecoration: 'underline',
  },
  a: {
    textDecoration: 'none',
  },
}));
