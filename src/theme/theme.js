import { createMuiTheme } from "@material-ui/core";

const primary = "#5E72E4";
const secondary = "#5E72E4";

export default createMuiTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
  },
  overrides: {
    MuiDialogActions: {
      root: {
        padding: "18px 24px 16px 24px",
      },
    },
    MuiButton: {
      root: {
        fontWeight: 600,
        textTransform: "none",
        color: secondary,
        padding: "6px 24px",
      },
      outlined: {
        borderRadius: "35px",
        borderColor: secondary,
        padding: "6px 20px",
      },
    },
    MuiSelect: {
      filled: {
        padding: "15px 0 15px 15px",
      },
    },
    MuiFilledInput: {
      root: {
        backgroundColor: "white",
        "&:hover": {
          backgroundColor: "white",
        },
        "&.Mui-focused": {
          backgroundColor: "white",
        },
      },
      input: {
        height: "50px",
        padding: "0px 0px 0px 10px",
        backgroundColor: "white",
      },
    },
    MuiAppBar: {
      root: {
        textTransform: "none",

        padding: "0px 95px 0px 0px",
      },
    },
  },
  
});

