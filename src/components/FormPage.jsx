import React, { Component } from "react";
import { Paper } from "@material-ui/core";

class FormPage extends Component {
  state = {};
  render() {
    return this.props.page === this.props.currentPage ? (
      <Paper
        elevation={2}
        style={{
          padding: "2em"
        }}
      >
        {this.props.children}
      </Paper>
    ) : null;
  }
}

export default FormPage;
