import React from "react";
import {
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  List as MuiList,
  ListItem,
  ListItemText,
  Divider
} from "@material-ui/core";
import { styled } from "@material-ui/styles";
import FormPage from "../FormPage";

const List = styled(MuiList)(({ theme }) => ({
  marginTop: theme.spacing(2)
}));

const ConfirmationPage = props => {
  const { data } = props;

  return (
    <FormPage
      title="Review Details"
      subtitle="Please review your responses below before submitting this request."
      page={4}
      currentPage={props.currentPage}
    >
      <List dense subheader="Organization Information">
        <ListItem>
          <ListItemText>
            <b>Organization Type:</b> {data.orgType}
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <b>Organization/Department Name:</b>{" "}
            {data.studentOrgName || data.departmentName}
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <b>Contact Name:</b> {data.contactName}
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <b>Contact Number:</b> {data.contactNumber}
          </ListItemText>
        </ListItem>
      </List>

      <List dense subheader="Event Information">
        <ListItem>
          <ListItemText>
            <b>Event Date:</b>{" "}
            {data.eventDate && data.eventDate.format("MM/DD/YYYY")}
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <b>Event Start Time:</b>{" "}
            {data.eventStartTime && data.eventStartTime.format("h:mm a")}
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <b>Event End Time:</b>{" "}
            {data.eventEndTime && data.eventEndTime.format("h:mm a")}
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <b>Event Location:</b> {data.eventLocation}
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <b>Event Description:</b> {data.eventDescription}
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <b>Estimated Attendance:</b> {data.estimatedAttendance}
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <b>President Attending:</b> {data.presidentAttending}
          </ListItemText>
        </ListItem>
      </List>

      <List dense subheader="Tables &amp; Chairs">
        <ListItem>
          <ListItemText>
            <b>Need Tables or Chairs:</b> {data.needTableChairs}
          </ListItemText>
        </ListItem>
        {data.needTableChairs && (
          <>
            <ListItem>
              <ListItemText>
                <b>60" Round Tables:</b> {data.tables60Round}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <b>6' Rectangular Tables:</b> {data.tables6ftRect}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <b>Chairs:</b> {data.chairs}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <b>Layout Description:</b> {data.tables6ftRect}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <b>Layout Files:</b>{" "}
                {data.layoutFiles.map(file => file.name + " ")}
              </ListItemText>
            </ListItem>
          </>
        )}
      </List>

      <List dense subheader="Audio Visual">
        <ListItem>
          <ListItemText>
            <b>Need Audio Visual:</b> {data.AV}
          </ListItemText>
        </ListItem>
        {data.needAV && (
          <>
            <ListItem>
              <ListItemText>
                <b>AV Description:</b> {data.avDescription}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <b>Need AV Technician:</b> {data.avTechnician}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <b>Showing Movie:</b> {data.showingMovie}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <b>Media Files:</b> {data.avFiles.map(file => file.name + " ")}
              </ListItemText>
            </ListItem>
          </>
        )}
      </List>

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
              checked={data.agree}
              onChange={e => props.onChange("agree", e.target.checked)}
              value="agree"
              color="primary"
            />
          }
          label="I agree"
        />
      </FormControl>
    </FormPage>
  );
};

export default ConfirmationPage;
