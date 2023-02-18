import {
  alpha,
  createTheme,
  darken,
  lighten,
  responsiveFontSizes,
} from "@mui/material";

declare module "@mui/material/styles" {
  // eslint-disable-next-line
  interface TypeText {
    contrast: string;
  }
}

const primaryMainColor = "rgb(223, 83, 53)";
const secondaryMainColor = "rgb(134, 132, 132)";
const tonalOffset = 0.2;

const theme = {
  palette: {
    tonalOffset,
    primary: {
      main: primaryMainColor,
    },
    secondary: {
      main: secondaryMainColor,
    },
    background: {
      shaded: "#f5f5f5",
      default: "#fff",
      paper: "#fff",
    },
    text: {
      contrast: "#fff",
    },
    divider: "rgb(244, 244, 244)",
  },
  typography: {
    fontFamily: ['"Nunito Sans"', "sans-serif"].join(","),
    fontSize: 16,
    h1: {
      fontSize: 40,
    },
    h2: {
      fontSize: 36,
    },
    h3: {
      fontSize: 32,
    },
    h4: {
      fontSize: 28,
    },
    h5: {
      fontSize: 24,
    },
    button: {
      fontWeight: "bold",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        // @todo: figure out how to change the border color when active
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: secondaryMainColor,
            color: secondaryMainColor,
          },
        },
        focused: {},
        notchedOutline: {
          borderColor: lighten(secondaryMainColor, tonalOffset),
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        containedPrimary: {
          "&:active": {
            backgroundColor: darken(primaryMainColor, tonalOffset * 2),
          },
          "&:focus-visible": {
            backgroundColor: darken(primaryMainColor, tonalOffset),
          },
        },
        outlinedPrimary: {
          "&:active": {
            backgroundColor: alpha(primaryMainColor, 0.1),
          },
          "&:focus-visible": {
            backgroundColor: alpha(primaryMainColor, 0.1),
          },
        },
      },
    },
  },
};

const muiTheme = responsiveFontSizes(createTheme(theme));

export default muiTheme;
