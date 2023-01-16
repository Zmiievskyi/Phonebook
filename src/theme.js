import { createTheme } from "@mui/material/styles";


export const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    ua: {
      main: '#FFEA00',
      darker: '#yellow',
    },
    uab: {
      main: '#1F51FF',
      darker: '#blue',
    },
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#white',
      contrastText: '#fff',
    },
  },
});
console.log(theme);