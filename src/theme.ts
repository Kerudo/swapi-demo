import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFE81F',
    },
  },
  overrides: {
    MuiListItem: {
      button: {
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.28)",
        }
      }
    },
    MuiListItemText: {
      root: {
        color: '#FFE81F',
      },
    },
    MuiTypography: {
      root: {
        color: '#FFE81F',
        textTransform: "capitalize",
      },
    },
    MuiCard: {
      root: {
        background: "rgba(0, 0, 0, 0.2)",
        minWidth: "20rem",
      }
    },
    MuiDivider: {
      root: {
        backgroundColor: 'rgba(255, 232, 31, 0.39)',
      }
    },
    MuiGrid: {
      item: {
        margin: "0 16px",
      }
    }
  },
});

export default theme;
