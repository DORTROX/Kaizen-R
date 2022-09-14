import React, { useEffect } from "react";
import "../css/dashboard.css";
import { SideNav } from "../SideNav";
import { ServersAndFriends } from "./ServersAndFriends";
import ChatArea from "./ChatArea";
import io from "socket.io-client";
import axios from "axios";
let socket;

const Dashboard = () => {
  useEffect(() => {
    return () => (socket = io("localhost:3000"));
  }, []);
  let res
  return (
    <>
    <div className="dashboard">
      {(() => {
        console.log(localStorage.getItem("OAuth"))
        axios.get('http://localhost:1000/authenticate/'+ localStorage.getItem("OAuth"))
        .then((res) => {
          console.log(res)
          if(res.status === 200){
            return <SideNav/>
          } else {
            return <p>Denied Access</p>
          }
        })
      })()
      }
    </div>
    </>
  );
};

export default Dashboard;
