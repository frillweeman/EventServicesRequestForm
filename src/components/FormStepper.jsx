import React, { Component } from "react";
import {
  Stepper,
  Step,
  StepButton,
  StepLabel,
  Button
} from "@material-ui/core";
import HFlex from "./HFlex";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";

export default class FormStepper extends Component {
  render() {
    return (
      <div style={{ marginTop: "1em", width: "100%" }}>
        <Stepper
          square={false}
          elevation={2}
          alternativeLabel
          nonLinear
          activeStep={this.props.currentPage}
        >
          {this.props.steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepButton
                  onClick={() => this.props.goToPage(index)}
                  completed={this.props.isStepComplete(index)}
                >
                  {label}
                </StepButton>
              </Step>
            );
          })}
        </Stepper>
        <div style={{ margin: "1em 0" }}>
          <HFlex>
            <Button
              disabled={this.props.currentPage === 0}
              onClick={() => this.props.goToPage(this.props.currentPage - 1)}
              style={{ marginRight: "0.5em" }}
            >
              <ChevronLeft style={{ verticalAlign: "middle" }} />
              <span style={{ verticalAlign: "middle" }}>Back</span>
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                if (this.props.currentPage === this.props.steps.length)
                  this.props.onSubmit();
                else this.props.goToPage(this.props.currentPage + 1);
              }}
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
