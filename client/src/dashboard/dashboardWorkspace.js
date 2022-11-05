import React from "react";
import { SideNav } from "../SideNav";
import { ServersAndFriends } from "./ServersAndFriends";
import ChatArea from "./ChatArea";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import AddServer from './navsPage/addServer'
let socket;

export const DashboardWorkspace = (props) => {
  const [iconPage, setIconPage] = useState("addServer");
  useEffect(() => {
    return () => (socket = io("localhost:3000"));
  }, []);
  function setPage(val) {
    setIconPage(val);
  }
  return (
    <>
      <SideNav fun={setPage} />
      <ServersAndFriends usd={props.name} />
      {(() => {
        if (iconPage === "addServer") {
          return <AddServer/>
        } else if (iconPage === "ChatArea") {
          return <ChatArea />;
        }
      })()}
    </>
  );
};
