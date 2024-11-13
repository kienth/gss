import { createRoot } from "react-dom/client";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";

import App from "./App.tsx";
import "./index.css";

let theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontSize: 50,
    },
    h2: {
      fontSize: 30,
    },
    h3: {
      fontSize: 27,
    },
    h4: {
      fontSize: 25,
    },
    h5: {
      fontSize: 23,
    },
    h6: {
      fontSize: 20,
    },
    subtitle1: {
      fontSize: 18,
      fontWeight: 600,
    },
    subtitle2: {
      fontSize: 18,
    },
    body1: {
      fontSize: 14,
      fontWeight: 600,
    },
    body2: {
      fontSize: 14,
    },
    button: {
      fontSize: 14,
      textTransform: "none",
    },
    caption: {
      fontSize: 12,
      color: "gray",
    },
  },
  palette: {
    text: {
      primary: "#323941", // Set the primary text color
    },
    secondary: {
      main: "#00acac",
      contrastText: "#FFFFFF",
      light: "#00e5e6",
      dark: "#004c4d",
    },
  },
});

theme = responsiveFontSizes(theme);

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
