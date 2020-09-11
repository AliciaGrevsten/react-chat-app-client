import React, { useState } from "react";
import profilePicture from "../../icons/profilePicture.png";
import "./Message.css";

const Messages = ({ message: { user, text }, name, color }) => {
  console.log("Message:" + color);

  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{trimmedName}</p>
      <img id="userpic" src={profilePicture}></img>
      <div className="messageBox" style={{ backgroundColor: color }}>
        <p className="messageText colorWhite">{text}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark">{text}</p>
      </div>
      <img id="userpic" src={profilePicture}></img>
      <p className="sentText">{user}</p>
    </div>
  );
};

export default Messages;
