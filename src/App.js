import React, { useState } from "react";

import InactiveApplications from "./components/Applications/InactiveApplications";
import ActiveApplications from "./components/Applications/ActiveApplications";
import NewApplication from "./components/Form/NewApplication";

const base_applications = [
  {
    id: 1,
    title: "Data Analyst Intern (Summer 2023)",
    company: "Amazon",
    status: "Applied",
    link: "https://www.linkedin.com/in/finn-bledsoe-149855230/",
    employmentType: "Internship",
    applicationDate: new Date(2022, 11, 11),
  },
  {
    id: 2,
    title: "Full-Stack Developer",
    company: "Google",
    status: "Interview",
    link: "https://www.linkedin.com/in/finn-bledsoe-149855230/",
    employmentType: "Full Time",
    applicationDate: new Date(2022, 9, 9),
  },
];

function App() {
  const [applications, setApplications] = useState(base_applications)

  const handleNewApplication = (application) => {
    setApplications((prevApplications) => {
      return [application, ...prevApplications];
    });
  }

  return (
    <React.Fragment>
      <NewApplication onNewApplication={handleNewApplication}/>
      <ActiveApplications applications={applications}></ActiveApplications>
      <InactiveApplications applications={applications}></InactiveApplications>
    </React.Fragment>
  );
}

export default App;
