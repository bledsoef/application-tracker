import React from "react";

import styles from "./Application.module.css";
import Card from "../UI/Card";
import ApplicationDate from "./ApplicationDate";

const Application = (props) => {
  return (
    <Card className={styles["application-entry"]}>
      <ApplicationDate applicationDate={props.applicationDate}></ApplicationDate>
      <div className={styles["application-entry__title"]}>
        <a href={props.link}>{props.title} - {props.company}</a>
        <div className={styles["application-entry__status"]}>{props.status}</div>
      </div>
    </Card>
  );
};

export default Application;
