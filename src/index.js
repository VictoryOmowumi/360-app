import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeContext from './context/ThemeContext';
import { ThemeProvider as CustomThemeProvider } from './context/ThemeContext';
import { lightTheme, darkTheme } from './context/InputTheme';
import { ThemeProvider as MUIThemeProvider, CssBaseline } from '@mui/material';
import { AssessmentProvider } from './context/AssessmentContext';
import { CreateQuestionnaireProvider } from './context/CreateQuestionnaireContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
const AppWithTheme = () => {
  const { theme } = React.useContext(ThemeContext);
  const appliedTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <MUIThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <App />
    </MUIThemeProvider>
  );
};
root.render(
  <Router>
  <AssessmentProvider>
    <CreateQuestionnaireProvider>
      <CustomThemeProvider>
        <AppWithTheme />
      </CustomThemeProvider>
    </CreateQuestionnaireProvider>
  </AssessmentProvider>
</Router>
);

