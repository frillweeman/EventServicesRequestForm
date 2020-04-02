import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import HFlex from "./HFlex";
import { ChevronLeft, ChevronRight, Send } from "@material-ui/icons";

export default class FormStepper extends Component {
  render() {
    return (
      <div style={{ marginTop: "1em", width: "100%" }}>
        <Stepper
          activeStep={this.props.currentPage}
          alternativeLabel
          square={false}
          elevation={2}
        >
          {this.props.steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div style={{ margin: "1em 0" }}>
          <HFlex>
            <Button
              disabled={this.props.currentPage === 0}
              onClick={this.props.prevHandler}
              style={{ marginRight: "0.5em" }}
            >
              <ChevronLeft style={{ verticalAlign: "middle" }} />
              <span style={{ verticalAlign: "middle" }}>Back</span>
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={this.props.nextHandler}
            >
              {this.props.currentPage === this.props.steps.length - 1 ? (
                "Submit"
              ) : (
                <>
                  <span style={{ verticalAlign: "middle" }}>Next </span>
                  <ChevronRight style={{ verticalAlign: "middle" }} />
                </>
              )}
            </Button>
          </HFlex>
        </div>
      </div>
    );
  }
}
