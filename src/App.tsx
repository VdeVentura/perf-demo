import LoginPage from "@pages/LoginPage";
import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme";
import { GlobalStyle } from "@styles/GlobalStyle";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import JobSearchPage from "@pages/JobSearchPage";
import { store } from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.JOB_SEARCH} element={<JobSearchPage />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
          <GlobalStyle />
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
