import React from "react";
import { Paper, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  pageTitle: {
    marginBottom: theme.spacing(2),
    fontWeight: 700
  }
}));

const FormPage = props => {
  const classes = useStyles();

  return (
    <Paper
      elevation={2}
      style={{
        padding: "2em"
      }}
    >
      <Typography className={classes.pageTitle} align="center" variant="h5">
        {props.title}
      </Typography>

      <Typography align="center" variant="subtitle2">
        {props.subtitle}
      </Typography>

      <Divider style={{ margin: "1.5em 0" }} />

      {props.children}
    </Paper>
  );
};

export default FormPage;
