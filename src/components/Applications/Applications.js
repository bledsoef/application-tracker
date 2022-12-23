import React from "react";

import Application from "./Application";

const Applications = (props) => {
  return props.applications.map((application) => (
    <Application
      title={application.title}
      company={application.company}
      status={application.status}
      date={application.date}
    ></Application>
  ));
};

export default Applications;
