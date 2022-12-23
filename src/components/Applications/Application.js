import React, { useState } from "react";

import styles from "./Application.module.css";
import Card from "../UI/Card";

const Application = (props) => {


  return (
    <Card className={styles["application-entry"]}>
      <div>{props.company}</div>
      <div className={styles["application-entry__title"]}>
        <h2>{props.title}</h2>
        <div className={styles["application-entry__status"]}>{props.status}</div>
      </div>
    </Card>
  );
};

export default Application;
