import { createTheme } from '@material-ui/core/styles';
const customTheme = createTheme({
  palette: {
    primary: {
      main: '#5650B0',
    },
    secondary: {
      main: '#C4C4C4',
    },
    success: {
      main: '#3D397E',
    },
    background: {
      default: '#fff',
    },
  },
});

export default customTheme;
