import React, { useState } from "react";
import Card from "../UI/Card";
import NewApplicationForm from "./NewApplicationForm";

import styles from "./NewApplication.module.css";

const NewApplication = (props) => {
  const [formShow, setFormShow] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
    };
    props.onNewApplication(expenseData);
    setFormShow(false);
  };
  const startEditingHandler = () => {
    setFormShow(true);
  };
  const stopEditingHandler = () => {
    setFormShow(false);
  };
  return (
    <Card className={styles["new-application"]}>
      {!formShow && (
        <button onClick={startEditingHandler}>Track New Application</button>
      )}
      {formShow && (
        <NewApplicationForm
          onSaveApplicationData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </Card>
  );
};

export default NewApplication;
