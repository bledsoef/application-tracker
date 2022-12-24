import React from "react";

import styles from "./Applications.module.css";
import Application from "./Application";
import Card from "../UI/Card";

const Applications = (props) => {
  return (
    <Card className={styles["application-list"]}>
      <h1>{props.activity} Applications</h1>
      {props.applications.map((application) => (
        <Application
          key={Math.random()}
          title={application.title}
          company={application.company}
          status={application.status}
          link={application.link}
          employmentType={application.employmentType}
          applicationDate={application.applicationDate}
        ></Application>
      ))}
    </Card>
  );
};

export default Applications;
