import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#ff8e31",
      contrastText: "rgba(255,255,255,0.87)",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  typography: {
    h1: {
      fontSize: 61,
    },
    h2: {
      fontSize: 50,
      fontWeight: 800,
    },
    h3: {
      fontSize: 40,
    },
    h4: {
      fontSize: 30,
    },
  },
});

export default theme;
