import React, { useState, useEffect } from "react";
import "../css/dashboard.css";
import { DashboardWorkspace } from "./dashboardWorkspace";
import axios from "axios";

const Dashboard = () => {
  const [usePage, setPage] = useState("");
  const [userData, setUserData] = useState([])

  useEffect(() => {
    return () =>
      axios
        .get(
          'http://localhost:1000/authenticate/' + localStorage.getItem("OAuth").toString()
        )
        .then((resp) => {
          decide(resp);
        });
  }, []);
  function decide(solos) {
    if (solos.status === 200) {
      setUserData({name: solos.data.name, pfp: solos.data.pfp})
      setPage("valid");
    } else {
      setPage("invalid");
    }
  }
  return (
    <>
      <div className="dashboard">
        {(() => {
          if (usePage === "valid") {
            return <DashboardWorkspace name={userData} />;
          } else {
            return <p>Denied Access</p>;
          }
        })()}
      </div>
    </>
  );
};

export default Dashboard;
