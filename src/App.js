import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useSelector } from 'react-redux';
import SignIn from './components/SignIn/SignIn';
import Tabs from './components/Tabs/Tabs';
import Preview from './components/Preview/Preview';
import Compose from './components/Compose/Compose';
import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';
import { blue } from '@material-ui/core/colors';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: blue,
        },
      }),
    [prefersDarkMode],
  );

  // Used to get tab state
  const tab = useSelector((state) => state.tab.value);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Router>
          <Switch>
            <Route path="/home">
              <Tabs />
              {/* Switch statement to choose home page rendering */}
              {
                {
                  'inbox': 
                    <div>
                      <Preview />
                    </div>,
                  'sent':
                    <div>
                      <Preview />
                    </div>,
                  'compose': <Compose />
                }[tab] || <Preview />
              }
            </Route>
            <Route path="/">
              <SignIn />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
