import React, { Component } from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import {
  FormLabel,
  FormControlLabel,
  FormHelperText,
  FormControl,
  Radio,
  RadioGroup,
  TextField,
  Divider
} from "@material-ui/core";
import moment from "moment";
import MomentUtils from "@date-io/moment";
import { Autocomplete } from "@material-ui/lab";
import FormPage from "../FormPage";

const decision = {
  YES: "YES",
  NO: "NO",
  MAYBE: "MAYBE"
};

const venueList = [
  "Bobs Venue",
  "Test Venue",
  "Bookable Venue",
  "Venue with a Menu",
  "Will's House"
];

class Page2 extends Component {
  state = {
    focusedInput: null,
    startDate: moment(),
    endDate: moment()
  };

  handleChange = (key, value) => {
    this.setState({ [key]: value });
  };

  handleTimeChange = key => e => {
    const splitTime = e.target.value.split(":");

    let newDate = moment(this.state[key]);

    newDate.set({
      hour: parseInt(splitTime[0]),
      minute: parseInt(splitTime[1]),
      second: 0
    });

    this.props.onChange(key, newDate);
  };

  render() {
    return (
      <FormPage page={1} currentPage={this.props.currentPage}>
        <h2>{this.props.title}</h2>

        <Divider style={{ margin: "1.5em 0" }} />

        <FormControl margin="normal" fullWidth>
          <TextField
            // style={{ width: "48%" }}
            label="Event Name"
            value={this.props.data.eventName}
            onChange={e => this.props.onChange("eventName", e.target.value)}
          />
        </FormControl>
        <FormControl margin="normal">
          <FormLabel style={{ marginBottom: 10 }}>Date</FormLabel>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/DD/YYYY"
              margin="normal"
              id="date-picker-inline"
              label="Event Date"
              value={this.props.data.eventDate}
              onChange={date => this.props.onChange("eventDate", date)}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
          </MuiPickersUtilsProvider>
        </FormControl>
        <br />
        <FormControl margin="normal" style={{ width: "25%" }}>
          <TextField
            label="Event Start Time"
            type="time"
            value={
              (this.props.data.eventStartTime &&
                this.props.data.eventStartTime.format("HH:mm")) ||
              "00:00:00"
            }
            onChange={this.handleTimeChange("eventStartTime")}
          />
        </FormControl>
        <FormControl margin="normal" style={{ width: "25%" }}>
          <TextField
            error={false}
            label="Event End Time"
            type="time"
            value={
              (this.props.data.eventEndTime &&
                this.props.data.eventEndTime.format("HH:mm")) ||
              "00:00:00"
            }
            onChange={this.handleTimeChange("eventEndTime")}
          />
        </FormControl>

        {/* EVENT LOCATION */}
        <FormControl fullWidth margin="normal">
          <Autocomplete
            autoHighlight
            options={venueList}
            style={{ width: 300 }}
            value={this.props.data.eventLocation}
            onChange={(e, value) => {
              this.props.onChange("eventLocation", value || null);
            }}
            renderInput={params => (
              <TextField
                {...params}
                label="Event Location"
                variant="outlined"
              />
            )}
          />
        </FormControl>

        {/* BRIEF DESCRIPTION */}

        <FormControl fullWidth margin="normal">
          <FormLabel>Brief Description of Event</FormLabel>
          <FormHelperText>
            Do not list requirements. Requirements will be asked in a later
            section.
          </FormHelperText>
          <TextField
            label="Description"
            multiline
            value={this.props.data.eventDescription}
            onChange={e =>
              this.props.onChange("eventDescription", e.target.value)
            }
          />
        </FormControl>

        {/* ESTIMATED GUEST ATTENDANCE */}

        <FormLabel style={{ display: "block" }}>
          Estimated Guest Attendance
        </FormLabel>
        <FormControl margin="normal">
          <TextField
            label="Guests"
            type="number"
            value={this.props.data.estimatedAttendance}
            onChange={e =>
              this.props.onChange("estimatedAttendance", e.target.value)
            }
          />
        </FormControl>

        {/* President/Provost Attending */}

        <FormLabel style={{ display: "block" }}>
          Will President or Provost be in attendance for your event?
        </FormLabel>
        <FormControl margin="normal">
          <RadioGroup
            value={this.props.data.presidentAttending}
            onChange={e => {
              this.props.onChange("presidentAttending", e.target.value);
            }}
          >
            <FormControlLabel
              value={decision.NO}
              control={<Radio color="primary" />}
              label="No"
            />
            <FormControlLabel
              value={decision.YES}
              control={<Radio color="primary" />}
              label="Yes"
            />
            <FormControlLabel
              value={decision.MAYBE}
              control={<Radio color="primary" />}
              label="Maybe"
            />
          </RadioGroup>
        </FormControl>
      </FormPage>
    );
  }
}

export default Page2;
