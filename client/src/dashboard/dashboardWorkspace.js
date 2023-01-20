import React from "react";
import { SideNav } from "../SideNav";
import {ChatList} from "./chatList/ChatList";
import { ServersAndFriends } from "./ServersAndFriends";
import ChatArea from "./ChatArea";
import ChatContent from "./chatContent/ChatContentFunc";
import {UserProfile} from "./userProfile/UserProfile"
import { useEffect, useState } from "react";
import io from "socket.io-client";
import axios from "axios";
import AddServer from './navsPage/addServer'
let socket;

export const DashboardWorkspace = (props) => {
  const [iconPage, setIconPage] = useState("ChatArea");
  const [chatListPage, setChatListPage] = useState();
  useEffect(() => {
    return () => (socket = io("localhost:3000"));
  }, []);
  function setPage(val) {
    setIconPage(val);
  }
  function setServer(val) {
    setChatListPage(val)
  }
  return (
    <>
      <SideNav fun={setPage} />
      <ChatList func={setChatListPage} />
      {/* {
        <ChatContent/>
      } */}
      {/* {
                useEffect(() => {
                  return () => {
                    console.log("hello")
                    if (iconPage === "addServer") {
                      return <AddServer/>
                    } else if (iconPage === "ChatArea") {
                      axios.get('http://localhost:1000/FetchServerData/'+ chatListPage).then((resp) => {
                        console.log(resp)
                        return <ChatContent player={chatListPage}/>;
                      });
                    }
                  }
                }, [chatListPage])
      } */}
      
      {(() => {
        if (iconPage === "addServer") {
          return <AddServer/>
        } else if (iconPage === "ChatArea") {
            return <ChatContent player={chatListPage}/>;
        }
      })()}
      {/* {
        useEffect(() => {
          return () => {
            if (iconPage === "addServer") {
              return <AddServer/>
            } else if (iconPage === "ChatArea") {
              console.log("Working shit ")
                return <ChatContent player={chatListPage}/>;
            }
          }
        }, [chatListPage]),
      } */}
      <UserProfile usd={props.name} />
      {/* <ServersAndFriends usd={props.name} /> */}
    </>
  );
};

ChatContent.defaultProps = {
  player: "None"
}