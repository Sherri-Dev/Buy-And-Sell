import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      mb: 400,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
  palette: {
    primary: {
      main: "#FFCC00",
      dark: "#d3a900",
    },
    secondary: {
      main: "#2F2F2F",
    },
    transparent: { main: "rgba(0,0,0,0)" },
    text: { secondary: "#979797" },
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "black",
          ".MuiTooltip-arrow:before": {
            backgroundColor: "black",
          },
        },
      },
    },
  },
});
function App() {
  const [headerHeight, setHeaderHeight] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header setHeaderHeight={setHeaderHeight} transparent={false} />
                <Home headerHeight={headerHeight} />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/search-results"
            element={
              <>
                <Header setHeaderHeight={setHeaderHeight} transparent={false} />
                <SearchResults headerHeight={headerHeight} />
              </>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
