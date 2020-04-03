import React, { Component } from "react";
import {
  FormControlLabel,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Divider
} from "@material-ui/core";
import FormPage from "../FormPage";
import FileUploader from "../FileUploader";

class TableChairPage extends Component {
  state = {};

  render() {
    return (
      <FormPage title={this.props.title}>
        {/* NEED TABLES OR CHAIRS? */}

        <FormControl margin="normal" required>
          <FormLabel style={{ display: "block" }}>
            Do you need tables or chairs?
          </FormLabel>
          <RadioGroup
            value={this.props.data.needTableChairs}
            onChange={e => {
              this.props.onChange("needTableChairs", e.target.value);
            }}
          >
            <FormControlLabel
              value={"YES"}
              control={<Radio color="primary" />}
              label="Yes"
            />
            <FormControlLabel
              value={"NO"}
              control={<Radio color="primary" />}
              label="No"
            />
          </RadioGroup>
        </FormControl>

        {this.props.data.needTableChairs === "YES" && (
          <>
            <FormLabel style={{ display: "block" }}>Number of Tables</FormLabel>
            <FormControl margin="normal">
              <TextField
                label='60" Tables'
                type="number"
                value={this.props.data.tables60Round}
                onChange={e =>
                  this.props.onChange("tables60Round", e.target.value)
                }
              />
            </FormControl>
            <FormControl margin="normal">
              <TextField
                label="6' Rectangular Tables"
                type="number"
                value={this.props.data.tables6ftRect}
                onChange={e =>
                  this.props.onChange("tables6ftRect", e.target.value)
                }
              />
            </FormControl>

            <FormLabel style={{ display: "block" }}>Number of Chairs</FormLabel>
            <FormControl margin="normal">
              <TextField
                label="Chairs"
                type="number"
                value={this.props.data.chairs}
                onChange={e => this.props.onChange("chairs", e.target.value)}
              />
            </FormControl>

            {/* LAYOUT DESCRIPTION */}

            <FormControl fullWidth margin="normal">
              <FormLabel>Layout Description</FormLabel>
              <TextField
                label="Description"
                multiline
                value={this.props.data.layoutDescription}
                onChange={e =>
                  this.props.onChange("layoutDescription", e.target.value)
                }
              />
            </FormControl>

            <FormControl margin="normal">
              <FormLabel>Layout File Upload</FormLabel>
              <FileUploader
                multiple
                fieldName="layoutFiles"
                files={this.props.data.layoutFiles}
                onChange={this.props.onChange}
              />
            </FormControl>
          </>
        )}
      </FormPage>
    );
  }
}

export default TableChairPage;
