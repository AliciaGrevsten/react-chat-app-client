import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { loginUser } from '../../api/user.api';
import './Join.css';


const Join = ({ location }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [room, setRoom] = useState('chatroom');
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

    const checkCredentials = async () => {
        setIsLoading(true);
        setLoginError('');
        let result;

        try {
          result = await loginUser(username, password);
          console.log(result);
        } catch (e) {
          setLoginError(result.message);
        } finally {
            setIsLoading(false);
            if(result.data) history.replace(`/chat?name=${username}&room=${room}`);
            else setLoginError(result.message);
        }
    }

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Login</h1>
                <div><input placeholder="Name" className="joinInput" type="text" onChange={(event) => setUsername(event.target.value)} /></div>
                <div><input placeholder="Password" className="joinInput" type="password" onChange={(event) => setPassword(event.target.value)} /></div>
                    <button className="button mt-20" type="button" onClick={checkCredentials}>Sign In</button>

                    <div className="helper">
          {isLoading && <p>Logging in..</p>}
          {loginError && <p>{loginError}</p>}

          <Link to="/register">Don't have an account? Register now!</Link>
        </div>
            </div>
        </div>
    );
}

export default Join;