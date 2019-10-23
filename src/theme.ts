import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFE81F',
    },
  },
  overrides: {
    MuiList: {
      root: {
        background: "rgba(0, 0, 0, 0.2)"
      },
    },
    MuiListItemText: {
      root: {
        color: '#FFE81F'
      },
    },
  },
});

export default theme;
