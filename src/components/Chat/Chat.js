import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from '../InfoBar/InfoBar';
import TextContainer from '../TextContainer/TextContainer';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';

import './Chat.css';

let socket;


const Chat = ({ location }) => {
    const [color, setColor] = useState("#2979FF");
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        const { name, room  } = queryString.parse(location.search);

        socket = io(ENDPOINT);
        
        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, () => {
            
        });

        return () => {
            socket.emit('disconnect');

            socket.off();
        }
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        });

        socket.on("roomData", ({ users }) => {
            setUsers(users);
          });
    }, [messages])

    // Function for sending messages
    const sendMessage = (event) => {
        // Prevent page from reloading on keypress
        event.preventDefault();

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    //  When changing the color of the messages
    const colorChange = (newColor) => {
        setColor(newColor);
        console.log("Chat:" + color);
    }

    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room} />
                <Messages messages={messages} name={name} color={color} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} colorChange={colorChange} />
            </div>
            <TextContainer users={users} />
        </div>
    );
}

export default Chat;