import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { registerUser } from "../../api/user.api";
import "./Register.css";

const Join = ({ location }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [room, setRoom] = useState("chatroom");
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [registerError, setRegisterError] = useState("");

  const checkCredentials = async () => {
    setIsLoading(true);
    setRegisterError("");
    let result;

    try {
      result = await registerUser(username, password);
    } catch (e) {
      setRegisterError(result.message);
    } finally {     
      setIsLoading(false);
      if(result.data) history.replace(`/chat?name=${username}&room=${room}`);
      else setRegisterError(result.message);
    }
  };

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Register</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Password"
            className="joinInput"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button
          className="button mt-20"
          type="button"
          onClick={checkCredentials}
        >
          Register
        </button>

        <div className="helper">
          {isLoading && <p>Registering..</p>}
          {registerError && <p>{registerError}</p>}

          <Link to="/join">Already have an account? Login now!</Link>
        </div>
      </div>
    </div>
  );
};

export default Join;
