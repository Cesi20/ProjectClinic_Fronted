import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

function Chat() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const receiveMessage = (message) => {
      setMessages([message, ...messages]);
    };

    socket.on("message", receiveMessage);

    return () => {
      socket.off("message", receiveMessage);
    };
  }, [messages]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMessage = {
      body: message,
    };
    setMessages([newMessage, ...messages]);
    setMessage("");
    socket.emit("message", newMessage);
  };

  return (
    <div className="h-screen bg-zinc-800 text-white flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-10"
        style={{ margin: "0 auto" }}
      >
        <h1
          className="text-2xl font-bold my-2 text-center"
          style={{ textAlign: "center" }}
        >
          Bienvenido
        </h1>
        <input
          name="message"
          type="text"
          placeholder="Write your message..."
          onChange={(e) => setMessage(e.target.value)}
          className="border-2 border-zinc-500 p-2 w-full text-black"
          value={message}
          autoFocus
        />

        <ul className="h-80 overflow-y-auto">
          {messages.map((message, index) => (
            <li
              key={index}
              className={`my-2 p-2 table text-sm text-white rounded-md ${
                message.body === "Me" ? "bg-sky-700 ml-auto" : "bg-black"
              }`}
            >
              <b className="text-white"></b>:{message.body}
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default Chat;