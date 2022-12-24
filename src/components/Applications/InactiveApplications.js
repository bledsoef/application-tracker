import React from "react";

import Applications from "./Applications";

const InactiveApplications = (props) => {
  const filterApplication = () => {
    return props.applications.filter(
      (inactive) => inactive.status === "Rejected"
    );
  };
  return <Applications applications={filterApplication()} activity="Inactive"></Applications>;
};

export default InactiveApplications;
