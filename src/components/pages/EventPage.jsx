import React, { Component } from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import {
  FormLabel,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
  TextField
} from "@material-ui/core";
import moment from "moment";
import MomentUtils from "@date-io/moment";
import { Autocomplete } from "@material-ui/lab";
import FormPage from "../FormPage";
import FormControl from "../FormControl";

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

class EventPage extends Component {
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
      <FormPage title={this.props.title}>
        <FormControl required>
          <TextField
            fullWidth
            label="Event Name"
            value={this.props.data.eventName}
            onChange={e => this.props.onChange("eventName", e.target.value)}
          />
        </FormControl>

        <FormControl>
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

        <FormControl>
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

        <FormControl
          error={
            this.props.data.eventStartTime &&
            this.props.data.eventEndTime &&
            !this.props.data.eventEndTime.isAfter(
              this.props.data.eventStartTime
            )
          }
          errorMessage="End time must be after start time."
        >
          <TextField
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
        <FormControl fullWidth>
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

        <FormControl>
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

        <FormControl margin="normal">
          <FormLabel style={{ display: "block" }}>
            Estimated Guest Attendance
          </FormLabel>
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

        <FormControl>
          <FormLabel style={{ display: "block" }}>
            Will President or Provost be in attendance for your event?
          </FormLabel>
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

export default EventPage;
