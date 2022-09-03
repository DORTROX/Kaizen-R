import React, { useEffect } from 'react'
import '../css/dashboard.css'
import { SideNav } from '../SideNav';
import { ServersAndFriends } from './ServersAndFriends';
import ChatArea from './ChatArea';
import io from "socket.io-client"
let socket;

const Dashboard = () => {
  useEffect(() => {
    return () => socket = io("localhost:3000");
  }, [])
  return (
    <div className='dashboard'>
      <SideNav/>
      <ServersAndFriends/>
      <ChatArea/>
    </div>
  )
}

export default Dashboard;