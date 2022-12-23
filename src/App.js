import React from "react";

import Applications from "./components/Applications/Applications";
import NewApplication from "./components/Form/NewApplication";
function App() {
  const applications = [
    {
      id: 1,
      title: "Data Analyst Intern",
      company: "Amazon",
      status: "Applied",
      date: "Summer 2022",
    },
    {
      id: 2,
      title: "Data Analyst Intern",
      company: "Amazon",
      status: "Applied",
      date: "Summer 2022",
    },
  ];
  return (
    <React.Fragment>
      <NewApplication></NewApplication>
      <Applications applications={applications}></Applications>
    </React.Fragment>
  );
}

export default App;
