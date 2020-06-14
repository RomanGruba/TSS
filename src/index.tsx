import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import { Content, Title, Card, Grid, Numbers } from "./components";
import { configureStore, unregister } from "./core";
import { GlobalStyles, theme } from "./styles";

const store = configureStore();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Provider store={store}>
      <Content>
        <Title>Sudoku</Title>
        <Card>
          <Grid />
          <Numbers />
        </Card>
      </Content>
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);

unregister();
