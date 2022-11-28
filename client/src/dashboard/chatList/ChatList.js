import React, { Component, useEffect, useState } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";
import axios from 'axios';

export const ChatList = (props) => {
  const [x,setX] = useState([])
    return (
      <div className="main__chatlist">
        <button className="btn">
          <i className="fa fa-plus"></i>
          <span>New conversation</span>
        </button>
        <div className="chatlist__heading">
          <h2>Chats</h2>
          <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="chatlist__items">
        {
        useEffect(() => {      
            axios.get('http://localhost:1000/FetchServers/' + localStorage.getItem('Name').toString() ).then((resp) => { 
              setX(resp.data.servers)
          })
        }, [])
      }
      {x.map((item, index) => {
          return (
            <ChatListItems
              name={item["name"]}
              animationDelay={index + 1}
              active={item.active ? "active" : ""}
              image={item["img"]}
              childFunc = {props.func}
            />
          );
      })
    }
        </div>  
      </div>
    );
  }