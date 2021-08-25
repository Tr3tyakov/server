import { makeStyles } from '@material-ui/styles';
export const useStyles = makeStyles({
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paperModal: {
    padding: '20px',
    maxWidth: '500px',
    maxHeight: '950px',
    overflow: 'scroll',
  },

  mediaPaperModal: {
    padding: '20px',
    maxWidth: '500px',
    maxHeight: '700px',
    overflow: 'scroll',
  },

  paperSkill: {
    padding: '20px',
    maxWidth: '450px',
    width: '100%',
    minWidth: '250px',
  },
  forgotPassword: {
    maxWidth: '450px',
    width: '100%',
  },
  outlineBtn: {
    flex: 1,
    margin: '10px 10px 0 0',
    padding: '5px 10px',
  },
  skills: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  languageWrapper: {
    display: 'flex',
    borderRadius: '4px',
    margin: '5px 5px 0 0',
    color: '#3f51b5',
    border: '1px solid rgba(63, 81, 181, 0.5)',
    fontWeight: 500,
  },
  language: {
    margin: '0',
  },
  btn: {
    padding: '5px 10px',
  },
  input: {
    maxWidth: '400px',
    width: '100%',
  },
  foreignPaper: {
    padding: '20px',
    maxWidth: '600px',
    width: '100%',
  },
  knowledge: {
    padding: '10px 5px',
    width: '100%',
  },
  educationModal: {
    maxWidth: '500px',
    padding: '20px',
    width: '100%',
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
  specializationWrapper: {
    height: '300px',
    width: '100%',
    overflow: 'auto',
  },
  mainLanguageWrapper: {
    maxHeight: '300px',
    width: '100%',
    overflow: 'auto',
  },
  specialization: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});
