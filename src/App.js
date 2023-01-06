import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/global/Footer";
import Header from "./components/global/Header";
import { FiltersContextProvider } from "./contexts/filtersContext";
import useCustomizer from "./hooks/useCustomizer";
import AdDetails from "./pages/AdDetails";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";


function App() {
  const { theme: customTheme } = useCustomizer();
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        mob: 400,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536
      }
    },
    typography: customTheme?.typography,
    palette: customTheme?.pallete,
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
  const [headerHeight, setHeaderHeight] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <FiltersContextProvider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header
                    setHeaderHeight={setHeaderHeight}
                    transparent={true}
                  />
                  <Home headerHeight={headerHeight} />
                </>
              }
            />
            <Route
              path="/search-results"
              element={
                <>
                  <Header
                    setHeaderHeight={setHeaderHeight}
                    transparent={false}
                  />
                  <SearchResults headerHeight={headerHeight} />
                </>
              }
            />
            <Route
              path="/:id"
              element={
                <>
                  <Header
                    setHeaderHeight={setHeaderHeight}
                    transparent={false}
                  />
                  <AdDetails headerHeight={headerHeight} />
                </>
              }
            />
          </Routes>
          <Footer />
        </Router>
      </FiltersContextProvider>
    </ThemeProvider>
  );
}

export default App;
