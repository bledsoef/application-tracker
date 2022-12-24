import React from "react";

import Applications from "./Applications";

const ActiveApplications = (props) => {
  const filterApplication = () => {
    return props.applications.filter(
      (inactive) => inactive.status !== "Rejected"
    );
  };
  return (
    <React.Fragment>
      <Applications applications={filterApplication()} activity="Active"></Applications>
    </React.Fragment>
  );
};

export default ActiveApplications;
