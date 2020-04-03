import React from "react";
import { Container } from "@material-ui/core";
import AppBar from "./components/AppBar";
import Form from "./components/Form";
import { makeStyles } from "@material-ui/styles";
import "./App.css";

const useStyles = makeStyles(theme => ({
  offset: {
    marginTop: "1em"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <AppBar title="UAH Event Services Request Form" />
      <div className={classes.offset}>
        <Container maxWidth="md">
          <Form />
        </Container>
      </div>
    </>
  );
}

export default App;
