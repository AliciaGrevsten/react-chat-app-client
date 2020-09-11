import React from "react";
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../Message/Message';
import "./Messages.css";

const Messages = ({ messages, name, color }) => {
    console.log("Messages." + color);
    
    return (
    <ScrollToBottom className="messages">
        { messages.map((message, i) => <div key={i}><Message message={message} name={name} color={color} /></div>)}
    </ScrollToBottom>
)};

export default Messages;
