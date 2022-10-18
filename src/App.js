import { Route, Routes, Navigate, } from "react-router-dom";
import {
  Login, Mainpage
} from './pages';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
    button: {
      textTransform: "none",
    },
  },
  palette: {
    green: {
      main: "#007C4B",
      contrastText: "#fff",
    },
    darkBlue: {
      main: "#001730",
      contrastText: "#fff",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Mainpage />} />
          <Route
            exact
            path="/*"
            element={<Navigate to="/login" replace />}
          />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
