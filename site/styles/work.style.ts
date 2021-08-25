import { makeStyles } from '@material-ui/styles';
export const useStyles = makeStyles({
  container: {
    margin: '20px auto',
    position: 'relative',
  },
  backGround: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E0E0E0',
    padding: '0 0 10px 0',
    boxShadow: '0px 3px 4px rgba(0, 0, 0, 0.25)',
  },
  companyTag: {
    position: 'absolute',
    backgroundColor: 'white',
    bottom: '-85px',
    width: '200px',
    height: '50px',
    borderRadius: '10px',
    boxShadow: '0px 3px 4px rgba(0, 0, 0, 0.25)',
  },
  titleTag: {
    cursor: 'pointer',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  companyInfo: {
    margin: '10px 0',
  },
  flex: {
    cursor: 'pointer',
    padding: '5px 10px 5px 0',
    display: 'flex',
    justifyContent: 'space-between',
  },
  city: {
    cursor: 'pointer',
    height: '45px',
    padding: '5px 10px 5px 0',
  },
  marginTop: {
    margin: '20px 0 0 0 ',
  },
  skills: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  title: {
    margin: '10px 0 ',
  },
  cardsWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  skill: {
    margin: '5px 5px 0 0',
    padding: '5px',
    borderRadius: '4px',
    color: '#3f51b5',
    border: '1px solid rgba(63, 81, 181, 0.5)',
    fontWeight: 500,
  },
  moreVacancies: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  btnVacancies: {
    margin: '20px 0',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
