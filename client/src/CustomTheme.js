import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
      primary: {
        light: '#72b3d4',
        main: '#4fa0ca',
        dark: '#100a77',
        contrastText: '#000000',
      },
      secondary: {
        light: '#3f3b92',
        main: '#FFFFFF',
        dark: '#0b0753',
        contrastText: '#FFFFFF',
      },
      background:{
        main: 'blue'
      },
    },
    typography: {
      fontFamily: 'Red Hat Display',
      fontWeight: 500,
      fontSize: 64,
    },
  });

  export default theme;