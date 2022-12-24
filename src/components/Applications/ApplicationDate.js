import styles from "./ApplicationDate.module.css";

function ApplicationDate(props) {
  const month = props.applicationDate.toLocaleString("en-US", {
    month: "long",
  });
  const year = props.applicationDate.getFullYear();
  const day = props.applicationDate.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className={styles["application-date"]}>
      <div className={styles["application-date__month"]}>{month}</div>
      <div className={styles["application-date__day"]}>{day}</div>
      <div className={styles["application-date__year"]}>{year}</div>
    </div>
  );
}

export default ApplicationDate;
