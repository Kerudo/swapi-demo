import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFE81F',
    },
    action: {
      disabled: "rgba(255, 232, 31, 0.6)"
    }
  },
  overrides: {
    MuiListItem: {
      button: {
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.3)",
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
      gutterBottom: {
        marginBottom: "0.7em",
      },
    },
    MuiCard: {
      root: {
        background: "rgba(0, 0, 0, 0.4)",
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
    },
    MuiButton: {
      root: {
        color: '#FFE81F',
      },
      outlined: {
        backgroundColor: "rgba(0, 0, 0, 0.4)",
      }
    }
  },
});

export default theme;
