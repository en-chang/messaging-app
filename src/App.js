import SignIn from './components/SignIn/SignIn';
import Tabs from './components/Tabs/Tabs';
import Preview from './components/Preview/Preview'
import Modal from './components/Modal/Modal';
import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';
import { lightBlue } from '@material-ui/core/colors';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: lightBlue,
        },
      }),
    [prefersDarkMode],
  );

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Tabs></Tabs>
        <SignIn></SignIn>
        <Preview></Preview>
        <Modal></Modal>
      </ThemeProvider>
    </div>
  );
}

export default App;
