import React, { Component } from "react";
import OrganizationPage from "./pages/OrganizationPage";
import EventPage from "./pages/EventPage";
import TableChairPage from "./pages/TableChairPage";
import AVPage from "./pages/AVPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import FormStepper from "./FormStepper";

const steps = [
  "Organization Information",
  "Event Information",
  "Tables & Chairs",
  "Audio Visual",
  "Confirmation"
];

class Form extends Component {
  state = {
    currentPage: 0,
    orgType: "",
    studentOrgName: "",
    departmentName: "",
    contactName: "",
    contactNumber: "",
    eventName: "",
    eventDate: null,
    eventStartTime: "",
    eventEndTime: "",
    eventLocation: "",
    eventDescription: "",
    estimatedAttendance: null,
    presidentAttending: null,
    needTableChairs: null,
    tables60Round: null,
    tables6ftRect: null,
    chairs: null,
    layoutDescription: "",
    layoutFiles: [],
    needAV: null,
    avDescription: "",
    avTechnician: null,
    showingMovie: null,
    avFiles: [],
    agree: null
  };

  handleChange = (key, value) => {
    this.setState({ [key]: value });

    // echo new data
    console.log({ [key]: value });

    // handle file uploads
    if (value instanceof Array) {
      if (value.length && value[0] instanceof File) {
        for (let file of value) {
          const fr = new FileReader();
          fr.addEventListener("load", function() {
            // file is converted to base64
            const data = this.result.split(",");
            const obj = {
              name: file.name,
              base64: data
            };

            // google.script.run
            //   .withSuccessHandler(id => console.log("file created with id", id))
            //   .uploadFilesToGoogleDrive(obj, key, this.state.eventName);
          });
          fr.readAsDataURL(file);
        }
      }
    }
  };

  goToPage = pageNum => {
    this.setState({ currentPage: pageNum });
    window.location = "#";
  };

  isStepComplete = index => {
    let complete = false;

    switch (index) {
      case 0:
        const {
          orgType,
          studentOrgName,
          departmentName,
          contactName,
          contactNumber
        } = this.state;
        complete =
          orgType &&
          (studentOrgName || departmentName) &&
          contactName &&
          contactNumber;
        break;
      case 1:
        const {
          eventName,
          eventDate,
          eventStartTime,
          eventEndTime,
          eventLocation,
          eventDescription,
          estimatedAttendance,
          presidentAttending
        } = this.state;
        complete =
          eventName &&
          eventDate &&
          eventStartTime &&
          eventEndTime &&
          eventLocation &&
          eventDescription &&
          estimatedAttendance != null &&
          presidentAttending;
        break;
      case 2:
        const {
          needTableChairs,
          tables60Round,
          tables6ftRound,
          chairs,
          layoutDescription
        } = this.state;
        complete =
          needTableChairs === "NO" ||
          (needTableChairs === "YES" &&
            tables60Round != null &&
            tables6ftRound != null &&
            chairs != null &&
            layoutDescription);
        break;
      case 3:
        const {
          needAV,
          avDescription,
          avTechnician,
          showingMovie
        } = this.state;
        complete =
          needAV === "NO" ||
          (needAV === "YES" && avDescription && avTechnician && showingMovie);
        break;
      case 4:
        complete = this.state.agree;
        break;
    }

    return Boolean(complete);
  };

  onSubmit = () => {
    console.log("form requested to be submitted");
  };

  render() {
    let page;

    switch (this.state.currentPage) {
      case 1:
        page = (
          <EventPage
            title={steps[1]}
            data={this.state}
            onChange={this.handleChange}
          />
        );
        break;
      case 2:
        page = (
          <TableChairPage
            title={steps[2]}
            data={this.state}
            onChange={this.handleChange}
          />
        );
        break;
      case 3:
        page = (
          <AVPage
            title={steps[3]}
            data={this.state}
            onChange={this.handleChange}
          />
        );
        break;
      case 4:
        page = (
          <ConfirmationPage
            title={steps[4]}
            data={this.state}
            onChange={this.handleChange}
          />
        );
        break;
      case 0:
      default:
        page = (
          <OrganizationPage
            title={steps[0]}
            data={this.state}
            onChange={this.handleChange}
          />
        );
        break;
    }

    return (
      <>
        {page}
        <FormStepper
          currentPage={this.state.currentPage}
          steps={steps}
          isStepComplete={this.isStepComplete}
          goToPage={this.goToPage}
          onSubmit={this.onSubmit}
        />
      </>
    );
  }
}

export default Form;
