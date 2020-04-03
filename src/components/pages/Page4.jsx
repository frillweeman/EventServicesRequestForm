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
import FileUploader from "../FileUploader";
import FormPage from "../FormPage";
import HFlex from "../HFlex";

// needAV: null,
// avDescription: null,
// avTechnician: null,
// showingMovie: null

class Page4 extends Component {
  state = {};

  render() {
    return (
      <FormPage page={3} currentPage={this.props.currentPage}>
        <h2>{this.props.title}</h2>

        <Divider style={{ margin: "1.5em 0" }} />

        {/* NEED AUDIO-VISUAL? */}

        <FormLabel style={{ display: "block" }}>
          Do you need Audio-Visual?
        </FormLabel>
        <FormControl margin="normal">
          <RadioGroup
            value={this.props.data.needAV}
            onChange={e => {
              this.props.onChange("needAV", e.target.value);
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

        {this.props.data.needAV === "YES" && (
          <>
            {/* LAYOUT DESCRIPTION */}

            <FormControl fullWidth margin="normal">
              <FormLabel>Description of Audio-Visual Requirements</FormLabel>
              <TextField
                label="Description"
                multiline
                value={this.props.data.avDescription}
                onChange={e =>
                  this.props.onChange("avDescription", e.target.value)
                }
              />
            </FormControl>

            <FormLabel style={{ display: "block" }}>
              Do you need an AV Technician
            </FormLabel>
            <FormControl margin="normal">
              <RadioGroup
                value={this.props.data.avTechnician}
                onChange={e => {
                  this.props.onChange("avTechnician", e.target.value);
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

            <FormLabel style={{ display: "block" }}>
              Will you be shoding a movie/film/show?
            </FormLabel>
            <FormControl margin="normal">
              <RadioGroup
                value={this.props.data.showingMovie}
                onChange={e => {
                  this.props.onChange("showingMovie", e.target.value);
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

            <FormControl margin="normal">
              <FormLabel>Media File Upload</FormLabel>
              <FileUploader
                multiple
                fieldName="avFiles"
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

export default Page4;
