import React from "react";
import { FormControl, Paper } from "@material-ui/core";

function FormSection(props) {
  return (
    <Paper
      style={{
        padding: "1em 2em"
      }}
    >
      <FormControl {...props}>{props.children}</FormControl>
    </Paper>
  );
}

export default FormSection;
