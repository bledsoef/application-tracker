import React, { useState } from "react";
import styles from "./NewApplicationForm.module.css";

const NewApplicationForm = (props) => {
  // option arrays
  const statusOptions = [
    "Applied",
    "Rejected",
    "Interview",
    "Job Offer",
    "Accepted Offer",
  ];
  const jobTypes = [
    "Full-Time",
    "Part-Time",
    "Internship/Co-op",
    "Contract",
    "Volunteer",
    "Seasonal",
  ];

  // states
  const [enteredApplicationTitle, setApplicationTitle] = useState("");
  const [enteredApplicationCompany, setApplicationCompany] = useState("");
  const [enteredApplicationStatus, setApplicationStatus] = useState("");
  const [enteredApplicationEmploymentType, setApplicationEmploymentType] =
    useState("");
  const [enteredApplicationListingLink, setApplicationListingLink] =
    useState("");

  // handler functions
  const submitHandler = (event) => {
    event.preventDefault();
    if (
      enteredApplicationTitle.trim().length === 0 ||
      enteredApplicationCompany.trim().length === 0 ||
      enteredApplicationStatus.trim().length === 0 ||
      enteredApplicationEmploymentType.trim().length === 0
    ) {
      return;
    }
    const newApplication = {
      id: 1,
      title: enteredApplicationTitle,
      company: enteredApplicationCompany,
      status: enteredApplicationStatus,
      link: enteredApplicationListingLink,
      employmentType: enteredApplicationEmploymentType,
      applicationDate: new Date(),
    };
    props.onSaveApplicationData(newApplication);

    setApplicationTitle("");
    setApplicationCompany("");
    setApplicationStatus("");
    setApplicationEmploymentType("");
    setApplicationListingLink("");
  };
  const titleChangeHandler = (event) => {
    setApplicationTitle(event.target.value);
  };
  const companyChangeHandler = (event) => {
    setApplicationCompany(event.target.value);
  };
  const statusChangeHandler = (event) => {
    setApplicationStatus(event.target.value);
  };
  const employmentTypeChangeHandler = (event) => {
    setApplicationEmploymentType(event.target.value);
  };
  const listingLinkChangeHandler = (event) => {
    setApplicationListingLink(event.target.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={styles["new-application__controls"]}>
        <div className={styles["new-application__control"]}>
          <label>Title</label>
          <input
            type="text"
            value={enteredApplicationTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className={styles["new-application__control"]}>
          <label>Company</label>
          <input
            type="text"
            value={enteredApplicationCompany}
            onChange={companyChangeHandler}
          />
        </div>
        <div className={styles["new-application__control"]}>
          <label>Link</label>
          <input
            type="text"
            value={enteredApplicationListingLink}
            onChange={listingLinkChangeHandler}
          />
        </div>
        <div className={styles["new-application__control"]}>
          <label>Status</label>
          <select onChange={statusChangeHandler}>
            <option value="" selected disabled>
              Select Application Status
            </option>
            {statusOptions.map((status, index) => (
              <option key={index} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
        <div className={styles["new-application__control"]}>
          <label>Employment Type</label>
          <select onChange={employmentTypeChangeHandler}>
            <option value="" selected disabled>
              Select Employment Type
            </option>
            {jobTypes.map((jobType, index) => (
              <option key={index} value={jobType}>
                {jobType}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles["new-application__actions"]}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Track Application</button>
      </div>
    </form>
  );
};

export default NewApplicationForm;
