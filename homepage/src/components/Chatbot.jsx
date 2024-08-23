import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';


function Chatbot() {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const handleSendMessage = async (event) => {
        event.preventDefault();
        const date = new Date();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const str_time = `${hour}:${minute}`;

        // Add user message to chat history
        const userMessage = {
            text: message,
            time: str_time,
            sender: 'user'
        };
        setChatHistory([...chatHistory, userMessage]);
        setMessage('');

        try {
            const response = await fetch('/get', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ msg: message })
            });
            const data = await response.json();
            const botResponse = {
                text: data.response,
                time: str_time,
                sender: 'bot'
            };
            setChatHistory([...chatHistory, userMessage, botResponse]);
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    return (
        <div className="container-fluid h-100">
            <div className="row justify-content-center h-100">
                <div className="col-md-8 col-xl-6 chat">
                    <div className="card">
                        <div className="card-header msg_head">
                            <div className="d-flex bd-highlight">
                                <div className="img_cont">
                                    <img src="https://i.ibb.co/fSNP7Rz/icons8-chatgpt-512.png" className="rounded-circle user_img" alt="Bot Icon" />
                                    <span className="online_icon"></span>
                                </div>
                                <div className="user_info">
                                    <span>ChatBot</span>
                                    <p>Ask me anything!</p>
                                </div>
                            </div>
                        </div>
                        <div id="messageFormeight" className="card-body msg_card_body">
                            {chatHistory.map((msg, index) => (
                                <div key={index} className={`d-flex mb-4 ${msg.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}>
                                    {msg.sender === 'bot' && (
                                        <div className="img_cont_msg">
                                            <img src="https://i.ibb.co/fSNP7Rz/icons8-chatgpt-512.png" className="rounded-circle user_img_msg" alt="Bot" />
                                        </div>
                                    )}
                                    <div className={`msg_cotainer${msg.sender === 'user' ? '_send' : ''}`}>
                                        {msg.text}
                                        <span className={`msg_time${msg.sender === 'user' ? '_send' : ''}`}>{msg.time}</span>
                                    </div>
                                    {msg.sender === 'user' && (
                                        <div className="img_cont_msg">
                                            <img src="https://i.ibb.co/d5b84Xw/Untitled-design.png" className="rounded-circle user_img_msg" alt="User" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="card-footer">
                            <form id="messageArea" className="input-group" onSubmit={handleSendMessage}>
                                <input
                                    type="text"
                                    id="text"
                                    name="msg"
                                    placeholder="Type your message..."
                                    autoComplete="off"
                                    className="form-control type_msg"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                />
                                <div className="input-group-append">
                                    <button type="submit" id="send" className="input-group-text send_btn">
                                        <i className="fas fa-location-arrow"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chatbot;
