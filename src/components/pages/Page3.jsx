import React, { Component } from "react";
import {
  FormControlLabel,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import FormPage from "../FormPage";
import FileUploader from "../FileUploader";

class Page3 extends Component {
  state = {};

  render() {
    return (
      <FormPage page={2} currentPage={this.props.currentPage}>
        <h2>{this.props.title}</h2>

        <Divider style={{ margin: "1.5em 0" }} />

        {/* NEED TABLES OR CHAIRS? */}

        <FormLabel style={{ display: "block" }}>
          Do you need tables or chairs?
        </FormLabel>
        <FormControl margin="normal">
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
                value={this.props.data.tables6ftRound}
                onChange={e =>
                  this.props.onChange("tables6ftRound", e.target.value)
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
              <FormLabel>Brief Description of Event</FormLabel>
              <TextField
                label="Description"
                multiline
                value={this.props.data.eventDescription}
                onChange={e =>
                  this.props.onChange("eventDescription", e.target.value)
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

export default Page3;
