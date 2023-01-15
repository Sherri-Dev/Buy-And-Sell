import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/global/Footer";
import Header from "./components/global/Header";
import { FiltersContextProvider } from "./contexts/filtersContext";
import useCustomizer from "./hooks/useCustomizer";

const Home = lazy(() => import('./pages/Home') );
const SearchResults = lazy(() => import('./pages/SearchResults') );
const AdDetails = lazy(()=> import('./pages/AdDetails'));
const NotFound = lazy(()=> import('./slices/NotFound'));
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
        <Suspense fallback='loading...'>
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
            <Route path="ads" element={ <Navigate to='/search-results' />}/>
            <Route
              path="/ads/:slug"
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
            <Route path= "*" element={<><Header
                    setHeaderHeight={setHeaderHeight}
                    transparent={false}
                  /><NotFound/></>} />
          </Routes>
          <Footer />
        </Router>
        </Suspense>
      </FiltersContextProvider>
    </ThemeProvider>
  );
}

export default App;
