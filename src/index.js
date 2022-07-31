import React from "react";
import ReactDOM from "react-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./app/store";

import App from "./App";

const theme = createTheme({});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
