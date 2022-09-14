import React, { useEffect, useState } from "react";
import "../css/dashboard.css";
import { SideNav } from "../SideNav";
import { ServersAndFriends } from "./ServersAndFriends";
import ChatArea from "./ChatArea";
import io from "socket.io-client";
import axios from "axios";
let socket;

const Dashboard = () => {
  const[usePage, setPage] = useState("")
  useEffect(() => {
    return () => (socket = io("localhost:3000"));
  }, []);
  function decide (solos) {
    if (solos.status === 200){
      setPage("valid")
    } else{
      setPage("invalid")
    }
  }
  return (
    <>
    <div className="dashboard">
      {(() => {
        let res
        // console.log(localStorage.getItem("OAuth"))
        axios.get('http://localhost:1000/authenticate/'+ localStorage.getItem("OAuth")).then((resp) => decide(resp))
        if(usePage === "valid"){
          return <SideNav/>
        } else {
          return <p>Denied Access</p>
        }
      })()
      }
    </div>
    </>
  );
};

export default Dashboard;
