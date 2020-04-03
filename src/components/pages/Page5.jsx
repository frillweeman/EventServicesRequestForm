import React, { Component } from "react";
import {
  FormControlLabel,
  Checkbox,
  Divider,
  FormControl,
  FormLabel
} from "@material-ui/core";
import FormPage from "../FormPage";

class Page5 extends Component {
  state = {
    orgType: null,
    studentOrgName: null,
    departmentName: null,
    contactName: null,
    contactNumber: null
  };

  handleChange = (key, value) => {
    this.setState({ [key]: value });
  };

  render() {
    return (
      <FormPage page={4} currentPage={this.props.currentPage}>
        <h2>Terms &amp; Conditions</h2>

        <Divider style={{ margin: "1.5em 0" }} />

        <FormControl fullWidth margin="normal" required>
          <FormLabel>
            By clicking the check box I have read and agree to all rules and
            regulations described by the{" "}
            <a
              target="_blank"
              href="https://www.uah.edu/ctc/audio-visual-request-form"
            >
              University of Alabama in Huntsville Terms and Conditions
            </a>{" "}
            and the{" "}
            <a
              target="_blank"
              href="https://www.uah.edu/images/administrative/policies/03.02.07- VPSA_AS_Charger_Union_General_Terms_and_Conditions_Policy.pdf"
            >
              (UAH) Auxiliary Services General Use Policy
            </a>
          </FormLabel>
          <FormControlLabel
            control={
              <Checkbox
                checked={this.props.data.agree}
                onChange={e => this.props.onChange("agree", e.target.checked)}
                value="agree"
                color="primary"
              />
            }
            label="I agree"
          />
        </FormControl>
      </FormPage>
    );
  }
}

export default Page5;
