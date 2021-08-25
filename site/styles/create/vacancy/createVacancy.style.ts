import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
  textField: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  flex: {
    display: 'flex',
    flexWrap: 'wrap',

    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '10px 0',
  },
  maxWidth: {
    maxWidth: '700px',
    width: '100%',
  },
  cursor: {
    maxWidth: '200px',
    cursor: 'pointer',
  },
  graph: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: '20px 0',
  },

  checkbox: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  btns: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  btn: {
    padding: '5px 10px',
    margin: '10px 5px',
  },
  typeCategory: {
    maxWidth: '700px',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  type: {
    margin: '2px 2px!important',
  },
  wrapperCurrency: {
    display: 'flex',
    flexWrap: 'wrap',
    width: ' 100%',
    // maxWidth: ' 290px',
    flexDirection: 'column',
  },
  wrapperCurrencyMedia: {
    display: 'flex',
    flexWrap: 'wrap',
    width: ' 100%',
    maxWidth: ' 290px',
    flexDirection: 'column',
  },
  currency: {
    maxWidth: '100px',
  },
  skills: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '10px 0',
  },
  skill: {
    display: 'flex',
    alignItems: 'center',
    margin: '5px 5px 0 0',
    padding: '5px',
    borderRadius: '4px',
    color: '#3f51b5',
    border: '1px solid rgba(63, 81, 181, 0.5)',
    fontWeight: 500,
  },
  column: {
    maxWidth: '700px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  textArea: {
    width: '100%',
    maxHeight: '500px',
    minHeight: '200px',
    fontSize: '15px',
    borderRadius: '5px',
    overflow: 'auto',
    resize: 'none',
  },
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paperModal: {
    padding: '20px',
    maxWidth: '500px',
    minWidth: '250px',
    maxHeight: '950px',
  },
  specializationWrapper: {
    height: '300px',
    width: '100%',
    overflow: 'auto',
  },
  specialization: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});

export type IuseStylesCreateOffer = ReturnType<typeof useStyles>;
