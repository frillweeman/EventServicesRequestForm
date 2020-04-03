import React, { Component } from "react";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
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
    orgType: null,
    studentOrgName: null,
    departmentName: null,
    contactName: null,
    contactNumber: null,
    eventName: null,
    eventDate: null,
    eventStartTime: null,
    eventEndTime: null,
    eventLocation: null,
    eventDescription: null,
    estimatedAttendance: null,
    presidentAttending: null,
    needTableChairs: null,
    tables60Round: null,
    tables6ftRound: null,
    chairs: null,
    layoutDescription: null,
    layoutFiles: [],
    needAV: null,
    avDescription: null,
    avTechnician: null,
    showingMovie: null,
    avFiles: [],
    agree: null
  };

  handleChange = (key, value) => {
    this.setState({ [key]: value });
    console.log({ [key]: value });

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
            //   .uploadFilesToGoogleDrive(obj, key, "test event folder");
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
    return false;
  };

  onSubmit = () => {
    console.log("form requested to be submitted");
  };

  render() {
    return (
      <>
        <h1>Event Services Request Form</h1>
        <Page1
          title={steps[0]}
          data={this.state}
          onChange={this.handleChange}
          currentPage={this.state.currentPage}
        />
        <Page2
          title={steps[1]}
          data={this.state}
          onChange={this.handleChange}
          currentPage={this.state.currentPage}
        />
        <Page3
          title={steps[2]}
          data={this.state}
          onChange={this.handleChange}
          currentPage={this.state.currentPage}
        />
        <Page4
          title={steps[3]}
          data={this.state}
          onChange={this.handleChange}
          currentPage={this.state.currentPage}
        />
        <Page5
          title={steps[4]}
          data={this.state}
          onChange={this.handleChange}
          currentPage={this.state.currentPage}
        />
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
