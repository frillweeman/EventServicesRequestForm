import React from "react";
import { Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import Form from "./components/Form";
import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Container maxWidth="md">
          <Form />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
