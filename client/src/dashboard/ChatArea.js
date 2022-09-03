import React from 'react'
import '../css/ChatArea.css'
import ChatAreaServerN from './chatAreaServerN';
import { ChatReal } from './ChatReal';

const ChatArea = () => {
  return (
    <div>
      <ChatAreaServerN/>
      <ChatReal/>
    </div>
  )
}

export default ChatArea;