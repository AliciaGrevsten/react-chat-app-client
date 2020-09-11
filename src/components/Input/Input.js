import React, { useState } from "react";
import "./Input.css";
import ColorSelect from "../ColorSelect/ColorSelect";

const Input = (props) => {
  const [color, setColor] = useState('#2979FF');

  const colorChange = (newColor) => {
    setColor(newColor);
    props.colorChange(color);
  }

  return (
    <div>
      <ColorSelect onColorSelectClick={colorChange} />
      <form className="form">
        <input
          className="input"
          type="text"
          placeholder="Type a message..."
          value={props.message}
          onChange={(event) => props.setMessage(event.target.value)}
          onKeyPress={(event) =>
            event.key === "Enter" ? props.sendMessage(event) : null
          }
        />
        <button className="sendButton" style={{ backgroundColor: color }} onClick={(event) => props.sendMessage(event)}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Input;
