import { makeStyles } from '@material-ui/styles';
export const useStyles = makeStyles({
  flex: {
    display: 'flex',
    flexWrap: 'wrap',

    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '10px 0',
  },
  paper: {
    padding: '10px',
    margin: '20px 0',
  },
  flexBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skills: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  spheres: {
    display: 'flex',
    flexWrap: 'wrap',
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
  textArea: {
    width: '100%',
    maxHeight: '500px',
    minHeight: '200px',
    fontSize: '15px',
    borderRadius: '5px',
    overflow: 'auto',
    resize: 'none',
  },
  gutterBottom: {
    margin: '0 0 1em 0',
  },
  lineHeight: {
    lineHeight: '2',
  },
  salary: {
    margin: '0',
    padding: '0 16px',
  },
  btn: {
    padding: '5px 10px',
  },
});
