import React from "react";
import { SideNav } from "../SideNav";
import { ServersAndFriends } from "./ServersAndFriends";
import ChatArea from "./ChatArea";
import { useEffect } from "react";
import io from "socket.io-client";
let socket;

export const DashboardWorkspace = (props) => {
  useEffect(() => {
    return () => (socket = io("localhost:3000"));
  }, []);
  return (
    <>
      <SideNav />
      <ServersAndFriends usd={props.name} />
      <ChatArea />
    </>
  );
};
