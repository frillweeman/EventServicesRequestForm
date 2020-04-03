import React, { Component } from "react";
import {
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import MuiPhoneNumber from "material-ui-phone-number";
import FormPage from "../FormPage";
import FormControl from "../FormControl";

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

class OrganizationPage extends Component {
  state = {};

  render() {
    return (
      <FormPage title={this.props.title}>
        <FormControl required>
          <FormLabel style={{ display: "block" }}>Organization Type</FormLabel>
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

        {this.props.data.orgType === orgTypes.STUDENT && (
          <FormControl required>
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
          </FormControl>
        )}
        {this.props.data.orgType === orgTypes.DEPARTMENT && (
          <FormControl required>
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
          </FormControl>
        )}

        <FormControl>
          <TextField
            fullWidth
            label="Your Name"
            value={this.props.data.contactName}
            onChange={e => this.props.onChange("contactName", e.target.value)}
          />
        </FormControl>
        <FormControl>
          <MuiPhoneNumber
            fullWidth
            value={this.props.data.contactNumber}
            label="Your Number"
            countryCodeEditable={false}
            disableDropdown
            defaultCountry={"us"}
            onChange={num => this.props.onChange("contactNumber", num)}
          />
        </FormControl>
      </FormPage>
    );
  }
}

export default OrganizationPage;
