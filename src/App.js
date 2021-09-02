import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./assets/styles/MaterialUITheme";
import Home from "./pages/Home";
import CoachRegistration from "./pages/CoachRegistration";
import VideoCall from "./pages/VideoCall";

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
            <Route path="/videoCall">
              <VideoCall />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}
