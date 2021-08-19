import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./styles/MaterialUITheme";
import Home from "./pages/Home";
import CoachRegistration from "./pages/CoachRegistration";

export default function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/coach-registration">
              <CoachRegistration />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}
