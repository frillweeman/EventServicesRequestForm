import React, { Component } from "react";
import {
  FormLabel,
  FormControlLabel,
  FormControl,
  Radio,
  RadioGroup,
  TextField,
  Divider
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import MuiPhoneNumber from "material-ui-phone-number";
import FormPage from "../FormPage";
import HFlex from "../HFlex";

const orgTypes = {
  STUDENT: "Student Organization",
  DEPARTMENT: "UAH Department"
};

const studentOrgList = ["Will Club", "Alex Club", "Freeman Club"];

const departmentList = [
  "AV Department",
  "Office of Drew",
  "Department of Food"
];

class Page1 extends Component {
  state = {};

  render() {
    return (
      <FormPage page={0} currentPage={this.props.currentPage}>
        <h2>{this.props.title}</h2>

        <Divider style={{ margin: "1.5em 0" }} />

        <FormLabel style={{ display: "block" }}>Organization Type</FormLabel>
        <FormControl margin="normal">
          <RadioGroup
            aria-label="organization type"
            name="orgType"
            value={this.props.data.orgType}
            onChange={e => {
              this.props.onChange("orgType", e.target.value);
            }}
          >
            <FormControlLabel
              value={orgTypes.STUDENT}
              control={<Radio color="primary" />}
              label="Student Organization"
            />
            <FormControlLabel
              value={orgTypes.DEPARTMENT}
              control={<Radio color="primary" />}
              label="UAH Department"
            />
          </RadioGroup>
        </FormControl>
        <FormControl fullWidth margin="normal">
          {this.props.data.orgType === orgTypes.STUDENT && (
            <Autocomplete
              autoHighlight
              options={studentOrgList}
              style={{ width: 300 }}
              value={this.props.data.studentOrgName}
              onChange={(e, value) => {
                this.props.onChange("studentOrgName", value || null);
                this.props.onChange("departmentName", null);
              }}
              renderInput={params => (
                <TextField
                  {...params}
                  label="Organization Name"
                  variant="outlined"
                />
              )}
            />
          )}
          {this.props.data.orgType === orgTypes.DEPARTMENT && (
            <Autocomplete
              autoHighlight
              options={departmentList}
              style={{ width: 300 }}
              value={this.props.data.departmentName}
              onChange={(e, value) => {
                this.props.onChange("departmentName", value || null);
                this.props.onChange("studentOrgName", null);
              }}
              renderInput={params => (
                <TextField
                  {...params}
                  label="Department Name"
                  variant="outlined"
                />
              )}
            />
          )}
        </FormControl>

        <FormControl margin="normal" fullWidth>
          <HFlex>
            <TextField
              style={{ width: "48%" }}
              label="Your Name"
              value={this.props.data.contactName}
              onChange={e => this.props.onChange("contactName", e.target.value)}
            />
            <MuiPhoneNumber
              value={this.props.data.contactNumber}
              label="Your Number"
              style={{ width: "48%" }}
              countryCodeEditable={false}
              disableDropdown
              defaultCountry={"us"}
              onChange={num => this.props.onChange("contactNumber", num)}
            />
          </HFlex>
        </FormControl>
      </FormPage>
    );
  }
}

export default Page1;
