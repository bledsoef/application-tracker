import React, { useState } from "react";
import Card from "../UI/Card";

import styles from "./NewApplication.module.css";

const NewApplication = (props) => {
  const [enteredInternshipTitle, setInternshipTitle] = useState("");
  const [enteredInternshipCompany, setInternshipCompany] = useState("");
  const [enteredInternshipStatus, setInternshipStatus] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    setInternshipTitle("");
    setInternshipCompany("");
    setInternshipStatus("");

  };
  const titleChangeHandler = (event) => {
    setInternshipTitle(event.target.value);
  };
  const companyChangeHandler = (event) => {
    setInternshipCompany(event.target.value);
  };
  const statusChangeHandler = (event) => {
    setInternshipStatus(event.target.value);
  };
  return (
    <Card className={styles["new-application"]}>
      <form onSubmit={submitHandler}>
        <div className={styles["new-application__controls"]}>
          <div className={styles["new-application__control"]}>
            <label>Title</label>
            <input
              type="text"
              value={enteredInternshipTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className={styles["new-application__control"]}>
            <label>Status</label>
            <input
              type="text"
              value={enteredInternshipStatus}
              onChange={statusChangeHandler}
            />
          </div>
          <div className={styles["new-application__control"]}>
            <label>Company</label>
            <input
              type="text"
              value={enteredInternshipCompany}
              onChange={companyChangeHandler}
            />
          </div>
        </div>
        <div className={styles["new-application__actions"]}>
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </Card>
  );
};

export default NewApplication;
